import img from "../../assets/bike.jpg";
import { motion } from 'framer-motion';

const aboutContent = [
    {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt.",
        imageUrl: img,
        imageFirst: true,
    },
    {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt.",
        imageUrl: img,
        imageFirst: false,
    },
    {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt. Nullam nec nisl nec nunc tincidunt tincidunt.",
        imageUrl: img,
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
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">{item.title}</h2>
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
