import React, { useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import { Productos } from '../components/Productos';


export const App = () => {
  //const [type, setType] = useState<style>('dark');
  //const [count, setCount] = useState(0);
  //const [loading, setLoading] = useState(false);
  //const add = () => setCount(count + 1)
  //const remove = () => setCount(count - 1)

 /* useEffect(() => {
      setLoading(true)
      setTimeout(() => {
          setLoading(false)
      }, 3000)
  }, [])*/


  return (

      <div>
         
       < Productos />

      </div>
  )
}