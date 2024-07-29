/* eslint-disable react/prop-types */
import { useRef, useEffect, useContext } from 'react';
import { GlobalContext } from '../logic/GlobalProvider';

const Chart = ({ data1, data2 }) => {
    const canvasRef = useRef(null);
    const { transactions } = useContext(GlobalContext);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let maxVal = 0;

        for (const value of data1) {
            if (value > maxVal) maxVal = value;
        }

        // Clear previous drawings
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the chart lines
        ctx.strokeStyle = '#38A5A143';
        for (let i = 0; i < data1.length; i++) {
            let x = i * (canvas.width / (data1.length - 1));
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.closePath();
            ctx.stroke();
        }

        // Draw the first area graph
        ctx.fillStyle = '#38A5A143';
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        for (let i = 0; i < data1.length; i++) {
            let x = i * (canvas.width / (data1.length - 1));
            let y = canvas.height - (data1[i] * canvas.height / maxVal);

            // Bezier curve from the previous point to the current point
            if (i > 0) {
                let prevX = (i - 1) * (canvas.width / (data1.length - 1));
                let prevY = canvas.height - (data1[i - 1] * canvas.height / maxVal);
                let controlX1 = prevX + (x - prevX) / 2;
                let controlY1 = prevY;
                let controlX2 = prevX + (x - prevX) / 2;
                let controlY2 = y;
                ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        ctx.fill();

        // Draw the second area graph
        ctx.fillStyle = '#38A56F';
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        for (let i = 0; i < data2.length; i++) {
            let x = i * (canvas.width / (data2.length - 1));
            let y = canvas.height - (data2[i] * canvas.height / maxVal);

            // Bezier curve from the previous point to the current point
            if (i > 0) {
                let prevX = (i - 1) * (canvas.width / (data2.length - 1));
                let prevY = canvas.height - (data2[i - 1] * canvas.height / maxVal);
                let controlX1 = prevX + (x - prevX) / 2;
                let controlY1 = prevY;
                let controlX2 = prevX + (x - prevX) / 2;
                let controlY2 = y;
                ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        ctx.fill();

    }, [data1, data2, transactions]);

    return (
        <canvas ref={canvasRef} id="canvas" className="w-full h-full"></canvas>
    );
};

export default Chart;
