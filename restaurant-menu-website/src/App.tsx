import Header from "./components/Header";
import CategoryNav from "./components/CategoryNav";
import MenuSection from "./components/MenuSection";
import Footer from "./components/Footer";
import { menuData } from "./data/menu";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Header />
      <CategoryNav />
      <main>
        {menuData.map((category, index) => (
          <MenuSection key={category.id} category={category} index={index} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
