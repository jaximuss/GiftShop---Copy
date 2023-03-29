const wrapper = document.querySelector(".sliderWrapper")

const menuSelector = document.querySelectorAll(".menuItems")

const products = [
    {
      id: 1,
      title: "PAD",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./images/pad.png",
        },
        {
          code: "darkblue",
          img: "./images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./images/jordan.png",
        },
        {
          code: "green",
          img: "./images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "cap",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./images/hats.png",
        },
        {
          code: "green",
          img: "./images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "camera",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./images/camera.png",
        },
        {
          code: "lightgray",
          img: "./images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "watch",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./images/watch.jpg",
        },
        {
          code: "black",
          img: "./images/hippie2.png",
        },
      ],
    },
  ];
  

  let chosenProduct = products[0]

  const currentProductImage = document.querySelector(".productImage")
  const currentProductTitle = document.querySelector(".productTitle")
  const currentProductPrice = document.querySelector(".productPrice")
  const currentProductColors = document.querySelectorAll(".color")
  const currentProductSizes = document.querySelectorAll(".size")


menuSelector.forEach((item, index)=>{
    item.addEventListener("click" , ()=>{

        //change the current slide
            wrapper.style.transform = `translateX(${-90 * index}vw)`;
            //change the chosen product
            chosenProduct = products[index]

            //CHANGE TEXT OF CURRENT PRODUCT
            currentProductTitle.textContent = chosenProduct.title

            //change the price of the current product
            currentProductPrice.textContent = "$" + chosenProduct.price

            //change the image of the current product
            currentProductImage.src= chosenProduct.colors[0].img

            //change the color of each product
            currentProductColors.forEach((color, index) => {
                color.style.backgroundColor = chosenProduct.colors[index].code
            });
    });
});


currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImage.src = chosenProduct.colors[index].img
    })
})

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