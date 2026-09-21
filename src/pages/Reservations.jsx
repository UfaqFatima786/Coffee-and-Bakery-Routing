import React, { useState } from "react";
import { Link } from "react-router-dom";

function Reservations() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      message: "",
    });
  };

  return (
    <main className="bg-[#faf8f3] text-[#3d342d]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#edf3e9]">

        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#dce8d5] opacity-70"></div>

        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#eadbc9] opacity-70"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center md:py-28">

          <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#718b63] shadow-sm">
            Your Table Awaits
          </span>

          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Reserve Your{" "}
            <span className="text-[#718b63]">Table</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#74695f] md:text-base">
            Planning a coffee date, family breakfast or a relaxing evening?
            Reserve your favorite spot at Bloom & Brew.
          </p>

        </div>
      </section>

      {/* ================= RESERVATION AREA ================= */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* ================= LEFT INFO ================= */}
          <div className="flex flex-col gap-6">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#718b63]">
                Make It Special
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                A cozy table is waiting for you.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#756b62]">
                Tell us when you'd like to visit and we'll get your table
                ready. Whether it's breakfast with friends or a quiet coffee,
                we're happy to have you.
              </p>
            </div>

            {/* Opening Hours */}
            <div className="rounded-3xl bg-[#e8efe3] p-7">

              <div className="mb-5 flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
                  🕐
                </div>

                <div>
                  <h3 className="font-bold text-[#3d342d]">
                    Opening Hours
                  </h3>

                  <p className="text-xs text-[#7c7167]">
                    We're ready to welcome you
                  </p>
                </div>

              </div>

              <div className="space-y-3 text-sm">

                <div className="flex justify-between border-b border-[#d3dfcc] pb-3">
                  <span className="text-[#756b62]">
                    Monday - Friday
                  </span>

                  <span className="font-semibold text-[#3d342d]">
                    8:00 AM - 10:00 PM
                  </span>
                </div>

                <div className="flex justify-between border-b border-[#d3dfcc] pb-3">
                  <span className="text-[#756b62]">
                    Saturday
                  </span>

                  <span className="font-semibold text-[#3d342d]">
                    9:00 AM - 11:00 PM
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#756b62]">
                    Sunday
                  </span>

                  <span className="font-semibold text-[#3d342d]">
                    9:00 AM - 9:00 PM
                  </span>
                </div>

              </div>

            </div>

            {/* Contact Card */}
            <div className="rounded-3xl bg-[#f0e5d8] p-7">

              <h3 className="text-lg font-bold">
                Need help?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#756b62]">
                Have a special request or planning a larger gathering? Get in
                touch with our team.
              </p>

              <div className="mt-5 space-y-3 text-sm">

                <p className="flex items-center gap-3">
                  <span>📞</span>
                  <span>+92 300 1234567</span>
                </p>

                <p className="flex items-center gap-3">
                  <span>✉️</span>
                  <span>hello@bloomandbrew.com</span>
                </p>

              </div>

            </div>

          </div>

          {/* ================= FORM ================= */}
          <div className="rounded-[2rem] border border-[#e9e1d7] bg-white p-6 shadow-sm md:p-9">

            {submitted ? (
              /* ================= SUCCESS ================= */
              <div className="flex min-h-[560px] flex-col items-center justify-center text-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e8f1e4] text-4xl">
                  ✓
                </div>

                <h2 className="mt-6 text-3xl font-bold">
                  Reservation Request Sent!
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#756b62]">
                  Thank you for choosing Bloom & Brew. Your reservation request
                  has been received. Our team will contact you shortly to
                  confirm your table.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full bg-[#718b63] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#5f7854]"
                >
                  Make Another Reservation
                </button>

              </div>
            ) : (
              <>
                <div className="mb-8">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#718b63]">
                    Reservation Form
                  </p>

                  <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                    Book your table
                  </h2>

                  <p className="mt-2 text-sm text-[#82776d]">
                    Please fill in the details below.
                  </p>

                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name + Email */}
                  <div className="grid gap-5 md:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full rounded-xl border border-[#ddd5cb] bg-[#faf8f3] px-4 py-3 text-sm outline-none transition placeholder:text-[#aaa096] focus:border-[#718b63] focus:ring-2 focus:ring-[#718b63]/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="w-full rounded-xl border border-[#ddd5cb] bg-[#faf8f3] px-4 py-3 text-sm outline-none transition placeholder:text-[#aaa096] focus:border-[#718b63] focus:ring-2 focus:ring-[#718b63]/10"
                      />
                    </div>

                  </div>

                  {/* Phone + Guests */}
                  <div className="grid gap-5 md:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 1234567"
                        required
                        className="w-full rounded-xl border border-[#ddd5cb] bg-[#faf8f3] px-4 py-3 text-sm outline-none transition placeholder:text-[#aaa096] focus:border-[#718b63] focus:ring-2 focus:ring-[#718b63]/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Number of Guests
                      </label>

                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#ddd5cb] bg-[#faf8f3] px-4 py-3 text-sm outline-none transition focus:border-[#718b63] focus:ring-2 focus:ring-[#718b63]/10"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="7">7 Guests</option>
                        <option value="8">8+ Guests</option>
                      </select>
                    </div>

                  </div>

                  {/* Date + Time */}
                  <div className="grid gap-5 md:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Date
                      </label>

                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-[#ddd5cb] bg-[#faf8f3] px-4 py-3 text-sm outline-none transition focus:border-[#718b63] focus:ring-2 focus:ring-[#718b63]/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Preferred Time
                      </label>

                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-[#ddd5cb] bg-[#faf8f3] px-4 py-3 text-sm outline-none transition focus:border-[#718b63] focus:ring-2 focus:ring-[#718b63]/10"
                      >
                        <option value="">Select time</option>
                        <option value="08:00 AM">08:00 AM</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                        <option value="07:00 PM">07:00 PM</option>
                        <option value="08:00 PM">08:00 PM</option>
                        <option value="09:00 PM">09:00 PM</option>
                      </select>
                    </div>

                  </div>

                  {/* Special Request */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Special Request
                      <span className="ml-1 font-normal text-[#a49a91]">
                        (Optional)
                      </span>
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Birthday celebration, window seat, dietary requirements..."
                      className="w-full resize-none rounded-xl border border-[#ddd5cb] bg-[#faf8f3] px-4 py-3 text-sm outline-none transition placeholder:text-[#aaa096] focus:border-[#718b63] focus:ring-2 focus:ring-[#718b63]/10"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#718b63] px-6 py-3.5 text-sm font-bold text-white shadow-md transition duration-300 hover:bg-[#5f7854] hover:shadow-lg"
                  >
                    Confirm Reservation
                  </button>

                  <p className="text-center text-xs leading-5 text-[#9a9087]">
                    By submitting this form, you are requesting a table
                    reservation. Our team will contact you for confirmation.
                  </p>

                </form>
              </>
            )}

          </div>

        </div>

      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-4xl rounded-3xl bg-[#f0e5d8] px-6 py-12 text-center">

          <h2 className="text-3xl font-bold">
            Want to explore our menu first?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#75685d]">
            Discover our freshly brewed coffee, delicious breakfast and
            homemade desserts.
          </p>

          <Link
            to="/menu"
            className="mt-6 inline-block rounded-full bg-[#718b63] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#5f7854]"
          >
            Explore Menu
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Reservations;