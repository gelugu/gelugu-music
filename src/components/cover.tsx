import GlitchCanvas from "@/components/glitch-canvas";
import {getStaticImageUrl} from "@/utils/storage";

type Props = {
    filename: string;
}

export const CoverImage = ({ filename }: Props) => {
    return (
        <GlitchCanvas src={getStaticImageUrl(filename)} width={300} height={300}/>
    )
}


