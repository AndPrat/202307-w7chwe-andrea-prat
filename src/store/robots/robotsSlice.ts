import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RobotsState } from "./types.js";
import { Robot } from "../../types.js";

const initialRobotsState: RobotsState = {
  robots: [],
};

const robotsSlice = createSlice({
  name: "robots",
  initialState: initialRobotsState,
  reducers: {
    loadRobots: (
      currentRobotState,
      action: PayloadAction<Robot[]>,
    ): RobotsState => ({
      ...currentRobotState,
      robots: action.payload,
    }),
  },
});

export const robotsReducer = robotsSlice.reducer;
export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;
