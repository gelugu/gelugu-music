import {CoverImage} from "@/components/cover";
import {randomItem} from "@/utils/arrays";

const ARTIST_NAME = "gelugu";
export const About = () => {
    const CTAs: string[] = [
        "Take a listen. It won't hurt like Placebo.",
        "Give it a spin – zero side effects.",
        "Tune in – vibes included, no charge.",
        "Low effort, high reward. Just listen.",
        "Try it – it’s less risky than surfing.",
        "Click it. Chill with it. Repeat.",
        "Not your typical placebo – but still works.",
        "Start listening – your brain will vibe.",
        "No prescription needed. Just press play.",
    ];

    const CTA = randomItem<string>(CTAs);

    return (
        <section className={"flex flex-col gap-2 items-center sm:items-start"}>
            <CoverImage/>
            <h2 className={"text-2xl font-semibold font-[family-name:var(--font-geist-mono)]"}>{ARTIST_NAME}</h2>
            <h2 className={"text-lg font-light"}>{CTA}</h2>
        </section>
    )
}
