import Hero from "@/components/hero/page";
import Products from "@/components/product/page";
import Footer from "@/components/footer/page";

const Home = () => {
  return (
    <div>
      <Hero/>
      <div className="lg:px-40 sm:p-5">
        <Products/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
