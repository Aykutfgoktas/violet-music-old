import App from 'next/app';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import 'swiper/css/swiper.css'
import "../public/css/app.css"
import "../public/css/grid.css"
import "../public/css/ionicons.min.css"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export async function getStaticProps(appContext) {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
}

export default MyApp;
