import { ThunkDispatch } from "redux-thunk";
import sample_data from "../../data/sample_data";

export const fetchGifs = () => {
  return { type: "FETCH_GIFS_REQUEST", sample_data };
};
