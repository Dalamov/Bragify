import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPlaylist } from "../../../redux/playlists/playlists-actions";
import { getCurrentUserToken } from "../../../services/auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import withLayout from "../../HOC/withLayout";


function CreatePlaylist() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [playlist, setplaylist] = useState({
    name: "",
    description: "",
    collaborative: false,
    thumbnail: "",
    authorId: getCurrentUserToken(),
    // numberSongs: 0,
    // rating: 0,
    // tracks: tracks,
    // followedBy: followedBy,
    // collaborators: collaborators,
  });

  function handleInput(e) {
    const { target } = e;
    const { name, value } = target;

    const newPlaylist = {
      ...playlist,
      [name]: value,
    };
    setplaylist(newPlaylist);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createPlaylist(playlist));
    navigate("/playlists")
  }

  return (
      <section className="auth__wrapper container mt-4 p-5">
        <h1 className="font-bold align-self-start mx-4 mb-5">
          Create your playlist
        </h1>
        <Form className="px-4 mb-2" onSubmit={handleSubmit}>
          <Form.Group className="edit__form mb-4">
            <Form.Label>Playlist name</Form.Label>
            <Form.Control
              name="name"
              className="mb-2"
              type="text"
              value={playlist.name}
              onChange={handleInput}
              placeholder="name your playlist"
              required
            />
          </Form.Group>
          <Form.Group className="edit__form mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              type="text"
              onChange={handleInput}
              value={playlist.description}
              placeholder="what is this playlist about"
              required
            />
          </Form.Group>
          <Form.Group className="edit__form mb-2">
            <Form.Label>Thumbnail</Form.Label>
            <Form.Control
              type="text"
              value={playlist.thumbnail}
              onChange={handleInput}
              name="thumbnail"
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button className="btn__save my-2" type="submit" variant="log-color">
              Save
            </Button>
          </div>
        </Form>
      </section>
  );
}

export default withLayout(CreatePlaylist);