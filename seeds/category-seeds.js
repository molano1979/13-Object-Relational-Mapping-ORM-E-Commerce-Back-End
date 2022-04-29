const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Shirts",
  },
  {
    category_name: "Shorts",
  },
  {
    category_name: "Music",
  },
  {
    category_name: "Shoes",
  },
  {
    category_name: "Hats",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;