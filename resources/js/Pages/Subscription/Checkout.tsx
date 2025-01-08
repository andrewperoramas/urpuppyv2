import Breadcrumb from '@/Components/Breadcrumb'
import CheckoutV2Form from '@/Components/CheckoutV2Form'
import SellerRegistrationForm from '@/Components/Forms/SellerRegistrationForm'
import Heading from '@/Components/Heading'
import Layout from '@/Layouts/Layout'
import React from 'react'

const Checkout = ({plan_id, intent}: any) => {
  return (
  <Layout navType="secondary">
    <div className="page-wrapper position-relative overflow-hidden">
    <section className="information pt-4 pb-8 pb-lg-9">
                  <div className="container">
                        <Breadcrumb />
                        <div className="space-y-4">
                        <Heading title="Checkout" description="Checkout now" />
                        <CheckoutV2Form clientSecret={intent.client_secret}  plan_id={plan_id}/>
                  </div>
                  </div>
    </section>
    </div>
</Layout>
  )
}

export default Checkout
