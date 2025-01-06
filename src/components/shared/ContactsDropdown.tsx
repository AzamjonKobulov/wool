import useClickOutside from "@/hooks/useClickOutside";
import { motion } from "framer-motion";
import { useRef } from "react";

interface ContactsDropdownProps {
  onToggleContacts: () => void;
}

export default function ContactsDropdown({
  onToggleContacts,
}: ContactsDropdownProps) {
  // Explicitly type the ref to HTMLDivElement
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropdownRef as React.RefObject<HTMLDivElement>, () =>
    onToggleContacts()
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute z-10 right-0 top-6 bg-white space-y-2.5 border border-brand-gray-30 rounded-2xl lg:rounded-3xl shadow-contact-dropdown p-4 lg:p-6"
      ref={dropdownRef}
    >
      <div>
        <p className="font-semibold text-10 lg:text-xs leading-3 lg:leading-5">
          Звонки по РФ бесплатны
        </p>
        <a
          href="tel:"
          className="font-bold text-xs lg:text-lg leading-5 lg:leading-7"
          onClick={onToggleContacts}
        >
          8 (800) 555-66-66
        </a>
      </div>
      <div className="">
        <p className="font-semibold text-10 lg:text-xs leading-3 lg:leading-5">
          Время работы кол-центра
        </p>
        <p className="font-bold text-xs lg:text-lg leading-5 lg:leading-7">
          Пн-Пт с 9:00 до 21:00
        </p>
      </div>

      {/* Messangers */}
      <div className="space-y-1 font-semibold text-10 lg:text-xs leading-3 lg:leading-5">
        <p>Мессенджеры</p>
        <div className="flex items-center gap-4">
          {/* Telegram */}
          <a
            onClick={onToggleContacts}
            href="#"
            className="flex items-center gap-1.5"
          >
            <img src="/assets/svgs/telegram-contacts.svg" alt="Telegram Icon" />
            <span>Telegram</span>
          </a>
          {/* Whatsapp */}
          <a
            onClick={onToggleContacts}
            href="#"
            className="flex items-center gap-1.5"
          >
            <img src="/assets/svgs/whatsapp-contacts.svg" alt="Whatsapp icon" />
            <span>WhatsApp</span>
          </a>
          {/* Viber */}
          <a
            onClick={onToggleContacts}
            href="#"
            className="flex items-center gap-1.5"
          >
            <img src="/assets/svgs/viber-contacts.svg" alt="Viber contacts" />
            <span>Viber</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
