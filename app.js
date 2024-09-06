
// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}




//Slide show
document.addEventListener('DOMContentLoaded', function() {
  const urls = [
    "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/suvtrees-003.webp?alt=media&token=1b02009d-72d8-40ec-a2cd-a4d593d72d4b",
    "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/shelby-american-muscle-cars-5893728-2560-1920.jpg?alt=media&token=18942b2a-687b-4000-8531-8c15b8d98832",
    "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/best_car_wallpapers%201.jpeg?alt=media&token=190d41cd-46f4-4cc9-b6da-2582c6db9c08",
    "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/47457.webp?alt=media&token=9d68e725-4fef-472f-bd1d-0b408ff24de1",
    "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/NetBhB7.jpg?alt=media&token=87198ab1-ad04-4ea1-860e-d55e35da2bee",
    "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/5-lamborghini-gallardo-car-wallpaper-1024x576.jpg?alt=media&token=ef54fa54-7ab8-4af1-bd03-86b68a30cbd6",
    "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/e6f99cc790210cb3ea63bc2755e98550.jpg?alt=media&token=cd3b9dab-ed62-4657-82b1-889cdc2822c0",
    "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/Bmw%20cars%20usa-2.jpg?alt=media&token=8d44a607-240c-4a13-8fe5-adee7827be72",
    "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/Classic%20Cars%20Wallpapers%205.jpg?alt=media&token=cb4d0b06-18ca-4fb3-b107-a1b0cbfa77f8",
    "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/suvtrees-003.webp?alt=media&token=1b02009d-72d8-40ec-a2cd-a4d593d72d4b",
    "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/dd9cdf7c2daead48c83ce0d8cbf42f1a.jpg?alt=media&token=0cdef31f-7e60-4791-b341-f2e979c48e35",
    "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/26b41ff73d7e2650e2db17a0c313cc22.jpg?alt=media&token=d856b435-4fdf-4252-9d09-f158691c90a0",
    "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81w+3k4U8PL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/61Ze2wc9nyS._AC_SL1500_.jpg",
    
];

  const carouselInner = document.getElementById('carouselInner');
  const carouselIndicators = document.getElementById('carouselIndicators');

  urls.forEach((url, index) => {
      // Create carousel item
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('carousel-item');
      if (index === 0) itemDiv.classList.add('active');

      const img = document.createElement('img');
      img.src = url;
      img.classList.add('d-block', 'w-100');
      img.alt = `Slide ${index + 1}`;

      itemDiv.appendChild(img);
      carouselInner.appendChild(itemDiv);

      // Create carousel indicator
      const indicatorLi = document.createElement('li');
      indicatorLi.setAttribute('data-bs-target', '#carouselExampleIndicators');
      indicatorLi.setAttribute('data-bs-slide-to', index);
      if (index === 0) indicatorLi.classList.add('active');

      carouselIndicators.appendChild(indicatorLi);
  });
});



let selectedCategory = null;
  let selectedPriceRange = null;


