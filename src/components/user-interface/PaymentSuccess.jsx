import { addOrder } from "./PickMeal";
import PickMeal from "./PickMeal";
const PaymentSuccess = () => {

    const {supplierId} = PickMeal
    // console.log(window.onload);
    // window.onload = () => {
    //     addOrder();
    // }
    console.log(supplierId);
    return (
        <div>Order Book Successfully</div>
    )
}

export default PaymentSuccess