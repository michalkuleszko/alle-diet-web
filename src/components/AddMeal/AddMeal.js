import React, { useState } from 'react';
import './AddMeal.css';

export default function AddMeal() {

    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState([]);

    const submitAction = (e) => {
        e.preventDefault()
    }

    const addIngredient = () => {
        setIngredients([...ingredients, {
            name: '',
            calories: 0,
        }]);
    }

    const removeIngredient = (index) => setIngredients(currentIngredients => currentIngredients.filter(x => currentIngredients.indexOf(x) !== index));

    return (
        <div className="meal-form-container">
            <form className="meal-form" onSubmit={(event) => submitAction(event)}>
                <h2>Dodawanie nowego posiłku</h2>
                <div className="meal-name">
                    <label htmlFor="name">Nazwa</label>
                    <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className="meal-ingredients">
                    {ingredients.map((i, index) => (
                        <div className="meal-ingredient" key={index}>
                            <span>{index + 1}: </span>
                            <input id="name" type="text"
                                   value={i.name}
                                   onChange={(event) => setIngredients(
                                       prevIngredients => prevIngredients.map((ingredient, index) => {
                                           if (index === prevIngredients.indexOf(i)) {
                                               return {
                                                   name: event.target.value,
                                                   calories: ingredient.calories,
                                               }
                                           } else return ingredient;
                                       })
                                   )}/>
                            <input id="calories" type="number" min="0" max="1500"
                                   value={i.calories}
                                   onChange={(event) => setIngredients(
                                       prevIngredients => prevIngredients.map((ingredient, index) => {
                                           if (index === prevIngredients.indexOf(i)) {
                                               return {
                                                   name: ingredient.name,
                                                   calories: event.target.value,
                                               }
                                           } else return ingredient;
                                       })
                                   )}/>
                            <button type="button" onClick={() => removeIngredient(index)}>X</button>
                        </div>
                    ))}
                </div>
                <div className="meal-ingredients-controls">
                    <div>Dodaj składnik</div>
                    <button type="button" onClick={() => addIngredient()}>+</button>
                </div>
                <div className="meal-form-controls">
                    <button type="submit">Dodaj posiłek</button>
                </div>
            </form>
        </div>
    );
}

