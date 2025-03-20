import "./BookingSection.css";

const BookingSection = () => {
  return (
    <div id="booking" className="py-16 text-center bg-gray-900 text-white">
      <h2 className="text-5xl font-bold text-glow">Reserve Your Space Table</h2>
      <p className="mt-2 opacity-75">Book a table at Mars Lounge or Nebula Zone</p>
      <button className="mt-6 px-8 py-3 text-lg font-semibold bg-green-500 hover:bg-green-600 transition transform hover:scale-105 rounded-lg shadow-lg">
        Book Now
      </button>
    </div>
  );
};

export default BookingSection;
