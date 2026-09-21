import React, { useState } from "react";
import { Link } from "react-router-dom";

const galleryItems = [
  {
    id: 1,
    category: "Cafe",
    title: "Cozy Corner",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    category: "Coffee",
    title: "Morning Coffee",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    category: "Food",
    title: "Fresh Breakfast",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    category: "Cafe",
    title: "Warm Atmosphere",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    category: "Desserts",
    title: "Sweet Moments",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    category: "Coffee",
    title: "Latte Art",
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    category: "Food",
    title: "Fresh & Delicious",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    category: "Desserts",
    title: "Chocolate Treat",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    category: "Cafe",
    title: "Bloom & Brew",
    image:
      "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1200&q=80",
  },
];

const categories = ["All", "Cafe", "Coffee", "Food", "Desserts"];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="bg-[#faf8f3] text-[#3d342d]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#edf3e9]">

        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#dce8d5] opacity-70"></div>

        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#eadbc9] opacity-70"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center md:py-28">

          <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#718b63] shadow-sm">
            A Look Inside
          </span>

          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Our{" "}
            <span className="text-[#718b63]">Gallery</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#74695f] md:text-base">
            Take a little tour through Bloom & Brew — where beautiful moments,
            delicious food and warm coffee come together.
          </p>

        </div>
      </section>

      {/* ================= FILTER ================= */}
      <section className="px-6 pt-12">

        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#718b63] text-white shadow-md"
                  : "border border-[#dfd6cb] bg-white text-[#66594f] hover:border-[#718b63] hover:text-[#718b63]"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </section>

      {/* ================= GALLERY ================= */}
      <section className="mx-auto max-w-7xl px-6 py-14">

        <div className="mb-10 flex items-end justify-between">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#718b63]">
              Moments
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {activeCategory === "All"
                ? "Inside Bloom & Brew"
                : activeCategory}
            </h2>
          </div>

          <span className="hidden rounded-full bg-[#f0e5d8] px-4 py-2 text-sm text-[#715e4e] sm:block">
            {filteredItems.length} Photos
          </span>

        </div>

        {/* Masonry-style Grid */}
        <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {filteredItems.map((item, index) => (

            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl ${
                index === 0 || index === 5
                  ? "sm:row-span-2"
                  : ""
              }`}
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f2924]/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-5 p-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#718b63] backdrop-blur-sm">
                  {item.category}
                </span>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-16">

        <div className="grid overflow-hidden rounded-[2rem] bg-[#e8efe3] md:grid-cols-2">

          {/* Image */}
          <div className="min-h-[320px]">

            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80"
              alt="Bloom and Brew cafe"
              className="h-full w-full object-cover"
            />

          </div>

          {/* Content */}
          <div className="flex items-center p-8 md:p-14">

            <div>

              <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#718b63]">
                Your Happy Place
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
                More than coffee.
                <br />
                It's an experience.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#756b62]">
                Whether you're catching up with friends, working quietly,
                enjoying breakfast or simply taking a break, Bloom & Brew is
                designed to make ordinary moments feel special.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex rounded-full bg-[#718b63] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5f7854] hover:shadow-lg"
              >
                Discover Our Story
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-4xl rounded-3xl bg-[#f0e5d8] px-6 py-12 text-center md:px-10">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#718b63]">
            Come Visit Us
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Your next favorite memory starts here.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#75685d]">
            Grab your favorite drink, bring your favorite people and make
            yourself at home.
          </p>

          <Link
            to="/reservations"
            className="mt-6 inline-block rounded-full bg-[#718b63] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#5f7854]"
          >
            Reserve a Table
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Gallery;