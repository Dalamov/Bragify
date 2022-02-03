import { getAllPlayLists, asyncLikeSong } from "../../api/mock-apis";
import {
    FETCH_TRACKS,
    TRACKS_SET_ERROR,
    TRACKS_SET_RESULT,
    TRACKS_RESET,
    TRACKS_LOADING,
    TRACKS_LOADING_SUCCESS,
    PAUSE_TRACK,
    STOP_TRACK,
    PLAY_TRACK,
} from "./tracks-types"
import api from "../../api/track-api"
import * as auth from "../../services/auth";


export function setTracksLoading() {
    return { type: TRACKS_LOADING };

}

export function setTracksLoadingSuccess() {
    return { type: TRACKS_LOADING_SUCCESS };

}

export function setTracksResult(result) {
    return { type: TRACKS_SET_RESULT, payload: result };
}

export function setTracksError(error) {
    return { type: TRACKS_SET_ERROR, payload: error };
}

export function setPlayingTracks(track, index) {
    return {
        type: PLAY_TRACK, payload: { track, index }
    };
}

export function setPauseTracks() {
    return { type: PAUSE_TRACK };

}

export function playTrack(track) {
    return {
        type: PLAY_TRACK, payload: { track }
    }

}

export function giveLike(id) {
    try {
        const result = asyncLikeSong(id);
        console.log(id)
        return result;
    } catch (error) {
        console.log(error);
    }

}

export function getMyTracks(currentUser) {

}

export function createTrack(data) {
// console.log(data)
    return async function createThunk(dispatch) {
        dispatch(authTrack(data))
        try {
        } catch (error) {
        }
      };
}

export function authTrack(data) {
    return async function createThunk(dispatch) {
      const token = await auth.getCurrentUserToken();
      const response = await api.createTrack({
        Authorization: `Bearer ${token}`,
      },data);
  
      if (response.errorMessage) {
      }
    };
  }

function editTracks(id) {

}

export function deleteTracks(id) {

}


export function fetchAllTracks() {
    return async (dispatch) => {
        dispatch(setTracksLoading());
        try {
            const result = await getAllPlayLists();
            dispatch(setTracksResult(result));
            dispatch(setTracksLoadingSuccess());
        } catch (error) {
            dispatch(setTracksError(error));
        }
    };
} 