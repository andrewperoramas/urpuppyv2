import Breadcrumb from '@/Components/Breadcrumb'
import SellerRegistrationForm from '@/Components/Forms/SellerRegistrationForm'
import Heading from '@/Components/Heading'
import Layout from '@/Layouts/Layout'
import React from 'react'

const Registration = () => {
  return (
  <Layout navType="secondary">
              <div className="page-wrapper position-relative overflow-hidden">

    <section className="information pt-4 pb-8 pb-lg-9">
                  <div className="container">
                        <Breadcrumb />
                        <div className="space-y-4">

                            <Heading title="Seller Registration" description="Create your seller profile to connect with buyers and showcase your listings."/>

                        <SellerRegistrationForm />
</div>

                          </div>
    </section>

</div>



</Layout>
  )
}

export default Registration
