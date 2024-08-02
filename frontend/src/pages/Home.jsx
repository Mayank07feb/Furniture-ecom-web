import React from "react";

const categories = [
  { id: 1, image: "category-1.jpg", label: "Bedroom" },
  { id: 2, image: "category-2.jpg", label: "Mattress" },
  { id: 3, image: "category-3.jpg", label: "Outdoor" },
  { id: 4, image: "category-4.jpg", label: "Sofa" },
  { id: 5, image: "category-5.jpg", label: "Living Room" },
  { id: 6, image: "category-6.jpg", label: "Kitchen" },
];

const products = [
  {
    id: 1,
    imgSrc: "assets/images/products/product1.jpg",
    altText: "Guyer Chair",
    title: "Guyer Chair",
    price: "$45.00",
    originalPrice: "$55.90",
    rating: 5,
    reviews: 150,
  },
  {
    id: 2,
    imgSrc: "assets/images/products/product4.jpg",
    altText: "Bed King Size",
    title: "Bed King Size",
    price: "$45.00",
    originalPrice: "$55.90",
    rating: 5,
    reviews: 150,
  },
  {
    id: 3,
    imgSrc: "assets/images/products/product2.jpg",
    altText: "Couple Sofa",
    title: "Couple Sofa",
    price: "$45.00",
    originalPrice: "$55.90",
    rating: 5,
    reviews: 150,
  },
  {
    id: 4,
    imgSrc: "assets/images/products/product3.jpg",
    altText: "Mattress X",
    title: "Mattress X",
    price: "$45.00",
    originalPrice: "$55.90",
    rating: 5,
    reviews: 150,
  },
];

const Home = () => {
  return (
    <div>
      {/* <!-- banner start --> */}

      <div
        className="bg-cover bg-no-repeat bg-center py-36"
        style={{ backgroundImage: "url('assets/images/banner-bg.jpg')" }}
      >
        <div className="container">
          <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
            Best Collection for <br /> Home Decoration
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam{" "}
            <br />
            accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
            odio
          </p>
          <div className="mt-12">
            <a
              href="#"
              className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* <!-- banner end --> */}

      {/* <!-- features Start--> */}

      <div className="container py-16">
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img
              src="assets/images/icons/delivery-van.svg"
              alt="Delivery"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
              <p className="text-gray-500 text-sm">Order over $200</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img
              src="assets/images/icons/money-back.svg"
              alt="Money Returns"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">Money Returns</h4>
              <p className="text-gray-500 text-sm">30 days money returns</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img
              src="assets/images/icons/service-hours.svg"
              alt="24/7 Support"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
              <p className="text-gray-500 text-sm">Customer support</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- features End--> */}

      {/* <!-- categories Start--> */}

      <div className="container py-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          Shop by Category
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative rounded-sm overflow-hidden group"
            >
              <img
                src={`assets/images/category/${category.image}`}
                alt={category.label}
                className="w-full"
              />
              <a
                href="#"
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
              >
                {category.label}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* <!-- categories End--> */}

      {/* <!-- new arrival start --> */}

      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          Top New Arrivals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow rounded overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.imgSrc}
                  alt={product.altText}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="View Product"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </a>
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="Add to Wishlist"
                  >
                    <i className="fa-solid fa-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="#">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    {product.title}
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">
                    {product.price}
                  </p>
                  <p className="text-sm text-gray-400 line-through">
                    {product.originalPrice}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    {Array.from({ length: product.rating }, (_, i) => (
                      <span key={i}>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 ml-3">
                    ({product.reviews})
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to Cart
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* <!-- new arrival end--> */}

      {/* adds start */}

      <div className="container pb-16">
        <a href="#">
          <img
            src="assets/images/offer.jpg"
            alt="Advertisement"
            className="w-full"
          />
        </a>
      </div>

      {/* adds end */}

      {/* <!-- product start--> */}

      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          RECOMENDED FOR YOU
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow rounded overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.imgSrc}
                  alt={product.altText}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="View Product"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </a>
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="Add to Wishlist"
                  >
                    <i className="fa-solid fa-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="#">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    {product.title}
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">
                    {product.price}
                  </p>
                  <p className="text-sm text-gray-400 line-through">
                    {product.originalPrice}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    {Array.from({ length: product.rating }, (_, i) => (
                      <span key={i}>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 ml-3">
                    ({product.reviews})
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to Cart
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* <!-- product end--> */}
    </div>
  );
};

export default Home;
