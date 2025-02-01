// components/GoogleTagManager.js
import Script from 'next/script';

export const GoogleTagManager = () => {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-MJ1LV5NT5Q`}
      />
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MJ1LV5NT5Q');
          `,
        }}
      />
      {/* End Google Tag Manager */}
    </>
  );
};