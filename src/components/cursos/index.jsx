import styles from "./styles.module.scss";
import {FeatureCard} from "../common/cursosCard/index.jsx";
import {motion} from "framer-motion";
import iaImage from "../../assets/IA.jpeg";
import mdImage from "../../assets/marketing-digital.jpeg"
import camiones from "../../assets/camiones.jpeg"
import marca from "../../assets/marca.jpeg"
import manicuria from "../../assets/manicuria.jpeg"
import clark from "../../assets/clark.jpeg"
import React from "react";

//make an array of objects for cads:
const features = [
    {
        title: "Marketing Digital",
        info: "Como conocer mejor el mercado a traves de herramientas digitales",
        image: mdImage,
    },
    {
        title: "Inteligencia Artificial",
        info: "Descubri las nuevas herramientas para ser mas productivo en tu trabajo",
        image: iaImage,
    },
    {
        title: "Chofer de camiones",
        info: "Mejora tus habilidades laborales",
        image:camiones,
    },
    {
        title: "Marca Personal",
        info: "Dale tu sello a tus actividades",
        image: marca,
    },
    {
        title: "Manicuria y maquillaje profesional",
        info: "Aprende a realizar uñas esculpidas y maquillaje profesional",
        image: manicuria,
    },
    {
        title: "Manejo de Clark",
        info: "Insertate en el mundo del trabajo con mejores ingresos",
        image: clark,
    },
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
                    Capacitaciones Realizadas
                </h2>
                <h4 className="mb-2 text-white text-lg md:text-xl lg:text-2xl">
                    Conoce algunos ejemplos de cursos y capacitaciones que se realizaron.
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