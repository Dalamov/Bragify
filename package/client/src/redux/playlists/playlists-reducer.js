import playlistsState from "./playlists-state";
import * as PlaylistsTypes from "./playlists-types";

const playlistsReducer = (state = playlistsState, action) => {
  switch (action.type) {
    
    case PlaylistsTypes.TO_SINGLE_ALBUM: {
      return {
        ...state,
        toSingleAlbum: true,
      };
    }

    default:
      return state;
  }
};
export default playlistsReducer;