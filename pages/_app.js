import { useEffect } from 'react';
import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // setTimeout(() => {
    //   document.querySelector(
    //     '.iubenda-tp-btn[data-tp-float]:not([data-tp-anchored])'
    //   ).style.margin = '32px !important';
    // }, 2000);
    // document.querySelector(
    //   '.iubenda-tp-btn[data-tp-float]:not([data-tp-anchored])'
    // ).style.margin = '32px !important';
  }, []);
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
        <Script strategy='lazyOnload' id='my-script-3'>
          {`
          var _iub = _iub || [];
          _iub.csConfiguration = {"ccpaAcknowledgeOnDisplay":true,"ccpaApplies":true,"consentOnContinuedBrowsing":false,"enableCcpa":true,"floatingPreferencesButtonDisplay":"bottom-left","invalidateConsentWithoutLog":true,"lang":"en","perPurposeConsent":true,"siteId":2687402,"whitelabel":false,"cookiePolicyId":49805495, "banner":{ "acceptButtonDisplay":true,"closeButtonDisplay":false,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"bottom","rejectButtonDisplay":true }};
        `}
        </Script>
        <Script
          src='//cdn.iubenda.com/cs/ccpa/stub.js'
          strategy='lazyOnload'
          id='my-script-4'
        ></Script>
        <Script
          src='//cdn.iubenda.com/cs/iubenda_cs.js'
          charset='UTF-8'
          async
          strategy='lazyOnload'
          id='my-script-5'
        ></Script>
      </head>
      <Component {...pageProps} />
      {/* <script
        src='//code.tidio.co/iare3ogxrz4hlfhlblobizor1lgqmehb.js'
        async
      ></script> */}
      <script
        src='//code.tidio.co/08cmqhlwbl7g6lxkwobr6syd9be4nckn.js'
        async
      ></script>
    </>
  );
}

export default MyApp;
