"use client";

import {useEffect, useState} from 'react';

interface CountdownProps {
    targetDate: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    expired: boolean;
}

export default function Countdown({targetDate}: CountdownProps) {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = new Date(targetDate).getTime() - Date.now();

        if (difference <= 0) {
            return {days: 0, hours: 0, minutes: 0, seconds: 0, expired: true};
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            expired: false
        };
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (timeLeft.expired) {
        return null;
    }

    return (
        <div className="flex gap-4 text-center">
            {[
                {label: 'Days', value: timeLeft.days},
                {label: 'Hours', value: timeLeft.hours},
                {label: 'Minutes', value: timeLeft.minutes},
                {label: 'Seconds', value: timeLeft.seconds}
            ].map(({label, value}) => (
                <div key={label}>
                    <div className="text-3xl font-semibold font-[family-name:var(--font-geist-mono)]">
                        {String(value).padStart(2, '0')}
                    </div>
                    <div
                        className="text-sm text-gray-500 font-semibold font-[family-name:var(--font-geist-mono)]">{label}</div>
                </div>
            ))}
        </div>
    );
}
