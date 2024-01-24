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



  app.post("/users", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  console.log("Request Body:", req.body); // Log the entire request body
  try {
    const hashedPassword = await bcrypt.hash(password, confirmPassword, 20);
    const [result] = await db
      .promise()
      .execute(
        "INSERT INTO users (username, email, password, confirmpassword) VALUES (?, ?, ?, ?)",
        [username, email, password, hashedPassword]
      );
    console.log(result);
    // Release the connection back to the pool
    // db.release();
    // Return success
    res.status(201).send("User created successfully.");
  } catch (error) {
    console.error("Error inserting user into database:", error);
    res.status(500).send("Internal Server Error");
  }
});




client id:-
350338249801-duudqknf69p38bki7ko8asqtvnjcvo6j.apps.googleusercontent.com

client secret :-
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


