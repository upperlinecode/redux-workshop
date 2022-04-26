import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "../initialState";
import { fetchGifsThunk } from "./actions";

const gifsSlice = createSlice({
  name: "gifs",
  initialState: initialState.gifs,
  reducers: {
    setActiveCardId(state, action: PayloadAction<{ cardId: string }>) {
      state.activeCardId = action.payload.cardId;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGifsThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGifsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
    });
    builder.addCase(fetchGifsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default gifsSlice;
