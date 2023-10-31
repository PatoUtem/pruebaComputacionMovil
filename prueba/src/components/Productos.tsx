import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Loading } from './loading';

interface Rating{
    rate: number;
    count: number;
}

interface Products {
    id : number;
    title : string;
    price : number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export const Productos = () => {
    
    const [productos, setProductos] = useState<Products[]>([])
    const [loading, setLoading] = useState(false);
    const [ascendente, setAscendente ] = useState(true);
    //const add = () => setCount(count + 1)
    //const remove = () => setCount(count - 1)
  
    const ordenarProductos = (products: Products[]) => {
        return ascendente ? [...products].sort((a,b) => a.price - b.price) : [...products].sort((a,b) =>  b.price - a.price) 
    }

    const botonOrdenar = () => {
        setAscendente(!ascendente);
        const productosOrdenados = ordenarProductos(productos);
        setProductos(productosOrdenados);
    }
    useEffect(() => {
        
        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get<Products[]>('https://fakestoreapi.com/products');
                const precioAscendente = ordenarProductos(response.data);
                setProductos(precioAscendente);
                console.log(productos);
            } catch (err) {
                console.log(err)
          
            } finally {
                setLoading(false);
              }
            };
      
        getProducts();
        
    }, []);
    
    return (
        <div>
            <button onClick={botonOrdenar}>
                Ordenar por precio 
            </button>
            <h2>Lista de Productos</h2>
            {loading ? <Loading /> :
            
            <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {productos.map(producto => (
                <tr key={producto.id}>
                  <td>{producto.title}</td>
                  <td>${producto.price}</td>
                </tr>
              ))}
            </tbody>
          </table>}
            
           
        </div>
    );


  }