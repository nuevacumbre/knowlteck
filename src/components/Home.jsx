import axios from "axios";
import React, { useEffect, useState } from "react";
import FeaturedTitle from "./FeaturedTitle";
import ProductList from "./ProductList";
import Slider from "./Slider";
import bannerleft from "../assets/banner_left.png";
import bannerright from "../assets/banner_right.png";

export default function Home() {
  const [ladiesShoes, setLadiesShoes] = useState([]);
  const [gentsShoes, setGentsShoes] = useState([]);
  const [smartWatches, setSmartWatches] = useState([]);

  const fetchFeaturedProducts = async () => {
    const { data } = await axios.get("http://localhost:4545/featured");
    const { ladiesShoes, gentsShoes, watches } = data.products;
    setGentsShoes(gentsShoes);
    setLadiesShoes(ladiesShoes);
    setSmartWatches(watches);
  };

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  return (
    <>
      <Slider />
      <div className="xl:px-0 px-2 ">
        <FeaturedTitle className="py-3" text="Nuestros Productos en Promoción" />
        <div className="sm:flex justify-between items-center sm:space-x-5 space-x-0 sm:space-y-0 space-y-3">
          <div className="sm:w-2/4">
            <div className="aspect-w-16 aspect-h-9">
              <img src={bannerleft} alt="" />
            </div>
          </div>
          <div className="sm:w-2/4">
            <div className="aspect-w-16 aspect-h-9" style={{float:'right'}}>
              <img src={bannerright} alt=""/>
            </div>
          </div>
        </div>
      </div>

<div>
      <ProductList heading="Smart Watches" data={smartWatches} />
      <ProductList heading="Ladies Shoes" data={ladiesShoes} />
      <ProductList heading="Gents Shoes" data={gentsShoes} />
</div>
      <div className="bg-red"
      loading="lazy"
      data-mc-src="7c18a1ee-2e56-44f6-8f06-ecc0f806abb6#instagram">xxx</div>
            
    <script 
      src="https://cdn2.woxo.tech/a.js#62734f8716a8010028d8f021" 
      async data-usrc>
    </script>

    </>
  );
}