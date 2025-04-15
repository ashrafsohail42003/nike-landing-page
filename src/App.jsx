import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import {
  Hero,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  CustomerReviews,
  Footer,
} from "./sections";


// الصفحة الجديدة
import ShopNow from "./pages/ShopNow";

// صفحة الهوم مجمعة
const Home = () => {
  return (
    <main className="relative">
      <Nav />

      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding-x py-10">
        <Services />
      </section>

      <section className="padding">
        <SpecialOffer />
      </section>

      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>

      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shopnow" element={<ShopNow />} />
    </Routes>
  );
};

export default App;
