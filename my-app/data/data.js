import Categories from '../models/Categories'
import Product from '../models/Product'
import Review from '../models/Review'



export const CATEGORIES = [
    new Categories('c1','Air conditioners','../assets/icons/air_conditioner.png' ),
    new Categories("c2",'Refrigerators', '../assets/icons/refrigerator.png'),
    new Categories("c3",'Baking ovens','../assets/icons/oven.png'),
    new Categories("c4",'Stoves','../assets/icons/stove.png'),
    new Categories("c5",'Computer','../assets/icons/computer.png'),
    new Categories("c6",'Phones','../assets/icons/phone.png'),
]

export const PRODUCTS = [
    new Product(
        "p1",
        'c1',
        'https://m.media-amazon.com/images/I/61+SiAVxfWL._AC_UY327_FMwebp_QL65_.jpg',
        'TOSOT 10,000 BTU',
        'Powerful Cooling: Cool spaces up to 400 square feet with an ASHRAE-rated 10,000 BTUs of cool air (6,000 BTU 2017 DOE Standard) perfect for your home office, bedroom, or living room.',
        '359.99$',
        '11.8 x 15.4 x 30.4 inches',
        '65 Pounds',
        '260.05$',
        new Review(22,53,22,1,2)
    ),
    // Stoves
    new Product(
        "p13", // id
        'c4', // category
        'https://m.media-amazon.com/images/I/81KhJlxexoL._AC_SL1500_.jpg', // img
        'Techwood 1800W Electric Hot Plate', // title
        'Countertop Stove Double Burner for Cooking, Infrared Ceramic Hot Plates Double Cooktop, Red, Brushed Stainless Steel Easy To Clean Upgraded Version', // description 
         87.98, // price
        '23.1 x 9.3 x 3.1 inches', // dimentions
        '5 Pounds', // weight
         45.95, // shipping price
        new Review(30,25,10,14,6) // review
    ),
    new Product(
        "p14", // id
        'c4', // category
        'https://m.media-amazon.com/images/I/71ipRWJYyAL._AC_SL1500_.jpg', // img
        'CUSIMAX Electric Burner Hot Plate', // title
        'for Cooking Cast Iron hot plates, Adjustable Temperature Control, Non-Slip Rubber Feet Stainless Steel Easy to Clean, Your Kitchen Assistant', // description 
         41.99, // price
        '13.46 x 10.51 x 4.21 inches', // dimentions
        '5.68 Pounds', // weight
         21.91, // shipping price
        new Review(44,33,12,10,4) // review
    ),
    new Product(
        "p15", // id
        'c4', // category
        'https://m.media-amazon.com/images/I/617F53acu5L._AC_SL1500_.jpg', // img
        'Elite Gourmet Countertop Coiled', // title
        'Electric Hot Burner, Temperature Controls, Power Indicator Lights, Easy to Clean, Single, Black', // description 
        20.99, // price
        '10.65 x 9.15 x 3.65 inches', // dimentions
        '5.60 Pounds', // weight
         17.38, // shipping price
        new Review(50,33,20,11,6) // review
    ),
    new Product(
        "p16", // id
        'c4', // category
        'https://m.media-amazon.com/images/I/616YBgkszSL._AC_SL1500_.jpg', // img
        'Ovente Electric Double Infrared Burner', // title
        'Ovente Electric Double Infrared Burner 7.75 & 6.75 Inch Ceramic Glass Hot Plates Cooktop, 5 Level Temperature Control & Easy Clean Stainless Steel Base, Portable Stove Dorm & Office, Silver BGI102S', // description 
        32.99, // price
        '18 x 9.5 x 2.75 inches', // dimentions
        '5 Pounds', // weight
         24.37, // shipping price
        new Review(24,44,20,15,3) // review
    ),

    // Computer
    new Product(
        "p17", // id
        'c5', // category
        'https://m.media-amazon.com/images/I/61pskHRSN2L._AC_SL1500_.jpg', // img
        'Dell OptiPlex 9020-SFF', // title
        'Dell OptiPlex 9020-SFF, Intel Core i5-4570 3.2GHZ, 16GB RAM, 512GB SSD Solid State, DVDRW, Windows 10 Pro 64bit (Renewed)', // description 
        250.00, // price
        '11.4 x 12.3 x 3.7 inches', // dimentions
        '13.07 Pounds', // weight
        107.17, // shipping price
        new Review(33,34,20,10,4) // review
    ),
    new Product(
        "p18", // id
        'c5', // category
        'https://m.media-amazon.com/images/I/71dYHi8v0KL._AC_SL1500_.jpg', // img
        'Dell Inspiron 3891 Compact Desktop Computer Tower', // title
        'Intel Core i5-10400, 16GB DDR4 RAM, 256GB SSD + 1TB SATA HDD, Intel UHD Graphics 630 with Shared Graphics Memory, Windows 10H - Black (Latest Model)', // description 
        674.00, // price
        '11.54 x 6.06 x 12.77 inches', // dimentions
        '10.88 Pounds', // weight
        229.30, // shipping price
        new Review(30,44,16,2,5) // review
    ),
    new Product(
        "p19", // id
        'c5', // category
        'https://m.media-amazon.com/images/I/61glPHSupyL._AC_SL1500_.jpg', // img
        'Dell Optiplex 7020 Desktop Computer', // title
        'Dell Optiplex 7020 Desktop Computer, Intel Quad-Core i7-4770-3.4GHz, 32 GB RAM, 512GB SSD, DVD, USB 3.0, WiFi, HDMI, Windows 10 Pro (Renewed)', // description 
        324.00, // price
        '12.28 x 3.66 x 11.42 inches', // dimentions
        '13.22 Pounds', // weight
         121.84, // shipping price
        new Review(24,25,16,3,7) // review
    ),
    new Product(
        "p20", // id
        'c5', // category
        'https://m.media-amazon.com/images/I/81sAobIexYL._AC_SL1500_.jpg', // img
        'ASUS ExpertCenter D500SC', // title
        'Small Form Factor Desktop PC, Intel Core i5-11400, 16GB DDR4 RAM, 256GB PCIe SSD + 1TB HDD, TPM, Windows 10 Home, Black, D500SC-AB504', // description 
        642.85, // price
        '3.72 x 12.58 x 12.62 inches', // dimentions
        '12.13 Pounds', // weight
        197.53, // shipping price
        new Review(43,56,23,17,3) // review
    ),

    // Phones
    new Product(
        "p21", // id
        'c6', // category
        'https://m.media-amazon.com/images/I/61kLsk8RslL._AC_SL1500_.jpg', // img
        'Samsung Galaxy S21 FE 5G', // title
        'Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display, Pro Grade Camera, All Day Intelligent Battery, US Version, White', // description 
        699.99, // price
        '6.7 x 3.4 x 2.44 inches', // dimentions
        '6.7 ounces', // weight
        158.36, // shipping price
        new Review(44,53,22,4,6) // review
    ),
    new Product(
        "p22", // id
        'c6', // category
        'https://m.media-amazon.com/images/I/81afsli5ctL._AC_SL1500_.jpg', // img
        'Samsung Galaxy A52 (5G)', // title
        'Samsung Galaxy A52 (5G) 128GB A526U (T-Mobile/Sprint Unlocked) 6.5" Display Quad Camera Smartphone - Black (Renewed)', // description 
         389.99, // price
        '0.33 x 6.3 x 2.96 inches', // dimentions
        '12.3 ounces', // weight
         88.26, // shipping price
        new Review(44,54,20,16,8) // review
    ),
    new Product(
        "p23", // id
        'c6', // category
        'https://m.media-amazon.com/images/I/71ELx8TJfEL._AC_SL1500_.jpg', // img
        'SAMSUNG Galaxy S20 FE 5G', // title
        'Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera 30X Space Zoom Night Mode, Cloud Navy (Renewed)', // description 
        435.00, // price
        '7 x 5 x 4 inches', // dimentions
        '6.7 ounces', // weight
        98.33, // shipping price
        new Review(34,33,13,7,1) // review
    ),
    new Product(
        "p24", // id
        'c6', // category
        'https://m.media-amazon.com/images/I/61Kdfg4hZPL._AC_SL1500_.jpg', // img
        'Samsung Galaxy S10', // title
        'Samsung Galaxy S10, 128GB, Prism White - Unlocked (Renewed)', // description 
         267.00, // price
        '5.94 x 2.78 x 0.31 inches', // dimentions
        '1.06 ounces', // weight
        60.68, // shipping price
        new Review(14,23,11,2,1) // review
    ),
]
