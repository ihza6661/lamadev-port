
import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"


const item = [
    {
        id: 1,
        title: "HTML, CSS, JavaSript",
        img: "https://images.pexels.com/photos/19877487/pexels-photo-19877487/free-photo-of-sun-through-massive-redwood-trees-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.png",
        desc: "isicing elit. Magni fuga dolorem eveniet voluptatem commodi animi!."
    },
    {
        id: 2,
        title: "React JS",
        img: "https://images.pexels.com/photos/19877487/pexels-photo-19877487/free-photo-of-sun-through-massive-redwood-trees-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "isicing elit. Magni fuga dolorem eveniet voluptatem commodi animi!."
    },
    {
        id: 3,
        title: "Javascript App",
        img: "https://images.pexels.com/photos/19877487/pexels-photo-19877487/free-photo-of-sun-through-massive-redwood-trees-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "isicing elit. Magni fuga dolorem eveniet voluptatem commodi animi!."
    },
    {
        id: 4,
        title: "Javascript App",
        img: "https://images.pexels.com/photos/19877487/pexels-photo-19877487/free-photo-of-sun-through-massive-redwood-trees-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "isicing elit. Magni fuga dolorem eveniet voluptatem commodi animi!."
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-300", "300"]);
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>see demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef();




    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start",] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>My Projects</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>

            {item.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;