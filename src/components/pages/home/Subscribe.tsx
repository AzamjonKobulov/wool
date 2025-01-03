import React from "react";

export default function Subscribe() {
  return (
    <section className="bg-brand-purple-10 text-white py-4 px-4">
      <div className="max-w-base mx-auto flex flex-col gap-5">
        <p className="font-semibold text-[19px] leading-[26px]">
          Подпишитесь на рассылку и будьте в курсе: акций, скидок, распродаж!
        </p>
        <form
          action="#"
          className="flex items-center justify-between gap-2.5 bg-white rounded-md text-sm leading-[22px] p-2.5"
        >
          <input
            type="email"
            className="w-[149px] font-medium  text-brand-dark placeholder:text-brand-dark outline-none"
            placeholder="Е-mail"
          />
          <button className="bg-brand-purple-10 rounded-md font-bold py-2 px-6">
            Подписаться
          </button>
        </form>
      </div>
    </section>
  );
}
