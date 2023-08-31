"use client"
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';


const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [videoVisible, setVideoVisible] = useState(false); // Состояние видимости видео

  // Хук useInView возвращает true, когда видео видимо в окне браузера
  const { ref, inView } = useInView({
    triggerOnce: true, // Позволяет сработать только один раз, когда видео становится видимым
    threshold: 0.5, // Порог видимости (от 0 до 1), определяет, насколько видимость должна быть для срабатывания
  });

  useEffect(() => {
    if (inView) {
      setVideoVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      video.play()
        .catch(error => {
          console.error('Video playback error:', error);
        });
    };

    const restartVideo = () => {
      video.currentTime = 0;
      playVideo();
    };

    if (videoVisible) {
      video.addEventListener('loadedmetadata', playVideo);
      video.addEventListener('ended', restartVideo);
    }

    return () => {
      video.removeEventListener('loadedmetadata', playVideo);
      video.removeEventListener('ended', restartVideo);
    };
  }, [videoVisible]);

  return (
    <div ref={ref} className="w-full mt-16 container mx-auto">
      <video ref={videoRef} className="w-[370px] h-20 object-cover" muted autoPlay playsInline>
        <source src="/logovideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;


