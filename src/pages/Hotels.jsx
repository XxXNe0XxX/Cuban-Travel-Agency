import { AnimatePresence, motion } from "framer-motion";

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

const Hotels = () => {
  return (
    <div>
      Hotels
      <svg
        width="210mm"
        height="297mm"
        viewBox="0 0 210 297"
        version="1.1"
        id="svg1"
        inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)"
        sodipodi:docname="drawing.svg"
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
      >
        <motion.path
          stroke="#000"
          stroke-width="3"
          fill="none"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          fill-opacity="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
          id="path2"
        />
      </svg>
    </div>
  );
};

export default Hotels;
