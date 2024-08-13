import styles from "./styles.module.scss";
import {FeatureCard} from "../common/cursosCard/index.jsx";
import {motion} from "framer-motion";
import image from "../../assets/bike.jpg";
import React from "react";

//make an array of objects for cads:
const features = [
    {
        title: "Marketing Digital",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: image,
    },
    {
        title: "Inteligencia Artificial",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: image,
    },
    {
        title: "Edicion",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: image,
    },
    {
        title: "Marca personal",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: image,
    },
    {
        title: "Comunicacion",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: image,
    },
    {
        title: "Mucho mas",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: image,
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};


export function Cursos() {
    return (
        <div id="cursos" className={`${styles.container} px-4 md:px-8 lg:px-16 py-8`}>
            <div className="flex flex-col items-end text-right mb-8">
                <h2 className="mb-5 text-white text-4xl md:text-5xl lg:text-6xl font-bold">
                    Cursos que ofrecemos
                </h2>
                <h4 className="mb-2 text-white text-lg md:text-xl lg:text-2xl">
                    Conoce todos los cursos que ofrecemos e inscribete en el que más te guste.
                </h4>
            </div>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center md:justify-items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                {features.map((feature, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            info={feature.info}
                            image={feature.image}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}