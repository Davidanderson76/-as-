'use client';

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        Listen to Our New Album
      </h1>
      <p className="text-lg md:text-xl mb-12 text-gray-300 text-center max-w-2xl">
        Stream our latest music directly from Spotify. Follow us to never miss a release!
      </p>

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
    </div>
  );
}
