import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {

  const [caVisitors, setCaVisitors] = useState([]);

    //CA BY VISITOR
    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/visitors/ca-by-visitor`)
        .then((res) => res.data)
        .then((data) => setCaVisitors(data));
    }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Revenue by Customer",
      },
    },
  };

  const data = {
    labels: caVisitors.map((caVisitor) => `${caVisitor.lastname} ${caVisitor.firstname}`),
    datasets: [
      {
        label: "",
        data: caVisitors.map((caVisitor) => caVisitor.price),
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
        ]
      },
    ],
  };
  return (
    <>
      <div>
        <Bar options={options} data={data} />
      </div>
    </>
  );
}

export default Chart;