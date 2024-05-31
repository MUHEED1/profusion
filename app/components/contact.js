import Padding from '../components/padding';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-500 to-red-500 flex justify-center items-center">
            <Padding>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <h1 className="text-3xl font-bold text-center mb-6 text-pink-600">Contact Us</h1>
                    <div className="space-y-4">
                        <p className="text-gray-800"><strong>Email:</strong> contact@example.com</p>
                        <p className="text-gray-800"><strong>Phone:</strong> +123-456-7890</p>
                        <p className="text-gray-800"><strong>Address:</strong> 123 Main Street, City, Country</p>
                    </div>
                </div>
            </Padding>
        </div>
    );
};

export default Contact;
