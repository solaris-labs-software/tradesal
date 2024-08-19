import img from "../../assets/bike.jpg";
import { motion } from 'framer-motion';
import image1 from '../../assets/curso.jpeg'
import image2 from '../../assets/medica.jpeg'
import image3 from '../../assets/obrero.jpeg'
const aboutContent = [
    {
        title: "Vehiculo para el desarollo",
        description: "TRADESAL (Trabajo, Desarrollo y Salud) es una Asociación Civil sin fines de lucro con una larga trayectoria en el partido de Escobar, dedicada a fomentar el desarrollo inclusivo de amplios sectores de la sociedad. Con una firme convicción en que el progreso sostenible se alcanza mediante la educación y la capacitación para el trabajo, TRADESAL ha trabajado incansablemente para brindar oportunidades a quienes más lo necesitan, ayudándoles a adquirir las habilidades y conocimientos necesarios para mejorar sus condiciones de vida y contribuir al crecimiento de sus comunidades. Creemos que el acceso a la formación laboral es un pilar fundamental para construir una sociedad más justa y equitativa.\n",
        imageUrl: image1,
        imageFirst: true,
    },
    {
        title: "Salud para el bienestar",
        description: "A través de una variedad de convenios estratégicos, promovemos activamente la inclusión de diferentes sectores de la sociedad que, lamentablemente, hoy en día se encuentran sin acceso adecuado al cuidado de su salud. Nuestro objetivo es garantizar que estas personas, independientemente de sus circunstancias actuales, tengan la oportunidad de desarrollarse en igualdad de condiciones con aquellos que ya cuentan con todas sus necesidades cubiertas. Creemos que la equidad en el acceso a la salud es esencial para el desarrollo integral y trabajamos incansablemente para derribar las barreras que impiden a muchos alcanzar su pleno potencial.\n",
        imageUrl: image2,
        imageFirst: false,
    },
    {
        title: "Trabajo para el desarollo personal",
        description: "TRADESAL se dedica a establecer acuerdos y colaboraciones con diversas organizaciones, con el fin de facilitar que distintos sectores de la población puedan acceder a su primer empleo o reintegrarse en el mercado laboral. Nos enfocamos en abrir puertas para aquellos que enfrentan desafíos en su camino hacia la empleabilidad, proporcionando las herramientas y oportunidades necesarias para que puedan construir una carrera profesional estable. Estamos profundamente convencidos de que el trabajo no solo es un derecho fundamental, sino también el mejor mecanismo para estructurar y ordenar la política social, promoviendo la inclusión y el bienestar de toda la comunidad.\n",
        imageUrl: image3,
        imageFirst: true,
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
};


export const AboutSection = () => {
    return (
        <section id="nosotros"  className="py-16 bg-white">
            <motion.div
                className="container mx-auto px-4 md:px-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {aboutContent.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`flex flex-col md:flex-row justify-between items-center mb-12 ${item.imageFirst ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <img
                            className="w-full md:w-[40%] h-auto rounded-lg shadow-lg mb-4 md:mb-0"
                            src={item.imageUrl}
                            alt={item.title}
                        />
                        <div className={`w-full md:w-auto ${item.imageFirst ? 'md:ml-8' : 'md:mr-8'}`}>
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">{item.title}</h2>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
