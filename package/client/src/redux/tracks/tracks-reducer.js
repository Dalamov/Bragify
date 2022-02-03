import initialState from "./tracks-state";
import {
  FETCH_TRACKS,
  TRACKS_SET_ERROR,
  TRACKS_SET_RESULT,
  TRACKS_RESET,
  TRACKS_LOADING,
  TRACKS_LOADING_SUCCESS,
  PLAY_TRACK,
  PAUSE_TRACK,
  STOP_TRACK,
  TO_TRACKS,
} from "./tracks-types";

export default function tracksReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRACKS:
      return {
        ...state,
        status: "idle",
        error: undefined,
        isPlaying: false,
      };
    case TRACKS_SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case TRACKS_SET_RESULT:
      return {
        ...state,
        tracks: action.payload,
      };
    case TRACKS_RESET:
      return {};
    case TRACKS_LOADING:
      return {
        ...state,
        status: "loading",
      };
    case TRACKS_LOADING_SUCCESS:
      return {
        ...state,
        status: "success",
      };
    case TO_TRACKS:
      return {
        ...state,
        inTracks: true,
        isEditing: false
      };
    case PLAY_TRACK:
      return {
        ...state,
        isPlaying: true,
        playingTrack: action.payload,
      };
    default:
      return state;
  }
}