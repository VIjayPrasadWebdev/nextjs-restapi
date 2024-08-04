import { NextResponse } from "next/server";

export let GET = () => {
  return NextResponse.json({
    result: [
      {
        id: 1,
        img: "assets/f1.jpg",
        producttype: "Party Shirt",
        productname: "Italian Saffron",
        price: 1255,
      },
      {
        id: 2,
        img: "assets/px-2.png",
        producttype: "Women Dress",
        productname: "Red Velvet",
        price: 2750,
      },
      {
        id: 3,
        img: "assets/p21.png",
        producttype: "jeans pant",
        productname: "Denim Jeans",
        price: 1930,
      },
      {
        id: 4,
        img: "assets/p36.png",
        producttype: "Kids Dress",
        productname: "Dark Star Hoodie",
        price: 955,
      },
      {
        id: 5,
        img: "assets/p33.png",
        producttype: "Kids Dress",
        productname: "Striped Outfit",
        price: 1050,
      },
      {
        id: 6,
        img: "assets/p30.png",
        producttype: "Women Dress",
        productname: "Dark Cindrella",
        price: 3150,
      },

      {
        id: 7,
        img: "assets/f3.jpg",
        producttype: "Party Shirt",
        productname: "Cuban Rise",
        price: 1399,
      },
      {
        id: 8,
        img: "assets/p29.png",
        producttype: "Women Dress",
        productname: "Sky Outfit",
        price: 2199,
      },
      {
        id: 9,
        img: "assets/px-3.png",
        producttype: "Women Dress",
        productname: "Sky Outfit",
        price: 1699,
      },
      {
        id: 10,
        img: "assets/f5.jpg",
        producttype: "Women Dress",
        productname: "Sky Outfit",
        price: 2199,
      },
      {
        id: 11,
        img: "assets/px-3.png",
        producttype: "Women Dress",
        productname: "Sky Outfit",
        price: 2199,
      },
      {
        id: 12,
        img: "assets/f6.jpg",
        producttype: "Women Dress",
        productname: "Sky Outfit",
        price: 2199,
      },
    ],
  });
};
