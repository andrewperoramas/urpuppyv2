import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { usePage } from "@inertiajs/react";
import Button from "./ui/Button";
import TextInput from "./TextInput";

const stripePromise = loadStripe("pk_test_51Q8Qm3CLBiXa7V6ipLsyAZoGS5TmgpRuFwAxiT0nQzePjkyICHQn8mForFcLOlus2DMrEjVVlvfXIwAvARTIWDpA00HsFtZ171");

const CheckoutV2Form = ({ clientSecret, plan_id }: any) => {
    const [elements, setElements] = useState(null);
    const [stripe, setStripe] = useState<any>(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const initializeStripe = async () => {
            const appearance = {
                rules: {
                    '.Input:focus': {
                    boxShadow: 'none',
                    borderColor: '#E88325',
                    borderWidth: '1px',
                    outline: 'none'
                  },
                    '.Tab--selected:focus' : {
                    boxShadow: 'none',
                    outline: 'none',
                        borderColor: '#E88325',

                    color: '#08314E'
                    },
                    '.Tab:focus': {
                        borderColor:  '#E88325',

                    color: '#08314E'
                    },
                    '.Tab--selected:hover': {
                    color: '#08314E'
                    },

                    '.Tab--selected': {
                    boxShadow: 'none',
                    borderColor: '#E88325',
                    borderWidth: '2px',
                    outline: 'none',
                    color: '#08314E'

                    },
                    '.Tab--hover': {
                    boxShadow: 'none',
                    outline: 'none',

                    color: '#08314E'
                    },

                    '.Input': {
                    borderRadius: '150px',
                        boxShadow: 'none'
                    },

                    'p-TabLabel:hover': {
                        color: '08314E'

                    },
                    '.Label': {
                        fontFamily: '"Work Sans", sans-serif',
                        fontSize: '1rem',
                        fontWeight: '500',
                        color: '#08314E',
                        marginBottom: '0.6rem',
                    },

                },

            };
            const stripeInstance = await stripePromise as any;
            const elementsInstance = stripeInstance?.elements({ clientSecret, appearance });
            setStripe(stripeInstance);
            setElements(elementsInstance);

            const paymentElement = elementsInstance.create("payment", {
                address: {
                    allowedCountries: ['US']

                }
            });

            // paymentElement

            paymentElement.mount("#payment-element");
        };

        if (clientSecret) {
            initializeStripe();
        }
    }, [clientSecret]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        const { setupIntent, error }: any = await stripe?.confirmSetup({
            elements,
            confirmParams: {
                return_url: "http://localhost:4242/public/checkout.html",
            },
            redirect: "if_required",
        });

        if (error) {
            if (error.type === "card_error" || error.type === "validation_error") {
                setMessage(error.message);
            } else {
                setMessage("An unexpected error occurred.");
            }
        } else {
            const form = document.getElementById("payment-form") as any;
            const hiddenInput = document.createElement("input");
            hiddenInput.setAttribute("type", "hidden");
            hiddenInput.setAttribute("name", "paymentMethod");
            hiddenInput.setAttribute("value", setupIntent.payment_method);
            form.appendChild(hiddenInput);
            form.submit();
        }
    };

    const csrf = usePage().props.csrf_token as string;

    return (

                        <form id="payment-form" method="POST" action="/checkout/complete/" onSubmit={handleSubmit}>
                        <input type="hidden" name="_token" value={csrf} />
                        <input type="hidden" name="plan_id" value={plan_id} />

                            <div id="payment-element">
                                {/* Stripe.js injects the Payment Element */}
                            </div>
            <div className="mt-2">
                            <Button href="#" type="button">Checkout</Button>
</div>

                            {message && (
                                <div id="payment-message" className="mt-4 text-red-500">
                                    {message}
                                </div>
                            )}
                        </form>

    );
};

export default CheckoutV2Form;

