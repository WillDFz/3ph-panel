'use client'
import Header from "@/components/UI/Header";
import "./globals.scss";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isLoginPage = pathname === "/auth/login";

  return (
    <html lang="en">
      <body className="h-screen">
        {!isLoginPage &&
          <Header />}
        {children}
      </body>
    </html>
  );
}
