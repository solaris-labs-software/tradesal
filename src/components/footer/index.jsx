import email from '../../assets/email.svg';
import phone from '../../assets/smartphone.svg';
export const Footer = () => {
    return (
        <footer id="contacto" className="bg-blue-600 w-screen text-white p-2">
            <div className="container mx-auto mt-2">
                <div className=" flex md:w-1/3 mb-2 justify-between ">
                    <div className="">
                        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center space-x-4">
                                <img src={phone} alt={"phone"} className="w-6 h-6"/>
                                <span className="text-white">Phone: +54 9 11 3256-8564</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <img src={email} alt={"email"} className="w-6 h-6"/>
                                <span className="text-white">Email: info@yourcompany.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-white">
                    <p>&copy; {new Date().getFullYear()} Tradesal. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
