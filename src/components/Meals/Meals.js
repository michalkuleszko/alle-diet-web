import React from 'react';
import './Meals.css';
import Meal from '../Meal/Meal';

export default function Meals(props) {
    return (
        <div className="meals">
            <h1>Moje posiłki</h1>
            {props.meals.map((meal) => <Meal key={meal.id} meal={meal}/>)}
            <span className="meals-counter">Ilość posiłków: {props.meals.length}</span>
        </div>
    )
}
