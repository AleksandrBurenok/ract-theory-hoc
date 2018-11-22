import React from 'react'
import ReactDOM from 'react-dom'

const starWarsChars = [
    {name: 'Дарт Вейдер', side: 'dark'},
    {name: 'Люк Скайуокер', side: 'light'},
    {name: 'Палпатин', side: 'dark'},
    {name: 'Оби-Ван Кеноби', side: 'light'}
];

const App = ({list}) => (
    <ul>
        {list.map((char, index) => {
            return (
                <li key={char.name + index}>
                    <strong>{char.name}</strong> - &nbsp;
                    <i>{char.side}</i>
                </li>
            )
        })}
    </ul>
);

const withFilteredProps = Component => ({list, side}) => {
    const filterList = list.filter(char => char.side === side);
    return <Component list={filterList}/>
};

const FilteredList = withFilteredProps(App);

ReactDOM.render(<FilteredList list={starWarsChars} side='light'/>, document.getElementById('root'));