import {
  Box,
  Button,
  Grid,
  imageListClasses,
  Typography,
  Input,
} from "@mui/material";
import useHttp from "../../hooks/useHttp";
import { useEffect, useState } from "react";
import HomePage from "../user-interface/HomePage";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const PaymentPage = ({ orderDetails }) => {
  // console.log({data});
  const { sendRequest: sendTaskRequest } = useHttp();

  const [success, setSuccess] = useState(false);

  // const successHandler = () => {
  //     setSuccess(true);
  // }
  const response = (data) => {
    // console.log(data.order.amount);
    const options = {
      key: "rzp_test_OdlUzcUGQ1A2yF", // Enter the Key ID generated from the Dashboard
      amount: data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Tiffin service",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // callback_url: "http://localhost:5000/api/Tiffin/paymentverification",
      handler: async function (response) {
        console.log(response);
        console.log(data);
        // var formData = new FormData();

        // formData.append("razorpay_payment_id",response.razorpay_payment_id)
        // formData.append("razorpay_order_id",response.razorpay_order_id)
        // formData.append("razorpay_signature",response.razorpay_signature)
        // formData.append("totalPaid",data.total)
        // formData.append("qunatity",data.quantity)

        // console.log(response);
        await sendTaskRequest(
          {
            url: "/paymentverification",
            method: "post",
            data: {
              ...orderDetails,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              razorpay_order_id: response.razorpay_order_id,
            },
          },
          (dt) => {
            if (dt.success) {
              toast.success("Order Book Successfully");
              setSuccess(true);
            }
          }
        );
        // const res = await axios.post("http://localhost:1337/api/paymentverification", formData, config);
        // if (res.data.status === 401 || !res.data) {
        //     console.log("errror")
        // } else {
        //     alert("Payment Successfully")
        //     navigate("/MyOrders")
        // }
      },
      prefill: {
        name: "Aditya",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.on("payment.success", function (response) {
      // checkoutHandler(); // Call the checkoutHandler prop on success
    });
    razor.open();
  };

  useEffect(() => {
    sendTaskRequest(
      {
        url: "/payment",
        method: "post",
        data: { amount: JSON.stringify(orderDetails.total) },
      },
      response.bind(null)
    );
  }, [sendTaskRequest, orderDetails.total]);

  return <>{success ? <HomePage /> : null}</>;
  // const checkoutHandler = async () => {
  //     sendTaskRequest({
  //         url : "/payment",
  //         method : "post",
  //         data : {amount : JSON.stringify(data.total)}
  //     },response.bind(null))
  // }
  // useEffect(() =>{
  //     checkoutHandler();
  // },[checkoutHandler,sendTaskRequest,response])
  // return (
  //     <Button
  //         variant="outlined"
  //         onClick={() => {
  //             checkoutHandler()
  //         }}
  //     >
  //     Submit
  //     </Button>
  // )
};

export default PaymentPage;
