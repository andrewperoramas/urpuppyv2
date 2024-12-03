import { router } from '@inertiajs/react';
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import BreedFilter from './BreedFilter';

const Index = ({ puppies }) => {
    const [query, setQuery] = useState(null);

    useEffect(() => {
        const debouncedVisit = debounce(() => {
            if (query == null) {
                return;
            }

            router.visit('/puppies', {
                data: query,
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => {
                    console.log('Filter applied:', query);
                    // console.log(puppies.data)
                },
            });
        }, 300);

        debouncedVisit();

        return () => {
            debouncedVisit.cancel();
        };


    }, [query]);

    return (
        <div>
            <BreedFilter query={query} setQuery={setQuery} />
            {
                puppies?.data && puppies?.data.map((puppy: App.Data.PuppyData) => (
                    <div>
                        {puppy.name}
                    </div>
                ))
            }
        </div>
    );
};

export default Index;

