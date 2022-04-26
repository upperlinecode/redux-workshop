import { GiphyData } from "../data/utils";
import { gifData } from "../data/sample_data";

const initialState = {
  gifs: {
    activeCardId: "",
    error: undefined as undefined | string,
    isLoading: false,
    data: [] as GiphyData[],
    // data: gifData as GiphyData[],
  },
};
export default initialState;
