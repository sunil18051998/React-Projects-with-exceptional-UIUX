import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { SlArrowDown } from "react-icons/sl";
import { GoArrowUpRight } from "react-icons/go";
import "../styles/NewLineChart.css";

const data = [
  { time: "00:00", temperature: 20, humidity: 60 },
  { time: "04:00", temperature: 18, humidity: 65 },
  { time: "08:00", temperature: 22, humidity: 55 },
  { time: "12:00", temperature: 28, humidity: 45 },
  { time: "16:00", temperature: 30, humidity: 40 },
  { time: "20:00", temperature: 24, humidity: 50 },
];

const NewLineChart = () => {
  return (
    <div className="linechart-container">
      <div className="dflx aic alignend revenue-gain-top">
        <div className="total-revenue-container">
          <div className="dflx aic alignend">
            <div className="revenue-gain">
              <div className="">
                <h3>Total Income</h3>
              </div>
              <div className="" style={{ height: "50px" }}>
                <h2>$2,415</h2>
              </div>
              <div>
                <p style={{ color: "gray" }}>Gained $400 this month</p>
              </div>
            </div>

            <div className="arrowbox-top dflx aic jcc">
              <GoArrowUpRight size={20} />
              <p>8.34%</p>
            </div>
          </div>
        </div>
        <div className="filter-container" style={{paddingBottom: '2px'}}>
          <div>
            <span className="filter">Monthly</span>
          </div>
          <div className="dflx aic jcc">
            <SlArrowDown size={12} />
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <defs>
            <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            {/* <linearGradient id="colorHumidity" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient> */}
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="temperature"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorTemp)"
          />
          {/* <Area 
          type="monotone" 
          dataKey="humidity" 
          stroke="#82ca9d" 
          fillOpacity={1}
          fill="url(#colorHumidity)" 
        /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NewLineChart;
