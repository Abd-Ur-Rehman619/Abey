import { createSlice } from "@reduxjs/toolkit";
import data from "../Data";

export const AbeySlice = createSlice({
  name: "Abey",
  initialState: data,
  reducers: {},
});

export default AbeySlice.reducer;
