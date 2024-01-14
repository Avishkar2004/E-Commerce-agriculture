import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PGRShowProduct from "./PGRShowProduct";

const PGRProduct = () => {
    const { productId } = useParams();
    const [PGRproductData, setPGRProductData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/Plantgrowthregulator/${productId}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data for product ${productId}`);
                }
                const data = await response.json();
                setPGRProductData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [productId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <Router>
                {PGRproductData.map((product) =>
                    <div key={product.id}>
                    </div>
                )}

                <Switch>
                    {/* Pass productData as a prop to ShowProduct */}
                    <Route path="/products/:productId" element={<PGRShowProduct PGRDataProp={PGRproductData} />} />
                </Switch>
            </Router>
        </div>
    );
};

export default PGRProduct;
