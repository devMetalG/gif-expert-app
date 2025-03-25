import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

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
      <ol>
        { categories.map(category => <li key= { category } > { category } </li>) }
      </ol>
        {/* List Item */}
    </>
  )
}

