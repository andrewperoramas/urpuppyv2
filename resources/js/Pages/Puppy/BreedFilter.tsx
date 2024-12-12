import { router } from '@inertiajs/react';
import React from 'react';

const BreedFilter = ({ query, setQuery }: {
    query: any,
    setQuery: any
}) => {
    const handleBreedChange = (breed: string) => {
        // Ensure the breeds array remains unique
        const updatedBreeds = new Set(query?.filter?.breeds || []);
        updatedBreeds.add(breed);

        const newQuery = {
            ...query,
            filter: {
                ...query?.filter,
                breeds: Array.from(updatedBreeds), // Keep breeds as an array
            },
        };


        setQuery(newQuery);

        // router.visit('/puppies', {
        //     data: newQuery,
        //     preserveState: true,
        //     preserveScroll: true,
        //     onSuccess: () => {
        //         // console.log('Filter applied:', newQuery.filter.breeds);
        //     },
        // });
    };

    return (
        <div>
            <button onClick={() => handleBreedChange('Donavon')}>Donavon</button>
            <button onClick={() => handleBreedChange('Bugrit')}>Bugrit</button>
            <button onClick={() => handleBreedChange('Hellen')}>Temurik</button>
            <button onClick={() => handleBreedChange('Jada')}>Jadaj</button>
        </div>
    );
};

export default BreedFilter;

