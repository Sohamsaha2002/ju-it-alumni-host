export default function Body() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <section className="mb-8 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h1 className="text-4xl font-bold mb-4 text-blue-600">Our Ambition</h1>
                <p className="text-lg text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
                    Learn More
                </button>
            </section>
            <section className="mb-8 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h1 className="text-4xl font-bold mb-4 text-green-600">Achievement</h1>
                <p className="text-lg text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-300">
                    Discover More
                </button>
            </section>
            <section className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h1 className="text-4xl font-bold mb-4 text-red-600">Events</h1>
                <p className="text-lg text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300">
                    View Events
                </button>
            </section>
        </div>
    );
}