import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100','300','400','500','700','900'],
  style: ['normal','italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "AIR MAX Pneumatic sas",
  description: "AIR MAX Pneumatic sas repuestos",
  keywords: ["AIR MAX", "Pneumatic", "Repuestos", "Empresa", "Accesorios"],
  authors: [
    { name: "AIR MAX Pneumatic sas", url: "https://www.airmaxpneumaticsas.com" }
  ],
  openGraph: {
    title: "AIR MAX Pneumatic sas",
    description: "AIR MAX Pneumatic repuestos",
    url: "https://www.airmaxpneumaticsas.com",
    siteName: "AIR MAX Pneumatic",
    images: [
      {
        url: "/MainLogo.png",
        width: 800,
        height: 600,
        alt: "AIR MAX Pneumatic Logo"
      }
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIR MAX Pneumatic sas",
    description: "AIR MAX Pneumatic repuestos",
    images: ["/MainLogo.png"],
  },
  icons: {
    icon: "/MainLogo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${roboto.className} bg-gray-200`}>
        {children}
      </body>
    </html>
  );
}
