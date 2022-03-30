import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import { FoodBox } from './components/FoodBox'
import { AddFoodForm } from './components/AddFoodForm';
import { Search } from './components/Search'


function App() {
  const [allFoods, setAllFoods] = useState(foods)
  const handleSubmit = (event, state) => {
    event.preventDefault();
    const updateFood = [...allFoods, state]
    setAllFoods(updateFood)
  }
  const deleteFood = (name) => {
    const foodDelete = allFoods.filter((food) => {
      return food.name.toLowerCase() !== name.toLowerCase()
    })
    setAllFoods(foodDelete)
  }
  const [showForm, setShowForm] = useState(false)
  const toggleForm = () => {
    setShowForm(!showForm)
  }
  return (
    <div className="App">


      <Button onClick={toggleForm}>{showForm ? 'Hide Form ' : 'Add New Food'}</Button>
      {showForm ? (<AddFoodForm handleSubmit={handleSubmit} />) : null}

      {allFoods.map((food) => {
        return (
      <FoodBox food={food} key={food.name} deleteFood={deleteFood} />
        )
      })}

    </div>
  );
}

export default App;