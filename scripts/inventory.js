const inventory_grid = document.querySelector("#inventory_grid");

const inventory = [
  {
    id: 0,
    image: "./assets/images/product_1/IMG-20260916-WA0086.jpg",
    title: "20D Trial Lens Set",
    price: "₦240,000",
    discription: `Comes with Distance Snellen Chart, PD Rule with Occluder, Near Reading Card and JCC`,
  },
  {
    id: 1,
    image: "./assets/images/product_2/IMG-20260916-WA0090.jpg",
    title: "YZ Rechargeable Ophthalmoscope",
    price: "₦295,000",
    discription: `...`,
  },
  {
    id: 2,
    image: "./assets/images/product_3/IMG-20260916-WA0091.jpg",
    title: "PD rule with Occluder",
    price: "₦2,500",
    discription: `...`,
  },
  {
    id: 3,
    image: "./assets/images/product_4/IMG-20260918-WA0079.jpg",
    title: "YZ Rechargeable Retinoscope",
    price: "₦295,000",
    discription: `...`,
  },
  {
    id: 4,
    image: "./assets/images/product_5/IMG-20260918-WA0080.jpg",
    title: "Litman Classic Stethoscope",
    price: "₦22,000",
    discription: `...`,
  },
  {
    id: 5,
    image: "./assets/images/product_6/IMG-20260918-WA0082.jpg",
    title: "Keeler Dry Cell Retinoscope",
    price: "₦430,000",
    discription: `...`,
  },
  {
    id: 6,
    image: "./assets/images/product_7/IMG-20260918-WA0083.jpg",
    title: "Penlight",
    price: "₦6,500",
    discription: `...`,
  },
  {
    id: 7,
    image: "./assets/images/product_8/IMG-20260925-WA0024.jpg",
    title: "Keeler dry cell Ophthalmoscope",
    price: "₦375,000",
    discription: `...`,
  },
  {
    id: 8,
    image: "./assets/images/product_9/IMG-20260925-WA0025.jpg",
    title: "Aneroid sphyg",
    price: "₦22,000",
    discription: `...`,
  },
  {
    id: 9,
    image: "./assets/images/product_10/IMG-20260925-WA0026.jpg",
    title: "Mercury Sphyg",
    price: "₦45,000",
    discription: `...`,
  },
];





const load_inventory = () => {
  inventory.forEach((item) => {
    inventory_grid.innerHTML += `
    <div class="card">
          <div class="card_image">
            <img src="${item?.image}" alt="">
          </div>

          <div class="card_body">
            <div class="title_row">
              <p class="title">${item?.title}</p>
              <p class="price">${item?.price}</p>
            </div>
            <p class="discription">${item?.discription}</p>
          </div>
        </div>
    `;
  });
};

load_inventory();
