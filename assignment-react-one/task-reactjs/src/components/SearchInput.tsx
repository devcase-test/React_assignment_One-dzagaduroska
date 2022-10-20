import React from 'react';

interface ISearchInput {
    onChange: Function;
}

export default function SearchInput({ onChange }: ISearchInput) {
    console.warn('SearchInput not implemented');
    return <p>Search input</p>;
}
