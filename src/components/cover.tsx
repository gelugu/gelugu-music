import GlitchCanvas from "@/components/glitch-canvas";

const COVER_IMAGE_URL = 'https://ams1.vultrobjects.com/gelugu-music/cover.webp';

export const CoverImage = () => {
    return (
        <GlitchCanvas src={COVER_IMAGE_URL} width={300} height={300}/>
    )
}


