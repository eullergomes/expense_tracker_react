import { Category } from '../types/Category'

export const categories: Category = {
  food: {
    title: 'Alimentação',
    color: 'blue',
    expense: true
  },
  rent: {
    title: 'Aluguel',
    color: 'brown',
    expense: true
  },
  salary: {
    title: 'Salário',
    color: 'green',
    expense: false
  },
  groceries: {
    title: 'Compras de Supermercado',
    color: 'orange',
    expense: true
  },
  transportation: {
    title: 'Transporte',
    color: 'purple',
    expense: true
  },
  health: {
    title: 'Saúde',
    color: 'red',
    expense: true
  },
  entertainment: {
    title: 'Entretenimento',
    color: 'pink',
    expense: true
  },
  utilities: {
    title: 'Contas de Utilidades',
    color: 'yellow',
    expense: true
  },
  education: {
    title: 'Educação',
    color: 'teal',
    expense: true
  },
  clothing: {
    title: 'Roupas',
    color: 'indigo',
    expense: true
  },
  gifts: {
    title: 'Presentes',
    color: 'cyan',
    expense: true
  },
  savings: {
    title: 'Poupança',
    color: 'lime',
    expense: false
  },
  investments: {
    title: 'Investimentos',
    color: 'grey',
    expense: false
  },
  other: {
    title: 'Outros',
    color: 'black',
    expense: true
  }
};
