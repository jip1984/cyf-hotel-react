import React from "react";

const CustomerProfile = props => {
  // const [customer, setCustomer] = useState(1);
  console.log(props.customer);
  // useEffect(() => {
  //     if (!props.customerId) return
  //     fetch(`https://cyf-react.glitch.me/customers/${props.customerId}`)
  //         .then(response => response.json())
  //         .then(data => {
  //             setCustomer(data)
  //             console.log(data);
  //         });
  // }, [props.customerId]);

  if (!props.customer) return null;

  // console.log(props.id);

  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <th>Customer Id</th>
            <td>{props.customer.id}</td>
          </tr>
          <tr>
            <th>First Name</th>
            <td>{props.customer.firstName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{props.customer.surname}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{props.customer.email}</td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td>{props.customer.phoneNumber}</td>
          </tr>

          <tr>
            <th>VIP</th>
            <td>{props.customer.vip ? "YES" : "NO"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerProfile;
