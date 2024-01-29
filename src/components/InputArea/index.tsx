import { Item } from '../../types/Item';
import * as C from './style'

type Props = {
  onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {

  const handleAddEvent = (e: any) => {
    e.preventDefault()
    console.log(e.target);
    
    
    let newItem: Item = {
      date: new Date(2024, 0, 28),
      category: 'food',
      title: 'Item de teste',
      value: 250.25
    }
    
    onAdd(newItem);
  }

  return (
    <C.Form>
      <button onClick={handleAddEvent}>Adicionar</button>
      <input type="date" name="" id="" />
    </C.Form>
  );
};









