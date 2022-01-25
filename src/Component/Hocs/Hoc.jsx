import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar'

const Hoc = (PagesComponent) => {
    return function WithPages(){
        return (
            <div>
                <Navbar />
                <Header />
                <PagesComponent />
                <Footer />
            </div>
        )

    }
 
}

export default Hoc
