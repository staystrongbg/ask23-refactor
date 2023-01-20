import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { Dropdown, Links } from "../";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/dropdown.module.scss";
import { useProductContext } from "../../context/productContext";

const Navlinks = ({ className = "" }) => {
  const { offset, setOffset } = useProductContext();

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset !== 0);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div
        className={` ${
          offset
            ? "fixed top-[56px] left-0 right-0 bg-gray-100   z-30 shadow-md"
            : ""
        }  flex gap-8 px-6 py-0  items-center justify-center text-base rounded-sm uppercase ${className} `}
      >
        {offset && (
          <Link href="/">
            <Image
              src="/asklogo.svg"
              alt="kuce"
              width={120}
              height={60}
              unoptimized={true}
              loading="eager"
            />
          </Link>
        )}
        <div
          className={` ${styles.menu} flex items-center justify-center gap-0.5 relative  `}
        >
          <Link
            href="/proizvodi"
            className={`text-gray-900 tracking-wider select-none whitespace-nowrap z-30}`}
          >
            производи
          </Link>
          <span
            id={styles.chevron}
            className={`text-gray-900 hover:text-gray-600 select-none ${
              offset && "hover:text-slate-500"
            }`}
          >
            <FaChevronRight />
          </span>
          <Dropdown />
        </div>

        <Links text_color="text-gray-900" />
        <Link
          href="/akcije"
          className="text-slate-50 py-1 px-2 tracking-wider rounded-sm select-none bg-orange-600 z-30"
        >
          акције
        </Link>
      </div>
    </>
  );
};

export default Navlinks;
