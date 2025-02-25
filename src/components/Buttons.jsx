import React from "react";
import Link from "next/link";

const Buttons = () => {
  return (
    <div className="w-full flex justify-between gap-4 items-center px-3">
      <Link
        target="_blank"
        href="#"
        className="w-full rounded-lg bg-carte_btn hover:bg-book_btn py-2 text-center"
      >
        La Carte
      </Link>
      <Link
        target="_blank"
        href="/booking"
        className="w-full rounded-lg bg-book_btn hover:bg-book_btn_hover text-white py-2 text-center"
      >
        Réservation
      </Link>
    </div>
  );
};

export default Buttons;
