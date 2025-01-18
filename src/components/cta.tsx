"use client";

import {useEffect, useState} from "react";
import {randomItem} from "@/utils/arrays";

const CTAs: string[] = [
    "Take a listen. It won't hurt.",
    "Give it a spin – zero side effects.",
    "Tune in – vibes included, no charge.",
    "Low effort, high reward. Just listen.",
    "Try it – it’s less risky than surfing.",
    "Click it. Chill with it. Repeat.",
    "Not your typical placebo – but still works.",
    "Start listening – your brain will vibe.",
    "No prescription needed. Just press play.",
];

export const CTA = () => {
    const [CTA, setCTA] = useState<string>(randomItem<string>(CTAs));
    useEffect(() => {
        const interval = setInterval(() => setCTA(randomItem<string>(CTAs)), 50000);
        return () => clearInterval(interval);
    }, []);

    return (
        <p className={"text-sm text-gray-500"}>{CTA}</p>
    )
}
