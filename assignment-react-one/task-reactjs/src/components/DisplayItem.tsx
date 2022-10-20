import React from 'react';

interface IDisplayItem {
    item: any;
    onCollapseItem: Function;
}

export default function DisplayItem({ onCollapseItem, item }: IDisplayItem) {
    console.warn('DisplayItem not implemented');
    return <p>Display item</p>;
}
