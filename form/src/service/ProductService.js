import axios from 'axios';

export function saveproduct()
{
    return axios.post('http://localhost:8080/product/');
}
export function getAllProduct()
{
    return axios.get('http://localhost:8080/product/');
}
export function removeProduct(id)
{
    return axios.delete(`http://localhost:8080/product/${id}`);
}