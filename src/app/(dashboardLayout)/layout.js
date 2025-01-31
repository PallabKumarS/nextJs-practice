import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="ml-16 lg:ml-64">
        <Navbar />
      </div>
      <Sidebar />
      <main className="lg:ml-64 p-4 h-screen">{children}</main>
      <div className="lg:ml-64">
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
