import Sidebar from "@/components/sidebar";
import Header from "@/components/main-header";

export default function MainLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <Header />
      <div className="flex-1 p-4 pt-20">{children}</div>
    </div>
  );
}
