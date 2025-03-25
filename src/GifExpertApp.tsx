import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp:React.FC = () => {

  const [categories, setCategories] = useState(['']);

  const onAddCategory = (category:string) => {
    
    if(categories.includes(category)) return;
    setCategories([category, ...categories]);
  }
  

  return (
    <>
      {/* title */}
      <h1>Gif Expert App</h1>

      {/* Input */}
      <AddCategory onAddCategory = { onAddCategory }/>
      {/* List */}
      { categories.map(category => (
          <GifGrid 
            key= { category } 
            category= { category } />
        )) 
      }
    </>
  )
}

