import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_STRIPE);
const Payment = () => {
    return (
        <div>
        <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutFrom></CheckoutFrom>
            </Elements>
        </div>
    </div>
    );
};

export default Payment;