import React, { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    name: "Classic Cappuccino",
    category: "Coffee",
    price: "$4.50",
    description: "Rich espresso topped with smooth steamed milk foam.",
    image:
      "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Caramel Latte",
    category: "Coffee",
    price: "$5.25",
    description: "Creamy latte with a sweet touch of caramel.",
    image:
      "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Iced Coffee",
    category: "Coffee",
    price: "$4.75",
    description: "Chilled coffee served over ice with fresh milk.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Avocado Toast",
    category: "Breakfast",
    price: "$7.50",
    description: "Fresh avocado on toasted sourdough with herbs.",
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "French Toast",
    category: "Breakfast",
    price: "$8.25",
    description: "Golden brioche toast served with berries and honey.",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Breakfast Croissant",
    category: "Breakfast",
    price: "$6.50",
    description: "Buttery croissant filled with egg and fresh greens.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "Butter Croissant",
    category: "Bakery",
    price: "$3.50",
    description: "Flaky, buttery and freshly baked every morning.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "Cinnamon Roll",
    category: "Bakery",
    price: "$4.25",
    description: "Soft cinnamon roll finished with a creamy glaze.",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    name: "Chocolate Cake",
    category: "Desserts",
    price: "$6.00",
    description: "Moist chocolate cake with silky chocolate cream.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    name: "Strawberry Cheesecake",
    category: "Desserts",
    price: "$6.50",
    description: "Creamy cheesecake topped with fresh strawberries.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 11,
    name: "Chocolate Brownie",
    category: "Desserts",
    price: "$4.75",
    description: "Warm chocolate brownie with a soft fudgy center.",
    image:
      "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 12,
    name: "Berry Pancakes",
    category: "Breakfast",
    price: "$8.50",
    description: "Fluffy pancakes with berries, cream and maple syrup.",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80",
  },
];

const categories = ["All", "Coffee", "Breakfast", "Bakery", "Desserts"];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <main className="bg-[#faf8f3] text-[#3d342d]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#edf3e9]">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#dfe9d8] opacity-70"></div>
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#eadbc9] opacity-60"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center md:py-28">

          <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#718b63] shadow-sm">
            Freshly Made For You
          </span>

          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-[#3d342d] md:text-6xl">
            Our Delicious{" "}
            <span className="text-[#718b63]">Menu</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#74695f] md:text-base">
            From freshly brewed coffee to delicious breakfast and homemade
            desserts, there is something special waiting for everyone.
          </p>
        </div>
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <section className="px-6 pt-12">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#718b63] text-white shadow-md shadow-[#718b63]/20"
                  : "border border-[#dfd6cb] bg-white text-[#66594f] hover:border-[#718b63] hover:text-[#718b63]"
              }`}
            >
              {category}
            </button>
          ))}

        </div>
      </section>

      {/* ================= MENU CARDS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-14">

        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#718b63]">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#3d342d]">
              {activeCategory === "All"
                ? "Our Favorites"
                : activeCategory}
            </h2>
          </div>

          <span className="hidden rounded-full bg-[#f0e5d8] px-4 py-2 text-sm text-[#715e4e] sm:block">
            {filteredItems.length} Items
          </span>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-[#e9e1d7] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative h-60 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#718b63] backdrop-blur-sm">
                  {item.category}
                </div>

                <div className="absolute bottom-4 right-4 rounded-full bg-[#718b63] px-4 py-2 text-sm font-bold text-white shadow-lg">
                  {item.price}
                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-[#3d342d] transition-colors group-hover:text-[#718b63]">
                  {item.name}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-[#82776d]">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center justify-between">

                  <span className="text-sm font-medium text-[#a08f7f]">
                    Fresh & Homemade
                  </span>

                  <button className="rounded-full bg-[#f0e5d8] px-4 py-2 text-xs font-bold text-[#665447] transition hover:bg-[#718b63] hover:text-white">
                    Add to Order
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= CHEF SPECIAL ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-16">

        <div className="overflow-hidden rounded-[2rem] bg-[#e8efe3]">

          <div className="grid items-center md:grid-cols-2">

            <div className="p-8 md:p-14">

              <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#718b63]">
                Chef's Special
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-[#3d342d] md:text-4xl">
                A little sweetness makes every day better.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#756b62]">
                Enjoy our freshly prepared desserts and handcrafted drinks,
                made with quality ingredients and lots of love.
              </p>

              <Link
                to="/reservations"
                className="mt-7 inline-flex rounded-full bg-[#718b63] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5f7854] hover:shadow-lg"
              >
                Reserve a Table
              </Link>

            </div>

            <div className="h-72 md:h-full md:min-h-[390px]">

              <img
                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80"
                alt="Cafe dessert"
                className="h-full w-full object-cover"
              />

            </div>

          </div>
        </div>

      </section>

      {}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-4xl rounded-3xl bg-[#f0e5d8] px-6 py-12 text-center md:px-10">

          <h2 className="text-3xl font-bold text-[#3d342d]">
            Ready for your next coffee break?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#75685d]">
            Come visit Bloom & Brew and enjoy your favorite coffee, food and
            desserts in a cozy atmosphere.
          </p>

          <Link
            to="/reservations"
            className="mt-6 inline-block rounded-full bg-[#718b63] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#5f7854]"
          >
            Book Your Table
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Menu;