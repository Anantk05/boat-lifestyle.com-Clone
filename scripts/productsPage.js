
// Import Navbar and footer HTML from Components







// ---function of add to cart--//

// let addtoCart=()=>{
//     var details=[]

//     function Data(img,name,price){
//         this.img=img;
//         this.name=name;
//         this.price=price;
//     }

//     img=document.getElementById
// }

let data = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_600x.png?v=1642405569",
    name: "boAt Airdopes 131 - Wireless Earbuds",
    price: "2990",
    discountPrice: "999",
    yousave: "2990" - "999" + " (67%)",
    category: "WirelessEarbuds",
    color: "CrimsonCream",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m2_852f9f1f-5498-4e5a-b6a2-0645a7abbc41_400x.png?v=1639153081",

    name: "boAt Rockerz 333 Pro",
    price: "2990",
    discountPrice: "1699",
    yousave: "2990" - "1639" + " (60%)",
    category: "WirelessHeadphones",
    color: "Black",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/back_600x.png?v=1648723802",
    name: "boAt Airdopes 141",
    price: "4490",
    discountPrice: "1499",
    yousave: "4900" - "1499" + " (67%)",
    category: "WirelessEarbuds",
    color: "Black",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mint--orange_200x.png?v=1634371640",
    name: "TRebel BassHeads 100",
    price: "999",
    discountPrice: "333",
    yousave: "999" - "333" + " (60%)",
    category: "WiredEarphones",
    color: "Mint Orange",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_600x.png?v=1650387008",
    name: "boAt Watch Xtend‌",
    price: "7990",
    discountPrice: "3199",
    yousave: "7990" - "3199" + " (60%)",
    category: "SmartWatches",
    color: "Pitch Black",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_200x.png?v=1625046144",
    name: "boAt Rockerz 550",
    price: "4999",
    discountPrice: "1999",
    yousave: "4999" - "1999" + " (60%)",
    category: "WirelessHeadphones",
    color: "Red",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_d6503e2e-e0b1-4c4e-af28-2164903baf9f_200x.png?v=1640237576",
    name: "boAt Watch Iris",
    price: "11999",
    discountPrice: "4399",
    yousave: "11999" - "4399" + " (56%)",
    category: "SmartWatch",
    color: "Sporty Blue",
  },
  {
    image: "",
    name: "",
    price: "",
    discountPrice: "",
    yousave: "" - "" + " (56%)",
    category: "",
    color: "",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_0c484c51-8b11-487b-bd27-c31b09780700_200x.png?v=1648723865",
    name: "TRebel Airdopes 141",
    price: "4,490",
    discountPrice: "1499",
    yousave: "4490" - "1499" + " (67%)",
    category: "WirelessEarbuds",
    color:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_0c484c51-8b11-487b-bd27-c31b09780700_200x.png?v=1648723865",
  },
  {
    image: "",
    name: "",
    price: "",
    discountPrice: "",
    yousave: "" - "" + " (56%)",
    category: "",
    color: "",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255-pro-green_fb9aa506-5e26-4d97-b745-ca48aa7c0234_600x.png?v=1614587254",
    name: "TRebel Rockerz 255 Pro",
    price: "3499",
    discountPrice: "1499",
    yousave: "3499" - "1499" + " (57%)",
    category: "WirelessHeadphones",
    color:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255-pro-red_bd675504-5750-4b42-97b9-79caf2cc9034_200x.png?v=1614587254",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_b6960b52-58d9-4e72-bd08-e4ae4f111bb2_200x.png?v=1645517420",
    name: "TRebel Airdopes 131",
    price: "2990",
    discountPrice: "1299",
    yousave: "2990" - "1299" + " (57%)",
    category: "WirelessEarbuds",
    color: "",
  },
  {
    image: "",
    name: "",
    price: "",
    discountPrice: "",
    yousave: "" - "" + " (56%)",
    category: "",
    color: "",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-images-2_200x.png?v=1655198531",
    name: "boAt Watch Xtend sport",
    price: "6990",
    discountPrice: "2499",
    yousave: "6990" - "2499" + " (56%)",
    category: "SmartWatches",
    color: "",
  },
  {
    image: "",
    name: "",
    price: "",
    discountPrice: "",
    yousave: "" - "" + " (56%)",
    category: "",
    color: "",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-black_600x.png?v=1612765376",
    name: "boAt Airdopes 121 v2",
    price: "2999",
    discountPrice: "1299",
    yousave: "2999" - "1299" + " (57%)",
    category: "WirelessEarbuds",
    color:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-blue_200x.png?v=1612765376",
  },
  {
    image: "",
    name: "",
    price: "",
    discountPrice: "",
    yousave: "" - "" + " (56%)",
    category: "",
    color: "",
  },
  {
    image: "",
    name: "",
    price: "",
    discountPrice: "",
    yousave: "" - "" + " (56%)",
    category: "",
    color: "",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-grey_200x.png?v=1636609395",
    name: "6990",
    price: "1999",
    discountPrice: "",
    yousave: "6990" - "1999" + " (56%)",
    category: "SmartWatch",
    color: "Grey",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2e056443-6505-46ef-aa88-e20e2778b0a9_400x.png?v=1625046016",
    name: "boAt Airdopes 441 - Wireless Earbuds",
    price: "5999",
    discountPrice: "2499",
    yousave: "5999" - "2499" + " (58%)",
    category: "WirelessEarbuds",
    color: "",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ltg1_400x.png?v=1623813149",
    name: "boAt LTG 500 Indestructible Apple Certified Lightning Cable 1 Meter",
    price: "1499",
    discountPrice: "599",
    yousave: "1499" - "599" + " (56%)",
    category: "MobileAccessories",
    color: "",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/product-Image_600x.png?v=1625813323",
    name: "boAt Airdopes 101 Made In India",
    price: "2990",
    discountPrice: "1499",
    yousave: "2990" - "1499" + " (50%)",
    category: "WirelessEarbuds",
    color: "Black",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main6_2_8e1cdd84-4a34-4e92-97c5-0e1d4ba6da46_200x.png?v=1646393710",
    name: "TRebel Watch Xtend‌",
    price: "7990",
    discountPrice: "3499",
    yousave: "7990" - "3499" + " (56%)",
    category: "SmartWatches",
    color: "Sandy Cream",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/86b7c390-4a4b-45d7-91e1-65007653b71e_600x.png?v=1625045261",
    name: "boAt Airdopes 381 - In Ear Wireless Earbuds",
    price: "4990",
    discountPrice: "1599",
    yousave: "4990" - "1599" + " (68%)",
    category: "WirelessEarbuds",
    color:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/336d66bb-60e6-4b02-831b-864ea4fada9e_600x.png?v=1625045731",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img_e38245f3-a843-4604-8698-797f66913dd7_400x.png?v=1638944254",
    name: "boAt WCD 22.5W QCPD",
    price: "2490",
    discountPrice: "799",
    yousave: "2499" - "799" + " (63%)",
    category: "MobileAccessories",
    color: "Indi Silver",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/6875f924-20d3-4cb6-933d-5319504c7baa_600x.png?v=1625046269",
    name: "boAt 3A Qualcomm 3.0 Turbo Car Charger",
    price: "999",
    discountPrice: "499",
    yousave: "999" - "499" + " (56%)",
    category: "MobileAccessories",
    color: "",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/MainImages_600x.png?v=1654610457",
    name: "boAt Rockerz 103 Pro",
    price: "2490",
    discountPrice: "899",
    yousave: "2490" - "899" + " (64%)",
    category: "WirelessHeadphones",
    color: "Black",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/451v2_black_200x.png?v=1641801490",
    name: "boAt Airdopes 451v2",
    price: "5999",
    discountPrice: "1,999",
    yousave: "5999" - "1999" + " (67%)",
    category: "WirelessEarbuds",
    color:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/451v2_green_72x.png?v=1641467014",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_d295e9dc-ce87-4493-b310-037a7ce494be_400x.png?v=1634042688",
    name: "boAt AUX L500 Made In India",
    price: "499",
    discountPrice: "299",
    yousave: "499" - "299" + " (40%)",
    category: "MobileAccessories",
    color: "Indi Silver",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/bassheads-100-make-in-india-green_600x.png?v=1613457339",
    name: "boAt BassHeads 100 - Made in India",
    price: "999",
    discountPrice: "399",
    yousave: "999" - "399" + " (60%)",
    category: "WiredEarphones",
    color: "Green",
  },
  {
    image: "",
    name: "",
    price: "",
    discountPrice: "",
    yousave: "" - "" + " (56%)",
    category: "",
    color: "",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_9230f72d-9f86-4aec-9ae2-a7d87d332877_600x.png?v=1647426798",
    name: "boAt Airdopes 411 ANC",
    price: "4990",
    discountPrice: "1899",
    yousave: "4990" - "1899" + " (62%)",
    category: "WirelessEarbuds",
    color:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_c5f9fe7c-c012-4d93-ba0c-b25267c0560d_200x.png?v=1647426797",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0d8d4561-6985-44ba-9e70-4998c40f4df3_d851f1e5-1237-440a-8703-ebf06d2810c5_200x.png?v=1646390147",
    name: "Trebel Rockerz 550",
    price: "4999",
    discountPrice: "1999",
    yousave: "4999" - "1999" + " (56%)",
    category: "WirelessHeadphones",
    color: "Black",
  },
  {
    image: "",
    name: "",
    price: "",
    discountPrice: "",
    yousave: "" - "" + " (56%)",
    category: "",
    color: "",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-381-mediumspinggreen_43d63b08-d281-4c88-aa0c-ab9fab9add89_600x.png?v=1622527413",
    name: "TRebel Airdopes 381",
    price: "4990",
    discountPrice: "1999",
    yousave: "4990" - "1999" + " (60%)",
    category: "WirelessEarbuds",
    color:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-381-pink_9a1088cc-2e91-4acb-9d7c-841033532bfe_600x.png?v=1615468286",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3.1_46f69d85-75a0-483c-a215-2a29ee068b3c_200x.png?v=1646394746",
    name: "TRebel Watch Blaze",
    price: "6990",
    discountPrice: "3999",
    yousave: "6990" - "3999" + " (56%)",
    category: "SmartWatches",
    color: "Blue",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/25666ea3-a4f3-4dfb-9eee-b5f021805a95_400x.png?v=1625046511",
    name: "boAt BassHeads 162",
    price: "1290",
    discountPrice: "449",
    yousave: "1290" - "449" + " (65%)",
    category: "",
    color: "",
  },
  {
    image: "",
    name: "",
    price: "",
    discountPrice: "",
    yousave: "" - "" + " (56%)",
    category: "",
    color: "",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7925e2ed-89e7-4247-8f27-380ef0178294_600x.png?v=1625045867",
    name: "boAt Airdopes 402 ",
    price: " 5990",
    discountPrice: "1699",
    yousave: "5990" - "1699" + " (72%)",
    category: "WirelessEarbuds",
    color:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/402-main-img_200x.png?v=1630059242",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/MAIN2PRIMIA_400x.png?v=1652536765",
    name: "boAt Watch Primia",
    price: "8990",
    discountPrice: "4499",
    yousave: "4499" - "8990" + " (56%)",
    category: "SmartWatches",
    color: "Blue",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8fd33d93-0ea1-46a3-89d6-6cad41e95741_600x.png?v=1625046503",
    name: "boAt BassHeads 122",
    price: "1290",
    discountPrice: "499",
    yousave: "129-" - "499" + " (65%)",
    category: "WiredEarphones",
    color: "Black",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/CA131-main_600x.png?v=1639987804",
    name: "boAt Airdopes 131",
    price: "2990",
    discountPrice: "1599",
    yousave: "2990" - "1599" + " (47%)",
    category: "WirelessEarbuds",
    color:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD131-FI-CaptainsBlue06_200x.png?v=1655112365",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Pb9-1-2_400x.png?v=1613457287",
    name: "boAt Energyshroom PB9",
    price: "1999",
    discountPrice: "949",
    yousave: "1999" - "949" + " (53%)",
    category: "MobileAccessories",
    color: "Midnight Blue",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/88dfba7c-19fd-4aef-a278-41c0d2d35366_600x.png?v=1624882639",
    name: "TRebel Rockerz 450",
    price: "3990",
    discountPrice: "1499",
    yousave: "3990" - "1499" + " (62%)",
    category: "WirelessHeadphones",
    color: "Light Blue",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_200x.png?v=1626505847",
    name: "boAt Watch‌ Delta",
    price: "6990",
    discountPrice: "2999",
    yousave: "6990" - "2999" + " (56%)",
    category: "SmartWatches",
    color: "Black",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/d6eddcd1-2d1b-47a6-9103-77e629241a09_200x.png?v=1625045647",
    name: "boAt Rockerz 600",
    price: "3990",
    discountPrice: "1799",
    yousave: "3990" - "1799" + " (56%)",
    category: "WirelessHeadphones",
    color: "Sandybrown",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/A175Packaging.1804_800x.png?v=1653396760",
    name: "boAt Airdopes 175",
    price: " 2990",
    discountPrice: "1699",
    yousave: "2990" - "1699" + " (43%)",
    category: "WirelessEarbuds",
    color: "Black",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_200x.png?v=1626505847",
    name: "boAt Watch‌ Delta",
    price: "6990",
    discountPrice: "2999",
    yousave: "6990" - "2999" + " (57%)",
    category: "",
    color: "Black",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Green_4_400x.png?v=1651215796",
    name: "‌boAt Watch Mystiq",
    price: "6990",
    discountPrice: "3119",
    yousave: "6990" - "3119" + " (54%)",
    category: "SmartWatches",
    color: "Green",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_cab8e6af-49e2-4c74-92f8-0d44b689d4fd_200x.png?v=1639838336",
    name: "boAt Floatpad 300",
    price: "1990",
    discountPrice: "999",
    yousave: "1990" - "999" + " (56%)",
    category: "MobileAccessories",
    color: "Black",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/100-wireless-green_200x.png?v=1612770156",
    name: "boAt 100 Wireless",
    price: "2999",
    discountPrice: "1499",
    yousave: "2999" - "1499" + " (56%)",
    category: "WirelessHeadphones",
    color: "Olivedrab",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-441-pro-blue_b1e6cf66-5294-4b8c-ba62-f2cf6e3b80a3_600x.png?v=1614540751",
    name: "TRebel Airdopes 441",
    price: "5999",
    discountPrice: "2999",
    yousave: "5999" - "2999" + " (50%)",
    category: "WirelessEarbuds",
    color:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-441-pro-red_e168f941-8fdc-4c90-a0e5-ffd56a850a03_200x.png?v=1614540751",
  },
 
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_grey_a3b0524e-88e4-4b0e-942b-21ead4ae67fc_600x.png?v=1635140772",
    name: "boAt Watch‌ Vertex",
    price: "6990",
    discountPrice: "2299",
    yousave: "6990" - "2299" + " (56%)",
    category: "SmartWatches",
    color: "Grey",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Product-Image_9acbc667-f247-465a-b36c-e9fe8b4265ec_200x.png?v=1626862564",
    name: "boAt Airdopes 501",
    price: "9990",
    discountPrice: "3999",
    yousave: "9990" - "3999" + " (50%)",
    category: "WirelessEarbuds",
    color:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Product-Image_9acbc667-f247-465a-b36c-e9fe8b4265ec_200x.png?v=1626862564",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103-wireless-blue_200x.png?v=1613457313",
    name: "boAt 103 Wireless",
    price: "1990",
    discountPrice: "1199",
    yousave: "1990" - "1199" + " (56%)",
    category: "WirelessHeadphones",
    color: "Blue",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-grey_200x.png?v=1636609395",
    name: "boAt Watch Zenit",
    price: "6990",
    discountPrice: "1999",
    yousave: "6990" - "1999" + " (57%)",
    category: "SmartWatches",
    color: "Silver",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1main_600x.png?v=1654719427",
    name: "boAt Airdopes 191G",
    price: "3490",
    discountPrice: "1499",
    yousave: "3490" - "1499",
    category: "WirelessEarbuds",
    color:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4main_400x.png?v=1654719427",
  },
  {
    image: "",
    name: "",
    price: "",
    discountPrice: "",
    yousave: "" - "" + " (56%)",
    category: "",
    color: "",
  },

  {
    image: "",
    name: "",
    price: "",
    discountPrice: "",
    yousave: "" - "" + " (56%)",
    category: "",
    color: "",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4d6c575d-bb23-4ba3-a144-eeabb6ae0a9a_200x.png?v=1625045497",
    name: "boAt Rockerz 370",
    price: "2499",
    discountPrice: "999",
    yousave: "2499" - "999" + " (56%)",
    category: "WirelessHeadphones",
    color: "Red",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-3_585b7d34-c9b3-4fc4-912d-92ebbb04a410_200x.png?v=1646391063",
    name: "TRebel Rockerz 333",
    price: "3990",
    discountPrice: "14999",
    yousave: "3990" - "1499" + " (62%)",
    category: "WirelessHeadphones",
    color: "Navy Blue",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/601_1_600x.png?v=1641489474",
    name: "boAt Airdopes 601 ANC",
    price: "9990",
    discountPrice: "3999",
    yousave: "9990" - "3999" + " (60%)",
    category: "WirelessEarbuds",
    color:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_708eb679-d90c-4287-83e7-60a83fe6b09e_400x.png?v=1650020838",
  },
  {
    image: "",
    name: "",
    price: "",
    discountPrice: "",
    yousave: "" - "" + " (56%)",
    category: "",
    color: "",
  },
  {
    image: "",
    name: "",
    price: "",
    discountPrice: "",
    yousave: "" - "" + " (56%)",
    category: "",
    color: "",
  },
  {
    image: "",
    name: "",
    price: "",
    discountPrice: "",
    yousave: "" - "" + " (56%)",
    category: "",
    color: "",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_35ad08a3-ed67-4b87-b7a6-e4d8ae22847d_200x.png?v=1646391225",
    name: "TRebel Nirvanaa 751 ANC",
    price: "7990",
    discountPrice: "3999",
    yousave: "7990" - "3999" + " (50%)",
    category: "WirelessHeadphones",
    color: "Sterling Silver",
  },
];

