import React, { useState } from 'react';

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity((prev) => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Product</p>
      </div>

      {/* Product Detail */}
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src="../assets/images/products/product1.jpg" alt="product" className="w-full" />
          <div className="grid grid-cols-5 gap-4 mt-4">
            <img src="../assets/images/products/product2.jpg" alt="product2" className="w-full cursor-pointer border border-primary" />
            <img src="../assets/images/products/product3.jpg" alt="product3" className="w-full cursor-pointer border" />
            <img src="../assets/images/products/product4.jpg" alt="product4" className="w-full cursor-pointer border" />
            <img src="../assets/images/products/product5.jpg" alt="product5" className="w-full cursor-pointer border" />
            <img src="../assets/images/products/product6.jpg" alt="product6" className="w-full cursor-pointer border" />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">Italian L Shape Sofa</h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <span key={index}><i className="fa-solid fa-star"></i></span>
              ))}
            </div>
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span className="text-green-600">In Stock</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600">Apex</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              <span className="text-gray-600">Sofa</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU: </span>
              <span className="text-gray-600">BE45VGRT</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-primary font-semibold">$45.00</p>
            <p className="text-base text-gray-400 line-through">$55.00</p>
          </div>

          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius eum
            reprehenderit dolore vel mollitia optio consequatur hic asperiores inventore suscipit, velit
            consequuntur, voluptate doloremque iure necessitatibus adipisci magnam porro.
          </p>

          <div className="pt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
            <div className="flex items-center gap-2">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <div className="size-selector" key={size}>
                  <input type="radio" name="size" id={`size-${size.toLowerCase()}`} className="hidden" />
                  <label htmlFor={`size-${size.toLowerCase()}`}
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                    {size}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
            <div className="flex items-center gap-2">
              {['#fc3d57', '#000', '#fff'].map((color) => (
                <div className="color-selector" key={color}>
                  <input type="radio" name="color" id={color} className="hidden" />
                  <label htmlFor={color}
                    className="border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block"
                    style={{ backgroundColor: color }}></label>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none" onClick={() => handleQuantityChange('decrease')}>-</div>
              <div className="h-8 w-8 text-base flex items-center justify-center">{quantity}</div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none" onClick={() => handleQuantityChange('increase')}>+</div>
            </div>
          </div>

          <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
            <a href="#"
              className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
              <i className="fa-solid fa-bag-shopping"></i> Add to cart
            </a>
            <a href="#"
              className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
              <i className="fa-solid fa-heart"></i> Wishlist
            </a>
          </div>

          <div className="flex gap-3 mt-4">
            <a href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
