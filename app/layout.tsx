import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-inter'
});
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'НейроСтиль — AI фотосессии за секунды',
  description: 'Создавайте стильные профессиональные фото для соцсетей, сайтов и рекламы с помощью нейросети. Экономьте на студиях и фотографах. Первая фотка бесплатно!',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>


        {/* --- НАЧАЛО ЯНДЕКС МЕТРИКИ --- */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108457993', 'ym');

            ym(108457993, 'init', {
                ssr: true,
                webvisor: true,
                clickmap: true,
                ecommerce: "dataLayer",
                accurateTrackBounce: true,
                trackLinks: true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img 
              src="https://mc.yandex.ru/watch/108457993" 
              style={{ position: "absolute", left: "-9999px" }} 
              alt="" 
            />
          </div>
        </noscript>
        {/* --- КОНЕЦ ЯНДЕКС МЕТРИКИ --- */}

        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
