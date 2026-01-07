import { BusinessInfo, Product, ProductCategory } from "./types";

export const BUSINESS_INFO: BusinessInfo = {
  name: "HEMEKON PHARMACY AND SUPERMARKET",
  address: "154 Old Lagos-Asaba Road, Boji Boji, Agbor 321102, Delta State, Nigeria",
  phone: "+2349160655226",
  phoneDisplay: "0916 065 5226",
  whatsapp: "2349160655226", // Format for wa.me link
  hours: "Open Daily: 8:00 AM - 9:30 PM",
  rating: 4.4,
  reviewCount: 74
};

export const INITIAL_PRODUCTS: Product[] = [
  // Pharmacy
  {
    id: 1,
    name: "Paracetamol Extra (Pack)",
    category: ProductCategory.PHARMACY,
    price: 500,
    image: "https://picsum.photos/400/300?random=1",
    description: "Effective pain relief tablets.",
    inStock: true
  },
  {
    id: 2,
    name: "Vitamin C Supplements (1000mg)",
    category: ProductCategory.PHARMACY,
    price: 1500,
    image: "https://picsum.photos/400/300?random=2",
    description: "Immune system support daily supplement.",
    inStock: true
  },
  {
    id: 3,
    name: "First Aid Kit (Home)",
    category: ProductCategory.PHARMACY,
    price: 8500,
    image: "https://picsum.photos/400/300?random=3",
    description: "Essential medical supplies for home emergencies.",
    inStock: true
  },
  // Groceries
  {
    id: 4,
    name: "Premium Long Grain Rice (5kg)",
    category: ProductCategory.GROCERY,
    price: 9500,
    image: "https://picsum.photos/400/300?random=4",
    description: "High quality polished rice.",
    inStock: true
  },
  {
    id: 5,
    name: "Vegetable Cooking Oil (1L)",
    category: ProductCategory.GROCERY,
    price: 2200,
    image: "https://picsum.photos/400/300?random=5",
    description: "Pure vegetable oil for healthy cooking.",
    inStock: true
  },
  {
    id: 6,
    name: "Breakfast Cereal - Corn Flakes",
    category: ProductCategory.GROCERY,
    price: 1800,
    image: "https://picsum.photos/400/300?random=6",
    description: "Crunchy and delicious breakfast cereal.",
    inStock: true
  },
  // Frozen
  {
    id: 7,
    name: "Frozen Chicken (Whole)",
    category: ProductCategory.FROZEN,
    price: 4500,
    image: "https://picsum.photos/400/300?random=7",
    description: "Freshly frozen whole chicken.",
    inStock: true
  },
  {
    id: 8,
    name: "Mixed Vegetables (Frozen)",
    category: ProductCategory.FROZEN,
    price: 1200,
    image: "https://picsum.photos/400/300?random=8",
    description: "Ready to cook mixed veggies.",
    inStock: true
  },
  // Toiletries
  {
    id: 9,
    name: "Antibacterial Hand Wash",
    category: ProductCategory.TOILETRIES,
    price: 1100,
    image: "https://picsum.photos/400/300?random=9",
    description: "Kills 99.9% of germs. Moisturizing formula.",
    inStock: true
  },
  {
    id: 10,
    name: "Toilet Roll (Pack of 6)",
    category: ProductCategory.TOILETRIES,
    price: 2500,
    image: "https://picsum.photos/400/300?random=10",
    description: "Soft and absorbent tissue paper.",
    inStock: true
  }
];