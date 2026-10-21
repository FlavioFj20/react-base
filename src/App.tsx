import { useState } from "react"

export function App() {
  const [value, setValue] = useState('')
  const [list, setList] = useState([
    {id: '1', label: 'Fazer almoço', complete: false},
    {id: '2', label: 'Fazer almoço', complete: false},
    {id: '3', label: 'Fazer cafe', complete: false},
    {id: '4', label: 'Fazer janta', complete: false}
  ]);

  return (
    <>
      <input id="item" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
            value && setList([
              ...list,
              {id: (list.length + 1).toString(), label: value, complete: false}
            ]);
            setValue('');
      }}
      >Adicionar</button>

      <ol>
        {list.map((listItem) => (
          <li key={listItem.id}>
            {listItem.label + ' '}
            {listItem.complete ? 'Concluido' : ''}

            <button
              onClick={() => {
                setList([...list.map((it) => ({
                    ...it,
                    complete: it.id === listItem.id ? true : it. complete
                  }))
                ])
              }}
            >Concluir</button>
            <button
              onClick={() => {
                setList([...list.filter((it) => it.id !== listItem.id)])
              }}
            >Remover</button>
          </li>
        ))}
      </ol>
    </>
  )
}
