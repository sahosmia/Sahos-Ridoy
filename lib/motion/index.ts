//
export const heroMotion = ({ delay }: { delay: number }) => ({
  initial: { x: -10, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: delay },
  },
});

//
export const aboutMotion = ({ delay }: { delay: number }) => ({
  initial: { x: -10, opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: delay },
  },
  viewport: { once: true },
});

//
export const skillMotion = ({ delay }: { delay: number }) => ({
  initial: { x: 100, opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: delay },
  },
  viewport: { once: true },
});

//skillImageMotion
export const skillImageMotion = ({ delay }: { delay: number }) => ({
  initial: { x: -100, opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: delay },
  },
  viewport: { once: true },
});

//sectionHeaderMotion
export const sectionHeaderMotion = ({ delay }: { delay: number }) => ({
  initial: { y: 100, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, delay: delay },
  },
  viewport: { once: true },
});

export const serviceMotion = ({ delay }: { delay: number }) => ({
  initial: { y: 100, opacity: 0, scale: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: 0.7, duration: 0.3, delay: delay },
  },
  viewport: { once: true },
});
