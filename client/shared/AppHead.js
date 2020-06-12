import React, { Component } from 'react'
import Head from 'next/head';

class AppHead extends Component {
    render() {
        return (
            <Head>
            <title>Violet</title>
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"/> 
            <link rel='shortcut icon' type='image/png' href='/images/logo2.png' />
          </Head>
        )
    }
}

export default AppHead
