import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { backendSkills, frontendSkills, illustrationSkills } from '../../data/Skills';
import Modal from '../Modal';

const DoughnutChart = () => {
    const data = {
        labels: ['Backend', 'FrontEnd', 'Illustrations'],
        datasets: [
            {
                data: [55, 30, 15],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                hoverOffset: 20
            },
        ],
    };

    const label = (tooltipItem) => {
        return '  ' + tooltipItem.label;
    };

    const beforeFooter = (tooltipItems) => {
        return 'Level: ' + getLevel(tooltipItems[0].parsed);
    };

    const getLevel = (value) => {
        if (value < 20) {
            return "Novice";
        } else if (value < 40) {
            return "Proficient";
        } else {
            return "Expert";
        }
    };

    const footer = (tooltipItems) => {
        return 'Click for more details.';
    };

    const options = {
        aspectRatio: 0.75,
        layout: {
            padding: 30
        },
        plugins: {
            tooltip: {
                bodyFont: {
                    size: 20,
                    weight: 'bold'
                },
                callbacks: {
                    label: label,
                    beforeFooter: beforeFooter,
                    footer: footer
                }
            },
            legend: {
                position: 'bottom',
                align: 'start',
                labels: {
                    padding: 20,
                    font: {
                        size: 15
                    }
                }
            }
        },
        onClick: (event, element) => {
            console.log(event)
            console.log(element)
            if (element.length === 0)
                return;

            const newX = event.x;
            const newY = event.y;

            console.log(newX, newY);

            setModalAnimate(true);

            if (element[0].index === 0) {
                openModal(newX, newY);
                setShowBEModal(true);
            } else if (element[0].index === 1) {
                openModal(newX, newY);
                setShowFEModal(true);
            } else if (element[0].index === 2) {
                openModal(newX, newY);
                setShowILModal(true);
            }
        }
    };

    const openModal = function (posX, posY) {
        setAnimateCoX(posX);
        setAnimateCoY(posY);
        if (document.getElementById('navbar') != null) {
            document.getElementById('navbar').style['display'] = 'none';
        }
        document.body.style.overflow = "hidden";
    };

    const image = new Image();
    image.src = require("../../assets/images/dev.svg").default;

    const plugin = {
        id: 'custom_canvas_background_image',
        beforeDraw: (chart) => {
            if (image.complete) {
                const ctx = chart.ctx;
                const { top, left, width, height } = chart.chartArea;
                const x = left + width * 3 / 8;
                const y = top + height * 3 / 8;
                ctx.drawImage(image, x, y, width / 4, height / 4);
            } else {
                image.onload = () => chart.draw();
            }
        }
    };

    // For Modal
    const [showBEModal, setShowBEModal] = useState(false);
    const [showFEModal, setShowFEModal] = useState(false);
    const [showILModal, setShowILModal] = useState(false);

    //Animation
    const variants = {
        start: { scale: 0, transition: { duration: 0.5 } },
        // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
        stop: { scale: 1, transition: { duration: 0.5 } }
    };
    const [modalAnimate, setModalAnimate] = useState(false);
    const [animateCoX, setAnimateCoX] = useState(500);
    const [animateCoY, setAnimateCoY] = useState(50);


    return (
        <>
            <Modal showModal={showBEModal} setShowModal={setShowBEModal} setModalAnimate={setModalAnimate} animationCoordinates={{ x: animateCoX, y: animateCoY }} skillItem={backendSkills} />
            <Modal showModal={showFEModal} setShowModal={setShowFEModal} setModalAnimate={setModalAnimate} animationCoordinates={{ x: animateCoX, y: animateCoY }} skillItem={frontendSkills} />
            <Modal showModal={showILModal} setShowModal={setShowILModal} setModalAnimate={setModalAnimate} animationCoordinates={{ x: animateCoX, y: animateCoY }} skillItem={illustrationSkills} />
            <motion.div
                variants={variants}
                animate={modalAnimate ? 'start' : 'stop'}>
                <Doughnut data={data} options={options} plugins={[plugin]} />
            </motion.div>
        </>
    )
}

export default DoughnutChart;