localStorage.setItem("prodata",JSON.stringify(data));
var cartdata=JSON.parse(localStorage.getItem("user")) || []

function display(data){
    document.getElementById("container").innerHTML=null

    data.forEach(function(ele){
        let div=document.createElement("div")
    div.setAttribute("class","cards")

    let img=document.createElement("img")
    img.src=ele.image;
    img.setAttribute("id","img")
    img.addEventListener("click",function(){
        onclick(ele)
    })

    let div1=document.createElement("div")
    div1.setAttribute("class","content")

    let h4=document.createElement("h4")
    h4.innerText=ele.name;

    let div2=document.createElement("div")
    div2.setAttribute("class", "row1")

    let img1=document.createElement("img")
    img1.src =
      "https://t4.ftcdn.net/jpg/01/07/90/75/240_F_107907549_nGPdxVXnDgHqQ1lSJlYKidLLfWb6PuN2.jpg";

      let div0=document.createElement("div")
      let p=document.createElement("p")
      p.innerText = "4.8 | 915 reviews";
      div0.append(p)

      let divimg=document.createElement("div")
      let img2=document.createElement("img")
      img2.src = "https://cdn-icons-png.flaticon.com/128/7595/7595571.png";
      divimg.append(img2)

      div2.append(img1,div0,divimg)

      let hr= document.createElement("hr")

      div1.append(h4, div2);
      
      let div3= document.createElement("div")
      div3.setAttribute("class","row2")

      let dp=document.createElement("div")
      dp.innerText="₹"+ele.discountPrice

      let price=document.createElement("div")
      price.innerText="₹"+ele.price

      div3.append(dp,price)

      let div4=document.createElement("div")
      div4.innerText="You Save :₹ " + ele.yousave
      div4.setAttribute("class","row3")

      let btn= document.createElement("button")
      btn.innerText="ADD TO CART"
      btn.style.cursor="pointer"
      btn.addEventListener("click",function(){
        addtoCart(ele)
      })
      

        div1.append(div2, hr, div3, div4,btn);
        div.append(img,div1)

        document.getElementById("container").append(div)

    }); 

}
display(data)

function addtoCart(ele){
    cartdata.push(ele)

    localStorage.setItem("data",JSON.stringify(cartdata))
}



function onclick(ele){
    window.location.href="./product1.html"
}


var Featured= document.getElementById("sortby");

Featured.addEventListener("change",myfun2)

function myfun2(){
    if (Featured.value==("Featured")){

        display(data)

    }
    else{
        let filtered= data.filter(function(ele){
            return ele.category==Featured.value;
        });
        display(filtered)
    }
    
}


