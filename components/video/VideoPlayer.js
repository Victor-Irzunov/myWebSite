"use client"
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const VideoPlayer = ({portfolio}) => {
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
    <div ref={ref} className="w-full xz:mt-16 sd:mt-0 flex justify-center">
      <video ref={videoRef} className="w-auto h-auto object-cover" muted autoPlay playsInline>
        <source src={!portfolio ? "/logovideo.mp4" : "/video2.mp4"} type="video/mp4" />
        <track kind="captions" src="/subtitles.vtt" srcLang="ru" label="Russian" default={false} />
      </video>
    </div>
  );
};

export default VideoPlayer;


