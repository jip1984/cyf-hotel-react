import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(data => setCustomer(data));
  }, [props.id]);

  console.log(props.id);

  return (
    <table className="customerDetails">
      <tbody>
        <tr>
          <th>Customer Id</th>
          <td>{customer.id}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{customer.email}</td>
        </tr>
        <tr>
          <th>Phone Number</th>
          <td>{customer.phoneNumber}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CustomerProfile;
