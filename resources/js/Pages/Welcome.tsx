import Footer from '@/Components/Navigation/Footer';
import Navbarv2 from '@/Components/Navigation/Navbarv2';
import { PageProps } from '@/types';
import { Head, Link, WhenVisible } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";


export default function Welcome({
    users,
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string; users: string }>) {

    const [userState, setUserState] = useState('');

    useEffect(() => {
        setUserState(users);
    }, [users])

    return (
        <>
            <Head title="Welcome" />

            <Navbarv2 />
            <div className="page-wrapper position-relative overflow-hidden">

                <section style={{
                    backgroundImage: 'url(./banner-bg.webp)',
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

                    <motion.div
  initial={{ opacity: 0, y: 50 }} // Start off-screen and invisible
  whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in position
  transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
>
                        <h1>

  Sliding Up Content
                        </h1>
</motion.div>


                    <motion.div
  initial={{ opacity: 0, y: 50 }} // Start off-screen and invisible
  whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in position
  transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
>
                        <h1>

  Sliding Up Content
                        </h1>
</motion.div>

                    <WhenVisible data="users" fallback={<div>Loading...</div>}>
                        <div>
                        burat ni {users}
                        </div>
                    </WhenVisible>


</div>


            </div>

        </>
    );
}
