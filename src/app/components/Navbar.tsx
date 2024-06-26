import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="--navbar w-[80%] flex justify-between items-center px-8 p-4 absolute top-4 left-1/2 -translate-x-1/2 bg-white rounded-xl  mx-auto z-[100] shadow-xl">
      <Image
        alt="logo"
        src="/logo.webp"
        width={200}
        height={200}
        className="w-20"
      />
      <section className="h-full">
        <ul className="flex gap-6 items-center h-full font-medium">
          <li>
            <a
              href=""
              className="hover:text-primary transition-all duration-100 ease-linear"
            >
              Area of work
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-primary transition-all duration-100 ease-linear"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-primary transition-all duration-100 ease-linear"
            >
              Activities
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-primary transition-all duration-100 ease-linear"
            >
              Team
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
}
