import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>title app</title>
          <meta name="description" content="description  app" />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
