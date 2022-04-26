import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";
import sample_data from "../../data/sample_data";
import { getGifs } from "../../data/utils";

export const fetchGifsThunk = createAsyncThunk(
  "fetchGifsThunk",
  async (_, thunkAPI) => {
    // Simulate a delayed api response
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await getGifs();

    return data;
  }
);
