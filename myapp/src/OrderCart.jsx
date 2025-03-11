import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const products = [
  {
    id: 1,
    name: "Dosa",
    price: 35,
    rating: 3.6,
    category: "Breakfast",
    location: ["Bangalore", "Coimbatore", "Chennai", "Kerala"],
    description: "Crispy and delicious South Indian pancake.",
    imageUrl:
      "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Poori",
    price: 25,
    rating: 3.8,
    category: "Breakfast",
    location: ["Bangalore", "Coimbatore", "Chennai", "Kerala"],
    description: "Soft, fluffy, and perfect with curry.",
    imageUrl:
      "https://images.pexels.com/photos/20422124/pexels-photo-20422124/free-photo-of-meals-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Sandwich",
    price: 50,
    rating: 4.0,
    category: "Breakfast",
    location: ["Bangalore", "Chennai"],
    description:
      " A quick meal made by placing fillings like meats, cheese, or vegetables between slices of bread.",
    imageUrl:
      "https://images.pexels.com/photos/1209029/pexels-photo-1209029.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Upma",
    price: 80,
    rating: 3.4,
    category: "Breakfast",
    location: ["Bangalore", "Coimbatore", "Chennai", "Kerala"],
    description:
      "A savory South Indian dish made from semolina cooked with vegetables and spices",
    imageUrl:
      "https://media.istockphoto.com/id/1488737992/photo/upma-recipe-suji-ka-upma-rava-upma-with-red-and-coconut-chutney.jpg?b=1&s=612x612&w=0&k=20&c=bhwqi_Eo4ozQm3eTh7OPibZP7Yz_WCZOGamPK3847Io=",
  },
  {
    id: 5,
    name: "Puttu",
    price: 90,
    rating: 4.7,
    category: "Breakfast",
    location: ["Kerala"],
    description:
      " A steamed rice cake made from rice flour and grated coconut, typically served with curry or banana.",
    imageUrl:
      "https://images.pexels.com/photos/17104944/pexels-photo-17104944/free-photo-of-puttu-served-on-leaf.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    name: "Biryani",
    price: 180,
    rating: 4.5,
    category: "Lunch",
    location: ["Coimbatore", "Chennai", "Kerala"],
    description:
      "A flavorful and aromatic rice dish made with spices, meat (or vegetables), and sometimes yogurt.",
    imageUrl:
      "https://images.pexels.com/photos/9609854/pexels-photo-9609854.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    name: "Veg meals",
    price: 200,
    rating: 4.6,
    category: "Lunch",
    location: ["Coimbatore", "Chennai"],
    description:
      "A complete vegetarian meal with rice, dal, vegetables, and accompaniments like pickle and papad",
    imageUrl:
      "https://images.pexels.com/photos/14132112/pexels-photo-14132112.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    name: "Fish Curry",
    price: 180,
    rating: 4.3,
    category: "Lunch",
    location: ["Kerala"],
    description:
      "A spicy, tangy curry made with fish and seasoned with a variety of aromatic spices.",
    imageUrl:
      "https://images.pexels.com/photos/7234281/pexels-photo-7234281.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 9,
    name: "Burger",
    price: 120,
    rating: 4.2,
    category: "Snacks",
    location: ["Bangalore", "Coimbatore", "Chennai"],
    description:
      "A sandwich consisting of a patty, usually beef or chicken, placed in a bun with various toppings.",
    imageUrl:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 10,
    name: "Shawarma",
    price: 200,
    rating: 4.0,
    category: "Snacks",
    location: ["Bangalore", "Chennai"],
    description:
      "A Middle Eastern dish consisting of spiced meat (usually lamb or chicken) wrapped in flatbread with vegetables and sauce.",
    imageUrl:
      "https://images.pexels.com/photos/28897047/pexels-photo-28897047/free-photo-of-delicious-shawarma-wraps-with-fresh-ingredients.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 11,
    name: "Pizza",
    price: 400,
    rating: 4.7,
    category: "Snacks",
    location: ["Bangalore", "Coimbatore", "Chennai"],
    description:
      "A flat, round bread topped with sauce, cheese, and various toppings, baked until crispy and delicious.",
    imageUrl:
      "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 12,
    name: "Noodles",
    price: 185,
    rating: 4.8,
    category: "Dinner",
    location: ["Bangalore"],
    description:
      "Long, thin pasta typically stir-fried or served in broth, often with vegetables and meat",
    imageUrl:
      "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 13,
    name: "Parotta",
    price: 20,
    rating: 4.6,
    category: "Dinner",
    location: ["Coimbatore", "Chennai", "Kerala"],
    description:
      "A flaky, layered flatbread made from refined flour, often served with curries.",
    imageUrl:
      "https://images.pexels.com/photos/9609857/pexels-photo-9609857.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 14,
    name: "Pasta",
    price: 150,
    rating: 4.3,
    category: "Dinner",
    location: ["Bangalore"],
    description:
      "Italian-style noodles served with a variety of sauces, including marinara, Alfredo, and pesto.",
    imageUrl:
      "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 15,
    name: "Chappathi",
    price: 30,
    rating: 3.9,
    category: "Dinner",
    location: ["Coimbatore", "Chennai", "Kerala"],
    description:
      "A soft, unleavened flatbread made from whole wheat flour, commonly served with curries.",
    imageUrl:
      "https://media.istockphoto.com/id/516359240/photo/bhendi-masala-or-bhindi-masala-ladies-finger-curry-with-chapati.jpg?b=1&s=612x612&w=0&k=20&c=_HrQANed2015TFpJXSGDx2vqSRHKTFtJMnIg6E8QGZU=",
  },
];

