import { all } from "redux-saga/effects";
import watchBondSaga from "../bonds/bondSaga";

export default function* rootSaga() {
  yield all([watchBondSaga()]);
}
