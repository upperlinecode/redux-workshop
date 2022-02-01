const initialState = {
  gifs: {
    error: null,
    isLoading: false,
    data: [],
  },
};

export type AppState = typeof initialState;

export default initialState;
