import {CoverImage} from "@/components/cover";
import {CTA} from "@/components/cta";

const ARTIST_NAME = 'gelugu';
const ARTIST_BIO = 'Exploring the crossroads of indie, downtempo, and experimental sounds. Inspired by the beauty of the unknown.';

export const About = () => {

    return (
        <section className={"flex flex-col gap-2 items-center sm:items-start w-60 sm:w-96"}>
            <CoverImage/>
            <h2
                className={"w-min text-wrap text-2xl font-semibold font-[family-name:var(--font-geist-mono)]"}
            >
                {ARTIST_NAME}
            </h2>
            <h2 className={"text-lg font-light"}>{ARTIST_BIO}</h2>
            <CTA/>
        </section>
    )
}
