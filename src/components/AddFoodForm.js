import { Divider, Input } from 'antd';
import { useState } from 'react';


export function AddFoodForm(props) {
    const [state, setState] = useState({
        name: '',
        image: '',
        calories: 10,
        servings: 1,
      });
    
      const handleChange = (event) => {
        const value = event.target.value;
        setState({ ...state, [event.target.name]: value });
      };
    
      const handleSubmit = (event) => {
        props.handleSubmit(event, state);
      };


    return (
        <form onSubmit={ handleSubmit }>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input name="name" value={state.name} type="text" onChange={handleChange} />

            <label>Image</label>
            <Input name="image" value={state.image} type="text" onChange={ handleChange } />

            <label>Calories</label>
            <Input name="calories" value={state.calories} type="number" onChange={ handleChange } />

            <label>Servings</label>
            <Input name="servings" value={state.servings} type="number" onChange={ handleChange } />

            <button type="submit">Create</button>
        </form>
    );
}