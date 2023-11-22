import { createSlice } from "@reduxjs/toolkit";

const sideEffectSlice = createSlice({
  name: "sideEffect",
  initialState: { update: false, music: {} },
  reducers: {
    setUpdate(state, action) {
      state.update = action.payload;
    },
    setMusic(state, action) {
      state.music = action.payload;
    },
  },
});

const songSlice = createSlice({
  name: "song",
  initialState: { songs: [] },
  reducers: {
    getSongs(state, action) {
      return state;
    },
    getSongsSuccess(state, action) {
      return {
        ...state,
        songs: action.payload,
      };
    },

    addSongsSuccess(state, action) {
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    },
    songsFailure(state, action) {
      return state;
    },
    songsRequest(state, action) {
      return state;
    },
    deleteSong(state, action) {
      return state;
    },
    deleteSongSuccess(state, action) {
      return {
        ...state,
        songs: [...state.songs.filter((song) => song.id !== action.payload)],
      };
    },
    updateSong(state, action) {
      return state;
    },
    updateSongSuccess(state, action) {
      const updatedSongs = state.songs.map((song) => {
        if (song.id !== action.payload.id) {
          return song;
        }
        return action.payload;
      });
      return {
        ...state,
        songs: updatedSongs,
      };
    },
  },
});

export const {
  getSongs,

  addSong,
  songsFailure,
  songsRequest,
  getSongsSuccess,

  addSongsSuccess,
  deleteSongSuccess,
  deleteSong,
  updateSong,
  updateSongSuccess,
} = songSlice.actions;
export const { setUpdate, setMusic } = sideEffectSlice.actions;

export const songReducer = songSlice.reducer;
export const sideEffectReducer = sideEffectSlice.reducer;
