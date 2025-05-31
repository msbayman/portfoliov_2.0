// components/ItemList.tsx
import React from 'react';
// import Magnet from './Magnet';

type Item = {
    date: string;
    title: string;
    description: string;
};

type ItemListProps = {
    items: Item[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
    return (
        <>
            {items.map((item, index) => (
                // <Magnet key={index} className="w-full">

                <div key={index} className="div_proj flex w-fit mb-6">
                    <div className="date_proj text-xl flex items-center px-3 text-[var(--color-accent)] w-fit">
                        {item.date}
                    </div>
                    <div className="flex flex-col name_and_desec">
                        <div className="name flex">
                            <h1 className="text-xl font-bold md:text-3xl">{item.title}</h1>
                        </div>
                        <div className="descr text-[var(--color-text-secondary)] text-sm md:text-lg">
                            {item.description}
                        </div>
                    </div>
                </div>
                // </Magnet>
            ))}
        </>
    );
};

export default ItemList;
