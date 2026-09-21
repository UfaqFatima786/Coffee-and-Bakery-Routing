import React, { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#3d342d]">

      {}
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#718b63]">
            Get In Touch
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            We'd love to hear from you.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#766b62]">
            Have a question, suggestion, or just want to say hello?
            Send us a message and our team will get back to you soon.
          </p>
        </div>
      </section>
      {}
      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-5">

          {}
          <div className="lg:col-span-2">
            <div className="rounded-[2rem] bg-[#718b63] p-8 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#e8f0e3]">
                Contact Information
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Let's talk over coffee.
              </h2>
              <p className="mt-4 leading-7 text-[#e8f0e3]">
                Visit us, give us a call, or drop us a message.
                We're always happy to connect with our Bloom & Brew family.
              </p>

              {}
              <div className="mt-8 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xl">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold">
                    Our Location
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#e8f0e3]">
                    24 Garden Avenue,
                    <br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>


              {}
              <div className="mt-6 flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xl">
                  📞
                </div>

                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="mt-1 text-sm text-[#e8f0e3]">
                    +92 300 1234567
                  </p>
                </div>

              </div>


              {/* Email */}
              <div className="mt-6 flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xl">
                  ✉️
                </div>

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="mt-1 text-sm text-[#e8f0e3]">
                    hello@bloomandbrew.com
                  </p>
                </div>

              </div>


              {/* Social */}
              <div className="mt-10 border-t border-white/20 pt-7">

                <p className="text-sm font-semibold">
                  Follow us
                </p>

                <div className="mt-4 flex gap-3">

                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition hover:bg-white hover:text-[#718b63]"
                  >
                    f
                  </a>

                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition hover:bg-white hover:text-[#718b63]"
                  >
                    ◎
                  </a>

                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition hover:bg-white hover:text-[#718b63]"
                  >
                    𝕏
                  </a>

                </div>

              </div>

            </div>


            {/* Opening Hours */}
            <div className="mt-6 rounded-[2rem] border border-[#e4dbd1] bg-white p-7 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f0e3] text-xl">
                  🕐
                </div>

                <h3 className="text-xl font-bold">
                  Opening Hours
                </h3>

              </div>

              <div className="mt-6 space-y-3 text-sm">

                <div className="flex justify-between border-b border-[#eee7df] pb-3">
                  <span className="text-[#766b62]">
                    Monday - Friday
                  </span>
                  <span className="font-semibold">
                    8 AM - 11 PM
                  </span>
                </div>

                <div className="flex justify-between border-b border-[#eee7df] pb-3">
                  <span className="text-[#766b62]">
                    Saturday
                  </span>
                  <span className="font-semibold">
                    9 AM - 12 AM
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#766b62]">
                    Sunday
                  </span>
                  <span className="font-semibold">
                    9 AM - 11 PM
                  </span>
                </div>

              </div>

            </div>

          </div>


          {/* ================= CONTACT FORM ================= */}
          <div className="rounded-[2rem] border border-[#e4dbd1] bg-white p-7 shadow-sm sm:p-9 lg:col-span-3">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#718b63]">
                Send a Message
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                How can we help?
              </h2>

              <p className="mt-3 text-[#81766c]">
                Fill out the form below and we'll get back to you.
              </p>
            </div>


            {/* Success Message */}
            {submitted && (
              <div className="mt-6 rounded-2xl border border-[#cfe0c8] bg-[#edf5e9] px-5 py-4 text-sm font-medium text-[#58734e]">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}


            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-[#ddd3c8] bg-[#faf8f3] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a79c92] focus:border-[#718b63] focus:ring-4 focus:ring-[#718b63]/10"
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
                    className="w-full rounded-xl border border-[#ddd3c8] bg-[#faf8f3] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a79c92] focus:border-[#718b63] focus:ring-4 focus:ring-[#718b63]/10"
                  />
                </div>

              </div>


              {/* Subject */}
              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to talk about?"
                  required
                  className="w-full rounded-xl border border-[#ddd3c8] bg-[#faf8f3] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a79c92] focus:border-[#718b63] focus:ring-4 focus:ring-[#718b63]/10"
                />

              </div>


              {/* Message */}
              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="6"
                  required
                  className="w-full resize-none rounded-xl border border-[#ddd3c8] bg-[#faf8f3] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a79c92] focus:border-[#718b63] focus:ring-4 focus:ring-[#718b63]/10"
                ></textarea>

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#718b63] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#718b63]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#607952]"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>
      </section>


      {/* ================= MAP / LOCATION ================= */}
      <section className="bg-[#edf3e9] px-6 py-20 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#718b63]">
              Find Us
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Come visit Bloom & Brew.
            </h2>

          </div>


          {/* Map Style Box */}
          <div className="relative mt-10 h-[350px] overflow-hidden rounded-[2rem] border-8 border-white bg-[#e5e0d7] shadow-xl">

            {/* Decorative map roads */}
            <div className="absolute left-0 top-1/2 h-8 w-full -rotate-6 bg-white/70"></div>

            <div className="absolute left-1/3 top-0 h-full w-8 rotate-12 bg-white/70"></div>

            <div className="absolute bottom-10 left-0 h-5 w-full rotate-12 bg-white/60"></div>

            <div className="absolute right-1/4 top-0 h-full w-5 -rotate-12 bg-white/50"></div>


            {/* Location Pin */}
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">

              <div className="flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-[#718b63] text-2xl shadow-xl">
                📍
              </div>

              <div className="mt-3 rounded-xl bg-white px-5 py-3 text-center shadow-lg">

                <h3 className="font-bold">
                  Bloom & Brew
                </h3>

                <p className="mt-1 text-xs text-[#81766c]">
                  24 Garden Avenue, Karachi
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#faf8f3] px-6 py-16 text-center md:px-10">

        <div className="mx-auto max-w-3xl">

          <div className="text-4xl">
            ☕
          </div>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Your coffee break is waiting.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#81766c]">
            Whether you have a question or simply want to stop by,
            Bloom & Brew is always happy to welcome you.
          </p>

        </div>

      </section>

    </div>
  );
};

export default Contact;