const data = [
  {
      "id": "66d96c6989173c5a4263dcb7",
      "products": [
        {
          "id": 1,
          "price": "20000",
          "quantity": "5",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/suvtrees-003.webp?alt=media&token=1b02009d-72d8-40ec-a2cd-a4d593d72d4b",
          "productName": "Car Model 1",
          "postedTime": "2024-09-05T10:00:00",
          "productEnums": "CAR"
      },
      {
          "id": 2,
          "price": "25000",
          "quantity": "3",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/shelby-american-muscle-cars-5893728-2560-1920.jpg?alt=media&token=18942b2a-687b-4000-8531-8c15b8d98832",
          "productName": "Car Model 2",
          "postedTime": "2024-09-05T10:05:00",
          "productEnums": "CAR"
      },
      {
          "id": 3,
          "price": "30000",
          "quantity": "4",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/best_car_wallpapers%201.jpeg?alt=media&token=190d41cd-46f4-4cc9-b6da-2582c6db9c08",
          "productName": "Car Model 3",
          "postedTime": "2024-09-05T10:10:00",
          "productEnums": "CAR"
      },
      {
          "id": 4,
          "price": "22000",
          "quantity": "6",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/47457.webp?alt=media&token=9d68e725-4fef-472f-bd1d-0b408ff24de1",
          "productName": "Car Model 4",
          "postedTime": "2024-09-05T10:15:00",
          "productEnums": "CAR"
      },
      {
          "id": 5,
          "price": "27000",
          "quantity": "2",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/NetBhB7.jpg?alt=media&token=87198ab1-ad04-4ea1-860e-d55e35da2bee",
          "productName": "Car Model 5",
          "postedTime": "2024-09-05T10:20:00",
          "productEnums": "CAR"
      },
      {
          "id": 6,
          "price": "23000",
          "quantity": "5",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/5-lamborghini-gallardo-car-wallpaper-1024x576.jpg?alt=media&token=ef54fa54-7ab8-4af1-bd03-86b68a30cbd6",
          "productName": "Car Model 6",
          "postedTime": "2024-09-05T10:25:00",
          "productEnums": "CAR"
      },
      {
          "id": 7,
          "price": "28000",
          "quantity": "4",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/e6f99cc790210cb3ea63bc2755e98550.jpg?alt=media&token=cd3b9dab-ed62-4657-82b1-889cdc2822c0",
          "productName": "Car Model 7",
          "postedTime": "2024-09-05T10:30:00",
          "productEnums": "CAR"
      },
      {
          "id": 8,
          "price": "24000",
          "quantity": "3",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/Bmw%20cars%20usa-2.jpg?alt=media&token=8d44a607-240c-4a13-8fe5-adee7827be72",
          "productName": "Car Model 8",
          "postedTime": "2024-09-05T10:35:00",
          "productEnums": "CAR"
      },
      {
          "id": 9,
          "price": "29000",
          "quantity": "6",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/Classic%20Cars%20Wallpapers%205.jpg?alt=media&token=cb4d0b06-18ca-4fb3-b107-a1b0cbfa77f8",
          "productName": "Car Model 9",
          "postedTime": "2024-09-05T10:40:00",
          "productEnums": "CAR"
      },
      {
          "id": 10,
          "price": "26000",
          "quantity": "2",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/suvtrees-003.webp?alt=media&token=1b02009d-72d8-40ec-a2cd-a4d593d72d4b",
          "productName": "Car Model 10",
          "postedTime": "2024-09-05T10:45:00",
          "productEnums": "CAR"
      },
      {
          "id": 11,
          "price": "25",
          "quantity": "10",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/dd9cdf7c2daead48c83ce0d8cbf42f1a.jpg?alt=media&token=0cdef31f-7e60-4791-b341-f2e979c48e35",
          "productName": "Shirt",
          "postedTime": "2024-09-05T11:00:00",
          "productEnums": "CLOTHES"
      },
      {
          "id": 12,
          "price": "50",
          "quantity": "15",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/26b41ff73d7e2650e2db17a0c313cc22.jpg?alt=media&token=d856b435-4fdf-4252-9d09-f158691c90a0",
          "productName": "Jeans",
          "postedTime": "2024-09-05T11:05:00",
          "productEnums": "CLOTHES"
      },
      {
          "id": 13,
          "price": "100",
          "quantity": "8",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/MG4479.jpg?alt=media&token=bef92bb4-05a7-43e2-b600-0d2cc8edb9e2",
          "productName": "Jacket",
          "postedTime": "2024-09-05T11:10:00",
          "productEnums": "CLOTHES"
      },
      {
          "id": 14,
          "price": "40",
          "quantity": "12",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/60847303_l_a10.jpg?alt=media&token=050ff20f-f0a2-4cfc-b1d5-82550e1bf9a5",
          "productName": "Sweater",
          "postedTime": "2024-09-05T11:15:00",
          "productEnums": "CLOTHES"
      },
      {
          "id": 15,
          "price": "30",
          "quantity": "20",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/download.jpeg?alt=media&token=eea36212-ea49-4371-a0bf-d5d32b835c4c",
          "productName": "Skirt",
          "postedTime": "2024-09-05T11:20:00",
          "productEnums": "CLOTHES"
      },
      {
          "id": 16,
          "price": "70",
          "quantity": "18",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/475198_10150847569934395_22570714394_9342500_382059769_o.jpg?alt=media&token=b1222626-b8b7-4b76-b6d7-1e33ee7ef1ac",
          "productName": "Dress",
          "postedTime": "2024-09-05T11:25:00",
          "productEnums": "CLOTHES"
      },
      {
          "id": 17,
          "price": "20",
          "quantity": "25",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/416482_10150742499699395_22570714394_9181194_1944605606_o.jpg?alt=media&token=540bee97-ca85-48e0-8442-f44c29a94f6b",
          "productName": "T-Shirt",
          "postedTime": "2024-09-05T11:30:00",
          "productEnums": "CLOTHES"
      },
      {
          "id": 18,
          "price": "120",
          "quantity": "7",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/456219_10150729243344395_22570714394_9137730_1777467120_o.jpg?alt=media&token=062e4d6a-0ad4-4af1-a06a-b93be7c0c1d9",
          "productName": "Coat",
          "postedTime": "2024-09-05T11:35:00",
          "productEnums": "CLOTHES"
      },
      {
          "id": 19,
          "price": "35",
          "quantity": "14",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/P0.jpg?alt=media&token=f85a8f97-3a95-405b-bb6f-881293d349f5",
          "productName": "Blouse",
          "postedTime": "2024-09-05T11:40:00",
          "productEnums": "CLOTHES"
      },
      {
          "id": 20,
          "price": "60",
          "quantity": "9",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/61ea90215a9f256d56ab0be9f762560d.jpg?alt=media&token=8cfb8088-b936-4415-b737-0fd8fe18e359",
          "productName": "Pants",
          "postedTime": "2024-09-05T11:45:00",
          "productEnums": "CLOTHES"
      },
      {
          "id": 21,
          "price": "2",
          "quantity": "50",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/packed_meal_3.jpg?alt=media&token=c45e7508-3c49-42aa-9f1c-c73dfd6a7855",
          "productName": "Apple",
          "postedTime": "2024-09-05T12:00:00",
          "productEnums": "FOOD"
      },
      {
          "id": 22,
          "price": "1",
          "quantity": "60",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/50916c5194c6a326ec51518ba63384fb.jpg?alt=media&token=f5bf2399-8d3c-4c68-aa3e-c46455643ece",
          "productName": "Banana",
          "postedTime": "2024-09-05T12:05:00",
          "productEnums": "FOOD"
      },
      {
          "id": 23,
          "price": "3",
          "quantity": "40",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/Food-Packaging-1-scaled.jpg?alt=media&token=bb9602d4-37ac-40ad-b230-324d5a5db28e",
          "productName": "Bread",
          "postedTime": "2024-09-05T12:10:00",
          "productEnums": "FOOD"
      },
      {
          "id": 24,
          "price": "5",
          "quantity": "30",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/sandwich-packaging.jpg?alt=media&token=a362938d-13c9-43ff-8503-ac9f478154f0",
          "productName": "Cheese",
          "postedTime": "2024-09-05T12:15:00",
          "productEnums": "FOOD"
      },
      {
          "id": 25,
          "price": "7",
          "quantity": "20",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/43414_5810398_1070289_image.jpg?alt=media&token=c1975b5d-f579-4016-b0e6-80936a33289e",
          "productName": "Chicken",
          "postedTime": "2024-09-05T12:20:00",
          "productEnums": "FOOD"
      },
      {
          "id": 26,
          "price": "8",
          "quantity": "25",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/71LzcwDJbLL.jpg?alt=media&token=97287951-5887-4f93-a6b2-64c1a092ebd1",
          "productName": "Fish",
          "postedTime": "2024-09-05T12:25:00",
          "productEnums": "FOOD"
      },
      {
          "id": 27,
          "price": "4",
          "quantity": "70",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/PM5.jpg?alt=media&token=b6615619-181c-41f4-9c9c-0a6f340c099e",
          "productName": "Rice",
          "postedTime": "2024-09-05T12:30:00",
          "productEnums": "FOOD"
      },
      {
          "id": 28,
          "price": "2",
          "quantity": "45",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/Farmed-Here-013.jpg?alt=media&token=137004ba-1be2-4f5c-84f0-771035e0e98c",
          "productName": "Milk",
          "postedTime": "2024-09-05T12:35:00",
          "productEnums": "FOOD"
      },
      {
          "id": 29,
          "price": "3",
          "quantity": "35",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/THIRDROCKFOODS_BitesPackaging_MockUp_Round2-1.jpg?alt=media&token=dd13ede5-f081-43cd-927f-934002585a21",
          "productName": "Eggs",
          "postedTime": "2024-09-05T12:40:00",
          "productEnums": "FOOD"
      },
      {
          "id": 30,
          "price": "4",
          "quantity": "50",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/healthy-packages.jpg?alt=media&token=67125661-679a-4c43-ba53-11c15093e7f5",
          "productName": "Yogurt",
          "postedTime": "2024-09-05T12:45:00",
          "productEnums": "FOOD"
      },
      {
          "id": 31,
          "price": "500",
          "quantity": "15",
          "productUrl": "https://m.media-amazon.com/images/I/81gK08T6tYL._AC_SL1500_.jpg",
          "productName": "Smartphone",
          "postedTime": "2024-09-05T13:00:00",
          "productEnums": "DEVICE"
      },
      {
          "id": 32,
          "price": "800",
          "quantity": "12",
          "productUrl": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SL1500_.jpg",
          "productName": "Laptop",
          "postedTime": "2024-09-05T13:05:00",
          "productEnums": "DEVICE"
      },
      {
          "id": 33,
          "price": "300",
          "quantity": "20",
          "productUrl": "https://m.media-amazon.com/images/I/81w+3k4U8PL._AC_SL1500_.jpg",
          "productName": "Tablet",
          "postedTime": "2024-09-05T13:10:00",
          "productEnums": "DEVICE"
      },
      {
          "id": 34,
          "price": "150",
          "quantity": "18",
          "productUrl": "https://m.media-amazon.com/images/I/61Ze2wc9nyS._AC_SL1500_.jpg",
          "productName": "Smartwatch",
          "postedTime": "2024-09-05T13:15:00",
          "productEnums": "DEVICE"
      },
      {
          "id": 35,
          "price": "400",
          "quantity": "10",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/hard%20disk-storage%20device-computer%20lesson.jpg?alt=media&token=812f6be9-e69c-4784-bac9-d84def8fa26e",
          "productName": "Camera",
          "postedTime": "2024-09-05T13:20:00",
          "productEnums": "DEVICE"
      },
      {
          "id": 36,
          "price": "100",
          "quantity": "25",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/gxp2170.png?alt=media&token=79ebdc2e-f87e-446e-947f-cfb7552ad486",
          "productName": "Headphones",
          "postedTime": "2024-09-05T13:25:00",
          "productEnums": "DEVICE"
      },
      {
          "id": 37,
          "price": "120",
          "quantity": "30",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/EKI.jpg?alt=media&token=b8a6b46b-070e-4b94-b5c7-8eb0193dc142",
          "productName": "Speaker",
          "postedTime": "2024-09-05T13:30:00",
          "productEnums": "DEVICE"
      },
      {
          "id": 38,
          "price": "200",
          "quantity": "8",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/ATIV-S-Product-Image-Front-4.jpg?alt=media&token=0ad119d3-53d2-4c21-a04c-374b4bf0ccd1",
          "productName": "Printer",
          "postedTime": "2024-09-05T13:35:00",
          "productEnums": "DEVICE"
      },
      {
          "id": 39,
          "price": "250",
          "quantity": "5",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/freeshipping-font-b-20-b-font-inch-LCD-font-b-monitor-b-font-desktop-font-b.jpg?alt=media&token=80998f96-fbd9-4129-a2c2-c8ecc2da659c",
          "productName": "Monitor",
          "postedTime": "2024-09-05T13:40:00",
          "productEnums": "DEVICE"
      },
      {
          "id": 40,
          "price": "80",
          "quantity": "22",
          "productUrl": "https://firebasestorage.googleapis.com/v0/b/ziontimeline.appspot.com/o/1120672-1.jpg?alt=media&token=af07f854-3aae-4dde-a03e-310603860e67",
          "productName": "Router",
          "postedTime": "2024-09-05T13:45:00",
          "productEnums": "DEVICE"
      }
      ]
  }
];

