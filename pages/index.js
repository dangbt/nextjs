import Header from './header'
import Footer from './footer'
import MyImage from './image'
import Link from 'next/link'
import React, { Component } from 'react'

class Index extends Component {
  static async getInitialProps ({ query }) {
    return {}
  }
  render () {
    return <div style={{ color: 'red' }}>
      Welcome to next.js!
      <Header />
      <Footer />
    </div>
  }
}

export default Index
