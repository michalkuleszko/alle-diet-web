export default function getMeals() {
    return fetch('/meals/all').then(async (response) => {
        if (response.ok && response.status === 200) {
            return response.json();
        } else {
            throw new Error('Problem z pobieraniem danych!');
        }
    }).catch(err => console.log(err));
}
