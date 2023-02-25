import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";

import { WrapSection, CloseX, Fixed, Week, WrapDates } from "./style.js";
import { Dates, Price } from "../../Namirnica/style.js";
import moment from "moment";
import Diskont from "../../Namirnica/diskont.js";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ReservationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      cijena: this.props.price + "Eur",
      message: "",
      datum: [],
    };
  }
  componentDidMount() {
    let datumi = [];
    this.props.datum.map((el) => {
      datumi.push({
        start: moment.unix(el.startDate.seconds).format("MM/DD"),
        end: moment.unix(el.endDate.seconds).format("MM/DD"),
      });
    });
    this.setState({ ...this.state, datum: JSON.stringify(datumi) });
    // console.log(this.state.datum);
  }

  handleSubmit = (e) => {
    // let datumi = [];
    // this.props.datum.map((el) => {
    //   datumi.push({
    //     start: moment.unix(el.startDate.seconds).format("MM/DD"),
    //     end: moment.unix(el.endDate.seconds).format("MM/DD"),
    //   });
    // });
    // this.setState({ ...this.state, datum: JSON.stringify(datumi) });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    }).then((res) => {
      this.props.handleModalOpen();

      console.log("submitted");
    });

    e.preventDefault();
  };
  insert = (str, value) => {
    let position = str.length - 3;
    return str.substr(0, position) + value + str.substr(position);
  };
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { message, email, cijena, free, selected, handleClick } = this.state;
    return (
      <WrapSection>
        <CloseX onClick={this.props.handleClick}>X</CloseX>
        <Fixed>
          Dates selected: <br />{" "}
        </Fixed>
        <WrapDates>
          {this.props.datum.map((el) => (
            <Week key={el.startDate.seconds}>
              {el.discount && <Diskont />}
              <Dates>
                {moment.unix(el.startDate.seconds).format("DD/MM")}-
                {moment.unix(el.endDate.seconds).format("DD/MM")}
              </Dates>
              <Price>{this.insert(el.cijena.toString(), ".")} EUR</Price>
            </Week>
          ))}
        </WrapDates>
        <Fixed>Total price: {this.props.price} EUR</Fixed>

        <form onSubmit={this.handleSubmit}>
          {/* <Fixed>Email:</Fixed> */}
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
          />
          {/* <Fixed>Message:</Fixed> */}

          <textarea
            style={{ resize: "none" }}
            placeholder="Your message"
            name="message"
            rows="4"
            value={message}
            onChange={this.handleChange}
          ></textarea>
          <button type="submit"> Send reservation inquire</button>
        </form>
      </WrapSection>
    );
  }
}

export default ReservationModal;
