// 







// import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";
 

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "DashCart - Modern eCommerce Dashboard",
//   description: "A sleek dashboard for eCommerce analytics",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-gray-50">
        <div className="flex min-h-screen">
           <Sidebar />
            <div className="flex-1">
            <DashboardHeader/>
             <main className="p-4 lg:p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
