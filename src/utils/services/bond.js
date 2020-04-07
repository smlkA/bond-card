import { getRandomData } from "../randomData";
import { Periods } from "../../utils";

export default {
  async fetchBond(isin, period = Periods.Year) {
    await new Promise((res) => setTimeout(res, 300));
    const dataArray = getRandomData(isin, period);
    return {
      isin,
      name: "NII CAPITAL",
      company: "NII CAPITAL CORP",
      domain: "Telecommunications",
      amount: "7.625",
      currency: "USD",
      data: dataArray,
    };
  },
};