export default function OrderCart() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Food");
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [customerDetailsStage, setCustomerDetailsStage] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setActiveTab("FoodDetails");
  };

  const handleBack = () => {
    setSelectedItem(null);
    setActiveTab("Food");
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const itemName = cart[index].name;
    setCart(cart.filter((_, i) => i !== index));
  };

  const placeOrder = () => {
    if (cart.length > 0) {

      setCustomerDetailsStage(true);
    }
  };

  const handleCustomerDetailsSubmit = (e) => {
    e.preventDefault();
    const storedLoginStatus = localStorage.getItem("isLoggedIn") === "true";
    if (!storedLoginStatus) {
      Swal.fire("Error", "Please log in to place an order.", "error");
      navigate("/login");
      return;
    }
//ot
    if (
      customerDetails.name.trim() &&
      customerDetails.address.trim() &&
      /^\d{10}$/.test(customerDetails.phone)
    ) {
      setOrderPlaced(true);
      setCart([]);
      setCustomerDetailsStage(false);
      Swal.fire("Success", "Order placed successfully!", "success");
    } else {
      Swal.fire("Error", "Please fill in all the details.", "error");
    }
  };

  return (
    <div className="App">
      <div className="categories">
        <button
          onClick={() => setActiveTab("Food")}
          className={activeTab === "Food" ? "active" : ""}
        >
          Food
        </button>
        <button
          onClick={() => setActiveTab("Cart")}
          className={activeTab === "Cart" ? "active" : ""}
        >
          Cart ({cart.length})
        </button>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="content">
        {activeTab === "Food" && !selectedItem && (
          <div className="food-section">
            {filteredProducts.map((product) => (
              <div className="food-card" key={product.id}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  onClick={() => handleItemClick(product)}
                />
                <p>{product.name}</p>
                <p>Rs. {product.price}/-</p>
                <p>{product.rating} ★</p>
                <button onClick={() => addToCart(product)}> Cart 🛒</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "FoodDetails" && selectedItem && (
          <div className="items-section">
            <h2>{selectedItem.name}</h2>
            <img src={selectedItem.imageUrl} alt={selectedItem.name} />
            <p>{selectedItem.description}</p>
            <p>Rs. {selectedItem.price}/-</p>
            <p>{selectedItem.rating} ★</p>
            <button onClick={() => addToCart(selectedItem)}>🛒 Cart</button>
            <button onClick={handleBack}>Back</button>
          </div>
        )}

        {activeTab === "Cart" && !customerDetailsStage && (
          <div className="cart-section">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <div className="cart-items">
                {cart.map((item, index) => (
                  <div className="cart-card" key={index}>
                    <img src={item.imageUrl} alt={item.name} />
                    <p>{item.name}</p>
                    <p>Rs. {item.price}/-</p>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
            <button
              className="place-btn"
              onClick={placeOrder}
              disabled={cart.length === 0}
            >
              Place Order
            </button>
          </div>
        )}

        {customerDetailsStage && (
          <div className="customer-details">
            <h2>Enter Your Details</h2>
            <form onSubmit={handleCustomerDetailsSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  value={customerDetails.name}
                  onChange={(e) =>
                    setCustomerDetails({
                      ...customerDetails,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  value={customerDetails.address}
                  onChange={(e) =>
                    setCustomerDetails({
                      ...customerDetails,
                      address: e.target.value,
                    })
                  }
                  required
                />
              </label>
              <label>
                Phone:
                <input
                  type="tel"
                  value={customerDetails.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 10) {
                      setCustomerDetails({ ...customerDetails, phone: value });
                    }
                  }}
                  required
                  pattern="\d{10}"
                  title="Phone number must be exactly 10 digits"
                />
              </label>
              <button type="submit">Confirm Delivery</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

