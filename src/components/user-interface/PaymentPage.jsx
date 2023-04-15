import { Box, Button, Grid, imageListClasses, Typography,Input } from "@mui/material";
import useHttp from "../../hooks/useHttp";


const PaymentPage = () => {
    const {sendRequest : sendTaskRequest} = useHttp();

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
            callback_url: "http://localhost:5000/api/Tiffin/paymentverification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    const checkoutHandler = async () => {
        sendTaskRequest({
            url : "/payment",
            method : "post",
            data : {amount : "500"}
        },response.bind(null))
    }
    return (
        <Button
            variant="outlined"
            onClick={() => { 
                checkoutHandler()
            }}
        >
        Submit
        </Button>
    )
}

export default PaymentPage