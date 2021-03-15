import React from "react";

function TableHead() {
  return (
    <thead class="thead-dark">
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">Firstname</th>
        <th scope="col">Surname</th>
        <th scope="col">email</th>
        <th scope="col">Room #</th>
        <th scope="col">Check in date</th>
        <th scope="col">Check out date</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  return (
    <tbody>
      {props.bookings.map((booking, index) => (
        <tr key={index}>
          <th scope="row">{booking.id}</th>
          <td>{booking.title}</td>
          <td>{booking.firstName}</td>
          <td>{booking.surname}</td>
          <td>{booking.email}</td>
          <td>{booking.roomId}</td>
          <td>{booking.checkInDate}</td>
          <td>{booking.checkOutDate}</td>
        </tr>
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
      </table>
    </div>
  );
}

export default SearchResults;
