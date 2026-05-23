import Navbar from './components/Navbar';
export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">Prime City Guide</div>

          {/* Search */}
          <div className="hidden md:flex flex-1 mx-10">
            <input
              type="text"
              placeholder="Search cities, places, services..."
              className="w-full border border-gray-300 rounded-full px-5 py-3 outline-none"
            />
          </div>

          {/* Menu */}
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#">Explore</a>

            <a href="#">Categories</a>

            <a href="#">Cities</a>

            <a href="#">Guides</a>
          </div>
        </div>
      </nav>
      {/* HERO SECTION */}
      <section className="relative h-screen pt-40 flex items-center justify-center overflow-hidden bg-black text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-8 py-10 max-w-5xl rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <p className="uppercase tracking-[6px] text-sm text-gray-300 mb-6">
            PRIME CITY GUIDE
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Discover Trusted Places,
            <br />
            Services & Experiences
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Explore restaurants, schools, marriage halls, cafes, hospitals and
            city experiences — all in one modern discovery platform.
          </p>

          {/* Search Bar */}
          <div className="mt-10 flex justify-center">
            <input
              type="text"
              placeholder="Search your city..."
              className="w-full max-w-2xl rounded-full px-6 py-4 text-black text-lg outline-none"
            />
          </div>

          {/* Category Chips */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              Restaurants
            </div>

            <div className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              Schools
            </div>

            <div className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              Marriage Halls
            </div>

            <div className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              Cafes
            </div>

            <div className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
              Hospitals
            </div>
          </div>
        </div>

        {/* Floating Cards */}

        <div className="absolute bottom-10 left-10 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 w-64 text-white shadow-2xl">
            <p className="text-sm text-gray-300 mb-2">Trending Now</p>

            <h3 className="text-xl font-semibold">Best Rooftop Restaurants</h3>

            <p className="mt-2 text-sm text-gray-300">
              Explore premium dining experiences across your city.
            </p>
          </div>
        </div>

        <div className="absolute top-24 right-10 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 w-60 text-white shadow-2xl">
            <p className="text-sm text-gray-300 mb-2">Featured Category</p>

            <h3 className="text-xl font-semibold">Marriage Halls</h3>

            <p className="mt-2 text-sm text-gray-300">
              Discover elegant venues for unforgettable celebrations.
            </p>
          </div>
        </div>
      </section>
      {/* POPULAR CATEGORIES SECTION */}

      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Explore Popular Categories
          </h2>

          <div className="flex gap-6 overflow-x-auto pb-4">
            {/* Card 1 */}
            <div
              className="min-w-[320px] h-[420px] rounded-[35px] overflow-hidden relative flex items-center justify-center text-white text-3xl font-bold bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <h3 className="relative z-10">Restaurants</h3>
            </div>

            {/* Card 2 */}
            <div
              className="min-w-[320px] h-[420px] rounded-[35px] overflow-hidden relative flex items-center justify-center text-white text-3xl font-bold bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <h3 className="relative z-10">Schools</h3>
            </div>

            {/* Card 3 */}
            <div
              className="min-w-[320px] h-[420px] rounded-[35px] overflow-hidden relative flex items-center justify-center text-white text-3xl font-bold bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <h3 className="relative z-10">Marriage Halls</h3>
            </div>

            {/* Card 4 */}
            <div
              className="min-w-[320px] h-[420px] rounded-[35px] overflow-hidden relative flex items-center justify-center text-white text-3xl font-bold bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <h3 className="relative z-10">Cafes</h3>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURED LISTINGS SECTION */}

      <section className="bg-[#f7f7f7] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-14">
            <h2 className="text-4xl font-bold">Featured Listings</h2>

            <button className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-[30px] overflow-hidden shadow-xl">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop')",
                }}
              ></div>

              <div className="p-6">
                <span className="text-sm bg-gray-100 px-4 py-2 rounded-full">
                  Restaurant
                </span>

                <h3 className="text-2xl font-bold mt-5">Skyline Dining</h3>

                <p className="text-gray-500 mt-2">Hyderabad, India</p>

                <div className="flex items-center justify-between mt-6 text-sm text-gray-600">
                  <span>⭐ 4.8 Rating</span>
                  <span>Luxury Dining</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[30px] overflow-hidden shadow-xl">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop')",
                }}
              ></div>

              <div className="p-6">
                <span className="text-sm bg-gray-100 px-4 py-2 rounded-full">
                  School
                </span>

                <h3 className="text-2xl font-bold mt-5">Green Valley School</h3>

                <p className="text-gray-500 mt-2">Bangalore, India</p>

                <div className="flex items-center justify-between mt-6 text-sm text-gray-600">
                  <span>⭐ 4.7 Rating</span>
                  <span>CBSE Curriculum</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[30px] overflow-hidden shadow-xl">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop')",
                }}
              ></div>

              <div className="p-6">
                <span className="text-sm bg-gray-100 px-4 py-2 rounded-full">
                  Marriage Hall
                </span>

                <h3 className="text-2xl font-bold mt-5">
                  Royal Palace Convention
                </h3>

                <p className="text-gray-500 mt-2">Kolkata, India</p>

                <div className="flex items-center justify-between mt-6 text-sm text-gray-600">
                  <span>⭐ 4.9 Rating</span>
                  <span>Luxury Weddings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURED CITIES SECTION */}

      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}

          <div className="mb-14">
            <p className="uppercase tracking-[0.3em] text-gray-400 text-sm mb-4">
              Featured Cities
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Explore Trusted Places
              <br />
              Across India
            </h2>
          </div>

          {/* Cities Grid */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Varanasi */}

            <div
              className="relative rounded-[30px] overflow-hidden min-h-[320px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=1200&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-black/45"></div>

              <div className="relative z-10 h-full flex items-end p-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Varanasi</h3>

                  <p className="text-gray-200 text-sm">
                    Ghats, schools, cafes and local experiences
                  </p>
                </div>
              </div>
            </div>

            {/* Mughalsarai */}

            <div
              className="relative rounded-[30px] overflow-hidden min-h-[320px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-black/45"></div>

              <div className="relative z-10 h-full flex items-end p-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Mughalsarai</h3>

                  <p className="text-gray-200 text-sm">
                    Trusted local places and city services
                  </p>
                </div>
              </div>
            </div>

            {/* Lucknow */}

            <div
              className="relative rounded-[30px] overflow-hidden min-h-[320px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-black/45"></div>

              <div className="relative z-10 h-full flex items-end p-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Lucknow</h3>

                  <p className="text-gray-200 text-sm">
                    Restaurants, schools and premium places
                  </p>
                </div>
              </div>
            </div>

            {/* Kanpur */}

            <div
              className="relative rounded-[30px] overflow-hidden min-h-[320px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1200&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-black/45"></div>

              <div className="relative z-10 h-full flex items-end p-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Kanpur</h3>

                  <p className="text-gray-200 text-sm">
                    Discover trusted businesses and services
                  </p>
                </div>
              </div>
            </div>

            {/* Gaya */}

            <div
              className="relative rounded-[30px] overflow-hidden min-h-[320px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-black/45"></div>

              <div className="relative z-10 h-full flex items-end p-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Gaya</h3>

                  <p className="text-gray-200 text-sm">
                    Cultural places, cafes and local guides
                  </p>
                </div>
              </div>
            </div>

            {/* Patna */}

            <div
              className="relative rounded-[30px] overflow-hidden min-h-[320px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-black/45"></div>

              <div className="relative z-10 h-full flex items-end p-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Patna</h3>

                  <p className="text-gray-200 text-sm">
                    Explore top city services and experiences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TRUST SECTION */}

      <section className="bg-[#f8f8f8] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}

          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-gray-500 text-sm mb-4">
              Why Prime City Guide
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-black">
              Trusted Discovery
              <br />
              For Modern India
            </h2>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            <div className="bg-white rounded-[28px] p-8 shadow-sm text-center">
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-gray-500">Curated Listings</p>
            </div>

            <div className="bg-white rounded-[28px] p-8 shadow-sm text-center">
              <h3 className="text-4xl font-bold mb-2">20+</h3>
              <p className="text-gray-500">Growing Cities</p>
            </div>

            <div className="bg-white rounded-[28px] p-8 shadow-sm text-center">
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
              <p className="text-gray-500">Monthly Discoveries</p>
            </div>

            <div className="bg-white rounded-[28px] p-8 shadow-sm text-center">
              <h3 className="text-4xl font-bold mb-2">4.8★</h3>
              <p className="text-gray-500">Trusted Experience</p>
            </div>
          </div>

          {/* Feature Cards */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}

            <div className="bg-white rounded-[32px] p-10 shadow-sm">
              <div className="mb-6 text-5xl">🏙️</div>

              <h3 className="text-2xl font-bold mb-4">
                Curated City Discovery
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Explore trusted places, premium experiences and local
                recommendations across growing Indian cities.
              </p>
            </div>

            {/* Card 2 */}

            <div className="bg-white rounded-[32px] p-10 shadow-sm">
              <div className="mb-6 text-5xl">⭐</div>

              <h3 className="text-2xl font-bold mb-4">Trusted Listings</h3>

              <p className="text-gray-600 leading-relaxed">
                Discover restaurants, schools, marriage halls and services
                selected for quality and trust.
              </p>
            </div>

            {/* Card 3 */}

            <div className="bg-white rounded-[32px] p-10 shadow-sm">
              <div className="mb-6 text-5xl">📍</div>

              <h3 className="text-2xl font-bold mb-4">Local City Expertise</h3>

              <p className="text-gray-600 leading-relaxed">
                Built to help users discover meaningful local places with a
                modern and premium experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA SECTION */}

      <section className="bg-black text-white py-28 px-6 relative overflow-hidden">
        {/* Background Glow */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-3xl rounded-full"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <p className="uppercase tracking-[0.3em] text-gray-400 text-sm mb-6">
            Discover • Explore • Grow
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Discover Trusted Places
            <br />
            Across Modern India
          </h2>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            Explore curated cities, trusted businesses, local experiences and
            premium recommendations — all in one modern discovery platform.
          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
              Explore Cities
            </button>

            <button className="border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition">
              List Your Business
            </button>
          </div>
        </div>
      </section>
      {/* FOOTER */}

      <footer className="bg-[#0a0a0a] text-white px-6 pt-24 pb-10">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">
            {/* Brand */}

            <div>
              <h2 className="text-3xl font-bold mb-6">Prime City Guide</h2>

              <p className="text-gray-400 leading-relaxed">
                Discover trusted places, premium experiences, local businesses
                and curated city guides across modern India.
              </p>
            </div>

            {/* Explore */}

            <div>
              <h3 className="text-xl font-semibold mb-6">Explore</h3>

              <ul className="space-y-4 text-gray-400">
                <li>Featured Cities</li>
                <li>Restaurants</li>
                <li>Schools</li>
                <li>Marriage Halls</li>
                <li>Cafes</li>
              </ul>
            </div>

            {/* Cities */}

            <div>
              <h3 className="text-xl font-semibold mb-6">Popular Cities</h3>

              <ul className="space-y-4 text-gray-400">
                <li>Varanasi</li>
                <li>Mughalsarai</li>
                <li>Patna</li>
                <li>Lucknow</li>
                <li>Kanpur</li>
                <li>Gaya</li>
              </ul>
            </div>

            {/* Business */}

            <div>
              <h3 className="text-xl font-semibold mb-6">Business</h3>

              <ul className="space-y-4 text-gray-400">
                <li>List Your Business</li>
                <li>Advertising</li>
                <li>Partnerships</li>
                <li>City Promotions</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          {/* Bottom */}

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Prime City Guide. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-gray-500 text-sm">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Cookies</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
