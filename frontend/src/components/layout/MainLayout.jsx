import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";


export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
