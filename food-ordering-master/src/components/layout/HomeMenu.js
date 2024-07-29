"use client";
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeMenu() {
  const [bestSellers, setBestSellers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => {
        setBestSellers(menuItems.slice(-3));
      });
    });
  }, []);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={"/sallad1.png"} width={109} height={189} alt={"sallad"} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={"/sallad2.png"} width={107} height={195} alt={"sallad"} />
        </div>
      </div>
      <div className="text-center">
        <h3 className="uppercase text-gray-500 font-semibold leading-4">
          Check out
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
      </div>
      {/* //DO YOU WANT HEADING H1 CALL SECTIONHEADER */}
      <div className="text-center mb-4">
        <SectionHeaders mainHeader={"Our Best Sellers"} />
      </div>

      <div className="grid grid-cols-3 gap-5">
        {bestSellers?.length > 0 &&
          bestSellers.map((item) => (
            <MenuItem key={item._id} {...item} onAddToCart={handleAddToCart} />
          ))}
          {/* //EVERY MEANU ITEM GIVES DIV STRACTURE  */}
        <MenuItem
          image="/D2.png"
          name="Guilin Rice Noodles"
          description="One of the most famous and popular local street foods in Guilin, Guangxi province."
          price={1499}
          onAddToCart={handleAddToCart}
        />
        <MenuItem
          image="/D1.png"
          name="Dumplings"
          description="Dumpling is a broad class of dishes that consist of pieces of cooked dough often wrapped."
          price={1299}
          onAddToCart={handleAddToCart}
        />
        <MenuItem
          image="/D3.png"
          name="Margherita"
          description="Classic Margherita pizza with fresh basil and mozzarella with dried chili peppers."
          price={499}
          onAddToCart={handleAddToCart}
        />
        <MenuItem
          image="/D4.png"
          name="Kung Pao Chicken"
          description="Kung pao chicken is Chinese-style stir-fried chicken cubes with dried chili peppers."
          price={799}
          onAddToCart={handleAddToCart}
        />
        <MenuItem
          image="/D5.png"
          name="Sweet and Sour Pork"
          description="While sweet and sour can be found in diverse forms in China with dried chili peppers."
          price={999}
          onAddToCart={handleAddToCart}
        />
        <MenuItem
          image="/D6.png"
          name="Spring Rolls"
          description="Sauteed vegetables and noodles are sauteed and stuffed inside a rice based spring roll wrapper."
          price={1299}
          onAddToCart={handleAddToCart}
        />
        <MenuItem
          image="/D1.png"
          name="Chow Mein"
          description="Chow mein is a Chinese dish of stir-fried noodles with vegetables, and sometimes meat or tofu, seasoned with soy sauce, aromatics, and spices."
          price={599}
          onAddToCart={handleAddToCart}
        />
        <MenuItem
          image="/D8.png"
          name="Chopstick Charmer"
          description="To handle our food we had forks and chopsticks, and each guest had a small saucer of soy, or vinegar, at his right hand. We ate with chopsticks."
          price={999}
          onAddToCart={handleAddToCart}
        />
        <MenuItem
          image="/pizza.png"
          name="Great Wall Grill"
          description="Classic Margh with forks and chopsticks fresh basil and mozzarella stuffed inside a rice based spring roll wrapper."
          price={1299}
          onAddToCart={handleAddToCart}
        />
        {/* Add more MenuItem components with different props as needed */}
      </div>
    </section>
  );
}

