import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body content="width=device-width, initial-scale=1.0">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
