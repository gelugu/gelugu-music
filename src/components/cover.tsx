import GlitchCanvas from "@/components/glitch-canvas";

const COVER_IMAGE_URL = 'https://ams1.vultrobjects.com/gelugu-music/cover.webp';

export const CoverImage = () => {
    return (
        <GlitchCanvas src={COVER_IMAGE_URL} width={300} height={300}/>
        // <Image
        //     src={COVER_IMAGE_URL}
        //     alt={"Cover Image"}
        //     width={300}
        //     height={300}
        //     className={"rounded-full hover:rounded-lg transition-all duration-150"}
        // />
    )
}


