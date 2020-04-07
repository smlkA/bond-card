import { takeLatest, call, put } from "redux-saga/effects";
import { last } from "lodash";
import { bondService } from "../utils/services";
import { BondActions } from "./action-names";
import { didFetchBondInfo } from "./actions";

function* handleFetchBondDetails() {
  const isin = last(window.location.pathname.split("/"));
  const bondDetails = yield call(bondService.fetchBond, isin);
  yield put(didFetchBondInfo(bondDetails));
}

export default function* watchBondSaga() {
  yield takeLatest(BondActions.FETCH_BOND_INFO, handleFetchBondDetails);
}
