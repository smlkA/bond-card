import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { BondDetails } from "./BondDetails";
import { Periods } from "../../constants";

const commonProps = {
  isin: "1",
  bondName: "Bond 1",
  period: Periods.Week,
  data: [],
  fetchBondInfo: Function.prototype,
};

describe("<BondDetails />", () => {
  afterEach(cleanup);

  it("should render BondDetails", () => {
    const wrapper = render(<BondDetails {...commonProps} />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  it("should call fetchBondInfo on componentDidMount", () => {
    const fetchBondInfo = jest.fn();

    render(<BondDetails {...commonProps} fetchBondInfo={fetchBondInfo} />);
    expect(fetchBondInfo).toHaveBeenCalled();
  });

  it("should call setChartPeriod on 'Month' tab click", () => {
    const setChartPeriod = jest.fn();

    const wrapper = render(
      <BondDetails {...commonProps} setChartPeriod={setChartPeriod} />
    );

    fireEvent.click(wrapper.getByLabelText("Month"));

    expect(setChartPeriod).toHaveBeenCalledWith(Periods.Month);
  });
});
