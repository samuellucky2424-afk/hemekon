export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
}

export enum ProductCategory {
  PHARMACY = 'Pharmacy',
  GROCERY = 'Groceries',
  FROZEN = 'Frozen Foods',
  TOILETRIES = 'Toiletries & Household',
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  items: CartItem[];
  total: number;
  date: string;
  status: 'Pending' | 'Completed';
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  hours: string;
  rating: number;
  reviewCount: number;
}