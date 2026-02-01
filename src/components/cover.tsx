import GlitchCanvas from "@/components/glitch-canvas";
import {getStaticImageUrl} from "@/utils/storage";

const COVER_IMAGE_URL = getStaticImageUrl("cover.webp");

export const CoverImage = () => {
    return (
        <GlitchCanvas src={COVER_IMAGE_URL} width={300} height={300}/>
    )
}


