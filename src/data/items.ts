import { Item } from '../types/Item'

//Dados iniciais
export const items: Item[] = [
  { 
    date: new Date(2024, 0, 25), //hoje - 25/01/2024
    category: 'food', 
    title: 'McDonalts', 
    value: 32.12 
  },
  { 
    date: new Date(2024, 0, 10), 
    category: 'food', 
    title: 'Burger King', 
    value: 28
  },
  { 
    date: new Date(2024, 0, 19), 
    category: 'rent', 
    title: 'Aluguel Apt', 
    value: 2300
  },
  { 
    date: new Date(2024, 0, 24), 
    category: 'salary', 
    title: 'Salário ACME', 
    value: 4500
  },
]