import { BondActions } from "./action-names";

export const fetchBondInfo = () => ({
  type: BondActions.FETCH_BOND_INFO,
});

export const didFetchBondInfo = (bondInfo) => ({
  type: BondActions.DID_FETCH_BOND_INFO,
  bondInfo,
});

export const setChartPeriod = (period) => ({
  type: BondActions.SET_CHART_PERIOD,
  period,
});

export const setYAxis = (value) => ({
  type: BondActions.SET_Y_AXIS,
  value,
});
