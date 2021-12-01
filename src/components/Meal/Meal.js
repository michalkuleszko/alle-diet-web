import React from 'react';
import './Meal.css';
import { meal } from '../../dummy/meals';

export default function Meal(props) {
    return (
        <div className="meal">
            <div className="meal-title"><strong>Nazwa: {props.meal.name}</strong></div>
            <div className="meal-info">
                <div>
                    <div>Kalorie: {props.meal.calories}</div>
                    <div>Utworzony: {props.meal.createdAt}</div>
                </div>
                <div className="ingredients">
                    <div>Składniki:</div>
                    <div>{
                        props.meal.ingredients
                            .map((el) =>
                                (<div key={Math.random()}>{el.name}: {el.calories} kalorii</div>))
                    }</div>
                </div>
            </div>
        </div>
    )
}
