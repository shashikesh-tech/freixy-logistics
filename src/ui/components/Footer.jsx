import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Freixy</h2>
          <p className="text-sm leading-relaxed">
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
            terra videa magna derita valies darta donna mare fermentum iaculis
            eu non diam phasellus.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Terms of service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Web Design
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Product Management
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Marketing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Graphic Design
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">A108 Adam Street</p>
          <p className="text-sm mb-2">Gurugram, Haryana 122102</p>
          <p className="text-sm mb-2">India</p>
          <p className="text-sm mb-2">Phone: +91 9818345678</p>
          <p className="text-sm">Email: info@example.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 border-t border-gray-700 pt-6 text-sm">
        © Copyright Fleixy.com All Rights Reserved
      </div>
    </footer>
  );
}
