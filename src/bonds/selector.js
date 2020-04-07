import { createSelector } from "reselect";
import { format } from "date-fns";
import { daysInPeriod } from "../utils";

export const getBondInfo = (state) => state.bondInfo;

export const getLoadingState = (state) => state.reducerState;

export const getChartPeriod = (state) => state.period;

export const getChartYAxis = (state) => state.yAxis;

export const getBondName = createSelector(getBondInfo, (bond) =>
  bond ? bond.name : ""
);

export const getBondIsin = createSelector(getBondInfo, (bond) =>
  bond ? bond.isin : ""
);

export const getBondDescription = createSelector(getBondInfo, (bond) =>
  bond ? `${bond.company}, ${bond.domain}` : ""
);

export const getBondData = createSelector(
  getBondInfo,
  getChartPeriod,
  (bond, period) => {
    const days = daysInPeriod[period];
    return bond
      ? bond.data.slice(-1 * days).map((elem) => ({
          ...elem,
          date: format(new Date(elem.date), "MM/dd"),
        }))
      : [];
  }
);
