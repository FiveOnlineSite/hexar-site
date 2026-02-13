import Banner from '@/src/components/Banner'
import ContactUsForm from '@/src/components/ContactUs/ContactUsForm'
import React from 'react'

const ContactPage = () => {
  return (
    <>
    <Banner title='Lets Build Together' image="./images/banners/Contact Us-2.jpg"/>
    <ContactUsForm/>
    </>
  )
}

export default ContactPage