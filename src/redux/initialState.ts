import { GiphyData } from "../data/utils";
import { gifData } from "../data/sample_data";

const initialState = {
  gifs: {
    activeCardId: "",
    error: null as null | string,
    isLoading: false,
    data: [] as GiphyData[],
    // data: gifData as GiphyData[],
  },
};

export type AppState = typeof initialState;

export default initialState;
