import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#3d342d]">

      {/* ================= HERO ================= */}
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#718b63]">
              Our Story
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Where every cup has a{" "}
              <span className="text-[#718b63]">story.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#766b62]">
              Bloom & Brew started with a simple idea — create a warm,
              welcoming place where people could slow down, enjoy good
              coffee, and make beautiful memories.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-[#81766c]">
              From carefully selected coffee beans to freshly baked
              pastries, we put love and attention into everything we serve.
              Our café is more than a place to grab a drink. It's a little
              escape from the rush of everyday life.
            </p>

            <Link
              to="/menu"
              className="mt-8 inline-block rounded-full bg-[#718b63] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#718b63]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#607952]"
            >
              Explore Our Menu →
            </Link>
          </div>

          {/* Image */}
          <div className="relative">

            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-[#dce8d5]"></div>

            <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=80"
                alt="Bloom and Brew cafe"
                className="h-[480px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white px-6 py-4 shadow-xl">
              <p className="text-2xl font-bold text-[#718b63]">2018</p>
              <p className="text-sm text-[#81766c]">
                Our journey began
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= OUR VALUES ================= */}
      <section className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#718b63]">
              What We Believe
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#3d342d]">
              Simple things, done beautifully.
            </h2>

            <p className="mt-4 leading-7 text-[#7b7067]">
              Our values shape everything from the coffee we brew to the
              way we welcome our guests.
            </p>
          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Value 1 */}
            <div className="rounded-3xl bg-[#faf8f3] p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e8f0e3] text-3xl">
                ☕
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Quality First
              </h3>

              <p className="mt-3 leading-7 text-[#7b7067]">
                We carefully select our ingredients and coffee beans
                because every little detail matters.
              </p>

            </div>


            {/* Value 2 */}
            <div className="rounded-3xl bg-[#faf8f3] p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f0e5d8] text-3xl">
                ❤️
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Made With Love
              </h3>

              <p className="mt-3 leading-7 text-[#7b7067]">
                From our kitchen to your table, everything is prepared
                with genuine care and passion.
              </p>

            </div>


            {/* Value 3 */}
            <div className="rounded-3xl bg-[#faf8f3] p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e8f0e3] text-3xl">
                🌿
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Feel At Home
              </h3>

              <p className="mt-3 leading-7 text-[#7b7067]">
                We want every guest to feel comfortable, welcomed,
                and completely at home.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= EXPERIENCE SECTION ================= */}
      <section className="bg-[#edf3e9] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* Image */}
          <div className="relative order-2 md:order-1">

            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-[#ead9c5]"></div>

            <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMqkmnLEZTK8bQ9XAfvUqR834bCGnAig5wtwbeVl_xA&s=10"
                alt="Cozy cafe interior"
                className="h-[430px] w-full object-cover"
              />
            </div>

          </div>


          {/* Content */}
          <div className="order-1 md:order-2">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#718b63]">
              The Bloom & Brew Experience
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Come for the coffee.
              <br />
              Stay for the feeling.
            </h2>

            <p className="mt-6 leading-7 text-[#71675f]">
              Whether you're catching up with a friend, working on your
              next big idea, enjoying a quiet morning, or simply treating
              yourself, Bloom & Brew is designed to make your day a little
              better.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold">
                    Freshly prepared
                  </h3>

                  <p className="mt-1 text-sm text-[#81766c]">
                    Our food and drinks are prepared fresh throughout
                    the day.
                  </p>
                </div>
              </div>


              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold">
                    A peaceful atmosphere
                  </h3>

                  <p className="mt-1 text-sm text-[#81766c]">
                    Relax in a cozy environment designed for good
                    conversations and quiet moments.
                  </p>
                </div>
              </div>


              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold">
                    Something for everyone
                  </h3>

                  <p className="mt-1 text-sm text-[#81766c]">
                    From morning coffee to evening desserts, there's
                    always something worth trying.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="bg-white px-6 py-16 md:px-10">

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center md:grid-cols-4">

          <div>
            <h3 className="text-4xl font-bold text-[#718b63]">
              8+
            </h3>
            <p className="mt-2 text-sm text-[#81766c]">
              Years of Experience
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#718b63]">
              20+
            </h3>
            <p className="mt-2 text-sm text-[#81766c]">
              Menu Items
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#718b63]">
              5K+
            </h3>
            <p className="mt-2 text-sm text-[#81766c]">
              Happy Guests
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#718b63]">
              4.9
            </h3>
            <p className="mt-2 text-sm text-[#81766c]">
              Average Rating
            </p>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 py-16 md:px-10">

        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#718b63] px-8 py-14 text-center text-white shadow-xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8f0e3]">
            We'd love to see you
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Make your next coffee break special.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#e8f0e3]">
            Find your favorite corner, order something delicious,
            and enjoy the Bloom & Brew experience.
          </p>

          <Link
            to="/reservations"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-bold text-[#607952] shadow-lg transition duration-300 hover:-translate-y-1"
          >
            Book a Table
          </Link>

        </div>

      </section>

    </div>
  );
};

export default About;
