import reduxSaga from "redux-saga";
import { put, call, all, takeLatest } from "redux-saga/effects";
import {
  getSongs,
  getSong,
  getSongSuccess,
  addSongSuccess,
  addSong,
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
    yield put({ type: songsFailure.type, payload: "Error fetching songs" });
    console.error(error);
  }
}
function* fetchSong(action) {
  try {
    const response = yield fetch(
      `https://mixit-server-deploy.onrender.com/songs/${action.payload}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch song");
    }
    const song = yield response.json();
    yield put({ type: getSongSuccess.type, payload: song });
  } catch (error) {
    yield put({ type: songsFailure.type, payload: "Error fetching song" });
    console.error(error);
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
    console.log(deleteSongSuccess.type);
    yield put({ type: deleteSongSuccess.type, payload: action.payload });
  } catch (error) {
    yield put({ type: songsFailure.type, payload: "Error deleting song" });
    console.error("Error fetching albums:", error);
  }
}

function* addSongToServer(action) {
  try {
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
          lyrics: action.payload.lyrics,
          lengthtime: action.payload.duration,
        }),
      }
    );
    console.log(addSongSuccess.type);
    if (response.ok) {
      const songs = yield response.json();

      yield put({ type: addSongSuccess.type, payload: songs });
    } else {
      yield put({ type: songsFailure.type, payload: response.statusText });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: songsFailure.type, payload: "Error adding song" });
  }
}
function* updateSongOnServer(action) {
  try {
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
          lyrics: action.payload.lyrics,
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
    yield put({ type: songsFailure.type, payload: "Error updating song" });
  }
}

function* watchAddSong() {
  yield takeLatest(addSong.type, addSongToServer);
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
function* watchFetchSong() {
  yield takeLatest(getSong.type, fetchSong);
}

function* rootSaga() {
  yield all([
    watchFetchSongs(),
    watchFetchSong(),
    watchAddSong(),
    watchDeleteSong(),
    watchUpdateSong(),
  ]);
}

export { rootSaga };
export default sagaMiddleware;
