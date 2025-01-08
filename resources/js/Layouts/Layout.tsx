import { AOSInit } from '@/Components/AosInit';
import Footer from '@/Components/Navigation/Footer';
import Navbarv2 from '@/Components/Navigation/Navbarv2';
import Banner from '@/Pages/Home/Sections/Banner';
import { usePage } from '@inertiajs/react';
import React, { useEffect } from 'react'
import { PropsWithChildren, ReactNode, useState } from 'react';

export default function Layout({
    header,
    children,
    navType ,
}: PropsWithChildren<{ header?: ReactNode, headerLabel?: string, subheaderLabel?: string, navType?: string }>) {
    return (
    <div >
            <AOSInit />
            <Navbarv2 type={navType}/>
            <main  >
            {children}
            </main>
            <Footer/>
</div>
)
}

