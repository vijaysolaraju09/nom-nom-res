import React from 'react'
import Banner from '../Banner';
import Services from '../Services';
import Collections from '../Collections';
import Popular from '../Popular';
import Explore from '../Explore';
import Footer from '../Footer';


function Home() {
    return (
        <>
            <Banner />
            <Services />
            <Popular />
            <Explore />
            <Footer />
        </>
    )
}

export default Home;