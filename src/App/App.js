import './App.css';
import Meals from '../components/Meals/Meals';
import AddMeal from '../components/AddMeal/AddMeal';
import { useState, useEffect } from 'react';
import getMeals from '../services/getMeals';

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals().then(data => setMeals(data));
  },[]);

  return (
      <>
        <div>
          <AddMeal />
        </div>
        {/*<div>*/}
        {/*  { meals ? <Meals meals={meals}/> : <div>Brak posiłków na liście!</div>}*/}
        {/*</div>*/}
      </>
  );
}

export default App;

