import Breadcrumb, { BreadcrumbLink } from '@/Components/Breadcrumb'
import BreederRegistrationForm from '@/Components/Forms/BreederRegistrationForm'
import SellerRegistrationForm from '@/Components/Forms/SellerRegistrationForm'
import Heading from '@/Components/Heading'
import MetaTags from '@/Components/MetaTags'
import Layout from '@/Layouts/Layout'
import React from 'react'

const Registration = ({breeds}: { breeds: App.Data.BreedOptionData[]} ) => {
  return (
  <Layout navType="secondary">
            <MetaTags title="Registration" />
              <div className="page-wrapper position-relative overflow-hidden">

    <section className="information pt-4 pb-8 pb-lg-9">
                  <div className="container">
                        <Breadcrumb links={
                            [
                                {
                                    label: 'Registration',
                                    link: '/register'
                                }
                            ]
                        } />
                        <div className="space-y-4">

                            <Heading title="Breeder Registration" description="Create your Breeder profile to connect"/>

                        <BreederRegistrationForm breeds={breeds} />
</div>

                          </div>
    </section>

</div>



</Layout>
  )
}

export default Registration
