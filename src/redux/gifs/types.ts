import { configureStore } from "@reduxjs/toolkit";
import initialState from "../initialState";

export type RootState = ReturnType<
  ReturnType<typeof configureStore>["getState"]
>;

export type GifState = typeof initialState.gifs;
export type fetchGifsType = { type: string; payload: any; error: any };
