'use client';

import Script from 'next/script';
import { useCookies } from '@/lib/cookies/CookieContext';

/**
 * ThirdPartyScripts - Conditionally loads third-party scripts based on cookie consent
 * 
 * To use:
 * 1. Replace GA_MEASUREMENT_ID with your Google Analytics ID (e.g., 'G-XXXXXXXXXX')
 * 2. Replace FB_PIXEL_ID with your Facebook Pixel ID (e.g., '1234567890')
 * 3. Add any other third-party scripts following the same pattern
 */
export function ThirdPartyScripts() {
  const { consent } = useCookies();

  // Don't load anything if no consent yet
  if (!consent) return null;

  return (
    <>
      {/* Google Analytics - Only load if analytics consent is given */}
      {consent.analytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID'}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID'}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* Facebook Pixel - Only load if marketing consent is given */}
      {consent.marketing && (
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID || 'FB_PIXEL_ID'}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {/* Add more third-party scripts here following the same pattern */}
      {/* Example: Google Ads */}
      {/* {consent.marketing && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID`}
          strategy="afterInteractive"
        />
      )} */}
    </>
  );
}
