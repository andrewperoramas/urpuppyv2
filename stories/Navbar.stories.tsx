import React from 'react';
import './navbar.css'
import {Meta, StoryObj} from '@storybook/react'
import Navbarv2 from '@/Components/Navigation/Navbarv2'

import {ComponentProps} from 'react'

import { motion } from "motion/react"

type StoryProps = ComponentProps<typeof Navbarv2>

// global.route = (name: string, params?: Record<string, any>) => {
//   return `${name}?${new URLSearchParams(params || {}).toString()}`;
// };

const meta: Meta<StoryProps> = {
    component: Navbarv2,
    parameters: {
        layout: 'fullscreen',
    },
    title: 'Components/Navigation',

    argTypes: {

    }
}

export default meta;

type Story = StoryObj<StoryProps>;

export const NavigationBar: Story = {
    args: {
        type: 'secondary',
    },
    render: (args) => {
        return <Navbarv2 />
    }

}

export const NavigationTransparentBar: Story = {
    args: {
        type: 'secondary',
    },
    render: (args) => {
        return <> <Navbarv2 type="transparent"/>

            <div className="page-wrapper position-relative overflow-hidden">

                <section style={{
                      backgroundImage: "url('./banner-bg.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }} className="hero-section position-relative d-flex align-items-center">
                    <div className="container position-relative z-1">

                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <h1 className="text-white text-center fs-11 mb-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Find Ur Perfect Puppy Today!</h1>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                            </div>

                        </div>

                    </div>

                </section>



                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>
                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>


                <motion.div
  initial={{ opacity: 0, y: 50 }} // Start off-screen and invisible
  whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in position
  transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation

  viewport={{ once: true }}

>


                <h1></h1>
            </motion.div>

            <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  >
                <h1></h1>
            </motion.div>

            <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  >
                <h1></h1>
            </motion.div>

            <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  >
                <h1></h1>
            </motion.div>

            <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  >
                <h1></h1>
            </motion.div>
            <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  >
                <h1></h1>
            </motion.div>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                adi ching

                burat
                <div>


</div>

            </div>
            <div className="">
                <img src="/dog.jpg" />
                <img src="/dog.jpg" />
                <img src="/dog.jpg" />
                <img src="/dog.jpg" />
            </div>
</>
    }

}
