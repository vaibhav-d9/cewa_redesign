import React, { useState } from "react";
import logo from "../../CEWAlogo.png";
import Axios from "axios";
import "./Donate.css";
const Donate = () => {
  /**states */
  const [amount, setamount] = useState(0);
  const [order_id, setorder_id] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  // const [desc, setdesc] = useState("");
  const [contact, setcontact] = useState("");
  const [address, setaddress] = useState("");
  /** Handler for Payment */
  const razorpayHandler = async () => {
    // console.log(amt);
    await Axios.post("http://localhost:5000/donate/orders", {
      amount: amount,
      name: name,
    }).then((res) => {
      console.log(res);
      setorder_id(res.data.orders.id);
      setamount(res.data.orders.amount);

      const options = {
        key: "rzp_test_Zz3DlmFvCiNuPY",
        amount: amount * 100, // 2000 paise = INR 20, amount in paisa
        name: name,
        description: "CEWA NGO Donation",
        order_id: order_id,
        handler: async function (response) {
          console.log(response);
          var values = {
            razorpay_signature: response.razorpay_signature,
            razorpay_order_id: response.razorpay_order_id,
            transaction_id: response.razorpay_payment_id,
            transaction_amount: this.amount,
            transaction_author: this.name,
          };
          await Axios.post(
            `http://localhost:5000/donate/capture/${values.transaction_id}`,
            values
          )
            .then((res) => {
              alert("Success");
            })
            .catch((e) => console.log(e));
        },
        prefill: {
          name: name,
          email: email,
          contact: contact,
        },
        notes: {
          address: address,
        },
        image: {
          logo,
        },
        theme: {
          color: "#ec5f24",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      setaddress("");
      setname("");
      setamount(0);
      setemail("");
      setcontact("");
      setaddress("");
      setorder_id("");
    });
  };

  return (
    <div className="donate">
      <h1>Donate us, we needs yor support</h1>
      <div>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
        />
        <div>
          <input
            type="text"
            placeholder="Contact"
            onChange={(e) => setcontact(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Address"
            onChange={(e) => setaddress(e.target.value)}
          />
        </div>
        <div className="amount">
          <input
            type="number"
            placeholder="Amount"
            onChange={(e) => setamount(e.target.value)}
          />
        </div>
        <div>
          <button onClick={razorpayHandler}>
            Click here to proceed further...
          </button>
        </div>
      </div>
    </div>
  );
};
export default Donate;
