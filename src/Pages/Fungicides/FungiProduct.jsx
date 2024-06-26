// this is for fungi cide
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch, useParams } from "react-router-dom";
import ShowProduct from "./ShowFungicides.jsx";

const FungiProduct = () => {
    const { productId } = useParams();
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/products/${productId}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data for product ${productId}`);
                }
                const data = await response.json();
                setProductData(data);
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
                {productData.map((product) =>
                    <div key={product.id}>
                    </div>
                )}

                <Switch>
                    {/* Pass productData as a prop to ShowProduct */}
                    <Route path="/products/:productId" element={[<ShowProduct key={1} productData={productData} />, <ShowProduct key={2} />]} />
                </Switch>
            </Router>
        </div>
    );
};

export default FungiProduct;
