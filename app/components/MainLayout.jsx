import React from 'react';
import MainHeader from './MainHeader';
import Footer from './Footer';

export default function MainLayout({children}) {
    return (
        <div>
            <MainHeader />
            <main className='mt-[96px]'>
                {children}
            </main>
            <Footer />
        </div>
    )
}
