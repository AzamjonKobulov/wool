import Image from "next/image";

interface Item {
  img: string;
  name: string;
  text: string;
}

const items: Item[] = [
  {
    img: "/assets/svgs/online-1.svg",
    name: "Оплата бонусами",
    text: "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать не...",
  },
  {
    img: "/assets/svgs/online-2.svg",
    name: "Выгода с Trade-in",
    text: "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать не...",
  },
  {
    img: "/assets/svgs/online-3.svg",
    name: "Гарантия качества",
    text: "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать не...",
  },
  {
    img: "/assets/svgs/online-4.svg",
    name: "Система лояльности",
    text: "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать не...",
  },
  {
    img: "/assets/svgs/online-5.svg",
    name: "Страхование устройств",
    text: "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать не...",
  },
  {
    img: "/assets/svgs/online-6.svg",
    name: "Рассрочка и кредит",
    text: "Сайт рыбат екст поможет дизайнеру, верстальщику, вебмастеру сгенерировать не...",
  },
];

export default function OnlineHyperMarket() {
  return (
    <section>
      <div className="max-w-5xl mx-auto my-8 px-2.5">
        <div className="space-y-1.5 bg-brand-purple-10 text-white rounded-lg px-3.5 pt-3.5 pb-2.5">
          <h2>Онлайн-гипермаркет Toodo</h2>
          <ul className="space-y-2.5">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3.5">
                <Image src={item.img} alt={item.name} width={16} height={20} />
                <div>
                  <h4 className="text-sm leading-[22px] font-bold">
                    {item.name}
                  </h4>
                  <p className="font-semibold text-xs leading-5">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