// Function to apply filters
function applyFilters() {
  const filteredProducts = data[0].products.filter(product => {
    // Check if the product matches the selected category
    let matchesCategory = !selectedCategory || selectedCategory === 'Choose a category' || product.productEnums === selectedCategory;

    // Check if the product matches the selected price range
    let matchesPrice = !selectedPriceRange || selectedPriceRange === 'Select Price Range' || (
      parseInt(product.price, 10) >= parseInt(selectedPriceRange.split('-')[0], 10) &&
      (selectedPriceRange.split('-')[1] === '+' || parseInt(product.price, 10) <= parseInt(selectedPriceRange.split('-')[1], 10))
    );

    return matchesCategory && matchesPrice;
  });

  // Generate product cards with the filtered products
  generateProductCards(filteredProducts);
}

// Function to generate product cards
function generateProductCards(products) {
  const container = document.getElementById('product-list');
  container.innerHTML = ''; // Clear existing content

  products.forEach(product => {
    const cardHTML = `
      <div class="col hp">
        <div class="card h-100 shadow-sm">
          <a href="#">
            <img src="${product.productUrl}" class="card-img-top" alt="${product.productName}" />
          </a>
          <div class="label-top shadow-sm">
            <a class="text-white" href="#">${product.productEnums.toLowerCase()}</a>
          </div>
          <div class="card-body">
            <div class="clearfix mb-3">
              <span class="float-start badge rounded-pill bg-success">R${product.price}</span>
              <span class="float-end"><a href="#" class="small text-muted text-uppercase aff-link">reviews</a></span>
            </div>
            <h5 class="card-title">
              <a target="_blank" href="#">${product.productName}</a>
            </h5>
            <div class="d-grid gap-2 my-4">
              <a href="#" class="btn btn-warning bold-btn">add to cart</a>
            </div>
            <div class="clearfix mb-1">
              <span class="float-start"><a href="#"><i class="fas fa-question-circle"></i></a></span>
              <span class="float-end">
                <i class="far fa-heart" style="cursor: pointer"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

// Function to close dropdowns
function closeDropdowns() {
  document.querySelectorAll('.dropdown-content').forEach(dropdown => {
    dropdown.classList.remove('show');
  });
}

// Toggle dropdown visibility
document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', function() {
    const dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle('show');
  });
});

// Event listeners for category dropdown
document.querySelectorAll('#categoryDropdown a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    selectedCategory = this.getAttribute('data-value');
    document.querySelector('#categoryDropdown .dropbtn').textContent = this.textContent;
    closeDropdowns(); // Ensure dropdowns close
  });
});

// Event listeners for price range dropdown
document.querySelectorAll('#pricingDropdown a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    selectedPriceRange = this.getAttribute('data-value');
    document.querySelector('#pricingDropdown .dropbtn').textContent = this.textContent;
    closeDropdowns(); // Ensure dropdowns close
  });
});

// Event listener for filter button
document.getElementById('filterBtn').addEventListener('click', applyFilters);

// Close dropdowns when clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    closeDropdowns();
  }
}

// Initial rendering of products
generateProductCards(data[0].products);


// Function to handle "add to cart" button click and show the checkout modal
function showCheckoutModal() {
  // Use Bootstrap's modal method to show the modal
  var checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
  checkoutModal.show();
}

// Event listener for the checkout button
document.querySelectorAll('.btn-warning.bold-btn').forEach(btn => {
  btn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    showCheckoutModal(); // Show the checkout modal
  });
});

// Handle confirm checkout button click
document.getElementById('confirmCheckoutBtn').addEventListener('click', function() {
  const name = document.getElementById('customerName').value;
  const email = document.getElementById('customerEmail').value;
  const address = document.getElementById('customerAddress').value;
  const phone = document.getElementById('customerPhone').value;
  
  // Simple form validation
  if (!name || !email || !address || !phone) {
    alert('Please fill out all fields.');
    return;
  }

  // Perform the checkout operation (e.g., send data to server)
  // For demonstration, just log the data
  console.log('Checkout Information:', {
    name,
    email,
    address,
    phone
  });

  // Hide the modal after successful checkout
  var checkoutModal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
  checkoutModal.hide();
  
  // Optionally, clear the form
  document.getElementById('checkoutForm').reset();
});
