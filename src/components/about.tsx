import {CoverImage} from "@/components/cover";
import {CTA} from "@/components/cta";
import {Platform, StreamingList} from "@/components/streaming-list";

type Props = {
    name: string;
    bio: string;
    platforms: Platform[];
    coverFilename?: string;
    showCTA?: boolean;
}

export const About = ({ name, bio, platforms, coverFilename, showCTA = false }: Props) => {
    return (
        <section className={"flex flex-col gap-2 items-center w-60 sm:w-80"}>
            {coverFilename && <CoverImage filename={coverFilename}/>}
            <h2
                className={"w-min text-wrap text-2xl font-semibold font-[family-name:var(--font-geist-mono)]"}
            >
                {name}
            </h2>
            <h2 className={"text-lg font-light text-center"}>{bio}</h2>
            {showCTA && <CTA/>}
            <StreamingList platforms={platforms}/>
        </section>
    )
}
