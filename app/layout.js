import AddToCartContextProvider from "@/context/AddToCartContext";
import MainLayout from "./components/MainLayout";
import "./globals.css";

export const metadata = {
  title: "E-commerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 p-0 scroll-smooth">
        <AddToCartContextProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </AddToCartContextProvider>
      </body>
    </html>
  );
}
