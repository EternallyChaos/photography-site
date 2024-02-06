import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

const routes = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Stories",
    href: "#",
  },
  {
    title: "Journal",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
];

const Drawer = ({ isOpen, setOpen }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-y-0 right-0 max-w-3xl z-20 w-full bg-white shadow-xl"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-500"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel className="h-full flex flex-col py-6">
            {/* <div className="px-4 sm:px-6">
              <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                Title
              </Dialog.Title>
            </div> */}

            <div className="relative flex-1 px-4 sm:px-6 overflow-hidden">
              <ul className="grid gap-2">
                {routes.map((route, idx) => (
                  <motion.li
                    key={route.title}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + idx / 10,
                    }}
                    className="w-full p-[0.08rem] rounded-xl"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className="flex items-center justify-between w-full p-5 rounded-xl"
                      href={route.href}
                    >
                      <span className="flex gap-1 text-4xl">{route.title}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default Drawer;
