import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import ReduxProvider from "@/components/redux";
import Snackbar from "@/components/SnackBar";
import AuthProvider from "@/providers/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body content="width=device-width, initial-scale=1.0">
        <ReduxProvider>
          <AuthProvider>
            <Header />
            <Snackbar />
            {children}
            <Footer />
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
