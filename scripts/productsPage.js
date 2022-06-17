
// Import Navbar and footer HTML from Components


import {
  navbar,
} from "../components/navbar.js";

document.getElementById("navbar_container").innerHTML = navbar();


// ----all products data--// start here---|




let data = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_600x.png?v=1642405569",
    name: "boAt Airdopes 131",
    price: "2990",
    discountPrice: "999",
    yousave: "2990" - "999" + " (67%)",
    category: "Wireless Earbuds",
    color: "CrimsonCream",
    save: " 67%",
    banner:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_Catgry-web_7cf20899-eb4a-427f-9a8a-799d7e1c37fa.jpg?v=1634716734",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m2_852f9f1f-5498-4e5a-b6a2-0645a7abbc41_400x.png?v=1639153081",

    name: "boAt Rockerz 333 Pro",
    price: "2990",
    discountPrice: "1699",
    yousave: "2990" - "1639" + " (60%)",
    category: "Wireless Headphones",
    color: "Black",
    save: " 60%",
    banner:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz-_Catgry_web_d201c6e3-e067-4280-a127-56a2e1b51399.jpg?v=1634806683",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/back_600x.png?v=1648723802",
    name: "boAt Airdopes 141",
    price: "4490",
    discountPrice: "1499",
    yousave: "4900" - "1499" + " (67%)",
    category: "Wireless Earbuds",
    color: "Black",
    save: " 67%",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mint--orange_200x.png?v=1634371640",
    name: "TRebel BassHeads 100",
    price: "999",
    discountPrice: "333",
    yousave: "999" - "333" + " (60%)",
    category: "Wired Earphones",
    color: "Mint Orange",
    save: " 60%",
    banner:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Bassheads-_Catgry_web.jpg?v=1634717143",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_600x.png?v=1650387008",
    name: "boAt Watch Xtend‌",
    price: "7990",
    discountPrice: "3199",
    yousave: "7990" - "3199" + " (60%)",
    category: "Smart Watches",
    color: "Pitch Black",
    save: " 60%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_200x.png?v=1625046144",
    name: "boAt Rockerz 550",
    price: "4999",
    discountPrice: "1999",
    yousave: "4999" - "1999" + " (60%)",
    category: "Wireless Headphones",
    color: "Red",
    save: " 60%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_d6503e2e-e0b1-4c4e-af28-2164903baf9f_200x.png?v=1640237576",
    name: "boAt Watch Iris",
    price: "11999",
    discountPrice: "4399",
    yousave: "11999" - "4399" + " (56%)",
    category: "Smart Watches",
    color: "Sporty Blue",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3e35681e-bcb1-449c-a58a-2d43e8b00bf4_400x.png?v=1633518105",
    name: "boAt Stone 1200",
    price: "6990",
    discountPrice: "3999",
    yousave: "6990" - "3999" + " (51%)",
    category: "Wireless Speakers",
    color: "Blue",
    save: " 51%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_0c484c51-8b11-487b-bd27-c31b09780700_200x.png?v=1648723865",
    name: "TRebel Airdopes 141",
    price: "4,490",
    discountPrice: "1499",
    yousave: "4490" - "1499" + " (67%)",
    category: "Wireless Earbuds",
    color: "White",
    save: " 67%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5752f5e4-89e0-4f84-b7fe-4d9f85771046_400x.png?v=1625157753",
    name: "boAt Watch Flash",
    price: "6990",
    discountPrice: "2499",
    yousave: "6990" - "2499" + " (56%)",
    category: "Smart Watches",
    color: "Black",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255-pro-green_fb9aa506-5e26-4d97-b745-ca48aa7c0234_600x.png?v=1614587254",
    name: "TRebel Rockerz 255 Pro",
    price: "3499",
    discountPrice: "1499",
    yousave: "3499" - "1499" + " (57%)",
    category: "Wireless Headphones",
    color: "Blue",
    save: " 57%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_b6960b52-58d9-4e72-bd08-e4ae4f111bb2_200x.png?v=1645517420",
    name: "TRebel Airdopes 131",
    price: "2990",
    discountPrice: "1299",
    yousave: "2990" - "1299" + " (57%)",
    category: "Wireless Earbuds",
    color: "Pink",
    save: " 57%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_8549ad38-acec-45d6-bba4-8b202a9bfdc1_400x.png?v=1646976976",
    name: "boAt Stone 500",
    price: "2990",
    discountPrice: "1999",
    yousave: "2990" - "1999" + " (56%)",
    category: "Wireless Speakers",
    color: "Black",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-images-2_200x.png?v=1655198531",
    name: "boAt Watch Xtend sport",
    price: "6990",
    discountPrice: "2499",
    yousave: "6990" - "2499" + " (64%)",
    category: "Smart Watches",
    color: "Black",
    save: " 64%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/08119dcb-d777-44af-b556-3492e5b4b7f0_200x.png?v=1625046271",
    name: "boAt Bassheads 900",
    price: "2490",
    discountPrice: "849",
    yousave: "2490" - "849" + " (66%)",
    category: "Wired Earphones",
    color: "Black",
    save: " 66%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-black_600x.png?v=1612765376",
    name: "boAt Airdopes 121 v2",
    price: "2999",
    discountPrice: "1299",
    yousave: "2999" - "1299" + " (57%)",
    category: "Wireless Earbuds",
    color: "Black",
    save: " 57%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1200f_main2_400x.png?v=1632893558",
    name: "boAt Stone 1200F",
    price: "6990",
    discountPrice: "3399",
    yousave: "6990" - "3399" + " (51%)",
    category: "Wireless Speakers",
    color: "Orange",
    save: " 51%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-2_8c54df4a-498c-4a19-8427-a89bce9b368e_400x.png?v=1616582236",
    name: "boAt BLITZ 1500",
    price: "6990",
    discountPrice: "3499",
    yousave: "6990" - "3499" + " (50%)",
    category: "Wireless Speakers",
    color: "Black",
    save: " 50%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/20dbeecf-4dc2-48c6-8dae-8a31f1746f44_400x.png?v=1625046513",
    name: "boAt Xplorer‌‌ O2",
    price: "5990",
    discountPrice: "2899",
    yousave: "5990" - "2899" + " (52%)",
    category: "Smart Watches",
    color: "Black",
    save: " 52%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2e056443-6505-46ef-aa88-e20e2778b0a9_400x.png?v=1625046016",
    name: "boAt Airdopes 441 Wireless Earbuds",
    price: "5999",
    discountPrice: "2499",
    yousave: "5999" - "2499" + " (58%)",
    category: "Wireless Earbuds",
    color: "Black",
    save: " 58",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ltg1_400x.png?v=1623813149",
    name: "boAt 500 Cable 1 Meter",
    price: "1499",
    discountPrice: "599",
    yousave: "1499" - "599" + " (56%)",
    category: "Mobile Accessories",
    color: "Black",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/product-Image_600x.png?v=1625813323",
    name: "boAt Airdopes 101 Made In India",
    price: "2990",
    discountPrice: "1499",
    yousave: "2990" - "1499" + " (50%)",
    category: "Wireless Earbuds",
    color: "Black",
    save: " 50%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main6_2_8e1cdd84-4a34-4e92-97c5-0e1d4ba6da46_200x.png?v=1646393710",
    name: "TRebel Watch Xtend‌",
    price: "7990",
    discountPrice: "3499",
    yousave: "7990" - "3499" + " (56%)",
    category: "Smart Watches",
    color: "Sandy Cream",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/86b7c390-4a4b-45d7-91e1-65007653b71e_600x.png?v=1625045261",
    name: "boAt Airdopes 381 Wireless Earbuds",
    price: "4990",
    discountPrice: "1599",
    yousave: "4990" - "1599" + " (68%)",
    category: "Wireless Earbuds",
    color: "Black",
    save: " 68%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img_e38245f3-a843-4604-8698-797f66913dd7_400x.png?v=1638944254",
    name: "boAt WCD 22.5W QCPD",
    price: "2490",
    discountPrice: "799",
    yousave: "2499" - "799" + " (63%)",
    category: "Mobile Accessories",
    color: "Indi Silver",
    save: " 63%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/6875f924-20d3-4cb6-933d-5319504c7baa_600x.png?v=1625046269",
    name: "boAt 3A Turbo Car Charger",
    price: "999",
    discountPrice: "499",
    yousave: "999" - "499" + " (56%)",
    category: "Mobile Accessories",
    color: "Black",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/MainImages_600x.png?v=1654610457",
    name: "boAt Rockerz 103 Pro",
    price: "2490",
    discountPrice: "899",
    yousave: "2490" - "899" + " (64%)",
    category: "Wireless Headphones",
    color: "Black",
    save: " 64%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/451v2_black_200x.png?v=1641801490",
    name: "boAt Airdopes 451v2",
    price: "5999",
    discountPrice: "1,999",
    yousave: "5999" - "1999" + " (67%)",
    category: "Wireless Earbuds",
    color: "Black",
    save: " 67%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_d295e9dc-ce87-4493-b310-037a7ce494be_400x.png?v=1634042688",
    name: "boAt AUX L500 Made In India",
    price: "499",
    discountPrice: "299",
    yousave: "499" - "299" + " (40%)",
    category: "Mobile Accessories",
    color: "Indi Silver",
    save: " 40%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/bassheads-100-make-in-india-green_600x.png?v=1613457339",
    name: "boAt BassHeads 100 Made in India",
    price: "999",
    discountPrice: "399",
    yousave: "999" - "399" + " (60%)",
    category: "Wired Earphones",
    color: "Green",
    save: " 60%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3f927a50-8a07-4391-9a60-fce609bcf43b_200x.png?v=1625046023",
    name: "boAt BassHeads 220",
    price: "999",
    discountPrice: "555",
    yousave: "999" - "555" + " (40%)",
    category: "Wired Earphones",
    color: "Orange",
    save: " 40%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_9230f72d-9f86-4aec-9ae2-a7d87d332877_600x.png?v=1647426798",
    name: "boAt Airdopes 411 ANC",
    price: "4990",
    discountPrice: "1899",
    yousave: "4990" - "1899" + " (62%)",
    category: "Wireless Earbuds",
    color: "Black",
    save: " 62%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0d8d4561-6985-44ba-9e70-4998c40f4df3_d851f1e5-1237-440a-8703-ebf06d2810c5_200x.png?v=1646390147",
    name: "Trebel Rockerz 550",
    price: "4999",
    discountPrice: "1999",
    yousave: "4999" - "1999" + " (56%)",
    category: "Wireless Headphones",
    color: "Black",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_8c4844c5-4a79-4549-a4ab-af2d10efca7e_200x.png?v=1643619646",
    name: "boAt Bassheads",
    price: "1990",
    discountPrice: "999",
    yousave: "1990" - "999" + " (56%)",
    category: "Wired Earphones",
    color: "Blue",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-381-mediumspinggreen_43d63b08-d281-4c88-aa0c-ab9fab9add89_600x.png?v=1622527413",
    name: "TRebel Airdopes 381",
    price: "4990",
    discountPrice: "1999",
    yousave: "4990" - "1999" + " (60%)",
    category: "Wireless Earbuds",
    color: "GreenishBlue",
    save: " 60%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3.1_46f69d85-75a0-483c-a215-2a29ee068b3c_200x.png?v=1646394746",
    name: "TRebel Watch Blaze",
    price: "6990",
    discountPrice: "3999",
    yousave: "6990" - "3999" + " (56%)",
    category: "Smart Watches",
    color: "Blue",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/25666ea3-a4f3-4dfb-9eee-b5f021805a95_400x.png?v=1625046511",
    name: "boAt BassHeads 162",
    price: "1290",
    discountPrice: "449",
    yousave: "1290" - "449" + " (65%)",
    category: "Wired Earphones",
    color: "Black",
    save: " 65%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/6b1c2b0b-84b2-499f-a9e0-b25e66ce9b5f_200x.png?v=1625046597",
    name: "boAt BassHeads 152",
    price: "1290",
    discountPrice: "449",
    yousave: "1290" - "449" + " (56%)",
    category: "Wired Earphones",
    color: "Navy Blue",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7925e2ed-89e7-4247-8f27-380ef0178294_600x.png?v=1625045867",
    name: "boAt Airdopes 402 ",
    price: " 5990",
    discountPrice: "1699",
    yousave: "5990" - "1699" + " (72%)",
    category: "Wireless Earbuds",
    color: "Black",
    save: " 72%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/MAIN2PRIMIA_400x.png?v=1652536765",
    name: "boAt Watch Primia",
    price: "8990",
    discountPrice: "4499",
    yousave: "4499" - "8990" + " (50%)",
    category: "Smart Watches",
    color: "Blue",
    save: " 50%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8fd33d93-0ea1-46a3-89d6-6cad41e95741_600x.png?v=1625046503",
    name: "boAt BassHeads 122",
    price: "1290",
    discountPrice: "499",
    yousave: "1290" - "499" + " (65%)",
    category: "Wired Earphones",
    color: "Black",
    save: " 65%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/CA131-main_600x.png?v=1639987804",
    name: "boAt Airdopes 131",
    price: "2990",
    discountPrice: "1599",
    yousave: "2990" - "1599" + " (47%)",
    category: "Wireless Earbuds",
    color: "Blue",
    save: " 47%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Pb9-1-2_400x.png?v=1613457287",
    name: "boAt Energyshroom PB9",
    price: "1999",
    discountPrice: "949",
    yousave: "1999" - "949" + " (53%)",
    category: "Mobile Accessories",
    color: "Midnight Blue",
    save: " 53%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/88dfba7c-19fd-4aef-a278-41c0d2d35366_600x.png?v=1624882639",
    name: "TRebel Rockerz 450",
    price: "3990",
    discountPrice: "1499",
    yousave: "3990" - "1499" + " (62%)",
    category: "Wireless Headphones",
    color: "Light Blue",
    save: " 62%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_200x.png?v=1626505847",
    name: "boAt Watch‌ Delta",
    price: "6990",
    discountPrice: "2999",
    yousave: "6990" - "2999" + " (57%)",
    category: "Smart Watches",
    color: "Black",
    save: " 57%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/d6eddcd1-2d1b-47a6-9103-77e629241a09_200x.png?v=1625045647",
    name: "boAt Rockerz 600",
    price: "3990",
    discountPrice: "1799",
    yousave: "3990" - "1799" + " (56%)",
    category: "Wireless Headphones",
    color: "Sandybrown",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/A175Packaging.1804_800x.png?v=1653396760",
    name: "boAt Airdopes 175",
    price: " 2990",
    discountPrice: "1699",
    yousave: "2990" - "1699" + " (43%)",
    category: "Wireless Earbuds",
    color: "Black",
    save: " 43%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_200x.png?v=1626505847",
    name: "boAt Watch‌ Delta",
    price: "6990",
    discountPrice: "2999",
    yousave: "6990" - "2999" + " (57%)",
    category: "Smart Watches",
    color: "Black",
    save: " 57%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Green_4_400x.png?v=1651215796",
    name: "‌boAt Watch Mystiq",
    price: "6990",
    discountPrice: "3119",
    yousave: "6990" - "3119" + " (54%)",
    category: "Smart Watches",
    color: "Green",
    save: " 54%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_cab8e6af-49e2-4c74-92f8-0d44b689d4fd_200x.png?v=1639838336",
    name: "boAt Floatpad 300",
    price: "1990",
    discountPrice: "999",
    yousave: "1990" - "999" + " (56%)",
    category: "Mobile Accessories",
    color: "Black",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/100-wireless-green_200x.png?v=1612770156",
    name: "boAt 100 Wireless",
    price: "2999",
    discountPrice: "1499",
    yousave: "2999" - "1499" + " (56%)",
    category: "Wireless Headphones",
    color: "Olivedrab",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-441-pro-blue_b1e6cf66-5294-4b8c-ba62-f2cf6e3b80a3_600x.png?v=1614540751",
    name: "TRebel Airdopes 441",
    price: "5999",
    discountPrice: "2999",
    yousave: "5999" - "2999" + " (50%)",
    category: "Wireless Earbuds",
    color: "Unique Blue",
    save: " 50%",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_grey_a3b0524e-88e4-4b0e-942b-21ead4ae67fc_600x.png?v=1635140772",
    name: "boAt Watch‌ Vertex",
    price: "6990",
    discountPrice: "2299",
    yousave: "6990" - "2299" + " (67%)",
    category: "Smart Watches",
    color: "Grey",
    save: " 67%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Product-Image_9acbc667-f247-465a-b36c-e9fe8b4265ec_200x.png?v=1626862564",
    name: "boAt Airdopes 501",
    price: "9990",
    discountPrice: "3999",
    yousave: "9990" - "3999" + " (50%)",
    category: "Wireless Earbuds",
    color: "Black",
    save: " 50%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103-wireless-blue_200x.png?v=1613457313",
    name: "boAt 103 Wireless",
    price: "1990",
    discountPrice: "1199",
    yousave: "1990" - "1199" + " (56%)",
    category: "Wireless Headphones",
    color: "Blue",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-grey_200x.png?v=1636609395",
    name: "boAt Watch Zenit",
    price: "6990",
    discountPrice: "1999",
    yousave: "6990" - "1999" + " (71%)",
    category: "Smart Watches",
    color: "Silver",
    save: " 71%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1main_600x.png?v=1654719427",
    name: "boAt Airdopes 191G",
    price: "3490",
    discountPrice: "1499",
    yousave: "3490" - "1499" + " (60%)",
    category: "Wireless Earbuds",
    color: "Red",
    save: "60%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2c9f9a3f-84d6-4470-a077-41994c6a26c9_400x.png?v=1624897000",
    name: "boAt Stone 170",
    price: "2990",
    discountPrice: "1299",
    yousave: "2990" - "1299" + " (57%)",
    category: "Wireless Speakers",
    color: "Black",
    save: " 57%",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1a5b7ccf-a2fa-4c06-963d-bfe228b0b0eb_400x.png?v=1625046391",
    name: "TRebel BassHeads",
    price: "1490",
    discountPrice: "599",
    yousave: "1490" - "599" + " (56%)",
    category: "Wired Earphones",
    color: "Blue",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4d6c575d-bb23-4ba3-a144-eeabb6ae0a9a_200x.png?v=1625045497",
    name: "boAt Rockerz 370",
    price: "2499",
    discountPrice: "999",
    yousave: "2499" - "999" + " (56%)",
    category: "Wireless Headphones",
    color: "Red",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-3_585b7d34-c9b3-4fc4-912d-92ebbb04a410_200x.png?v=1646391063",
    name: "TRebel Rockerz 333",
    price: "3990",
    discountPrice: "14999",
    yousave: "3990" - "1499" + " (62%)",
    category: "Wireless Headphones",
    color: "Navy Blue",
    save: " 62%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main---1_400x.png?v=1640081208",
    name: "boAt Party Pal 50",
    price: "7990",
    discountPrice: "3999",
    yousave: "7990" - "3999" + " (50%)",
    category: "Wireless Speakers",
    color: "Black",
    save: " 50%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_0a0b0dd1-2a5d-4887-afad-7593ecf06ca1_400x.png?v=1640073281",
    name: "boAt Stone 620",
    price: "3990",
    discountPrice: "1999",
    yousave: "3990" - "1999" + " (50%)",
    category: "Wireless Speakers",
    color: "Blue",
    save: " 59%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ce5655c3-e83f-47ad-8f9f-6db17f896a1b_400x.png?v=1625045737",
    name: "boAt Stone 260",
    price: "2490",
    discountPrice: "1499",
    yousave: "2490" - "1499" + " (56%)",
    category: "Wireless Speakers",
    color: "Gray",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e4faf0d0-1ce3-4a3c-8825-fbf5487b6611_600x.png?v=1625045119",
    name: "boAt Stone 260",
    price: "2490",
    discountPrice: "1499",
    yousave: "2490" - "1499" + " (56%)",
    category: "Wireless Speakers",
    color: "SteelBlue",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/450ca_400x.png?v=1639990534",
    name: "boAt Rockerz 450",
    price: "3990",
    discountPrice: "1999",
    yousave: "3990" - "1999" + " (50%)",
    category: "Limited Edition",
    color: "Blue",
    save: " 50%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_f42fc2b0-06e8-4b30-b570-b88583c504a1_400x.png?v=1645083199",
    name: "boAt Airdopes 381",
    price: "4999",
    discountPrice: "2499",
    yousave: "4999" - "2499" + " (50%)",
    category: "Limited Edition",
    color: "Purple",
    save: " 50%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_6421d0c5-013e-4e7d-b9c1-37f32e0763ba_400x.png?v=1645016542",
    name: "boAt Rockerz 550",
    price: "4999",
    discountPrice: "1999",
    yousave: "4999" - "1999" + " (56%)",
    category: "Limited Edition",
    color: "BlueYellow",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ppouch_main_400x.png?v=1646892645",
    name: "TRebel Accessory",
    price: "899",
    discountPrice: "499",
    yousave: "899" - "499" + " (56%)",
    category: "Limited Edition",
    color: "Blue",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img_1_400x.png?v=1615965629",
    name: "boAt Rockerz 450",
    price: "3990",
    discountPrice: "1999",
    yousave: "3990" - "1999" + " (50%)",
    category: "Limited Edition",
    color: "White",
    save: " 50%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-1_400x.png?v=1615964199",
    name: "boAt Airdopes 441",
    price: "5999",
    discountPrice: "2499",
    yousave: "5999" - "2499" + " (50%)",
    category: "Limited Edition",
    color: "Aztec Fusion",
    save: " 50%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190im_200x.png?v=1639989652",
    name: "boAt Stone 190-IronMan",
    price: "2999",
    discountPrice: "1999",
    yousave: "2999" - "1999" + " (57%)",
    category: "Limited Edition",
    color: "Iron Red",
    save: " 57%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190a_400x.png?v=1640070142",
    name: "boAt Stone 190",
    price: "2999",
    discountPrice: "1299",
    yousave: "2999" - "1299" + " (56%)",
    category: "Limited Edition",
    color: "Blue",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fe8dd999-0983-4e66-8a01-413dd837adaf_400x.png?v=1625046262",
    name: "boAt Rockerz 600",
    price: "4990",
    discountPrice: "2499",
    yousave: "4990" - "" + " (50%)",
    category: "Limited Edition",
    color: "Purple",
    save: " 50%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a94ee4f6-571a-4b6d-afed-6656650f48f9_200x.png?v=1625046509",
    name: "boAt Rockerz 255",
    price: "2990",
    discountPrice: "1299",
    yousave: "2990" - "1299" + " (56%)",
    category: "Limited Edition",
    color: "Purple",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_f3aa2756-01f3-4e39-80bc-7b4f6551c7aa_400x.png?v=1625748159",
    name: "boAt Immortal 1000D",
    price: "5900",
    discountPrice: "2299",
    yousave: "5590" - "2299" + " (62%)",
    category: "Gaming",
    color: "Black",
    save: " 62%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_2_400x.png?v=1632715015",
    name: "boAt Immortal 1300",
    price: "9990",
    discountPrice: "2899",
    yousave: "9990" - "2899" + " (71%)",
    category: "Gaming",
    color: "Red",
    save: " 71%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_65ff249b-c4f8-4dad-ae88-2aae76723ce2_600x.png?v=1643477993",
    name: "boAt Immortal 700",
    price: "6990",
    discountPrice: "2499",
    yousave: "6990" - "2499" + " (56%)",
    category: "Gaming",
    color: "Black",
    save: " 56%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_400x.png?v=1643632679",
    name: "boAt Immortal 400",
    price: "6990",
    discountPrice: "1999",
    yousave: "6990" - "1999" + " (71%)",
    category: "Gaming",
    color: "Black",
    save: " 71%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/601_1_600x.png?v=1641489474",
    name: "boAt Airdopes 601 ANC",
    price: "9990",
    discountPrice: "3999",
    yousave: "9990" - "3999" + " (60%)",
    category: "Wireless Earbuds",
    color: "Black",
    save: " 60%",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Main_BOAT-BLITZ-2000_400x.png?v=1616870076",
    name: "boAt BLITZ 2000",
    price: "8990",
    discountPrice: "4999",
    yousave: "8990" - "4999" + " (44%)",
    category: "Wireless Speakers",
    color: "Green",
    save: " 44%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-bl_400x.png?v=1625748090",
    name: "boAt Immortal 200",
    price: "4990",
    discountPrice: "1499",
    yousave: "4990" - "1499" + " (70%)",
    category: "Gaming",
    color: "Blue",
    save: " 70%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5e508818-4384-42ec-bde0-670cf7e06e70_400x.png?v=1625045531",
    name: "boAt AUX 500",
    price: "599",
    discountPrice: "349",
    yousave: "599" - "349" + " (42%)",
    category: "Mobile Accessories",
    color: "Gold",
    save: " 42%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/dual-port-car-charger_200x.png?v=1613457337",
    name: "boAt Dual QC Port",
    price: "1299",
    discountPrice: "549",
    yousave: "1299" - "549" + " (60%)",
    category: "Mobile Accessories",
    color: "Black",
    save: " 60%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_541e4150-6924-467d-b193-1793daa2e283_200x.png?v=1648119560",
    name: "boAt Deuce 500",
    price: "899",
    discountPrice: "499",
    yousave: "899" - "499" + " (50%)",
    category: "Mobile Accessories",
    color: "Red",
    save: " 50%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7d635fe4-8c4c-4c4b-8c00-6065455dc608_400x.png?v=1625046386",
    name: "boAt BassHeads 242",
    price: "1490",
    discountPrice: "449",
    yousave: "1490" - "499" + " (70%)",
    category: "Wired Earphones",
    color: "Black",
    save: " 70%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_35ad08a3-ed67-4b87-b7a6-e4d8ae22847d_200x.png?v=1646391225",
    name: "TRebel Nirvanaa 751 ANC",
    price: "7990",
    discountPrice: "3999",
    yousave: "7990" - "3999" + " (50%)",
    category: "Wireless Headphones",
    color: "Sterling Silver",
    save: " 50%",
  },
];


