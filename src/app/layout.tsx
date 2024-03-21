import type { Metadata } from "next";
import Script from "next/script";
import { Lora } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const loraSans = Lora({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Awaken Your Inner Genius with Genius Waves: Mental Transformation in 7 Seconds",
  description:
    "Discover how to activate your genius brainwave with Genius Waves and unlock unlimited potentials of creativity, memory, and accelerated learning. Join thousands who have already revolutionized their lives with our NASA-studied technology. Start your journey to self-improvement today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '923279442518560');
            fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={loraSans.className}>{children}</body>
      <GoogleAnalytics gaId="G-GQ4E9SQ6BY" />
    </html>
  );
}
