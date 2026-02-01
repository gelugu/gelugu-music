import GlitchCanvas from "@/components/glitch-canvas";
import Countdown from "@/components/countdown";
import {getStaticImageUrl} from "@/utils/storage";

type UpcomingRelease = {
    name: string;
    coverUrl: string;
    date: string;
}

const upcomingRelease: UpcomingRelease = {
    name: "Domestic Mix",
    date: "2026-01-30",
    coverUrl: getStaticImageUrl("dom_mix.webp"),
};

export const ComingSoon = () => {
    const difference = new Date(upcomingRelease.date).getTime() - Date.now();

    if (difference <= 0) {
        return null;
    }

    return (
        <div className="flex flex-col items-center gap-6 w-60 sm:w-96 lg:absolute lg:top-8 lg:right-8">
            <h2 className="text-2xl font-semibold">Upcoming Release</h2>
            <div className="relative w-[300px] h-[300px]">
                <GlitchCanvas src={upcomingRelease.coverUrl} width={300} height={300}/>
                <span className="absolute inset-0 flex items-center justify-center text-lg pointer-events-none">
                    {upcomingRelease.name}
                </span>
            </div>
            <span>
                <Countdown targetDate={upcomingRelease.date}/>
            </span>
        </div>
    )
}
