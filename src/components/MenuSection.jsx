import React from "react";
import "./MenuSection.css";

import chineseImg from "../assets/img1.jpg";
import indianImg from "../assets/img2.jpg";
import italianImg from "../assets/img3.jpg";
import americanImg from "../assets/img4.jpg";
import dessertsImg from "../assets/drinks.jpg";
import drinksImg from "../assets/drinks.jpg";

const menuCategories = [
  {
    name: "Chinese",
    image: chineseImg,
    description: "Savor the bold flavors of Chinese cuisine, from dim sum to stir-fried noodles.",
  },
  {
    name: "Indian",
    image: indianImg,
    description: "Enjoy aromatic curries, spicy biryanis, and delicious tandoori dishes.",
  },
  {
    name: "Italian",
    image: italianImg,
    description: "Indulge in classic Italian pasta, wood-fired pizzas, and creamy risottos.",
  },
  {
    name: "American",
    image: americanImg,
    description: "Try our juicy burgers, crispy fries, and mouth-watering BBQ dishes.",
  },
  {
    name: "Desserts",
    image: dessertsImg,
    description: "Delight in heavenly cakes, pastries, and ice creams.",
  },
  {
    name: "Drinks",
    image: drinksImg,
    description: "Refresh yourself with our signature cocktails, mocktails, and beverages.",
  },
];

const MenuSection = () => {
  return (
    <>
      {/* NAVBAR */}
      {/* <nav className="navbar">
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav> */}

      {/* MENU SECTION */}
      <div className="menu-section">
        {/* TITLE */}
        <h1 className="menu-heading">Explore Our Space-Themed Menu</h1>

        {/* MENU CARDS */}
        <div className="menu-container">
          {menuCategories.map((category, index) => (
            <div key={index} className="menu-card">
              <img src={category.image} alt={category.name} className="menu-image" />
              <h2 className="menu-name">{category.name}</h2>
              <p className="menu-description">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuSection;
