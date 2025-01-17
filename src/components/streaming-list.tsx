import Image from "next/image";

type Platform = {
    name: string;
    icon: string;
    url: string;
}

const StreamingPlatforms: Platform[] = [
    {
        name: "Spotify",
        icon: "/spotify.svg",
        url: "https://open.spotify.com/artist/2wq8TtuleurnscfaM8VtcZ",
    },
    {
        name: "Apple Music",
        icon: "/apple-music.svg",
        url: "https://music.apple.com/am/artist/gelugu/1772762680",
    },
    {
        name: "YouTube Music",
        icon: "/youtube-music.svg",
        url: "https://music.youtube.com/channel/UCmjPv1zuA2kNlX-l5wY9DAw",
    },
];

export const StreamingList = () => {
    return (
        <ul className={"flex gap-4 items-center justify-center w-full"}>
            {StreamingPlatforms.map((platform, index) => (
                <li key={`streaming-platform-${platform.name}-${index}`}>
                    <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={platform.icon}
                            alt={platform.name + "streaming icon"}
                            width={40}
                            height={40}
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
}
