import { useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  image: string
  category: string
  rating: number
  inStock: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: "Pure Nagpur Orange Honey",
    price: 450,
    originalPrice: 550,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop",
    category: "Honey",
    rating: 4.8,
    inStock: true
  },
  {
    id: 2,
    name: "Organic Turmeric Powder",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    category: "Spices",
    rating: 4.9,
    inStock: true
  },
  {
    id: 3,
    name: "Saoji Masala Blend",
    price: 250,
    originalPrice: 300,
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400&h=400&fit=crop",
    category: "Spices",
    rating: 4.7,
    inStock: true
  },
  {
    id: 4,
    name: "Cold Pressed Groundnut Oil",
    price: 320,
    originalPrice: 400,
    image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=400&h=400&fit=crop",
    category: "Oils",
    rating: 4.6,
    inStock: true
  },
  {
    id: 5,
    name: "Nagpuri Orange Pickle",
    price: 199,
    originalPrice: 250,
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400&h=400&fit=crop",
    category: "Pickles",
    rating: 4.5,
    inStock: false
  },
  {
    id: 6,
    name: "Organic Jaggery Powder",
    price: 150,
    originalPrice: 180,
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=400&h=400&fit=crop",
    category: "Sweeteners",
    rating: 4.8,
    inStock: true
  },
  {
    id: 7,
    name: "Red Chilli Powder",
    price: 220,
    originalPrice: 280,
    image: "https://images.unsplash.com/photo-1599909533621-9b864d6ec639?w=400&h=400&fit=crop",
    category: "Spices",
    rating: 4.4,
    inStock: true
  },
  {
    id: 8,
    name: "Premium Basmati Rice",
    price: 280,
    originalPrice: 350,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    category: "Grains",
    rating: 4.7,
    inStock: true
  }
]

export default function App() {
  const [cart, setCart] = useState<number[]>([])

  const addToCart = (id: number) => {
    setCart([...cart, id])
  }

  const discount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              NG
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Nagpur Store</h1>
              <p className="text-xs text-amber-600">Organic Products</p>
            </div>
          </div>
          
          <button className="relative p-2">
            <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-3">Pure & Organic Products</h2>
          <p className="text-xl text-amber-100">From Vidarbha Region</p>
        </div>
      </div>

      {/* Products */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Products</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="bg-white text-gray-800 px-4 py-2 rounded-lg font-bold">Out of Stock</span>
                  </div>
                )}
                <span className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 text-xs font-bold rounded">
                  {discount(product.originalPrice, product.price)}% OFF
                </span>
              </div>
              
              <div className="p-4">
                <span className="text-xs text-amber-600 font-semibold uppercase">
                  {product.category}
                </span>
                <h4 className="font-bold text-gray-800 mt-1">
                  {product.name}
                </h4>
                
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-500 ml-1">{product.rating}</span>
                </div>
                
                <div className="flex items-baseline gap-2 mt-3">
                  <span className="text-2xl font-bold text-gray-800">₹{product.price}</span>
                  <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                </div>
                
                <button
                  onClick={() => addToCart(product.id)}
                  disabled={!product.inStock}
                  className={`w-full mt-4 py-2.5 rounded-xl font-semibold transition-all ${
                    product.inStock
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-md hover:shadow-lg'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Nagpur Grocery Store • All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}
