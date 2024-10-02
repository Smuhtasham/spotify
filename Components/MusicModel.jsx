import { useRef, useState } from "react";

const MusicModel = () => {
  const [play, setPlay] = useState(false);
  const [currTime, setCurrTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [load, setLoad] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [audioName, setAudioName] = useState("Jo Tum Mera");
  const [Songimg, setSongimg] = useState("Jotum.jpeg");
  const [currentAudio, setCurrentAudio] = useState("Jotum.mp3");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const Audio = useRef(null);
  const [volume, setVolume] = useState(1);

  const songs = [
    { name: "Jo Tum Mera", imgSrc: "Jotum.jpeg", audioSrc: "/Jotum.mp3" },
    {
      name: "JAAN - Slowed & Reverb MP3",
      imgSrc: "Jaan.jpeg",
      audioSrc: "/Jaan.mp3",
    },
    {
      name: "Jhol - Slowed & Reverb MP3",
      imgSrc: "Jhol.jpeg",
      audioSrc: "/jhol.mp3",
    },
    {
      name: "MY Prime - Slowed & Reverb MP3",
      imgSrc: "Prime.jpg",
      audioSrc: "/prime.mp3",
    },
  ];

  const musicToggle = () => {
    if (!play) {
      Audio.current.play();
      setPlay(true);
    } else {
      Audio.current.pause();
      setPlay(false);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const timeUpdate = () => {
    if (Audio.current) {
      const currentTime = Audio.current.currentTime;
      const duration = Audio.current.duration;
      setCurrTime(formatTime(currentTime));
      setDuration(formatTime(duration));
      setProgress((currentTime / duration) * 100);
    }
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * Audio.current.duration;
    Audio.current.currentTime = newTime;
    Audio.current.play();
  };

  const SkipBack = (time) => {
    if (Audio.current) {
      Audio.current.currentTime -= time;
      Audio.current.play();
    }
  };

  const SkipFwd = (time) => {
    if (Audio.current) {
      Audio.current.currentTime += time;
      Audio.current.play();
    }
  };

  const speedUp = () => {
    if (Audio.current) {
      setSpeed(1.5);
      Audio.current.playbackRate = 1.5;
    }
  };

  const speedNormal = () => {
    if (Audio.current) {
      setSpeed(1);
      Audio.current.playbackRate = 1;
    }
  };

  const changeSong = (song) => {
    if (Audio.current) {
      Audio.current.pause();
      setAudioName(song.name);
      setSongimg(song.imgSrc);
      Audio.current.src = song.audioSrc;
      Audio.current.load();
      Audio.current.oncanplaythrough = () => {
        Audio.current.play();
        setPlay(true);
        setLoad(true);
      };
    }
  };

  const nextSong = () => {
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentIndex(nextIndex);
    changeSong(songs[nextIndex]);
  };

  const prevSong = () => {
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentIndex(prevIndex);
    changeSong(songs[prevIndex]);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    Audio.current.volume = newVolume;
  };

  return (
    <div className="w-[100%]">
      <div className="justify-between items-center  pr-4 pt-1 pl-1 pb-2  flex">
        <div className="flex w-[20%] text-sm px-2  items-center">
          <img src={Songimg} width={45} alt="" />
          <div className="px-2 w-[90%]">
            <div className="text-xs font-bold">{audioName}</div>
            <div className="text-xs">Description</div>
          </div>
          <audio src={currentAudio} onTimeUpdate={timeUpdate} ref={Audio} />
          <div className="flex gap-2">
            <img src="/heart.svg" alt="" />
            <img src="/window.svg" alt="" />
          </div>
        </div>
        <div className="items-center justify-center flex flex-col">
          <div className="flex gap-8">
            <img src="/suffle.svg" alt="" />
            <img onClick={prevSong} src="/back.svg" alt="" />
            <img
              onClick={musicToggle}
              src={play ? "/Pause.svg" : "/Play.svg"}
              alt=""
            />
            <img onClick={nextSong} src="/next.svg" alt="" />
            <img src="/loop.svg" alt="" />
          </div>
          <div className="w-[180%] flex items-center gap-2">
            <div className={`text-center text-white text-sm`}>{currTime}</div>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="w-[100%] h-[4px] m-auto"
            />
            <div className={`text-center text-white text-sm `}>{duration}</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex gap-4 items-center">
            <img src="/one.svg" alt="" />
            <img src="/two.svg" alt="" />
            <img src="/three.svg" alt="" />
            <img src="/volumn.svg" alt="" />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={volume * 100} // Convert back to range 0-100
            onChange={handleVolumeChange}
            className="w-[100px] h-[4px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicModel;
