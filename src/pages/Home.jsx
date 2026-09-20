import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#3d342d]">
      {}
      <section className="relative overflow-hidden">
        {}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#dce8d5] opacity-70"></div>
        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#ead9c5] opacity-60"></div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:py-24">
          {}
          <div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#e8f0e3] px-4 py-2 text-sm font-medium text-[#5c7551]">
              <span>☕</span>
              Freshly brewed every day
            </div>

            <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight text-[#3d342d] sm:text-6xl">
              A little cup of{" "}
              <span className="text-[#718b63]">happiness</span>{" "}
              in every sip.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#766b62]">
              Welcome to Bloom & Brew — a cozy place where handcrafted coffee,
              freshly baked treats, and beautiful moments come together.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/menu"
                className="rounded-full bg-[#718b63] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#718b63]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#5f7953]"
              >
                Explore Our Menu →
              </Link>

              <Link
                to="/reservations"
                className="rounded-full border border-[#cdbda9] bg-white px-7 py-3.5 font-semibold text-[#5c5148] transition duration-300 hover:-translate-y-1 hover:bg-[#f4eee6]"
              >
                Book a Table
              </Link>

            </div>

            {}
            <div className="mt-10 flex flex-wrap gap-8">

              <div>
                <h3 className="text-2xl font-bold text-[#4d4037]">4.9★</h3>
                <p className="text-sm text-[#887c72]">Customer Rating</p>
              </div>

              <div className="h-10 w-px bg-[#d8cbbb]"></div>

              <div>
                <h3 className="text-2xl font-bold text-[#4d4037]">20+</h3>
                <p className="text-sm text-[#887c72]">Fresh Items</p>
              </div>

              <div className="h-10 w-px bg-[#d8cbbb]"></div>

              <div>
                <h3 className="text-2xl font-bold text-[#4d4037]">5k+</h3>
                <p className="text-sm text-[#887c72]">Happy Guests</p>
              </div>

            </div>
          </div>

          {}
          <div className="relative">

            <div className="absolute -inset-4 rounded-[2.5rem] bg-[#dfe9d8] opacity-60 blur-2xl"></div>

            <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80"
                alt="Fresh coffee"
                className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
              />

              {}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-md">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-[#887c72]">
                      Today's favorite
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-[#453a32]">
                      Caramel Latte
                    </h3>
                  </div>

                  <span className="rounded-full bg-[#e8f0e3] px-4 py-2 font-bold text-[#66805b]">
                    Rs. 650
                  </span>

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>
      {}
      <section className="bg-white px-6 py-20 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="font-semibold uppercase tracking-[0.2em] text-[#718b63]">
              Our Favorites
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#3d342d]">
              Made with love, served with warmth.
            </h2>

            <p className="mt-4 leading-7 text-[#7b7067]">
              From your morning coffee to an afternoon sweet treat,
              discover something delicious at Bloom & Brew.
            </p>

          </div>


          {/* Cards */}
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}
            <div className="group overflow-hidden rounded-3xl bg-[#faf8f3] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80"
                  alt="Coffee"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">

                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Signature Coffee</h3>

                  <span className="font-bold text-[#718b63]">
                    Rs. 550
                  </span>
                </div>

                <p className="mt-3 leading-6 text-[#7b7067]">
                  Rich espresso blended with smooth steamed milk.
                </p>

              </div>
            </div>


            {/* Card 2 */}
            <div className="group overflow-hidden rounded-3xl bg-[#faf8f3] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
                  alt="Chocolate cake"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">

                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Chocolate Cake</h3>

                  <span className="font-bold text-[#718b63]">
                    Rs. 750
                  </span>
                </div>

                <p className="mt-3 leading-6 text-[#7b7067]">
                  Soft, rich chocolate cake with creamy layers.
                </p>

              </div>
            </div>


            {/* Card 3 */}
            <div className="group overflow-hidden rounded-3xl bg-[#faf8f3] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80"
                  alt="Donuts"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">

                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Fresh Donuts</h3>

                  <span className="font-bold text-[#718b63]">
                    Rs. 350
                  </span>
                </div>

                <p className="mt-3 leading-6 text-[#7b7067]">
                  Freshly baked donuts with delicious toppings.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>
      {}
      <section className="bg-[#edf3e9] px-6 py-20 md:px-10">

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>

            <p className="font-semibold uppercase tracking-[0.2em] text-[#718b63]">
              Why Bloom & Brew?
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-[#3d342d]">
              More than coffee.
              <br />
              It's a feeling.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#71675f]">
              We believe good coffee tastes even better when shared with
              good people. That's why every cup and every plate is prepared
              with care.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-block rounded-full bg-[#3d342d] px-6 py-3 font-semibold text-white transition hover:bg-[#574a40]"
            >
              Discover Our Story →
            </Link>

          </div>


          <div className="grid grid-cols-2 gap-5">

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-3xl">☕</div>
              <h3 className="mt-4 text-lg font-bold">Fresh Coffee</h3>
              <p className="mt-2 text-sm leading-6 text-[#81766c]">
                Premium beans, freshly brewed.
              </p>
            </div>

            <div className="mt-8 rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-3xl">🥐</div>
              <h3 className="mt-4 text-lg font-bold">Fresh Bakery</h3>
              <p className="mt-2 text-sm leading-6 text-[#81766c]">
                Baked fresh every morning.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-3xl">🌿</div>
              <h3 className="mt-4 text-lg font-bold">Cozy Space</h3>
              <p className="mt-2 text-sm leading-6 text-[#81766c]">
                A peaceful place to relax.
              </p>
            </div>

            <div className="mt-8 rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-3xl">❤️</div>
              <h3 className="mt-4 text-lg font-bold">Made With Love</h3>
              <p className="mt-2 text-sm leading-6 text-[#81766c]">
                Every detail matters to us.
              </p>
            </div>

          </div>

        </div>
      </section>
      {}
      <section className="px-6 py-20 md:px-10">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#718b63] px-8 py-14 text-center text-white shadow-xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e6efdf]">
            Your table is waiting
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Ready for your next favorite coffee?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#e8f0e3]">
            Come by, grab your favorite drink, and make yourself at home.
          </p>

          <Link
            to="/reservations"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-bold text-[#5f7953] shadow-lg transition duration-300 hover:-translate-y-1"
          >
            Reserve Your Table
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Home;
