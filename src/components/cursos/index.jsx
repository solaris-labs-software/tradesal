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
        info: "Aprende a dominar el mercado digital mediante el uso de herramientas avanzadas de análisis y publicidad online. Conoce mejor a tu audiencia y optimiza tus estrategias de marketing para alcanzar a los clientes adecuados en el momento oportuno.",
        image: mdImage,
    },
    {
        title: "Inteligencia Artificial",
        info: "Explora las últimas innovaciones en inteligencia artificial y descubre cómo estas herramientas pueden aumentar tu productividad. Aprende a implementar soluciones de IA en tu flujo de trabajo para automatizar tareas y tomar decisiones más informadas y rápidas.",
        image: iaImage,
    },
    {
        title: "Chofer de camiones",
        info: "Desarrolla y perfecciona las habilidades necesarias para una carrera exitosa como chofer de camiones. Adquiere conocimientos sobre seguridad en carretera, manejo de carga pesada, y técnicas de conducción que te ayudarán a destacarte en la industria del transporte.",
        image: camiones,
    },
    {
        title: "Marca Personal",
        info: "Construye y fortalece tu marca personal, creando una identidad única que refleje tus valores y habilidades. Aprende a comunicar tu historia, destacarte en tu campo, y atraer oportunidades que se alineen con tus objetivos profesionales y personales.",
        image: marca,
    },
    {
        title: "Manicuria y maquillaje profesional",
        info: "Sumérgete en el mundo de la belleza y la estética aprendiendo técnicas avanzadas de manicuria y maquillaje profesional. Desde uñas esculpidas hasta maquillaje de alta calidad, este curso te prepara para ofrecer servicios de belleza con un toque de distinción.",
        image: manicuria,
    },
    {
        title: "Manejo de Clark",
        info: "Capacítate en el manejo de montacargas y otros equipos de elevación para ingresar a un campo laboral con alta demanda y mejores ingresos. Aprende sobre la operación segura, el mantenimiento básico, y las mejores prácticas para optimizar tu eficiencia en el trabajo.",
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