// FooterSection.tsx
import { Link } from "react-scroll";

export default function FooterSection() {
  return (
    <footer className="px-4 lg:px-10 py-10 bg-zinc-900 text-white">
      <div className="flex flex-col items-center justify-center">
        <div className="text-lg font-semibold">Get in Touch</div>
        <div className="text-base mt-2">
          <p>1234 Architecture St, Design City, DC 12345</p>
          <p>Email: info@arkitek.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="mt-4">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Back to Top
          </Link>
        </div>
      </div>
    </footer>
  );
}
