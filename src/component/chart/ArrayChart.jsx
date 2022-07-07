import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./arrayChart.css"

export const ArrayChart = () => {
  const [articleByVisitors, setArticleByVisitors] = useState([]);

  //ARTICLES BOUGHT BY VISITORS
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/visitors/article-bought-visitor`)
      .then((res) => res.data)
      .then((data) => setArticleByVisitors(data));
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>Brand</th>
          <th>Marque</th>
          <th>Price</th>
        </tr>

        {articleByVisitors &&
          articleByVisitors.map((articleByVisitor) => {
            return (
              <tr>
                <td>{articleByVisitor.firstname}</td>
                <td>{articleByVisitor.lastname}</td>
                <td>{articleByVisitor.email}</td>
                <td>{articleByVisitor.brand}</td>
                <td>{articleByVisitor.article}</td>
                <td>{articleByVisitor.price}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};
