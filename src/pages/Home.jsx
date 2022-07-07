import React, { useState, useEffect } from "react";
import "./home.css";
import axios from "axios";
import { NavBar } from "../component/navbar/NavBar";
import Chart from "../component/chart/Chart";
import PolarChart from "../component/chart/PolarChart";

import { AiOutlineEuroCircle } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineFilter } from "react-icons/ai";
import { IoChevronForward } from "react-icons/io5";
import { IoHourglassOutline } from "react-icons/io5";

import { useStateContext } from "../contexts/ContextProvider";

export const Home = () => {
  const { activeMenu } = useStateContext();
  const [globalsCa, setGlobalsCa] = useState([]);
  const [numbersOrder, setNumbersOrder] = useState([]);
  const [conversionsRate, setConversionsRate] = useState([]);
  const [averageTimes, setAverageTimes] = useState([]);
  const [articleByVisitors, setArticleByVisitors] = useState([]);

  // //GLOBAL CA
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/products/global-ca-product`)
      .then((res) => res.data)
      .then((data) => setGlobalsCa(data));
  }, []);

  //ORDER NUMBERS
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/products/number-of-orders`)
      .then((res) => res.data)
      .then((data) => setNumbersOrder(data));
  }, []);

  //CONVERSIONS RATE
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/products/order-conversion-rate`)
      .then((res) => res.data)
      .then((data) => setConversionsRate(data));
  }, []);

  //DURATION AVERAGE
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/visitors/average-consultation-duration`
      )
      .then((res) => res.data)
      .then((data) => setAverageTimes(data));
  }, []);

  // //ARTICLES BOUGHT BY VISITORS
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/visitors/article-bought-visitor")
  //     .then((res) => res.data)
  //     .then((data) => setArticleByVisitors(data));
  // }, []);

  return (
    <>
      {activeMenu ? (
        <div className="main-open">
          <NavBar />
          <div className="container-home">
            <div className="charts-container">
              <div className="global-ca">
                <div className="icon-charts">
                  <AiOutlineEuroCircle />
                </div>
                <h3>CA Global : </h3>
                {globalsCa &&
                  globalsCa.map((globalCa) => (
                    <h4 key={globalCa.id}>
                      <IoChevronForward />
                      {globalCa.total} Euros
                    </h4>
                  ))}
              </div>
              <div className="orders-number">
                <div className="icon-charts">
                  <FiShoppingBag />
                </div>
                <h3>Total Orders: </h3>
                {numbersOrder &&
                  numbersOrder.map((numberOrder) => (
                    <h4 key={numberOrder.id}>
                      <IoChevronForward />
                      {numberOrder.orders} orders
                    </h4>
                  ))}
              </div>
              <div className="conversion-rate">
                <div className="icon-charts">
                  <AiOutlineFilter />
                </div>
                <h3>Conversion Rate : </h3>
                {conversionsRate &&
                  conversionsRate.map((conversionRate) => (
                    <h4 key={conversionRate.id}>
                      <IoChevronForward />
                      {conversionRate.duration} %
                    </h4>
                  ))}
              </div>
              <div className="duration-average">
                <div className="icon-charts">
                  <IoHourglassOutline />
                </div>
                <h3>Average length : </h3>
                {averageTimes &&
                  averageTimes.map((averageTime) => (
                    <h4 key={averageTime.id}>
                      <IoChevronForward />
                      {averageTime.time} seconds
                    </h4>
                  ))}
              </div>
              <div className="ca-visitor">
                <Chart />
              </div>
              <div className="ca-brand">
                <PolarChart />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="main-closed">
          <NavBar />
        </div>
      )}
      ;
    </>
  );
};
