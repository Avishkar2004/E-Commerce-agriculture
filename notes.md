1. PGRShowProduct.jsx:-

  useEffect(() => {
    console.log('Product Data:', PGRShowProduct);
  }, [PGRShowProduct, PGRDataProp]);


2. ShowOrganic.jsx

      useEffect(() => {
  }, [productData, OrganicproductData]);

3. ShowMicroProduct.jsx


     useEffect(() => {
        console.log("Product Data:", showMicroProduct);
    }, [showMicroProduct, MicroDataProp])


4. ShowInsecticide

       useEffect(() => {
        console.log('Product Data:', productData);
    }, [productData, InsecticideProductData]);


5. ShowFungicide.jsx

     useEffect(() => {
    // Select price by default for 50 ml
    handleSizeChange('50 ml');
  }, [productDataProp]);