import React from 'react'
import Header from "../Header/Header.js"
import Footer from "../Footer/Footer"
import {Helmet} from "react-helmet"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = ({children, content, description, keywords, author}) => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
                <meta name="author" content={author}/>
                <title>title</title>
      </Helmet>
        <Header/>
        <main style={{minHeight:"80vh"}}>
          <ToastContainer/>
          {children}</main>
       <Footer/>
    </div>
  )
}

Layout.defaultProps={
  title:"Ecommerce-app",
  description:"This is an ecommerce app",
  keywords:" ecommerce, mernecommerce"
}
export default Layout
