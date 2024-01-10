import { Link } from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Switch, useParams } from "react-router-dom/cjs/react-router-dom.min";
import ShowProduct from "./ShowProduct";

const MainProduct = () => {
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
        <div className='profile'>
            <h1>React Dynamic Routing</h1>
            {productData && productData.map((product) => (
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                </div>
            ))}
            <Switch>
                {/* Add more Route components as needed */}
                <Route path="/products/:productId" element={<ShowProduct/>} />
            </Switch>
        </div>
    );
};

export default MainProduct;