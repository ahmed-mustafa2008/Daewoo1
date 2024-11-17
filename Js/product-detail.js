// product-detail.js
// الحصول على الـ id من الرابط
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// بيانات المنتجات - ستستبدلها بالبيانات الفعلية التي لديك
var products = [
    {
        id: 1,
        name: "Samsung Galaxy s24 ultra 512GB & 12GB RAM",
        price: "₪ 4199.99",
        instead: "4400",
        imageUrl: "image/s24 ultra.jpg",
        color: "Black",
    },
    {
        id: 2,
        name: "Mi redmi a3 128G & 4GB RAM",
        price: "₪ 399.99",
        instead: "450",
        imageUrl: "image/mi redmi a3.jpg",
        color: "Black",
    },
    {
        id: 3,
        name: "Samsung Galaxy tap A9 64GB & 4GB RAM Model: SM-X110",
        price: "₪ 499.99",
        instead: "600",
        imageUrl: "image/samsung galaxy tap a9.jpg",
        color: "Black",
    },
    {
        id: 4,
        name: "Iphone 12 Pro Max 512 GB",
        price: "₪ 2999.99 ",
        instead: "3100",
        imageUrl: "image/iphone 12 pro max.jpg",
        color: "Pink",
    },
    {
        id: 5,
        name: "apple iphone 14 Pro Max 512GB",
        price: "₪ 4399.99",
        instead: "4700",
        imageUrl: "image/iphone 14 pro max.jpg",
        color: "Black",
    },
    {
        id: 6,
        name: "Mi Poco f6 512G & 12 GB RAM ",
        price: "₪ 1849.99",
        instead: "1900",
        imageUrl: "image/mi poco f6.jpg",
        color: "Black",
    },
    {
        id: 7,
        name: "Mi Poco m6 Pro 512G & 12 GB RAM",
        price: "₪ 919.99",
        instead: "1000",
        imageUrl: "image/mi poco m6.jpg",
        color: "Black",
    },
    {
        id: 8,
        name: "Mi redmi 13 256G & 8GB RAM",
        price: "₪ 699.99",
        instead: "750",
        imageUrl: "image/Mi redmi 13 256G & 8GB RAM.jpg",
        color: "Black",
    },
    {
        id: 9,
        name: "Samsung Galaxy A55 5G 8/128GB",
        price: "₪ 1399.99",
        instead: "1600",
        imageUrl: "image/samsung-galaxy-a55-5g-8-128gb.jpg",
        color: "Black",
    },
    {
        id: 10,
        name: "Samsung Galaxy A25 5G 8/256GB",
        price: "₪ 999.99",
        instead: "1100",
        imageUrl: "image/samsung-galaxy-a25-5g-8-256gb.jpg",
        color: "Navy blue",
    },
    {
        id: 11,
        name: "Samsung Galaxy A35 5G 8/128GB",
        price: "₪ 1069.99",
        instead: "1200",
        imageUrl: "image/samsung-galaxy-a35-5g-8-128gb.jpg",
        color: "Black",
    },
    {
        id: 12,
        name: "Samsung Galaxy A55 5G 12/128GB",
        price: "₪ 1599.99",
        instead: "1800",
        imageUrl: "image/samsung-galaxy-a55-5g-12-128gb.jpg",
        color: "Black",
    },
    {
        id: 13,
        name: "HONOR X5 PLUS 4/64GB",
        price: "₪ 449.99",
        instead: "500",
        imageUrl: "image/honor-x5-plus-4-64gb.jpg",
        color: "Black",
    },
    {
        id: 14,
        name: "HONOR X7B 6/256GB",
        price: "₪ 799.99",
        instead: "900",
        imageUrl: "image/honor-x7b-6-256gb.jpg",
        color: "Black",
    },
    {
        id: 15,
        name: "HONOR X8B 8/512GB",
        price: "₪ 1099.99",
        instead: "1200",
        imageUrl: "image/honor-x8b-8-512gb.jpg",
        color: "Black",
    },
    {
        id: 16,
        name: "Galaxy Tab A9 tablet 4GB RAM/64GB (2 SIM)",
        price: "₪ 749.99",
        instead: "1050",
        imageUrl: "image/galaxy-tab-a9-tablet-4gb-ram-64gb-2-sim.jpg",
        color: "Navy blue",
    },
    {
        id: 17,
        name: "Apple iPhone 11 128GB",
        price: "₪ 1899.99",
        instead: "2775",
        imageUrl: "image/apple-iphone-11-128gb-كفالة-سنة.jpg",
        color: "Black",
    },
    {
        id: 18,
        name: "Tecno pova 6 Pro 5g Ram12/256",
        price: "₪ 1089.99",
        instead: "1560",
        imageUrl: "image/tecno-pova-6-pro-5g-ram12-256.jpg",
        color: "Silver",
    },
    {
        id: 19,
        name: "HONOR 6A 4/128GB",
        price: "₪ 549.99",
        instead: "700",
        imageUrl: "image/honor-6a-4-128gb.jpg",
        color: "Black",
    },
    {
        id: 20,
        name: "Tecno Spark 20C 256/8GB",
        price: "₪ 549.99",
        instead: "750",
        imageUrl: "image/tecno-spark-20c-256-8gb.jpg",
        color: "Black",
    }
    ,
    {
        id: 21,
        name: "Tecno Spark Go 2024 64/3GB",
        price: "₪ 399.99",
        instead: "525",
        imageUrl: "image/tecno-spark-go-2024-64-3gb.jpg",
        color: "Black",
    }
    ,
    {
        id: 22,
        name: "G-Tab S8X tablet 2GB RAM/32GB",
        price: "₪ 369.99",
        instead: "480",
        imageUrl: "image/g-tab-s8x-tablet-2gb-ram-32gb.jpg",
        color: "Grey",
    }
    ,
    {
        id: 23,
        name: "G-Tab C30 tablet 8+6GB RAM/128GB with Keyboard",
        price: "₪ 749.99",
        instead: "1050",
        imageUrl: "image/g-tab-c30-tablet-86gb-ram-128gb-with-keyboard.jpg",
        color: "Grey",
    }
    ,
    {
        id: 24,
        name: "Xiaomi Redmi A3 64/3GB",
        price: "₪ 429.99",
        instead: "570",
        imageUrl: "image/xiaomi-redmi-a3-64-3gb.jpg",
        color: "Black",
    }
    ,
    {
        id: 25,
        name: "Tecno Spark 20 256/8GB",
        price: "₪ 649.99",
        instead: "900",
        imageUrl: "image/tecno-spark-20-256-8gb (1).jpg",
        color: "Grey",
    }
    ,
    {
        id: 26,
        name: "Tecno Spark 20 Pro 256/12GB",
        price: "₪ 849.99",
        instead: "1200",
        imageUrl: "image/tecno-spark-20-pro-256-12gb (1).jpg",
        color: "Grey",
    }
    ,
    {
        id: 27,
        name: "Samsung Galaxy A25 128/8GB",
        price: "₪ 929.99",
        instead: "1320",
        imageUrl: "image/samsung-galaxy-a25-128-8gb.jpg",
        color: "Navy blue",
    }
    ,
    {
        id: 28,
        name: "Samsung Galaxy A15 256/8GB",
        price: "₪ 849.99",
        instead: "1200",
        imageUrl: "image/samsung-galaxy-a15-256-8gb.jpg",
        color: "White",
    }
    ,
    {
        id: 29,
        name: "Samsung Galaxy S24 Ultra 256/12GB",
        price: "₪ 3999.99",
        instead: "4200",
        imageUrl: "image/samsung-galaxy-s24-ultra-256-12gb.jpg",
        color: "Grey",
    }
    ,
    {
        id: 30,
        name: "Samsung Galaxy A35 128/8GB",
        price: "₪ 1249.99",
        instead: "1800",
        imageUrl: "image/samsung-galaxy-a035-128-8gb (1).jpg",
        color: "Black",
    }
    ,
    {
        id: 31,
        name: "Samsung Galaxy A05 64/4GB",
        price: "₪ 469.99",
        instead: "630",
        imageUrl: "image/samsung-galaxy-a05-64-4gb.jpg",
        color: "Black",
    }
    ,
    {
        id: 32,
        name: "Samsung Galaxy A15 128/6GB",
        price: "₪ 749.99",
        instead: "1050",
        imageUrl: "image/samsung-galaxy-a15-128-6gb.jpg",
        color: "Navy blue",
    }
    ,
    {
        id: 33,
        name: "Samsung Galaxy A05S 128/4GB",
        price: "₪ 599.99",
        instead: "825",
        imageUrl: "image/samsung-galaxy-a05s-128-4gb.jpg",
        color: "Black",
    }
    ,
    {
        id: 34,
        name: "Samsung Galaxy A25 256/8GB",
        price: "₪ 1029.99",
        instead: "1470",
        imageUrl: "image/samsung-galaxy-a25-256-8gb.jpg",
        color: "Navy blue",
    }
    ,
    {
        id: 35,
        name: "Galaxy A15 8/256GB",
        price: "₪ 749.99",
        instead: "800",
        imageUrl: "image/galaxy-a15-8-256gb.jpg",
        color: "Navy blue",
    }
    ,
    {
        id: 36,
        name: "Tecno Pova 6 Pro 12/256GB",
        price: "₪ 1099.99",
        instead: "1200",
        imageUrl: "image/tecno-pova-6-12-512gb (1).jpg",
        color: "Black",
    }
    ,
    {
        id: 37,
        name: "Tecno Spark 20 Pro 8/256GB",
        price: "₪ 699.99",
        instead: "750",
        imageUrl: "image/tecno-spark-20-pro-8-256gb.jpg",
        color: "Black",
    }
    ,
    {
        id: 38,
        name: "Samsung Galaxy A05 128/4GB",
        price: "₪ 529.99",
        instead: "705",
        imageUrl: "image/samsung-galaxy-a05-128-4gb.jpg",
        color: "Green",
    }
    ,
    {
        id: 39,
        name: "Tecno Spark Go 2024 3GB Ram/64GB",
        price: "₪ 399.99",
        instead: "500",
        imageUrl: "image/tecno-spark-go-2024-3g-ram-64gb-تكنو-سبارك-جو-2024-سعة-64جيجا-مع-كفالة-سنة.jpg",
        color: "Navy blue",
    }
    ,
    {
        id: 40,
        name: "Galaxy S24 Ultra 12/256GB",
        price: "₪ 3899.99",
        instead: "4000",
        imageUrl: "image/galaxy-s24-ultra-12-256gb.jpg",
        color: "Golden",
    }
    ,
    {
        id: 41,
        name: "Samsung Galaxy A54 5G 8G Ram/256GB",
        price: "₪ 1499.99",
        instead: "1600",
        imageUrl: "image/samsung-galaxy-a54-5g-8g-ram-256gb-سامسونج-جالاكسي-ايه-54-سعة-256جيجا-مع-كفالة-سنة.jpg",
        color: "Green",
    }
    ,
    {
        id: 42,
        name: "Tecno Spark 20C 8GB Ram/128GB",
        price: "₪ 549.99",
        instead: "650",
        imageUrl: "image/tecno-spark-20c-8g-ram-128gb-تكنو-سبارك-20-سي-سعة-128جيجا-مع-كفالة-سنة.jpg",
        color: "Navy blue",
    }
    ,
    {
        id: 43,
        name: "Tecno Spark 20 8GB Ram/256GB",
        price: "₪ 649.99",
        instead: "750",
        imageUrl: "image/tecno-spark-20-8g-ram-256gb-تكنو-سبارك-20-سعة-256جيجا-مع-كفالة-سنة.jpg",
        color: "Black",
    }
    ,
    {
        id: 44,
        name: "Tecno Spark Go 2024 4GB Ram/128GB-",
        price: "₪ 449.99",
        instead: "550",
        imageUrl: "image/tecno-spark-go-2024-4g-ram-128gb-تكنو-سبارك-جو-2024-سعة-128جيجا-مع-كفالة-سنة.jpg",
        color: "Black",
    }
    ,
    {
        id: 45,
        name: "Xiaomi Redmi Note 13 Pro 4G 8G",
        price: "₪ 999.99",
        instead: "1200",
        imageUrl: "image/xiaomi-redmi-note-13-pro-4g-8g-ram-256gb-شاومي-ريدمي-نوت-13-برو-سعة-256جيجا-مع-كفالة-سنة.jpg",
        color: "Black",
    }
    ,
    {
        id: 46,
        name: "Xiaomi Redmi Note 13 8G Ram/256GB",
        price: "₪ 809.99",
        instead: "950",
        imageUrl: "image/xiaomi-redmi-note13-8g-ram-256gb-شاومي-ريدمي-نوت-13-سعة-256جيجا-مع-كفالة-سنة.jpg",
        color: "Black",
    }
    ,
    {
        id: 47,
        name: "Apple iPhone 15 128GB",
        price: "₪ 3129.99",
        instead: "3300",
        imageUrl: "image/apple-iphone-15-128gb-ايفون-15-سعة-128-جيجا-مع-كفالة-سنة.jpg",
        color: "Black",
    }
    ,
    {
        id: 48,
        name: "Infinix Hot 30 4G 8G Ram/256GB",
        price: "₪ 649.99",
        instead: "750",
        imageUrl: "image/infinix-hot-30-4g-8g-ram-256gb-انفنيكس-هوت-30-سعة-256جيجا-مع-كفالة-سنة.jpg",
        color: "Navy blue",
    }
    ,
    {
        id: 49,
        name: "STE S9 10.1 inch Android Tablet 256GB",
        price: "₪ 699.99",
        instead: "800",
        imageUrl: "image/s9-101-inch-android-tablet-256gb-تابلت-اس-9-نظام-اندرويد-101-انش-سعة-256جيجا-بايت.jpg",
        color: "Grey",
    }
    ,
    {
        id: 50,
        name: "S12 10.1 inch Android Tablet 128GB",
        price: "₪ 649.99",
        instead: "750",
        imageUrl: "image/s12-101-inch-android-tablet-128gb-تابلت-اس-12-نظام-اندرويد-101-انش-سعة-128جيجا-بايت.jpg",
        color: "Grey",
    }
    ,
    {
        id: 51,
        name: "Xiaomi Redmi 13C 8G Ram/256GB",
        price: "₪ 659.99",
        instead: "750",
        imageUrl: "image/xiaomi-redmi-13c-8g-ram-256gb-شاومي-ريدمي-نوت-13-سي-سعة-256جيجا-مع-كفالة-سنة.jpg",
        color: "Navy blue",
    }
    ,
    {
        id: 52,
        name: "Xiaomi Redmi Note 13 Pro 4G 256GB & 8GB",
        price: "₪ 959.99",
        instead: "1000",
        imageUrl: "image/xiaomi-redmi-note-13-pro-256gb-8gb-ram-كفالة-سنة.jpg",
        color: "Silver",
    }
    ,
    {
        id: 53,
        name: "Xiaomi Redmi Note 13 256GB & 8GB RAM",
        price: "₪ 719.99",
        instead: "750",
        imageUrl: "image/xiaomi-redmi-note-13-256gb-8gb-ram-كفالة-سنة.jpg",
        color: "Blue",
    }
    ,
    {
        id: 54,
        name: "Xiaomi Redmi 13C 256GB & 8GB RAM  ",
        price: "₪ 539.99",
        instead: "600",
        imageUrl: "image/xiaomi-redmi-13c-256gb-8gb-ram-كفالة-سنة.jpg",
        color: "Green",
    }
    ,
    {
        id: 55,
        name: "Xiaomi Poco X6 Pro 256GB & 8GB RAM ",
        price: "₪ 1379.99",
        instead: "1450",
        imageUrl: "image/xiaomi-poco-x6-pro-256gb-8gb-ram-كفالة-سنة.jpg",
        color: "Golden",
    }
    ,
    {
        id: 56,
        name: " Samsung Galaxy A14 128GB & 6GB RAM",
        price: "₪ 799.99",
        instead: "850",
        imageUrl: "image/جهاز-سامسونج-جالكسي-ايه-14-ذاكرة-رام-6-جيجا-128-جيجا-samsung-galaxy-a14-128gb-6gb-ram.jpg",
        color: "Black",
    }
    ,
    {
        id: 57,
        name: "Tecno Pova 5 8GB RAM, 256GB ",
        price: "₪ 659.99",
        instead: "1000",
        imageUrl: "image/جهاز-تكنو-بوفا-5-رام-8جيجا-256-جيجا-tecno-pova-5-8-256 (1).jpg",
        color: "Black",
    }
    ,
    {
        id: 58,
        name: "Samsung Galaxy A24 4G 128GB & 8GB RAM",
        price: "₪ 829.99",
        instead: "900",
        imageUrl: "image/samsung-galaxy-a24-4g-128gb-8gb-ram-كفالة-سنة.jpg",
        color: "silver",
    }
    ,
    {
        id: 59,
        name: "Apple iPhone 15 Pro Max 256GB 1 Year Warranty",
        price: "₪ 4869.99",
        instead: "5000",
        imageUrl: "image/apple-iphone-15-pro-max-256gb-كفالة-سنة.jpg",
        color: "blue",
    }
    ,
    {
        id: 60,
        name: "Apple iPhone 12 Pro Max 512GB ",
        price: "₪ 3299.99",
        instead: "3400",
        imageUrl: "image/جهاز-ايفون-12برو-ماكس-سعة-512-جيجا-apple-iphone-12pro-max-512-gb.jpg",
        color: "black",
    }
    ,
    {
        id: 61,
        name: "Xiaomi Redmi 12 256GB & 8GB RAM",
        price: "₪ 739.99",
        instead: "780",
        imageUrl: "image/xiaomi-redmi-12-256gb-8gb-ram-كفالة-سنة.jpg",
        color: "blue",
    }
    ,
    {
        id: 62,
        name: "Realme C51 128GB & 4GB RAM",
        price: "₪ 639.99",
        instead: "700",
        imageUrl: "image/بيجامة-بيتية-قطعتين-للصبايا-توب-تنورة.jpg",
        color: "green",
    }
    ,
    {
        id: 63,
        name: "Smart watch package, eighth edition,",
        price: "₪ 299.99",
        instead: "350",
        imageUrl: "image/بكج-ساعه-الترا-الاصدار-الثامن-سماعه-ون-ماكس-mc80-ultea-max.jpg",
        color: "Golden",
    }
    ,
    {
        id: 64,
        name: "Tecno Camon 17 Pro 256GB & 8GB RAM",
        price: "₪ 779.99",
        instead: "850",
        imageUrl: "image/tecno-camon-17-pro-256gb-8gb-ram-كفالة-سنة.jpg",
        color: "blue",
    }
    ,
    {
        id: 65,
        name: "Tecno Camon 17 Pro 128GB & 8GB RAM",
        price: "₪ 719.99",
        instead: "800",
        imageUrl: "image/tecno-camon-17-pro-128gb-8gb-ram-كفالة-سنة.jpg",
        color: "blue",
    }
    ,
    {
        id: 66,
        name: "Realme c53 128GB & 6GB RAM",
        price: "₪ 579.99",
        instead: "650",
        imageUrl: "image/realme-c53-128gb-6gb-ram-كفالة-سنة.jpg",
        color: "Golden",
    }
    ,
    {
        id: 67,
        name: "Apple iPhone 13 128GB",
        price: "₪ 2069.99",
        instead: "3150",
        imageUrl: "image/apple-iphone-13-128gb-كفالة-سنة.jpg",
        color: "pink",
    }
    ,
    {
        id: 68,
        name: "Apple Pencil (2nd Generation)",
        price: "₪ 659.99",
        instead: "700",
        imageUrl: "image/apple-pencil-2nd-generation-قلم-ipad-apple.jpg",
        color: "white",
    }
    ,
    {
        id: 69,
        name: "Apple iPad Pro 11‑inch M2 (4th Generation)",
        price: "₪ 3409.99",
        instead: "3450",
        imageUrl: "image/apple-ipad-pro-11inch-m2-4th-generation-128gb-كفالة-سنة.jpg",
        color: "grey",
    }
    ,
    {
        id: 70,
        name: "Ultra Watch + 3M ULTEA AirPods Package",
        price: "₪ 299.99",
        instead: "350",
        imageUrl: "image/بكج-ساعه-الترا-سماعه-ايربود-3-m-ultea.jpg",
        color: "white",
    }
    ,
    {
        id: 71,
        name: "apple iPad 10th generation 2022",
        price: "₪ 1859.99",
        instead: "2010",
        imageUrl: "image/apple-ipad-10th-generation-64gb-ram-كفالة-سنة.jpg",
        color: "blue",
    }
    ,
    {
        id: 72,
        name: "Tecno Spark 10 128GB & 8GB RAM ",
        price: "₪ 549.99",
        instead: "600",
        imageUrl: "image/tecno-spark-10-128gb-8gb-ram-كفالة-سنة.jpg",
        color: "blue",
    }
    ,
    {
        id: 73,
        name: "Tecno Camon 20 pro 256GB & 8GB RAM",
        price: "₪ 849.99",
        instead: "900",
        imageUrl: "image/tecno-camon-20-256gb-8gb-ram-كفالة-سنة.jpg",
        color: "blue",
    }
    ,
    {
        id: 74,
        name: "Huawei Smart GT 3 Active Edition (46mm)",
        price: "₪ 99.999",
        instead: "1100",
        imageUrl: "image/huawei-watch-gt-3-46mm-كفالة-سنة.jpg",
        color: "black",
    }
    ,
    {
        id: 75,
        name: "NOKIA 105 - Nokia 105 phone with one year",
        price: "₪ 129.99",
        instead: "180",
        imageUrl: "image/nokia-105-mobile-black-كبسات-كفالة-سنة.jpg",
        color: "black",
    }
    ,
    {
        id: 76,
        name: "Samsung SM-B510S 2GB RAM",
        price: "₪ 259.99",
        instead: "280",
        imageUrl: "image/samsung-sm-b510s-2gb-ram-كفالة-سنة.jpg",
        color: "black",
    }
    ,
    {
        id: 77,
        name: "Xbox Series Wireless Controller Black 1 Year Warranty",
        price: "₪ 339.99",
        instead: "360",
        imageUrl: "image/يد-xbox-series-wireless-controller-لون-اسود-كفالة-سنة.jpg",
        color: "black",
    },
    {
        id: 78,
        name: "Tecno camon 20 pro 8GB & 256GB RAM ",
        price: "₪ 849.99",
        instead: "1000",
        imageUrl: "image/tecno-camon-20-pro-8gb-256gb-ram-كفالة-سنة.jpg",
        color: "blue",
    }
    ,
    {
        id: 79,
        name: "Apple iPhone 14 Pro Max 512GB ",
        price: "₪ 5049.99",
        instead: "5100",
        imageUrl: "image/product1.jpg",
        color: "black",
    }
    ,
    {
        id: 80,
        name: "Samsung Galaxy S23 Ultra 256GB & 12GB",
        price: "₪ 3509.99",
        instead: "3900",
        imageUrl: "image/product5.jpg",
        color: "black",
    },
    {
        id: 81,
        name: "NOKIA 150 MOBILE BLACK",
        price: "₪ 169.99",
        instead: "200",
        imageUrl: "image/nokia-150-mobile-black-كبسات-كفالة-سنة.jpg",
        color: "black",
    }
    ,
    {
        id: 82,
        name: "MOBILE Wileyfox K3 (2SIM)16 GB & 4G RAM",
        price: "₪ 159.99",
        instead: "200",
        imageUrl: "image/mobile-wileyfox-k3-2sim16-gb-4g-ram-black-كبسات-كفالة-سنة.jpg",
        color: "black",
    }
    ,
    {
        id: 83,
        name: "g-tab gt3",
        price: "₪ 269.99",
        instead: "400",
        imageUrl: "image/g-tab-gt3.jpg",
        color: "black",
    },
    {
        id: 84,
        name: "LG Folder 2 Dual SIM",
        price: "₪ 259.99",
        instead: "300",
        imageUrl: "image/lg-folder-2-شريحتين.jpg",
        color: "black",
    }
    ,
    {
        id: 85,
        name: "IP68 New V3 3 chips",
        price: "₪ 239.99",
        instead: "300",
        imageUrl: "image/ip68-new-v3-3-شرائح.jpg",
        color: "black",
    },
    {
        id: 86,
        name: "Apple iPhone 14 128GB",
        price: "₪ 2910.99",
        instead: "3350",
        imageUrl: "image/product3.jpg",
        color: "black",
    },
    {
        id: 87,
        name: "Apple AirPods (2rd generation)",
        price: "₪ 1009.99",
        instead: "1150",
        imageUrl: "image/apple-airpods-2rd-generation-with-magsafe-charging-case.jpg",
        color: "white",
    },
    {
        id: 88,
        name: "Samsung Galaxy A54 128GB & 8GB RAM",
        price: "₪ 1409.99",
        instead: "1600",
        imageUrl: "image/samsung-galaxy-a54-128gb-8gb-ram-كفالة-سنة.jpg",
        color: "black",
    },
    {
        id: 89,
        name: "Samsung Galaxy A14 64GB & 4GB RAM",
        price: "₪ 609.99",
        instead: "850",
        imageUrl: "image/samsung-galaxy-a14-64gb-4gb-ram-كفالة-سنة.jpg",
        color: "pink",
    },
    {
        id: 90,
        name: "BW8 Ultra Smart Watch Series 8 49mm",
        price: "₪ 219.99",
        instead: "400",
        imageUrl: "image/bw8-ultra-smart-watch-series-8-49mm.jpg",
        color: "grey",
    },
    {
        id: 91,
        name: "apple AirPods Pro (2nd generation)",
        price: "₪ 999.99",
        instead: "1100",
        imageUrl: "image/apple-airpods-pro-2nd-generation.jpg",
        color: "white",
    },
    {
        id: 92,
        name: "Lenovo TAB 3 Tablet 8 inch 2GB",
        price: "₪ 669.99",
        instead: "800",
        imageUrl: "image/lenovo-tab-3-tablet-8-inch-2gb.jpg",
        color: "black",
    },
    {
        id: 93,
        name: "Samsung Galaxy A04e 64GB & 4GB RAM",
        price: "₪ 469.99",
        instead: "500",
        imageUrl: "image/samsung-galaxy-a04e-64gb-4gb-ram-كفالة-سنة.jpg",
        color: "blue",
    },
    {
        id: 94,
        name: "Apple AirPods (3rd Generation)",
        price: "₪ 809.99",
        instead: "900",
        imageUrl: "image/apple-airpods-3rd-generation-with-magsafe-charging-case.jpg",
        color: "white",
    },
    {
        id: 95,
        name: "Tecno Camon 18 P 128GB & 8GB RAM",
        price: "₪ 849.99",
        instead: "950",
        imageUrl: "image/tecno-camon-18-p-128gb-8gb-ram-كفالة-سنة.jpg",
        color: "blue",
    },
    {
        id: 96,
        name: "Apple Watch SE (2nd Gen)",
        price: "₪ 1299.99",
        instead: "1500",
        imageUrl: "image/apple-watch-se-2nd-gen-كفالة-سنة.jpg",
        color: "black",
    },
    {
        id: 97,
        name: "Apple iPad (2022) 10th generation 64GB",
        price: "₪ 1599.99",
        instead: "1700",
        imageUrl: "image/apple-ipad-2022-10th-generation-64gb-wifi-كفالة-سنة.jpg",
        color: "pink",
    },
    {
        id: 98,
        name: "Tecno Pova 4 256GB & 8GB RAM",
        price: "₪ 849.99",
        instead: "1000",
        imageUrl: "image/tecno-pova-4-256gb-8gb-ram-كفالة-سنة.jpg",
        color: "grey",
    },
    {
        id: 99,
        name: "10 inch LCD Writing tablet",
        price: "₪ 23.99",
        instead: "30",
        imageUrl: "image/85-lcd-writing-tablet.jpg",
        color: "black",
    },
    {
        id: 100,
        name: "Realme 8 128GB & 8GB RAM",
        price: "₪ 799.99",
        instead: "900",
        imageUrl: "image/realme-8-128gb-8gb-ram-كفالة-سنة.jpg",
        color: "silver",
    },
    {
        id: 101,
        name: "Apple iPad (9th generation) 2021 64GB",
        price: "₪ 1249.99",
        instead: "1300",
        imageUrl: "image/apple-ipad-9th-generation-2021-64gb-3gb-ram.jpg",
        color: "black",
    },
    {
        id: 102,
        name: "Tecno Pova Neo 64GB & 4GB RAM",
        price: "₪ 529.99",
        instead: "600",
        imageUrl: "image/tecno-pova-neo-64gb-4gb-ram-كفالة-سنة.jpg",
        color: "blue",
    },
    {
        id: 103,
        name: "Realme 7 Pro 128GB 8GB",
        price: "₪ 839.99",
        instead: "900",
        imageUrl: "image/realme-7-pro-128gb-8gb-كفالة-سنة.jpg",
        color: "blue",
    }
];
// البحث عن المنتج في القائمة باستخدام الـ id
const product = products.find(item => item.id == productId);

// عرض البيانات في الصفحة
if (product) {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-image").src = product.imageUrl;
    document.getElementById("product-price").textContent = `Price: ${product.price}`;
    document.getElementById("product-instead").textContent = `Instead: ${product.instead}`;
} else {
    document.getElementById("product-name").textContent = "Product not found";
}
function goBack() {
    window.history.back();
}
var btnSubmit = document.querySelector(".btnSubmit");
btnSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    var confirmSure = confirm("Are you sure about your purchase?");
    if (confirmSure == true) {
            btnSubmit.innerHTML = "Purchased";
            btnSubmit.disabled = true;
    }
});
