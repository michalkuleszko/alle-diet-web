import React, { useState, useEffect } from 'react';
import './Meals.css';
import Meal from '../Meal/Meal';
import getMeals from '../../services/getMeals';

export default function Meals() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getMeals().then(data => setMeals(data));
    }, []);

    return (
        <div className="meals">
            <h1>Moje posiłki</h1>
            {meals ? meals.map((meal) => <Meal key={meal.id} meal={meal}/>) : <div>Brak posiłków</div>}
            <span className="meals-counter">Ilość posiłków: {meals.length}</span>
        </div>
    )
}
