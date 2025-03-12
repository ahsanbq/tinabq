import { motion } from "framer-motion";

export const PortfolioText = ({ text, index, initialColors }) => {
  return (
    <section className='grid place-content-start '>
      <FlipLink index={index} initialColors={initialColors}>
        {text}
      </FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href, index, initialColors }) => {
  // const initialColors = ["text-yellow-200", "text-black", "text-yellow-300"];
  const flippedColor = "text-white";

  return (
    <motion.a
      initial='initial'
      whileHover='hovered'
      href={href}
      className={`relative block overflow-hidden whitespace-nowrap text-4xl font-black sm:text-4xl md:text-[2.60rem]`}
      style={{
        lineHeight: 1.75,
      }}
    >
      <div className={`relative block`}>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            // className={`inline-block ${initialColors[index]}`}
            className={`inline-block ${initialColors}`}
            key={i}
          >
            {l === " " ? "\u00A0" : l} {/* Preserve spaces */}
          </motion.span>
        ))}
      </div>
      <div className='absolute inset-0'>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className={`inline-block ${flippedColor}`}
            key={i}
          >
            {l === " " ? "\u00A0" : l} {/* Preserve spaces */}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
