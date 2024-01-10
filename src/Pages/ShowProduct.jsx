import React from 'react';
import { useParams } from 'react-router-dom';

const ShowProduct = () => {
    const { name, stockStatus } = useParams();

    return (
        <section>
            <div>
                <p>Basic: {name}</p>
            </div>

            <div>
                <p>Stock Status: {stockStatus}</p>
            </div>
        </section>
    );
};

export default ShowProduct;
