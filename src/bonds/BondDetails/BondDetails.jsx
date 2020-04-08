import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Typography, Spin, Radio, Divider, Select } from "antd";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { fetchBondInfo, setChartPeriod, setYAxis } from "../actions";
import {
  getBondIsin,
  getBondName,
  getLoadingState,
  getBondDescription,
  getBondData,
  getChartPeriod,
  getChartYAxis,
} from "../selector";
import { ReducerStates, Periods } from "../../constants";

const { Title, Paragraph } = Typography;
const { Option } = Select;

export class BondDetails extends React.Component {
  componentDidMount() {
    const { fetchBondInfo } = this.props;
    fetchBondInfo();
  }

  renderPeriodTabs() {
    const { period, setChartPeriod } = this.props;
    return (
      <Radio.Group
        value={period}
        buttonStyle="solid"
        onChange={(e) => setChartPeriod(e.target.value)}
      >
        <Radio.Button value={Periods.Week}>Week</Radio.Button>
        <Radio.Button value={Periods.Month}>Month</Radio.Button>
        <Radio.Button value={Periods.Quarter}>Quarter</Radio.Button>
        <Radio.Button value={Periods.Year}>Year</Radio.Button>
      </Radio.Group>
    );
  }

  renderSelect() {
    const { yAxis, setYAxis } = this.props;
    return (
      <Select
        value={yAxis}
        style={{ width: 120 }}
        onChange={(e) => {
          setYAxis(e);
        }}
      >
        <Option value="price">Price</Option>
        <Option value="spread">Spread</Option>
        <Option value="yield">Yield</Option>
      </Select>
    );
  }

  renderChart() {
    const { data, yAxis } = this.props;
    return (
      <LineChart width={600} height={300} data={data}>
        <Line dataKey={yAxis} stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis interval="preserveEnd" />
      </LineChart>
    );
  }

  render() {
    const { isin, bondName, description, loadingState } = this.props;

    return (
      <>
        {loadingState === ReducerStates.Saving ? (
          <Spin size="large" />
        ) : (
          <div>
            <Title>{bondName}</Title>
            <Paragraph>{isin}</Paragraph>
            <Paragraph>{description}</Paragraph>
            <Divider />
            {this.renderPeriodTabs()}
            {this.renderChart()}
            {this.renderSelect()}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isin: getBondIsin,
  bondName: getBondName,
  description: getBondDescription,
  loadingState: getLoadingState,
  data: getBondData,
  period: getChartPeriod,
  yAxis: getChartYAxis,
});

const mapDispatchToProps = {
  fetchBondInfo,
  setChartPeriod,
  setYAxis,
};

export default connect(mapStateToProps, mapDispatchToProps)(BondDetails);
