import Hero from '@/Components/Hero'
import Layout from '@/Layouts/Layout'
import React from 'react'

const ContactUs = () => {
  return (
  <Layout>
            <Hero title="Contact us" bgImage="/images/contact/contact-bg.jpg"/>
                <section className="get-in-touch py-7 py-md-5 py-xl-9">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 border-end pe-xl-10 order-last order-lg-first">
            <div className="contact-form pe-xl-6">
              <h2 className="fs-10 mb-4 mb-lg-8">Get in Touch</h2>
              <form action="">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label className="form-label">
                        First Name
                      </label>
                      <input type="text" name="FirstName" id="FirstName" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label className="form-label">
                        Last Name
                      </label>
                      <input type="text" name="LastName" id="LastName" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-4">
                      <label  className="form-label">Email Address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label  className="form-label">
                        Account Type
                      </label>
                      <select className="form-select shadow-none" aria-label="Default select example">
                        <option value="1">Seller</option>
                        <option value="2">Breeder</option>
                        <option value="3">Buyer</option>
                        <option value="4">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label  className="form-label">
                        Subject
                      </label>
                      <input type="text" name="Subject" id="Subject" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-4">
                      <label  className="form-label">
                        Message
                      </label>

                      <textarea rows={3} className="h-20 form-control rounded-1" id="Message" placeholder=""></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 ps-xl-10 order-first order-lg-last mb-7 mb-lg-0">
            <div className="position-relative overflow-hidden rounded-1 ps-xl-6">
              <img src="/images/contact/contact-img.jpg" alt=""
                className="w-100 h-auto object-fit-cover rounded-1" />
            </div>
          </div>
        </div>
      </div>
    </section>

        </Layout>

  )
}

export default ContactUs
