import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ShowOrganic from "./ShowOrganic";

const OrganicProduct = () => {
    const { productId } = useParams();
    const [OrganicproductData, setOrganicProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/organicproduct/${productId}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data for product ${productId}`);
                }
                const data = await response.json();
                setOrganicProductData(data);
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
                {OrganicproductData.map((product) => (
                    <div key={product.id}>
                    </div>
                ))}

                <Switch>
                    {/* Pass OrganicproductData array as a prop to ShowOrganic */}
                    <Route path="/products/:productId" element={<ShowOrganic OrganicProductDataProp={OrganicproductData} />} />
                </Switch>
            </Router>
        </div>
    );
};

export default OrganicProduct;
