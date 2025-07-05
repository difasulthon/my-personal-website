
import { Transition, Variants } from 'framer-motion';

const springTransition: Transition = {
  type: "spring",
  stiffness: 50,
  damping: 20,
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const slideInRight = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: springTransition,
  },
};

const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: springTransition,
  },
};

export {
  fadeUp, slideInRight, slideInLeft
}