import { Item } from '../types/Item';

//Filtragens baseado em data

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const FilterListByMonth = (list:Item[], date: string):Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split('-');

  for (let i in list){
    if  (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
}

const addZeroLeft = (num: number):string => num < 10 ? `0${num}` : `${num}`;

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = addZeroLeft(date.getMonth() + 1);
  let day = addZeroLeft(date.getDay());

  return `${day}/${month}/${year}`
}

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-');

  let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];



  return `${months[parseInt(month)-1]} de ${year}`;
}
