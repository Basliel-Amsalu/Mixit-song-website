import reduxSaga from "redux-saga";
import { put, call, all, takeLatest } from "redux-saga/effects";
import {
  getSongs,
  addSongsSuccess,
  songsRequest,
  songsFailure,
  deleteSong,
  deleteSongSuccess,
  updateSong,
  updateSongSuccess,
  getSongsSuccess,
} from "./reducers";
const sagaMiddleware = reduxSaga();

function* fetchSongs() {
  try {
    const response = yield fetch(
      "https://mixit-server-deploy.onrender.com/songs"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch songs");
    }
    const songs = yield response.json();
    yield put({ type: getSongsSuccess.type, payload: songs });
  } catch (error) {
    yield put({ type: songsFailure.type, error: error.message });
    console.error("Error fetching albums:", error);
  }
}

function* deleteSongFromServer(action) {
  try {
    const response = yield fetch(
      `https://mixit-server-deploy.onrender.com/songs/${action.payload}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete songs");
    }
    yield put({ type: deleteSongSuccess.type, payload: action.payload });
  } catch (error) {
    yield put({ type: songsFailure.type, error: error.message });
    console.error("Error fetching albums:", error);
  }
}

function* addSongToServer(action) {
  console.log("I am called with this", action.payload);
  try {
    console.log(action.payload);
    const response = yield call(
      fetch,
      "https://mixit-server-deploy.onrender.com/songs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: action.payload.title,
          artist: action.payload.artist ?? "unknown",
          album: action.payload.album,
          lengthtime: action.payload.duration,
        }),
      }
    );

    if (response.ok) {
      const songs = yield response.json();
      yield put({ type: addSongsSuccess.type, payload: songs });
    } else {
      yield put({ type: songsFailure.type, payload: response.statusText });
    }
  } catch (error) {
    yield put({ type: songsFailure.type, payload: error.message });
  }
}
function* updateSongOnServer(action) {
  console.log("I am called with this", action.payload);
  try {
    console.log(action.payload);
    const response = yield call(
      fetch,
      `https://mixit-server-deploy.onrender.com/songs/${action.payload.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: action.payload.title,
          artist: action.payload.artist ?? "unknown",
          album: action.payload.album,
          lengthtime: action.payload.duration,
        }),
      }
    );

    if (response.ok) {
      const songs = yield response.json();
      yield put({ type: updateSongSuccess.type, payload: songs });
    } else {
      yield put({ type: songsFailure.type, payload: response.statusText });
    }
  } catch (error) {
    yield put({ type: songsFailure.type, payload: error.message });
  }
}

function* watchAddSong() {
  yield takeLatest(songsRequest.type, addSongToServer);
}
function* watchDeleteSong() {
  yield takeLatest(deleteSong.type, deleteSongFromServer);
}
function* watchUpdateSong() {
  yield takeLatest(updateSong.type, updateSongOnServer);
}

function* watchFetchSongs() {
  yield takeLatest(getSongs.type, fetchSongs);
}

function* rootSaga() {
  yield all([
    watchFetchSongs(),
    watchAddSong(),
    watchDeleteSong(),
    watchUpdateSong(),
  ]);
}

export { rootSaga };
export default sagaMiddleware;
