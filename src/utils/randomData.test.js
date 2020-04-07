import { getRandomData } from "./randomData";
import { Periods } from "./constants";

describe("generateResponse", () => {
  it("should returns value for a week", () => {
    expect(getRandomData("1", Periods.Week)).toHaveLength(7);
  });
  it("should returns value for a month", () => {
    expect(getRandomData("1", Periods.Month)).toHaveLength(30);
  });
});
