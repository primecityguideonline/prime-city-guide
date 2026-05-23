export default function Navbar() {
  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <div className="text-2xl font-bold">
          Prime City Guide
        </div>

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

  );
}