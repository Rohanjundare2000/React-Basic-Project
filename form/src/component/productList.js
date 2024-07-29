
// export function ProductList()
// {
//     const[ProductList,setProductList]=useState();

//     try{
//        const response = await getAllProduct();
//        if(response.status === 200)
//         {
//             console.log(response.data.products);
//             setProductList(response.data.products);
//         }
//     }catch(error)
//     {
// if(error.response.status===404)
//     {
//         console.log(error);
//         setProductList([]);
//         setErrorMessage(error.reponse.data.message);
//     }
//     }
// useEffect(()=>{
// fetchProduct();
// },[]);


    

//     return(
    
//         <h1>List Of product</h1>
//     {
//         productList.length !=0
//     }
//         ProductList.map((product)=>{
//             return (
//               <tr>
//                   <td>{product.id}</td>
//                   <td>{product.name}</td>
//                   <td>Rs:{product.price}</td>
//                   <td>{product.quantity}</td>
//                   <td><input type="button" value="Delete" onClick={async()=>{
//                      await removeProduct(product.id);
//                       fetchProduct();
//                   }}></input></td>
//               </tr>
//             )  
//           })
//     )
// }

import React, { useState, useEffect } from 'react'; // Corrected relative path
import { getAllProduct,saveProduct,removeProduct} from '../service/ProductService';

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProduct = async () => {
    try {
      const response = await getAllProduct();
      if (response.status === 200) {
        setProductList(response.data.products);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          setProductList([]);
          setErrorMessage(error.response.data.message);
        } else {
          console.error('Error:', error);
          setErrorMessage('Error fetching products.');
        }
      } else {
        console.error('Error:', error);
        setErrorMessage('Error fetching products.');
      }
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleDeleteProduct = async (productId) => {
    try {
      await removeProduct(productId);
      fetchProduct();
    } catch (error) {
      console.error('Error deleting product:', error);
      setErrorMessage('Error deleting product.');
    }
  };

  return (
    <div>
      <h1>List Of Products</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>Rs: {product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => handleDeleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
