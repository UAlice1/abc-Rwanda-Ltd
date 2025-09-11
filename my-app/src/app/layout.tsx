import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";



export const metadata = {
  title: "abc usher event",
  description: "Company website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
     
        <Navbar />

   
        <main className="p-6">{children}
        
        </main>

    
        <Footer />
        
      </body>
    </html>
  );
}