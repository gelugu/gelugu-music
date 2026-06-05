import Image from "next/image";

export type Platform = {
    name: string;
    icon: string;
    url: string;
}

type Props = {
    platforms: Platform[];
}

export const StreamingList = ({ platforms }: Props) => {
    return (
        <ul className={"flex gap-4 items-center justify-center w-full"}>
            {platforms.map((platform, index) => (
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
