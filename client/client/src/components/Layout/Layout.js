import React from 'react'
import Header from "../Header/Header.js"
import Footer from "../Footer/Footer"
import {Helmet} from "react-helmet"
const Layout = ({children, content, description, keywords, author}) => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
                <meta name="author" content={author}/>
                <title>My Title</title>
      </Helmet>
        <Header/>
        <main style={{minHeight:"80vh"}}>{children}</main>
       <Footer/>
    </div>
  )
}

export default Layout
