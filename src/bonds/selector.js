import { createSelector } from "reselect";
import { format } from "date-fns";
import { daysInPeriod, AXIS_DATE_FORMAT } from "../constants";

export const getBondPageState = (state) => state.bondPage;

export const getBondInfo = createSelector(
  getBondPageState,
  (bondPage) => bondPage.bondInfo
);

export const getLoadingState = createSelector(
  getBondPageState,
  (bondPage) => bondPage.reducerState
);

export const getChartPeriod = createSelector(
  getBondPageState,
  (bondPage) => bondPage.period
);

export const getChartYAxis = createSelector(
  getBondPageState,
  (bondPage) => bondPage.yAxis
);

export const getBondName = createSelector(
  getBondInfo,
  (bondInfo) => bondInfo.name
);

export const getBondIsin = createSelector(
  getBondInfo,
  (bondInfo) => bondInfo.isin
);

export const getBondDescription = createSelector(
  getBondInfo,
  (bondInfo) => `${bondInfo.company}, ${bondInfo.domain}`
);

export const getBondData = createSelector(
  getBondInfo,
  getChartPeriod,
  (bondInfo, period) => {
    const days = daysInPeriod[period];
    return bondInfo.data.length > 0
      ? bondInfo.data.slice(-1 * days).map((elem) => ({
          ...elem,
          date: format(new Date(elem.date), AXIS_DATE_FORMAT),
        }))
      : [];
  }
);
