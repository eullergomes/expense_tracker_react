import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, FilterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea'

function App() {
  const [list, setList] = useState(items);
  const [filtedList, setFiltedList] = useState<Item[]>([]);
  const [currentMonth, setcurrentMonth] = useState(getCurrentMonth()); //mês atual
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {    
    setFiltedList(FilterListByMonth(list, currentMonth));
  }, [list, currentMonth]);
  
  useEffect(()=> {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filtedList) {
      if (categories[filtedList[i].category].expense) {
        expenseCount += filtedList[i].value
      } else {
        incomeCount += filtedList[i].value
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filtedList]);

  const handleMonthChange = (newMonth: string) => {

    setcurrentMonth(`${newMonth}`);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem}/>

        <TableArea list={filtedList}/>
      </C.Body>
    </C.Container>
  );
}

export default App;
