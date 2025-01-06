import { motion } from "framer-motion"; // Importing motion from framer-motion
import Categories from "../pages/home/Categories";

export default function SearchModal() {
  return (
    <motion.div
      className="max-w-[360px] absolute top-0 h-screen z-20 bg-white pt-32 pb-24 px-2.5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="h-full flex flex-col justify-center space-y-3 text-center font-semibold px-5">
          <p className="text-xl">Поиск по каталогу</p>
          <p className="text-sm leading-[22px]">
            Введите в поисковую строку выше товар который хотите посмотреть
          </p>
        </div>

        <Categories />
      </div>
    </motion.div>
  );
}
