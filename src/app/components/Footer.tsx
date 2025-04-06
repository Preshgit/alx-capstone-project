// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 md:justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4">African Art Celebration</h3>
            <p className="text-gray-300 mb-4">
              Promoting and celebrating African artistry and creativity around
              the world.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 flex flex-col md:flex-row gap-2 md:gap-8 lg:gap-12">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/artists"
                  className="text-gray-300 hover:text-white"
                >
                  Artists
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categories/sculptures"
                  className="text-gray-300 hover:text-white"
                >
                  Sculptures
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/iron-bending"
                  className="text-gray-300 hover:text-white"
                >
                  Iron Bending Art
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/furniture"
                  className="text-gray-300 hover:text-white"
                >
                  Furniture Design
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/architecture"
                  className="text-gray-300 hover:text-white"
                >
                  Architecture
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} African Art Celebration. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
