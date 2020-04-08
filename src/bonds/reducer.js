import { BondActions } from "./action-names";
import { ReducerStates } from "../constants";

const getDefaultState = () => ({
  bondInfo: {
    isin: "",
    name: "",
    company: "",
    domain: "",
    amount: "",
    currency: "",
    data: [],
  },
  reducerState: ReducerStates.Regular,
  serverError: null,
  yAxis: "price",
  period: "Week",
});

export default function reducer(state = getDefaultState(), action) {
  switch (action.type) {
    case BondActions.FETCH_BOND_INFO:
      return {
        ...state,
        serverError: null,
        reducerState: ReducerStates.Saving,
      };

    case BondActions.DID_FETCH_BOND_INFO:
      return {
        ...state,
        bondInfo: action.bondInfo,
        reducerState: ReducerStates.Regular,
      };

    case BondActions.DID_FETCH_BOND_INFO_FAIL:
      return {
        ...state,
        serverError: { message: "Ups, some server error" },
        reducerState: ReducerStates.Regular,
      };

    case BondActions.SET_CHART_PERIOD:
      return {
        ...state,
        period: action.period,
      };

    case BondActions.SET_Y_AXIS:
      return {
        ...state,
        yAxis: action.value,
      };

    default:
      return state;
  }
}
