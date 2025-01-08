import Breadcrumb from '@/Components/Breadcrumb'
import CheckoutForm from '@/Components/CheckoutForm'
import SellerRegistrationForm from '@/Components/Forms/SellerRegistrationForm'
import Heading from '@/Components/Heading'
import PaymentMethodForm from '@/Components/PaymentMethodForm'
import Layout from '@/Layouts/Layout'
import React from 'react'

const PaymentMethod = ({payment_methods}: any) => {
  return (
  <Layout navType="secondary">
    <div className="page-wrapper position-relative overflow-hidden">
    <section className="information pt-4 pb-8 pb-lg-9">
                  <div className="container">
                        <Breadcrumb />
                        <div className="space-y-4">
                        <Heading title="Checkout" description="Create a new listing for your puppy." />
                        <PaymentMethodForm
                            payment_methods={payment_methods}
                        />
                  </div>
                  </div>
    </section>
    </div>
</Layout>
  )
}

export default PaymentMethod
