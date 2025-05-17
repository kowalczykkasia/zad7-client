import { useState, useEffect } from 'react';
import ItemList from './components/ItemList';
import Cart from './components/cart';
import axios from 'axios';
import CategoryList from './components/categoryList';
import Navbar from './components/Navbar';
import './index.css';
import { PRODUCTS_URL, CATEGORIES_URL} from './consts'
import SuccessDialog from './components/successDialog';


function App() {
  const [currentItems, setCurrentItems] = useState([]);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoadingFromDbFinished, setIsLoadingFromDbFinished] = useState(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("Loaded cart items: ", savedCartItems)
    setCartItems(savedCartItems);
    setIsLoadingFromDbFinished(true);
  }, []);

  useEffect(() => {
    if (isLoadingFromDbFinished) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
      console.log("Saved cart items: ", JSON.parse(localStorage.getItem('cart')) || []);
    }
  }, [cartItems, isLoadingFromDbFinished]);


  useEffect(() => {
    axios.get(PRODUCTS_URL)
    .then(response => {
      console.log(response.data);
      setItems(response.data);
      setCurrentItems(response.data);
    })
    .catch(error => {
      console.error("There was an error fetching items", error)
    })
  }, [])

  useEffect(() => {
    axios.get(CATEGORIES_URL)
    .then(response => {
      console.log(response.data);
      setCategories(response.data);
    })
    .catch(error => {
      console.error("There was an error fetching items", error)
    })
  }, [])

  useEffect(() => {
    setCurrentItems(
      selectedCategory === null
        ? items
        : items.filter(item => item.category_id === selectedCategory.id)
    );
  }, [selectedCategory, items]);


  const selectCategory = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  }

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if(existingItem.quantity === 1) {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
    } 
    else {
        setCartItems(cartItems.map(cartItem => 
          cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity - 1} 
          : cartItem  
        )
      );
    }
  };

  const handlePayment = () => {
    alert("Are you sure you want to proceed with the payment?")
    setCartItems([]);
    setShowSuccessDialog(true);
  };

  const closeDialog = () => {
    setShowSuccessDialog(false);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1">
            <CategoryList categories={categories} selectedCategory={selectedCategory} selectCategory={selectCategory}/>
          </div>
          <div className="md:col-span-2">
            <ItemList items={currentItems} addToCart={addToCart} />
          </div>
          <div className="md:col-span-1">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} handlePayment={handlePayment}/>
          </div>
          {showSuccessDialog && <SuccessDialog onClose={closeDialog}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
