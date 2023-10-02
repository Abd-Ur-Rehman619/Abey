import { configureStore } from "@reduxjs/toolkit";
import AbeySlice from "./AbeySlice";

export const store = configureStore({
  reducer: {
    abeystore: AbeySlice,
  },
});
