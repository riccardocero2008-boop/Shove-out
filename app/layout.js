import Script from "next/script";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'SHOVE — Shrinking Arena Sumo Duel',
  description: 'SHOVE — a shrinking arena sumo duel game.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
  <Script
  src="https://quge5.com/88/tag.min.js"
  data-zone="256282"
  data-cfasync="false"
  strategy="afterInteractive"
/>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
