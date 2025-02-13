import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51QCFB5B0xRl9Df0eV4ta5t579Iw9aI8EZmIZD9hXiExP7hibkAneNzoUbglZnjnZ7QoZfbYnk7cazjMTXNX261As00vAyhQqED");

async function confirmPayment() {
    const stripe = await stripePromise;
    const clientSecret = new URLSearchParams(window.location.search).get("client_secret");

    if (clientSecret) {
        const { error }: any = await stripe?.confirmCardPayment(clientSecret);

        if (error) {
            alert("Payment failed: " + error.message);
        } else {
            window.location.href = "/profile?tab=My Subscription";
        }
    }
}

// Run the function when the page loads
confirmPayment();

