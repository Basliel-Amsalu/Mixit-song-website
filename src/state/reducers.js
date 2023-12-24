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
  initialState: { loading: false, song: {}, songs: [], error: "" },
  reducers: {
    getSong(state, action) {
      state.loading = true;
    },
    getSongSuccess(state, action) {
      state.loading = false;
      state.song = action.payload;
    },
    getSongs(state, action) {
      state.loading = true;
    },
    getSongsSuccess(state, action) {
      state.loading = false;
      state.songs = action.payload;
    },

    addSongSuccess(state, action) {
      state.loading = false;
      state.songs = [...state.songs, action.payload];
    },
    songsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addSong(state, action) {
      state.loading = true;
    },
    deleteSong(state, action) {
      state.loading = true;
    },
    deleteSongSuccess(state, action) {
      state.loading = false;
      state.songs = [
        ...state.songs.filter((song) => song.id !== action.payload),
      ];
    },
    updateSong(state, action) {
      state.loading = true;
    },
    updateSongSuccess(state, action) {
      state.loading = false;
      const updatedSongs = state.songs.map((song) => {
        if (song.id !== action.payload.id) {
          return song;
        }
        return action.payload;
      });
      state.songs = updatedSongs;
    },
  },
});

export const {
  getSongs,
  getSong,

  addSong,
  songsFailure,

  getSongSuccess,
  getSongsSuccess,

  addSongSuccess,
  deleteSongSuccess,
  deleteSong,
  updateSong,
  updateSongSuccess,
} = songSlice.actions;
export const { setUpdate, setMusic } = sideEffectSlice.actions;

export const songReducer = songSlice.reducer;
export const sideEffectReducer = sideEffectSlice.reducer;
