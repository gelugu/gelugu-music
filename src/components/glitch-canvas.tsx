"use client";

import { useEffect, useRef } from "react";

type Props = {
    src: string;
    width: number;
    height: number;
}

const GLITCH_INTERVAL = 1000;
const GLITCH_TIMEOUT_MIN = GLITCH_INTERVAL / 2;
const GLITCH_TIMEOUT_MAX = GLITCH_INTERVAL * 2;

export default function GlitchCanvas({ src, width, height }: Props) {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current as HTMLCanvasElement;
        const context = canvas.getContext("2d");

        if (!context) return;

        const img = new Image();
        let glitchInterval: NodeJS.Timeout;

        const drawImage = () => {
            context.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                0,
                0,
                width,
                height
            );
        };

        const init = () => {
            clearInterval(glitchInterval);
            canvas.width = width;
            canvas.height = height;
            drawImage();
            glitchInterval = setInterval(() => {
                clearCanvas();
                drawImage();
                setTimeout(glitchImg, randInt(GLITCH_TIMEOUT_MIN, GLITCH_TIMEOUT_MAX));
            }, GLITCH_INTERVAL);
        };

        const clearCanvas = () => {
            context.clearRect(0, 0, width, height);
        };

        const glitchImg = () => {
            for (let i = 0; i < randInt(1, 13); i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                const spliceWidth = width - x;
                const spliceHeight = randInt(5, height / 3);
                context.drawImage(
                    canvas,
                    0,
                    y,
                    spliceWidth,
                    spliceHeight,
                    x,
                    y,
                    spliceWidth,
                    spliceHeight
                );
                context.drawImage(
                    canvas,
                    spliceWidth,
                    y,
                    x,
                    spliceHeight,
                    0,
                    y,
                    x,
                    spliceHeight
                );
            }
        };

        const randInt = (a: number, b: number) => Math.floor(Math.random() * (b - a) + a);

        img.src = src;
        img.onload = () => {
            init();
            window.addEventListener("resize", init);
        };

        return () => {
            clearInterval(glitchInterval);
            window.removeEventListener("resize", init);
        };
    }, [src, width, height]);

    return (
        <canvas ref={canvasRef} style={{ display: "block", width: "100%" }} />
    );
}
