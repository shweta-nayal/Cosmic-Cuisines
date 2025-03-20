import "./MenuSection.css";

const menuItems = [
  { name: "Cosmic Burger", price: "₹299", desc: "Zero-gravity infused burger" },
  { name: "Galactic Pasta", price: "₹349", desc: "With stardust cheese" },
  { name: "Neon Smoothie", price: "₹199", desc: "Glowing space drink" }
];

const MenuSection = () => {
  return (
    <div id="menu" className="py-16 bg-black text-white text-center">
      <h2 className="text-5xl font-bold text-glow">Galactic Menu</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {menuItems.map((item, index) => (
          <div key={index} className="p-6 border border-blue-500 rounded-lg hover:scale-105 transition bg-gray-800 shadow-lg">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-blue-400">{item.price}</p>
            <p className="text-sm opacity-80">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
