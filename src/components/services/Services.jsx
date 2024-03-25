import { useRef } from "react";
import "./services.scss"
import { animate, motion, useInView } from "framer-motion"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });
    return (
        <motion.div className="services" variants={variants} initial="initial"
            // animate="animate"
            // whileInView={animate}
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping<br /> your brand grow</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{ color: "red" }}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{ color: "red" }}>For Your</motion.b > Business</h1>
                    <button>&#8595;</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightblue", color: "black" }}>
                    <h2>branding</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid veniam voluptatibus, blanditiis deleniti sed exercitationem</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightblue", color: "black" }}>
                    <h2>branding</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid veniam voluptatibus, blanditiis deleniti sed exercitationem</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightblue", color: "black" }}>
                    <h2>branding</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid veniam voluptatibus, blanditiis deleniti sed exercitationem</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightblue", color: "black" }}>
                    <h2>branding</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid veniam voluptatibus, blanditiis deleniti sed exercitationem</p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services