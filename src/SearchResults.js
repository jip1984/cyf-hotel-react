import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import moment from "moment";

function TableHead() {
  return (
    <thead class="thead-dark">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">Firstname</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room #</th>
        <th scope="col">Check in date</th>
        <th scope="col">Check out date</th>
        <th scope="col">Nights</th>
        <th scope="col">Profile</th>
      </tr>
    </thead>
  );
}

function TableRow(props) {
  const [selected, setSelected] = useState("nothighlited");
  function changeColor() {
    setSelected(selected => {
      if (selected === "nothighlighted") {
        return "highlighted";
      } else {
        return "nothighlighted";
      }
    });
  }

  const [customerId, setCustomerId] = useState(null);
  function handleClick() {
    setCustomerId(1);
  }

  return (
    <tr className={selected} onClick={changeColor}>
      <th scope="row">{props.booking.id}</th>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>
        {moment(props.booking.checkOutDate).diff(
          moment(props.booking.checkInDate),
          "Days"
        )}
      </td>
      <td>
        <button className="btn btn-primary" onClick={handleClick}>
          {" "}
          Show Profile
        </button>
      </td>
    </tr>
  );
}

function TableBody(props) {
  return (
    <tbody>
      {props.bookings.map((booking, index) => (
        <TableRow booking={booking} key={index} />
      ))}
    </tbody>
  );
}

function SearchResults(props) {
  return (
    <div>
      <table className="table">
        <TableHead />
        <TableBody bookings={props.results} />
        <CustomerProfile id={customerId} />
      </table>
    </div>
  );
}

export default SearchResults;
