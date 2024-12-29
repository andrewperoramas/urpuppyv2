import Breadcrumb from '@/Components/Breadcrumb'
import BreederRegistrationForm from '@/Components/Forms/BreederRegistrationForm'
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

                            <Heading title="Breeder Registration" description="Create your Breeder profile to connect"/>

                        <BreederRegistrationForm />
</div>

                          </div>
    </section>

</div>



</Layout>
  )
}

export default Registration
