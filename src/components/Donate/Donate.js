import React, { useState } from "react";
import logo from "../../CEWAlogo.png";
import Axios from "axios";
import "./Donate.css";
import Loading from "../Loading/Loading";
import ThankYou from "../ThankYou/ThankYou";
import { withRouter } from "react-router-dom";
const Donate = (props) => {
  const user_id = props.location?.pathname?.split("/")[2] || "";
  /**states */
  const [loading, setloading] = useState(false);
  const [success, setsuccess] = useState(false);
  const [amount, setamount] = useState(0);
  const [amountS, setamountS] = useState(0);

  const [txnid, settxnid] = useState("");
  const [order_id, setorder_id] = useState("");
  const [email, setemail] = useState("");
  const [emailS, setemailS] = useState("");

  const [name, setname] = useState("");
  const [nameS, setnameS] = useState("");

  // const [desc, setdesc] = useState("");
  const [contact, setcontact] = useState("");
  const [address, setaddress] = useState("");
  const [enablePayment, setEnablePayment] = useState(false);
  /** Handler for Payment */
  const razorpayHandler = async () => {
    if (amount === 0) {
      return alert("Please enter an amount greater than 0.");
    }
    setloading(true);
    // console.log(amt);
    await Axios.post("https://still-sea-99702.herokuapp.com/donate/orders", {
      amount: amount,
      name: name,
      member_id: "123",
    }).then((res) => {
      // console.log(res);
      setorder_id(res.data.orders.id);
      setamount(res.data.orders.amount);

      const options = {
        key: process.env.KEY_ID || `rzp_live_hSBgOn0UmEjq7i`,
        amount: amount * 100, // 2000 paise = INR 20, amount in paisa
        name: name,
        meber_id: "123",
        description: "CEWA NGO Donation",
        order_id: order_id,
        handler: async function (response) {
          // console.log(response);
          var values = {
            razorpay_signature: response.razorpay_signature,
            razorpay_order_id: response.razorpay_order_id,
            transaction_id: response.razorpay_payment_id,
            transaction_amount: amount,
            transaction_author: name,
            member_id: user_id,
            email: email,
            phone: contact,
          };
          await Axios.post(
            `https://still-sea-99702.herokuapp.com/donate/capture/${values.transaction_id}`,
            values
          )
            .then((res) => {
              console.log(res);
              setloading(false);
              settxnid(res.data.transaction_id);
              setsuccess(true);
              setnameS(name);
              setemailS(email);
              setamountS(amount);
              // alert(
              //   `${res.data.msg || "Payment Failed"} \n Transaction ID: ${
              //     res.data.transaction_id || "00"
              //   }`
              // );
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
      setorder_id("123");
    });
  };

  return (
    <div className="donate">
      {loading ? (
        <Loading />
      ) : (
        !success && (
          <div
            style={{
              margin: "auto",
              textAlign: "center",
              width: "100vw",
              height: "100vh",
              display: "grid",
              placeItems: "center",
              height: "calc(100vh - 55px)",
            }}
          >
            {" "}
            <div>
              <h2 style={{ color: "rgb(27, 27, 27)" }}>
                We can do no great things, only small things with great love.
              </h2>
            </div>
            <div className="donate_card">
              <div className="donateCard_left">
                <div className="overlay"></div>
                <img
                  src="https://images.unsplash.com/photo-1602856580608-15599264e9f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="donateImg"
                />
              </div>
              <div className="donateCard_right">
                <div>
                  <label htmlFor="name">
                    Full name <span>*</span>{" "}
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email">
                    Email<span>*</span>
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="contact">
                    Contact number<span>*</span>
                  </label>
                  <input
                    type="phone"
                    onChange={(e) => setcontact(e.target.value)}
                  />
                </div>
                <div className="amount">
                  <label htmlFor="amount">
                    Amount<span>*</span>
                  </label>
                  <input
                    type="number"
                    onChange={(e) => setamount(e.target.value)}
                  />
                </div>
                <div>
                  <button className="payment_button" onClick={razorpayHandler}>
                    Proceed with payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
      {success && (
        <ThankYou name={nameS} amount={amountS} txnid={txnid} email={emailS} />
      )}
    </div>
  );
};
export default withRouter(Donate);
