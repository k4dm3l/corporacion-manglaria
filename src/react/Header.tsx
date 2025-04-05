import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = ["Inicio", "Nosotros", "Proyectos", "Contacto"];

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-white border-b border-gray-100 fixed top-0 left-0 w-full z-50">
        <a href="/">
        Manglaria
        </a>

        <nav className="hidden md:flex space-x-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-black hover:text-primary-900"
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden z-50 flex flex-col justify-between w-8 h-6 relative"
        >
          <span
            className={`block h-[2px] w-full bg-black transform transition duration-300 ${
              open ? "rotate-45 translate-y-[9px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-black transition duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-black transform transition duration-300 ${
              open ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          />
        </button>
      </header>

      {/* Menú fullscreen */}
      <div
        className={`fixed inset-0 bg-primary-900 text-white z-40 flex flex-col items-start justify-end px-8 pb-12 transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="space-y-4 text-left text-3xl">
          {links.map((link, i) => (
            <li
              key={link}
              className={`opacity-0 translate-y-6 animate-link-in`}
              style={{
                animationDelay: `${i * 100 + 200}ms`,
                animationFillMode: "forwards",
              }}
              onClick={() => setOpen(false)}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        @keyframes link-in {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-link-in {
          animation: link-in 0.4s ease-out both;
        }
      `}</style>
    </>
  );
}
