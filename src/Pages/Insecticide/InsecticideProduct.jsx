import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ShowInsecticide from "./ShowInsecticide";

const InsecticideProduct = () => {
    const { productId } = useParams();
    const [InsecticideProductData, setInsecticideProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/insecticide/${productId}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data for insecticide ${productId}`);
                }
                const data = await response.json();
                setInsecticideProductData(data);
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
                {InsecticideProductData.map((product) => (
                    <div key={product.id}>
                        {/* Render relevant information about the product here */}
                    </div>
                ))}

                <Switch>
                    {/* Pass OrganicproductData array as a prop to ShowOrganic */}
                    <Route path="/products/:productId" element={<ShowInsecticide OrganicProductDataProp={InsecticideProductData} />} />
                </Switch>
            </Router>
        </div>
    );
};

export default InsecticideProduct;
