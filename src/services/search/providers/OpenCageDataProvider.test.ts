import request from "request-promise";
import * as Provider from "./OpenCageDataProvider";

jest.mock("request-promise");

describe("OpenCageDataProvider", () => {
  test("an empty query string", async () => {
    (request as any).mockImplementation(() => '{"features": []}');
    const result = await Provider.getPlaces("Paris");
    expect(result).toEqual({ features: [] });
  });
});