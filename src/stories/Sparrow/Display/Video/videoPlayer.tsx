import React, { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  loading?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, loading, altText }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (loading && videoRef.current) {
      videoRef.current.pause();
    }
  }, [loading]);

  const getVideoType = (url: string): string | null => {
    if (url?.endsWith?.(".mp4")) return "video/mp4";
    if (url?.endsWith?.(".webm")) return "video/webm";
    if (url?.endsWith?.(".ogg") || url?.endsWith?.(".ogv")) return "video/ogg"; // ".ogv" is another common extension for Ogg video files
    return null;
  };
  

  const isYouTube = videoUrl?.includes?.("youtube.com");
  const isVimeo = videoUrl?.includes?.("vimeo.com");

  const commonStyles: React.CSSProperties = {
    width: '100%',
    height: '100%',
    border: 'none',
    pointerEvents: loading ? 'none' : 'auto'  // prevent interactions when loading
  };

  if (isYouTube) {
    const youtubeVideoId = new URL(videoUrl).searchParams.get('v');
    return (
      <div style={{ position: 'relative', ...commonStyles }}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=${loading ? "0" : "1"}`} // use autoplay parameter
          style={commonStyles}
          allowFullScreen
          title={altText}
        ></iframe>
        {loading && <div style={{ ...commonStyles, position: 'absolute', top: 0, backgroundColor: 'rgba(255,255,255,0.5)' }}>Loading...</div>}
      </div>
    );
  } 

  if (isVimeo) {
    const vimeoVideoId = videoUrl.split("/").pop();
    return (
      <div style={{ position: 'relative', ...commonStyles }}>
        <iframe
          src={`https://player.vimeo.com/video/${vimeoVideoId}?autoplay=${loading ? "0" : "1"}`} // use autoplay parameter
          style={commonStyles}
          allowFullScreen
          title={altText}
        ></iframe>
        {loading && <div style={{ ...commonStyles, position: 'absolute', top: 0, backgroundColor: 'rgba(255,255,255,0.5)' }}>Loading...</div>}
      </div>
    );
  }

const videoType = getVideoType(videoUrl);
if (videoType) {
  return (
    <div style={{ position: 'relative', ...commonStyles }}>
      <video controls style={commonStyles} ref={videoRef} title={altText}>
        <source src={videoUrl} type={videoType} />
        Your browser does not support the video tag.
      </video>
      {loading && <div style={{ ...commonStyles, position: 'absolute', top: 0, backgroundColor: 'rgba(255,255,255,0.5)' }}>Loading...</div>}
    </div>
  );
}

  return <p>Unsupported video format or URL.</p>;
};

export default VideoPlayer;
