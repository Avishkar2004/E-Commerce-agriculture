import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch, useParams } from "react-router-dom";
import ShowMicroProduct from "./ShowMicroProduct";
const MicroNutrientProduct = () => {
    const { productId } = useParams()
    const [microProductData, setmicroProductData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/micro-nutrients/${productId}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch micro nutrients data ${productId}`);
                }
                const data = await response.json();
                setmicroProductData(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        };

        fetchData()
    }, [productId])
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error: {error}</p>
    }
    return (
        <div>
            <Router>
                {microProductData.map((product) =>
                    <div key={product.id}>
                    </div>
                )}

                <Switch>
                    {/* pass microProductData as a prop to Show Product */}
                    <Route path="/products/:productId" element={<ShowMicroProduct MicroDataProp={microProductData} />} />
                </Switch>
            </Router>
        </div>
    )
}

export default MicroNutrientProduct