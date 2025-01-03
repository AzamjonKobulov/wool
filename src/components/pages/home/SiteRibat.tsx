import React from "react";

export default function SiteRibat() {
  return (
    <section>
      <div className="max-w-base mx-0 space-y-5 px-2.5">
        <h2>Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру </h2>
        <p className="text-sm font-semibold leading-[22px]">
          Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру
          сгенерировать несколько абзацев более менее осмысленного текста рыбы
          на русском языке, а начинающему оратору отточить навык публичных
          выступлений в домашних условиях. При создании генератора мы
          использовали небезизвестный универсальный код речей. Текст
          генерируется абзацами случайным образом от двух до десяти предложений
          в абзаце, что позволяет сделать текст более привлекательным и живым
          для визуально-слухового восприятия.
        </p>
        <button className="flex items-center gap-2.5 bg-brand-gray-20 text-brand-purple-10 text-xs font-semibold leading-5 rounded-lg py-1.5 px-3">
          Смотреть все
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-90"
          >
            <path
              d="M6.25 10.875L11.25 5.85481M6.25001 0.834614L11.25 5.85481M11.25 5.85481L0.75 5.85481"
              stroke="#7573F6"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
