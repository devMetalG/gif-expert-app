import { useState } from 'react';

interface AddCategoryProps {
  onAddCategory: (value: string) => void
}

export const AddCategory:React.FC<AddCategoryProps> = ({onAddCategory}) => {
  
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = ({target}:React.ChangeEvent<HTMLInputElement>) => setInputValue(target.value)
  
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(inputValue.trim().length <= 1) return;
    onAddCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={ (e) => handleSubmit(e) }>
      <input 
        type="text"
        placeholder="Search gifs..."
        value={ inputValue }
        onChange={ handleChange }
       />
    </form>
  )
}
