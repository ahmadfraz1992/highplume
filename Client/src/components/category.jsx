import React, { Component } from "react";
import "../App.css";

import axios from "axios";
var categoryName = [];
class category extends Component {
  constructor() {
    super();
    this.state = {
      cat_name: "",
      cat_desc: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidMount() {
    var divHtml = "";

    axios
      .post("http://localhost:6005/category/getCategoryInformationWithoutPara")
      .then(response => {
        console.log(response);
        categoryName = response.data.categoryLocalData;
        divHtml += "<thead  id='thead'>";
        divHtml += " <th style='width:50%' id=''>Row</th>";
        divHtml += " <th style='width:50%'>Category Name</th>";
        divHtml += "</thead><tbody class=''>";
        for (var i = 0; i < categoryName.length; i++) {
          divHtml += "<tr>";
          divHtml += "<th style='width:50%'>" + i + "</th>";
          divHtml +=
            "<td style='width:50%'>" + categoryName[i].cat_name + "</td>";
          divHtml += "</tr>";
        }
        divHtml += "</tbody>";

        document.getElementById("table").innerHTML = divHtml;
      })
      .catch(error => {
        console.log(error.response);
      });
  }
  onSubmit(e) {
    this.props.history.push(`/categoryInfo`);
  }

  render() {
    //goToTop();
    return (
      <div className="promos">
        <h1>List Of All Categories</h1>
        <nav className="main-menu">
          <ul>
            <li>
              <a href="/admin" style={{ marginTop: "30%" }}>
                <i class="fas fa-home fa-2x" />
                <span className="nav-text" style={{ color: "white" }}>
                  <b> Home</b>
                </span>
              </a>
            </li>

            <li style={{ marginTop: "10%" }}>
              <a href="/section">
                <i class="fas fa-edit fa-2x" />
                <span className="nav-text" style={{ color: "white" }}>
                  <b>Section</b>
                </span>
              </a>
            </li>
            <li className="has-subnav" style={{ marginTop: "10%" }}>
              <a href="/category">
                <i class="fas fa-edit fa-2x" />
                <span className=" nav-text" style={{ color: "white" }}>
                  <b>Category</b>
                </span>
              </a>
            </li>
            <li className="dropdown has-subnav" style={{ marginTop: "10%" }}>
              <a href="/templateSelection">
                <i class="fas fa-edit fa-2x" />
                <span className="nav-text" style={{ color: "white" }}>
                  <b>Template</b>
                </span>
              </a>
            </li>

            <li className="dropdown has-subnav" style={{ marginTop: "10%" }}>
              <a href="/registerCustomer">
                <i class="fas fa-user-plus fa-2x" />
                <span className="nav-text" style={{ color: "white" }}>
                  <b>Register User</b>
                </span>
              </a>
            </li>
          </ul>

          <ul className="logout">
            <li>
              <a href="#">
                <i className="fa fa-power-off fa-2x" />
                <span className="nav-text" style={{ color: "white" }}>
                  <b>Logout</b>
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <table
          className="table table-light"
          id="table"
          style={{ marginTop: "10%" }}
        />
        <button onClick={() => this.onSubmit()}>
          <img src="https://img.icons8.com/metro/26/000000/plus-math.png" />
        </button>
      </div>
    );
  }
}

export default category;
