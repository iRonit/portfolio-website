import React from 'react';
import { Doughnut } from 'react-chartjs-2';

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
            return "Beginner";
        } else if (value < 40) {
            return "Mediocre";
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

    return (
        <>
            <Doughnut data={data} options={options} plugins={[plugin]} />
        </>
    )
}

export default DoughnutChart;
