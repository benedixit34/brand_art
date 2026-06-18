import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";




import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import ContactButton from "@/components/ContactButton";

config.autoAddCss = false


const filson = localFont({
  src: [
    {
      path: './fonts/FilsonProBook.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/FilsonProRegular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/FilsonProMedium.otf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/FilsonProBold.otf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-filson'
})

export const metadata: Metadata = {
  title: "Brand Arts & Communications",
  description: "Insight-led branding, strategy, and creative campaigns that capture cultural nuance and inspire action. Explore our case studie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${filson.variable}`}>
      <body className={filson.className}>
       
 
          <Header />
      
          {children}
        
          <Footer />
          <ContactButton />
       
        
      </body>
    </html>
  );
}