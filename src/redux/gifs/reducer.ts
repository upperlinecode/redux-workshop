import initialState from "../initialState";
import { GifState, fetchGifsType } from "./types";
import sample_data from "../../data/sample_data";

export default function gifsReducer(
  state: GifState = initialState.gifs,
  action: fetchGifsType
) {
  switch (action.type) {
    case "SET_ACTIVE_CARD_ID": {
      return { ...state, activeCardId: action.payload.cardId };
    }
    case "fetchGifsThunk/pending": {
      return { ...state, isLoading: true };
    }
    case "fetchGifsThunk/fulfilled": {
      return { ...state, isLoading: false, data: action.payload.data };
    }
    case "fetchGifsThunk/rejected": {
      return { ...state, isLoading: false, error: action.error.message };
    }
    default:
      return state;
  }
}
