export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  description: string;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Premium Headphones",
    price: 299.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1658927420987-488ade098001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI4OTI1NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Audio",
    description: "Experience crystal-clear sound quality with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and comfortable over-ear design. Perfect for music lovers and professionals alike.",
    reviews: 245
  },
  {
    id: "2",
    name: "Professional MacBook Pro",
    price: 1899.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1677157561132-4f9e282a1684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjI4MzM1ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Computers",
    description: "The latest MacBook Pro with M2 chip delivers incredible performance for professionals. Featuring a stunning Retina display, up to 20 hours of battery life, and seamless integration with your Apple ecosystem.",
    reviews: 892
  },
  {
    id: "3",
    name: "Smart Fitness Watch",
    price: 399.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1719744755507-a4c856c57cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwd2VhcmFibGV8ZW58MXx8fHwxNzYyODM3NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Wearables",
    description: "Track your fitness goals with precision using our advanced smartwatch. Features GPS tracking, heart rate monitoring, sleep analysis, and over 100 workout modes to help you stay active and healthy.",
    reviews: 567
  },
  {
    id: "4",
    name: "Professional DSLR Camera",
    price: 1499.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1760259203822-30265e7e4da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjI4MTU2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Cameras",
    description: "Capture stunning photos and videos with this professional-grade DSLR camera. Features a 45MP sensor, 4K video recording, and advanced autofocus system for perfect shots every time.",
    reviews: 423
  },
  {
    id: "5",
    name: "Portable Bluetooth Speaker",
    price: 149.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1674303324806-7018a739ed11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHNwZWFrZXJ8ZW58MXx8fHwxNzYyODAzMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Audio",
    description: "Take your music anywhere with this waterproof Bluetooth speaker. Delivers powerful 360-degree sound, 12-hour battery life, and rugged design perfect for outdoor adventures.",
    reviews: 734
  },
  {
    id: "6",
    name: "Latest Smartphone Pro",
    price: 999.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1646718683720-076fd1c0b3ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwZGV2aWNlfGVufDF8fHx8MTc2MjgwOTk2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Phones",
    description: "Experience the future with our latest smartphone featuring a stunning OLED display, advanced triple-camera system, and lightning-fast 5G connectivity. All-day battery life and premium build quality.",
    reviews: 1245
  },
  {
    id: "7",
    name: "Digital Drawing Tablet",
    price: 599.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1760708369071-e8a50a8979cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjgzMzgzNHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tablets",
    description: "Perfect for digital artists and creators, this tablet features a high-resolution display, pressure-sensitive stylus, and powerful processor for seamless creative workflows.",
    reviews: 312
  },
  {
    id: "8",
    name: "Modern Electronics Bundle",
    price: 799.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJvbmljcyUyMGdhZGdldHxlbnwxfHx8fDE3NjI3OTQ5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Bundles",
    description: "Complete electronics bundle including wireless keyboard, mouse, and premium accessories. Perfect starter kit for your home office or creative workspace setup.",
    reviews: 189
  }
];

export const categories = [
  "All",
  "Audio",
  "Computers",
  "Wearables",
  "Cameras",
  "Phones",
  "Tablets",
  "Bundles"
];
