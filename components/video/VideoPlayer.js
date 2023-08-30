"use client"
import { useEffect, useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      video.play()
        .catch(error => {
          // Обработка ошибки воспроизведения
          console.error('Video playback error:', error);
        });
    };

    const restartVideo = () => {
      video.currentTime = 0;
      playVideo();
    };

    video.addEventListener('loadedmetadata', playVideo);
    video.addEventListener('ended', restartVideo);

    return () => {
      video.removeEventListener('loadedmetadata', playVideo);
      video.removeEventListener('ended', restartVideo);
    };
  }, []);

  return (
    <div className="relative w-full my-20 container mx-auto">
      <video ref={videoRef} className="w-[370px] h-20 object-cover" muted  autoPlay>
        <source src="/logovideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
