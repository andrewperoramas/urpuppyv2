import Footer from '@/Components/Navigation/Footer';
import Navbarv2 from '@/Components/Navigation/Navbarv2';
import Banner from '@/Pages/Home/Sections/Banner';
import React from 'react'
import { PropsWithChildren, ReactNode, useState } from 'react';

export default function BannerLayout({
    header,
    children,
    headerLabel,
    subheaderLabel,
}: PropsWithChildren<{ header?: ReactNode, headerLabel?: string, subheaderLabel?: string }>) {
    return (
    <>
            <Navbarv2 />
            <Banner header={headerLabel} subheader={subheaderLabel}/>
            <main>
            {children}
            </main>
            <Footer/>

</>)
}

