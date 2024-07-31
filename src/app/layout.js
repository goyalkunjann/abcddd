import { Poppins } from "next/font/google";
import Script from 'next/script';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { Header } from "./component/Header/Header";
import { Footer } from "./component/Footer/Footer";
import UiProvider from "./store/UiProvider";
import { Wrapper } from "./Wrapper/Wrapper";

const poppinsFont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  console.log("TESTING");
  return (
    <html lang="en">
      <head>
        <title>House Banao - Best Interior Designer & Construction Company</title>
        <link rel="icon" href="/favicon/housebanao.ico" sizes="any" />
        <meta name="title" content="House Banao - Best Interior Designer & Construction Company" />
        <meta
          name="description"
          content="House Banao is the best interior designers & construction company in India, which provides house interiors, office interiors, commercial interior and residential interiors and other services such as house renovation. With a team of expert engineers, planners, architects and designers."
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DXVWWZQ0NL"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DXVWWZQ0NL');
            `,
          }}
          strategy="afterInteractive"
        />
        <Script
          id="gtm"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PKHCSZWC');
            `,
          }}
          strategy="afterInteractive"
        />
      </head>
      <body className={poppinsFont?.className || "fallback-class"}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKHCSZWC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <UiProvider>
          <Wrapper>{children}</Wrapper>
        </UiProvider>
      </body>
    </html>
  );
}
