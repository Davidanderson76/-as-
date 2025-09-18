export default function MusicPlayer() {
  return (
    <section id="music" className="py-16 px-4 flex flex-col items-center">

      {/* Spotify Embed */}
    <div className="w-full max-w-4xl aspect-[16/9]">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/album/1tC57dggfCmfCxrpcijdI3?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
