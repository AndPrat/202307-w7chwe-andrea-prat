import { rest } from "msw";
import { apiRobotsMock } from "./robotMocks";

export const handlers = [
  rest.get(`${import.meta.env.VITE_API_URL}/robots`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(apiRobotsMock));
  }),
];

export const errorHandlers = [
  rest.get(`${import.meta.env.VITE_API_URL}/robots`, (_req, res, ctx) => {
    return res(ctx.status(404, "Can't get robots right now"));
  }),
];
