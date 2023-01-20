import React from 'react'
import Banner from '../Banner';
import Services from '../Services';
import Collections from '../Collections';
import Popular from '../Popular';
import Explore from '../Explore';
import Footer from '../Footer';
import {explporeCont,collectionsCont, popularCont, servicesCont} from './data'

function Home() {
    return (
        <>
            <Banner />
            <Services  data={servicesCont}/>
            <Collections data={collectionsCont} />
            <Popular data={popularCont}/>
            <Explore data={explporeCont} />
            <Footer />
        </>
    )
}

export default Home;