import {About} from "@/components/about";
import {ContactsList} from "@/components/contacts";
import {ComingSoon} from "@/components/comming-soon";
import {Platform} from "@/components/streaming-list";

const geluguPlatforms: Platform[] = [
    {
        name: "SoundCloud",
        icon: "/soundcloud.svg",
        url: "https://soundcloud.com/gelugu",
    },
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

const mishaPlatforms: Platform[] = [
    {
        name: "Apple Music",
        icon: "/apple-music.svg",
        url: "https://music.apple.com/us/artist/misha/6776808748",
    },
    {
        name: "Spotify",
        icon: "/spotify.svg",
        url: "https://open.spotify.com/artist/3PTHYNKiRF4XVJVyKAysmU",
    },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="flex flex-col sm:flex-row gap-12 items-start justify-center">
          <About
            name="gelugu"
            bio="Exploring the crossroads of indie, downtempo, and experimental sounds. Inspired by the beauty of the unknown."
            platforms={geluguPlatforms}
            coverFilename="cover-gelugu.webp"
            showCTA
          />
          <About
            name="MISHA"
            bio="It usually comes out kind of optimistic on the surface, but there's always something heavier underneath. That part seems to stick around whether I want it or not."
            platforms={mishaPlatforms}
            coverFilename="cover-misha.webp"
          />
        </div>
        <ComingSoon/>
      </main>
      <footer className="row-start-3">
        <ContactsList/>
      </footer>
    </div>
  );
}
