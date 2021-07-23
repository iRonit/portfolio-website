import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { backendSkills, frontendSkills, illustrationSkills } from '../../data/Skills';
import Modal from '../Modal/Modal';

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
        onClick: (e, element) => {
            console.log(element);
            if (element.length === 0)
                return;
            if (element[0].index === 0) {
                setShowBEModal(true);
                document.body.style.overflow = "hidden";
            } else if (element[0].index === 1) {
                setShowFEModal(true);
                document.body.style.overflow = "hidden";
            } else if (element[0].index === 2) {
                setShowILModal(true);
                document.body.style.overflow = "hidden";
            }
        }
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

    return (
        <>
            <Modal showModal={showBEModal} setShowModal={setShowBEModal} skillItem={backendSkills} />
            <Modal showModal={showFEModal} setShowModal={setShowFEModal} skillItem={frontendSkills} />
            <Modal showModal={showILModal} setShowModal={setShowILModal} skillItem={illustrationSkills} />
            <Doughnut data={data} options={options} plugins={[plugin]} />
        </>
    )
}

export default DoughnutChart;
