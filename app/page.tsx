import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Banner from "@/components/Banner";
import CategoryCards from "@/components/CategoryCards";
import ProductCards from "@/components/ProductCards";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Banner />
      <CategoryCards />
      <ProductCards />
      <Footer />
    </>
  );
}