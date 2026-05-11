import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/common/nav-bar";
import Footer from "@/src/common/footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bennett University Online MBA - Future-Ready Management Education",
  description: "Discover Bennett University's Online MBA program, designed to equip future managers with cutting-edge skills and industry insights. Join us to shape your career in management and leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>

         <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P5SSHG8N');
            `,
          }}
        />

        <Script
          id="meta-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];
              t=b.createElement(e);
              t.async=!0;
              t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
              }(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '928497252987739');
              fbq('track', 'PageView');

              async function sha256(v) {
                const d = new TextEncoder().encode(v.trim().toLowerCase());
                const h = await crypto.subtle.digest('SHA-256', d);
                return Array.from(new Uint8Array(h))
                  .map(b => b.toString(16).padStart(2,'0'))
                  .join('');
              }

              window.fbqIdentify = async function(email, name, phone) {
                const [fn, ...ln] = name.trim().split(' ');
                const ud = {};

                if (email) ud.em = await sha256(email);
                if (fn) ud.fn = await sha256(fn);
                if (ln.length) ud.ln = await sha256(ln.join(' '));
                if (phone) ud.ph = await sha256(phone.replace(/\\D/g,''));

                fbq('init', '928497252987739', ud);
                fbq('track', 'Lead');
              };
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P5SSHG8N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