let productdetails = JSON.parse(localStorage.getItem("detailsOfProduct"))|| [];
localStorage.setItem("productsdata", JSON.stringify(data));
var cartdata = JSON.parse(localStorage.getItem("cartsData")) || [];

function display(data) {
  document.getElementById("container").innerHTML = null;

  data.forEach(function (ele) {

    let div = document.createElement("div");
    div.setAttribute("class", "cards");
    div.style.cursor="pointer"
     div.addEventListener("click", function () {
       onclick(ele);
     });

     let yousave=document.createElement("div")
     yousave.innerText= "YOU SAVE"+ele.save
     yousave.setAttribute("class","yousave")

    let img = document.createElement("img");
    img.src = ele.image;
    img.setAttribute("id", "img");
   

    let div1 = document.createElement("div");
    div1.setAttribute("class", "content");
    div1.style.cursor="pointer"

    let h4 = document.createElement("h4");
    h4.innerText = ele.name;

    let div2 = document.createElement("div");
    div2.setAttribute("class", "row1");

    let img1 = document.createElement("img");
    img1.src =
      "https://t4.ftcdn.net/jpg/01/07/90/75/240_F_107907549_nGPdxVXnDgHqQ1lSJlYKidLLfWb6PuN2.jpg";

    let div0 = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = "4.8 | 915 reviews";
    div0.append(p);

    let divimg = document.createElement("div");
    let img2 = document.createElement("img");
    img2.src = "https://cdn-icons-png.flaticon.com/128/7595/7595571.png";
    divimg.append(img2);

    div2.append(img1, div0, divimg);

    let hr = document.createElement("hr");

    div1.append(h4, div2);

    let div3 = document.createElement("div");
    div3.setAttribute("class", "row2");

    let dp = document.createElement("div");
    dp.innerText = "₹" + ele.discountPrice;

    let price = document.createElement("div");
    price.innerText = "₹" + ele.price;

    div3.append(dp, price);

    let div4 = document.createElement("div");
    div4.innerText = "You Save :₹ " + ele.yousave;
    div4.setAttribute("class", "row3");

    let btn = document.createElement("button");
    btn.innerText = "ADD TO CART";
    btn.style.cursor = "pointer";
    btn.setAttribute("id","cartbutton")
    btn.addEventListener("click", function () {
      addtoCart(ele);
    });

    div1.append(div2, hr, div3, div4, btn);
    div.append(yousave,img, div1);

    document.getElementById("container").append(div);
    
  });
}
display(data);

