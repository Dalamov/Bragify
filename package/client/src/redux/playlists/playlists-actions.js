import * as PlaylistsTypes from "./playlists-types";
import api from "../../api";
import * as auth from "../../services/auth";

// -----------------CHANGE STATE ACTIONS
export const toSingleAlbum = () => ({
  type: PlaylistsTypes.TO_SINGLE_ALBUM,
});