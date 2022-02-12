import { useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tracksSelector } from "../../redux/tracks/tracks-selector";
import {
  fetchAllTracks,
  fetchLikedTracks,
} from "../../redux/tracks/tracks-actions";

import withLayout from "../../components/HOC/withLayout";
import LikeButton from "../../components/atoms/LikeButton";
import DeleteButton from "../../components/atoms/DeleteButton";
import ListGroup from "react-bootstrap/ListGroup";
import { fetchTrackById } from "../../redux/tracks/tracks-actions";
import Button from "react-bootstrap/Button";

import { BsPlusLg } from "react-icons/bs";

function Tracks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTracks);
    dispatch(fetchLikedTracks(userId));
  }, [dispatch]);

  const handleTrackId = (e) => {
    const id = e.target.id;
    localStorage.setItem("trackId", id );
    let trackId  = localStorage.getItem("trackId");
    console.log(trackId);
    dispatch(fetchTrackById(trackId));
  };

  const { tracks } = useSelector(tracksSelector);

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const userId = currentUser._id;
  return (
    <div className="mx-4 my-2">
      <h2 className="page__title px-5">All Tracks</h2>
      <ListGroup horizontal className="tracks__titles-row d-flex w-100 mb-1">
        <ListGroup.Item className="tracks__title"></ListGroup.Item>
        <ListGroup.Item className="tracks__title">Title</ListGroup.Item>
        <ListGroup.Item className="tracks__title">Artist</ListGroup.Item>
        <ListGroup.Item className="tracks__title">Genre</ListGroup.Item>
        <ListGroup.Item className="tracks__title">Duration</ListGroup.Item>
        <ListGroup.Item className="tracks__title"></ListGroup.Item>
      </ListGroup>

      {tracks &&
        tracks.map((track) => {
          return (
            <ListGroup
              horizontal
              className="track__row w-100 d-flex"
              key={track._id}
            >
              <ListGroup.Item
                className="track__row-thumbnail p-2"
                id={track._id}
                onClick={(e) => handleTrackId(e)}
              >
                <img
                  className="w-100 h-100"
                  id={track._id}
                  onClick={(e) => handleTrackId(e)}
                  src={track.thumbnail}
                ></img>
              </ListGroup.Item>
              <ListGroup.Item
                id={track._id}
                onClick={(e) => handleTrackId(e)}
                className="track__row-title"
              >
                {track.title}
              </ListGroup.Item>
              <ListGroup.Item className="track__row-artist">
                {track.artists}
              </ListGroup.Item>
              <ListGroup.Item className="track__row-genre">
                {track.genre}
              </ListGroup.Item>
              <ListGroup.Item className="track__row-duration">
                {track.duration}
              </ListGroup.Item>
              <ListGroup.Item className="track__row-buttons">
                <LikeButton trackId={track._id} />
                <DeleteButton trackId={track._id} />
                <Button className="btn__options">
                  <BsPlusLg />{" "}
                </Button>
              </ListGroup.Item>
            </ListGroup>
          );
        })}
    </div>
  );
}

export default withLayout(Tracks);
