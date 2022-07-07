import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const PolarChart = () => {

  const [caBrands, setCaBrands] = useState([]);

      //CA BY BRAND
      useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/products/ca-by-brand`)
          .then((res) => res.data)
          .then((data) => setCaBrands(data));
      }, []);

  const options = {
    responsive: true,
    layout: {
      padding: 40
  },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Revenue by Brand",
      },
    },
  };

  const data = {
    labels: caBrands.map((caBrand) => caBrand.brand),
    datasets: [
      {
        label: "",
        data: caBrands.map((caBrand) => caBrand.price),
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
        <PolarArea options={options} data={data} />
      </div>
    </>
  );
}

export default PolarChart;