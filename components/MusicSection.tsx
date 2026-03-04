import { client } from "@/sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

type Highlight = { _key: string; title: string; youtubeUrl?: string };
type StreamingLinks = { spotify?: string; appleMusic?: string; youtube?: string };

type Album = {
  _id: string;
  title: string;
  year: number;
  coverImage?: SanityImageSource;
  coverPlaceholderColor?: string;
  highlights?: Highlight[];
  streamingLinks?: StreamingLinks;
  isFeatured: boolean;
  order: number;
};

async function getAlbums(): Promise<Album[]> {
  return client.fetch(
    `*[_type == "album"] | order(order asc) {
      _id, title, year, coverImage, coverPlaceholderColor,
      highlights, streamingLinks, isFeatured, order
    }`
  );
}

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

function AlbumCard({ album }: { album: Album }) {
  const bg = album.coverPlaceholderColor ?? "#111";

  return (
    <div className="flex flex-col gap-0 group">
      {/* Cover art */}
      <div
        className="relative w-full aspect-square overflow-hidden"
        style={{ background: bg }}
      >
        {album.coverImage ? (
          <Image
            src={urlFor(album.coverImage).width(600).url()}
            alt={album.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-cream/10 text-6xl uppercase tracking-tighter text-center px-4">
              {album.title}
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3 text-[0.65rem] tracking-[0.2em] uppercase bg-bg/80 text-green px-2 py-1">
          {album.year}
        </div>
      </div>

      {/* Info */}
      <div className="border border-t-0 border-white/10 p-4 flex flex-col gap-3 bg-white/[0.02]">
        <h3 className="font-display text-xl text-cream leading-tight">{album.title}</h3>

        {album.highlights && album.highlights.length > 0 && (
          <ul className="flex flex-col gap-1">
            {album.highlights.map((h) => (
              <li key={h._key} className="text-xs text-cream/40 tracking-wide flex items-center gap-2">
                <span className="text-green/40">—</span>
                {h.youtubeUrl ? (
                  <a
                    href={h.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green transition-colors duration-150"
                  >
                    {h.title}
                  </a>
                ) : (
                  <span>{h.title}</span>
                )}
              </li>
            ))}
          </ul>
        )}

        {album.streamingLinks && (
          <div className="flex gap-3 mt-1 pt-3 border-t border-white/10">
            {album.streamingLinks.spotify && (
              <a
                href={album.streamingLinks.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-green transition-colors duration-150"
                aria-label="Spotify"
              >
                <SpotifyIcon />
              </a>
            )}
            {album.streamingLinks.appleMusic && (
              <a
                href={album.streamingLinks.appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-green transition-colors duration-150"
                aria-label="Apple Music"
              >
                <AppleIcon />
              </a>
            )}
            {album.streamingLinks.youtube && (
              <a
                href={album.streamingLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-green transition-colors duration-150"
                aria-label="YouTube Music"
              >
                <YouTubeIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export async function MusicSection() {
  const albums = await getAlbums();
  const featured = albums.filter((a) => a.isFeatured);
  const rest = albums.filter((a) => !a.isFeatured);

  return (
    <section id="music" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-green mb-2">
            Discography
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-cream">
            Music
          </h2>
        </div>
        <a
          href="https://open.spotify.com/artist/165ZgPlLkK7bf5bDoFc6Sb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm tracking-[0.18em] uppercase text-cream/50 hover:text-green transition-colors duration-200"
        >
          Stream on Spotify →
        </a>
      </div>

      {albums.length === 0 ? (
        <div className="border border-white/10 p-12 text-center">
          <p className="font-display text-2xl text-cream/30">No albums yet</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {featured.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featured.map((album) => (
                <AlbumCard key={album._id} album={album} />
              ))}
            </div>
          )}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((album) => (
                <AlbumCard key={album._id} album={album} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
