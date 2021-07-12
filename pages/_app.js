import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta content="#333333" name="theme-color" />
        <base href="/" />
        {/* <link href="global.css" rel="stylesheet" /> */}
        <link href="manifest.json" rel="manifest" crossOrigin="use-credentials" />
        {/* <link href="favicon.png" rel="icon" type="image/png" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Cookie&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet" />

        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/elegant-icons.css" rel="stylesheet" />
        <link href="/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/navbar.css" rel="stylesheet" />
        <link href="/css/app.css" rel="stylesheet" />
        <link href="/css/footer.css" rel="stylesheet" />
        {/* <link href="/css/kategori.css" rel="stylesheet" /> */}
        {/* <link href="/css/banner.css" rel="stylesheet" />  */}
        <link href="/css/about.css" rel="stylesheet" />  
        <link href="/css/promo.css" rel="stylesheet" />
        <link href="/css/detail.css" rel="stylesheet" />      

        {/* <link rel="stylesheet" href="client/client-cc898233.css" />
        <link rel="stylesheet" href="client/index-139e1965.css" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
2