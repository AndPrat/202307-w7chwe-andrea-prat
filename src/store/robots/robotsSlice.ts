import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Robot } from "../../types.js";
import { RobotsState } from "./types.js";

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

    addRobot: (
      currentRobotState,
      action: PayloadAction<Robot>,
    ): RobotsState => ({
      ...currentRobotState,
      robots: [...currentRobotState.robots, action.payload],
    }),
  },
});

export const robotsReducer = robotsSlice.reducer;
export const {
  loadRobots: loadRobotsActionCreator,
  addRobot: addRobotActionCreator,
} = robotsSlice.actions;
