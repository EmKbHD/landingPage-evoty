import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../db/data";

const NavbarMobile: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.4 }}
          className="fixed top-16.4 left-0 w-full h-screen bg-gray-900/50 z-20 "
        >
          <div className="px-3 py-12 m-4 rounded-2xl bg-primary text-white">
            <ul className="flex flex-col justify-center items-center gap-5 ">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-secondary font-semibold text-xl"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarMobile;
