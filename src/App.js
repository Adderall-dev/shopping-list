import React from 'react'
import AddItem from './components/AddItem'
import ShoppingList from './components/ShoppingList'
import './styles/App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Shopping List</h1>
      <AddItem />
      <ShoppingList />
    </div>
  )
}

export default App
