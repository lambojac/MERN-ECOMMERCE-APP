import React from 'react'
import Header from "../Header/Header.js"
import Footer from "../Footer/Footer"
const Layout = (props) => {
  return (
    <div>
        <Header/>
        <main>{props.children}</main>
       <Footer/>
    </div>
  )
}

export default Layout