function addtoCart(ele) {
  if (cartdata!=false){
    var check =false;

    for (var i=0;i<cartdata.length;i++){
      if(ele.name==cartdata[i].name){
        check=true;
        break;

      }
     
    }
    if (check){
      alert("This product is already added..!")
    }
    else{
      cartdata.push(ele);
      localStorage.setItem("cartsData", JSON.stringify(cartdata));
      alert("Product added successfully.")
    }
  }
  else{

  cartdata.push(ele);

  localStorage.setItem("cartsData", JSON.stringify(cartdata));
  alert("Product added successfully.");
  
  }
}

function onclick(ele) {
   productdetails.push(ele)
  localStorage.setItem("detailsOfProduct", JSON.stringify(productdetails));
  window.location.href = "./product1.html";
}

var Featured = document.getElementById("sortby");

Featured.addEventListener("change", myfun2);

function myfun2() {
  if (Featured.value == "Featured") {
    display(data);
    

 document.getElementById("h1").innerText = Featured.value;
 document.getElementById("productvise").innerText="/ "+ Featured.value;
 
   
  } else {
    let filtered = data.filter(function (ele) {
      return ele.category == Featured.value; 
    });
    display(filtered);

    document.getElementById("h1").innerText = Featured.value;
    document.getElementById("productvise").innerText = "/ " + Featured.value;
    
  }
}






