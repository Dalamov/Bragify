import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import { useSelector } from "react-redux";
import { fetchTrackById } from "../../../redux/tracks/tracks-actions";
import { tracksSelector } from "../../../redux/tracks/tracks-selector";
export default function MusicPlayer() {
  const dispatch = useDispatch();

  useEffect(() => {
    let trackId = localStorage.getItem("trackId");
    console.log(trackId);
    dispatch(fetchTrackById(trackId));
  }, [dispatch]);
  

  const {trackURL} = useSelector(tracksSelector);

  const tracksToPlay = [trackURL];
  console.log(tracksToPlay)
  
  const [number, setNumber] = useState(0);

  function handleClickPrevious() {
    setNumber(number - 1);
    if (number === 0) {
      setNumber(tracksToPlay.length - 1);
    }
  }

  function handleClickNext() {
    setNumber(number + 1);
    if (number === tracksToPlay.length - 1) {
      setNumber(0);
    }
  }

  return (
    <AudioPlayer
      autoPlayAfterSrcChange={true}
      showSkipControls={true}
      showJumpControls={false}
      onClickPrevious={handleClickPrevious}
      onClickNext={handleClickNext}
      onEnded={handleClickNext}
      src={tracksToPlay && tracksToPlay[number]}
      timeFormat="auto"
      hasDefaultKeyBindings={true}
      onError={(e) => {
        console.log(e);
      }}
      onPlayError={(e) => {
        console.log(e);
      }}
    />
  );
}
