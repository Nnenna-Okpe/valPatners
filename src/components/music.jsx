import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Music } from "lucide-react";

const useBackgroundMusic = (musicUrl) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(musicUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, [musicUrl]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Autoplay blocked. User interaction required.");
      }
    }
  };

  return { isPlaying, toggleMusic };
};

export default function Musica() {
  const navigate = useNavigate();
  const { isPlaying, toggleMusic } = useBackgroundMusic("/loveSong.mp3");

  return (
    <div className="fixed top-3 left-3 md:top-10 bottom-0 md:left-10  z-50">
      <Music
        onClick={toggleMusic}
        className={`cursor-pointer transition-colors ${
          isPlaying ? "text-pink-500" : "text-pink-300"
        }`}
      />
    </div>
  );
}
