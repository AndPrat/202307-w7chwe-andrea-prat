import { renderHook } from "@testing-library/react";
import useRobotsApi from "./useRobotsApi";
import { robotsMock } from "../mocks/robotMocks";
import { errorHandlers } from "../mocks/handlers";
import { server } from "../mocks/server";

describe("Given a function getRobots", () => {
  describe("When the function is called", () => {
    test("Then it should receive a list of robots", async () => {
      const {
        result: {
          current: { getRobots },
        },
      } = renderHook(() => useRobotsApi());

      const robots = await getRobots();

      expect(robots).toStrictEqual(robotsMock);
    });
  });

  test("Then it should throw an error 'Couldn't load user' when rejecting", () => {
    server.resetHandlers(...errorHandlers);
    const expectedError = new Error("Couldn't load robots");
    const {
      result: {
        current: { getRobots },
      },
    } = renderHook(() => useRobotsApi());

    const reobotsPromise = getRobots();

    expect(reobotsPromise).rejects.toThrowError(expectedError);
  });
});
