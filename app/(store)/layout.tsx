import Footer from "../../components/ui/Footer";
import MainNav from "../../components/ui/MainNav";

export default function RootLayout({children} : Readonly<{ children: React.ReactNode;  }>) {
  return (
    <div className="min-h-screen flex flex-col color-bg">
      <MainNav />
        <main className="flex-grow">
          {children}
        </main>
      <Footer />
    </div>
  )
}
