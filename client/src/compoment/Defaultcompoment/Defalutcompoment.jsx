import React from 'react'
import Header from '.././Headercompoment/Headercompoment'
import Footer from '.././Footercompoment/Footercompoment'
export default function Defalutcompoment({children}) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

