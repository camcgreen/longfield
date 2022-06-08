import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <Script
          strategy='lazyOnload'
          src={`https://www.googletagmanager.com/gtag/js?id=G-89W6KNFWRV`}
          id='my-script-1'
        />

        <Script strategy='lazyOnload' id='my-script-2'>
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-89W6KNFWRV', {
        page_path: window.location.pathname,
        });
    `}
        </Script>
      </head>
      <Component {...pageProps} />
      <script
        src='//code.tidio.co/iare3ogxrz4hlfhlblobizor1lgqmehb.js'
        async
      ></script>
    </>
  );
}

export default MyApp;
