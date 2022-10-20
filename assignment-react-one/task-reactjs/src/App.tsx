import React, { useState } from 'react';
import './App.css';

import DisplayItem from './components/DisplayItem';
import SearchInput from './components/SearchInput';

const DATA = [
    {
        id: 'bc75b7f6-2044-11eb-adc1-0242ac120002',
        name: 'Gin and tonic',
        ingredients: [
            '2 ounces gin',
            '4 to 5​ ounces tonic water',
            'Garnish:​ lime wedge',
        ],
        collapsed: false,
    },
    {
        id: '4cbdfa0c-bc48-4c5c-872f-de02a240c21c',
        name: 'Margarita',
        ingredients: [
            'Optional: lime for rimming glass',
            'Optional: salt or sugar for rimming glass',
            '1 1/2 ounces tequila',
            '1 ounce triple sec (Cointreau)',
            '3/4 ounce lime juice (fresh)',
            'Garnish: lime wedge',
        ],
        collapsed: false,
    },
    {
        id: 'ed894402-ba6b-4888-8ed7-4f974977a4be',
        name: 'Negroni',
        ingredients: [
            '1 ounce sweet vermouth',
            '1 ounce Campari',
            '1 ounce gin',
            'Garnish: orange slice or twist',
        ],
        collapsed: false,
    },
];

interface IData {
    id: string;
    name: string;
    collapsed: boolean;
}

function App() {
    const [data, setData] = useState<IData[]>(DATA);

    const handleFilterData = (filter: string) => {
        if (!filter) {
            setData(DATA);
        }
        setData(DATA.filter((i) => i.name.includes(filter)));
    };

    const handleOnCollapseItem = (item: IData) => {
        setData(
            data.map((i) => {
                if (i.id === item.id) {
                    return { ...item, collapsed: !item.collapsed };
                }
                return i;
            })
        );
    };

    return (
        <div className="App" data-testid="app">
            <SearchInput onChange={handleFilterData} />
            {data.map((item) => (
                <DisplayItem
                    onCollapseItem={handleOnCollapseItem}
                    item={item}
                />
            ))}
        </div>
    );
}

export default App;
