import { useState } from "react"
import { InputAdd } from "./components/InputAdd";
import { TodoItem } from "./components/TodoItem";
import { List } from "./components/List";
import { v4 as uuidv4 } from 'uuid';

export function App() {
  const [list, setList] = useState([
    {id: uuidv4(), label: 'Fazer almoço', complete: false},
    {id: uuidv4(), label: 'Fazer almoço', complete: false},
    {id: uuidv4(), label: 'Fazer cafe', complete: false},
    {id: uuidv4(), label: 'Fazer janta', complete: false}
  ]);

  const handleAdd = (value: string) => {
    setList([
      ...list,
      { id: uuidv4(), label: value,complete: false }
    ])
  }

  const handleComplete = (id: string) => {
      setList([...list.map((it) => ({
          ...it, 
          complete: it.id === id ? true : it. complete
        })
      )]);
  }

  const handleItemRemove = (id: string) => {
      setList([...list.filter((it) => it.id !== id)])
  }

  return (
    <>
      <InputAdd onAdd={handleAdd}/>

      <List>
        {list.map((listItem) => (
          <TodoItem 
              key={listItem.id}
              id={listItem.id}
              label={listItem.label}
              complete={listItem.complete}

               onComplete={handleComplete}
               onRemove={handleItemRemove}
          />
        ))
        }
      </List>
    </>
  )
}
