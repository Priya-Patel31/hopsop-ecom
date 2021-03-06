import { v4 as uuid } from "uuid";

export const products = [
  {
    "_id":uuid(),
    "brand": "Nike",
    "name": "Hiking BagPack",
    "category_name": "BagPack",
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "original_price": 2000,
    "discount_percent": 10,
    "fast_delivery": false,
    "in_stock": true,
    "rating": 2,
    "image_url": "https://cdn.shopify.com/s/files/1/1628/5651/products/product-22_large.png?v=1480682835"
  },
  {
    "_id":uuid(),
    "brand": "Puma",
    "name": "Dome Tent",
    "category_name": "Tent",
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "original_price": 1000,
    "discount_percent": 5,
    "fast_delivery": true,
    "in_stock": true,
    "rating": 5,
    "image_url": "https://cdn.shopify.com/s/files/1/1628/5651/products/img22_aa975432-3806-497c-989f-ca0fde413b40_large.jpg?v=1480931800"
  },
  {
    "_id":uuid(),
    "brand": "Nike",
    "name": "Dome Tent",
    "category_name": "Tent",
    "in_stock": false,
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "original_price": 1500,
    "discount_percent": 4,
    "fast_delivery": true,
    "rating": 1,
    "image_url": "https://cdn.shopify.com/s/files/1/1628/5651/products/img23_grande.jpg?v=1480924438"
  },
  {
    "_id":uuid(),
    "brand": "Puma",
    "name": "Dome Tent",
    "category_name": "Tent",
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "in_stock": true,
    "original_price": 2000,
    "discount_percent": 5,
    "fast_delivery": true,
    "rating": 4,
    "image_url": "https://cdn.shopify.com/s/files/1/1628/5651/products/img18_grande.jpg?v=1481085270"
  },
  {
    "_id":uuid(),
    "brand":"Sky Bags",
    "name": "Hiking BagPack",
    "category_name": "Bagpack",
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "in_stock": false,
    "original_price": 1500,
    "fast_delivery": true,
    "discount_percent": 9,
    "rating": 2,
    "image_url": "https://cdn.shopify.com/s/files/1/1628/5651/products/product-3_8c4968bf-1927-431e-af5b-330cfd3c1c26_large.png?v=1480682837"
  },
  {
    "_id":uuid(),
    "brand": "Lone Wolf Treestands",
    "name": "Rappel rack",
    "category_name": "Climbing stick",
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "in_stock": true,
    "original_price": 3000,
    "discount_percent": 18,
    "fast_delivery": true,
    "rating": 4,
    "image_url": "https://cdn.shopify.com/s/files/1/1628/5651/products/img28_grande.jpg?v=1481107210"
  },
  {
    "_id":uuid(),
    "brand": "Nike",
    "name": "Hiking BagPack",
    "category_name": "Bagpack",
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "in_stock": true,
    "original_price": 2000,
    "discount_percent": 5,
    "fast_delivery": true,
    "rating": 2,
    "image_url": "https://m.media-amazon.com/images/I/91+n2CwQrpS._SL1500_.jpg"
  },
  {
    "_id":uuid(),
    "brand": "",
    "name": "Ladder Golf",
    "category_name": "Hanging buckle",
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "in_stock": false,
    "original_price": 200,
    "discount_percent": 25,
    "fast_delivery": false,
    "rating": 1,
    "image_url": "https://cdn.shopify.com/s/files/1/1628/5651/products/img6_99f3d7d4-a317-4ebe-847b-58cf97713670_1024x1024.jpg?v=1480929388"
  },
  {
    "_id":uuid(),
    "brand": "Sky Bags",
    "name": "Hiking BagPack",
    "category_name": "Bagpack",
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "in_stock": true,
    "original_price": 1300,
    "discount_percent": 5,
    "fast_delivery": false,
    "rating": 3,
    "image_url": "https://m.media-amazon.com/images/I/91+n2CwQrpS._SL1500_.jpg"
  },
  {
    "_id":uuid(),
    "brand": "",
    "name": "Ladder Golf",
    "category_name": "Hanging buckle",
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "in_stock": true,
    "original_price": 400,
    "discount_percent": 28,
    "fast_delivery": false,
    "rating": 2,
    "image_url": "https://cdn.shopify.com/s/files/1/1628/5651/products/img4_large.jpg?v=1480481957"
  },
  {
    "_id":uuid(),
    "brand": "Reebok",
    "name": "GTX Hiking Boot",
    "category_name": "Boots",
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "in_stock": true,
    "original_price": 2000,
    "discount_percent": 12,
    "fast_delivery": false,
    "rating": 5,
    "image_url": "https://cdn.shopify.com/s/files/1/1628/5651/products/img14_large.jpg?v=1481087674"
  },
  {
    "_id":uuid(),
    "brand": "Reebok",
    "name": "GTX Hiking Boot",
    "category_name": "Boots",
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "in_stock": true,
    "original_price": 2000,
    "discount_percent": 26,
    "fast_delivery": false,
    "rating": 2,
    "image_url": "https://cdn.shopify.com/s/files/1/1628/5651/products/img13_03a14b83-2f39-4c8c-8053-af282c11def5_large.jpg?v=1481092393"
  },
  {
    "_id":uuid(),
    "brand": "Red Chief",
    "name": "Waterproof Boot",
    "category_name": "Boots",
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "in_stock": true,
    "original_price": 1000,
    "discount_percent": 30,
    "fast_delivery": false,
    "rating": 3,
    "image_url": "https://cdn.shopify.com/s/files/1/1628/5651/products/img12_large.jpg?v=1480925763"
  },
  {
    "_id":uuid(),
    "brand": "Nike",
    "name": "Solar Powered Helmet",
    "category_name": "Helmet",
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "in_stock": true,
    "original_price": 2000,
    "discount_percent": 15,
    "fast_delivery": false,
    "rating": 4,
    "image_url": "https://cdn.shopify.com/s/files/1/1628/5651/products/img8_97e0b66a-aba3-4110-a7b3-d10c4b646ea6.jpg?v=1480481947"
  },
  {
    "_id":uuid(),
    "brand": "Steelbird",
    "name": "Matt Helmet",
    "category_name": "Helmet",
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "in_stock": true,
    "original_price": 2224,
    "discount_percent": 10,
    "fast_delivery": false,
    "rating": 3,
    "image_url": "https://m.media-amazon.com/images/I/71yIg9Ui65L._SL1500_.jpg"
  },
  {
    "_id":uuid(),
    "brand": "Steelbird",
    "name": "Helmet Visor",
    "category_name": "Helmet",
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "in_stock": false,
    "original_price": 499,
    "discount_percent": 20,
    "fast_delivery": false,
    "rating": 5,
    "image_url": "https://m.media-amazon.com/images/I/51OPUYL5PiS._SX679_.jpg"
  },
  {
    "_id":uuid(),
    "brand": "Nova",
    "name": "Pairing Knife",
    "category_name": "Knife",
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "in_stock": true,
    "original_price": 300,
    "discount_percent": 4,
    "fast_delivery": false,
    "rating": 3,
    "image_url": "https://cdn.shopify.com/s/files/1/1628/5651/products/img10_large.jpg?v=1480928282"
  },
  {
    "_id":uuid(),
    "brand": "Nova",
    "name": "Pairing Knife",
    "category_name": "Knife",
    "details": "Etiam vehicula, sapien eget congue posuere, nisi diam mattis urna, in semper turpis nunc in odio. Aenean aliquet metus nec felis consequat luctus. Cras molestie sit amet sem sed fermentum",
    "in_stock": true,
    "original_price": 200,
    "discount_percent": 2,
    "fast_delivery": false,
    "rating": 4,
    "image_url": "https://cdn.shopify.com/s/files/1/1628/5651/products/img27_large.jpg?v=1480928282"
  }

];
