const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "LIPSTICKS",
    price: 149,
    colors: [
      {
        code: "#ff4742",
        img: "./img/lip1.jpg",
      },
      {
        code: "#ff4742",
        img: "./img/lip2.jpg",
      },
      {
        code: "#ff4742",
        img: "./img/lip3.jpg",
      },
      {
        code: "#ff4742",
        img: "./img/lip4.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "PERFUMES",
    price: 199,
    colors: [
      {
        code: "7F00FF",
        img: "./img/perfume5.png",
      },
      {
        code: "7F00FF",
        img: "./img/perfume2.png",
      },
      {
        code: "7F00FF",
        img: "./img/perfume3.png",
      },
      {
        code: "7F00FF",
        img: "./img/perfume4.png",
      },

    ],
  },
  {
    id: 3,
    title: "Mascara",
    price: 99,
    colors: [
      {
        code: "lightgray",
        img: "./img/mascara1.png",
      },
      {
        code: "lightgray",
        img: "./img/mascara2.png",
      },
      {
        code: "lightgray",
        img: "./img/mascara3.png",
      },
      {
        code: "lightgray",
        img: "./img/mascara4.png",
      },
    ],
  },
  {
    id: 4,
    title: "LOTIONS",
    price: 139 ,
    colors: [
      {
        code: "#D6A4A4",
        img: "./img/lotion1.png",
      },
      {
        code: "#D6A4A4",
        img: "./img/lotion2.png",
      },
      {
        code: "#D6A4A4",
        img: "./img/lotion3.png",
      },
      {
        code: "#D6A4A4",
        img: "./img/lotion4.png",
      },
    ],
  },
  {
    id: 5,
    title: "SOAPS",
    price: 119 ,
    colors: [
      {
        code: "#E100FF",
        img: "./img/soap1.png",
      },
      {
        code: "#E100FF",
        img: "./img/soap2.png",
      },
      {
        code: "#E100FF",
        img: "./img/soap3.png",
      },
      {
        code: "#E100FF",
        img: "./img/soap4.png",
      },
      
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₱ " + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
