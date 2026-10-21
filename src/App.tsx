import { useState } from "react"

export function App() {
  const [item, setItem] = useState([
    {id: '1', label: 'Fazer almoço'},
    {id: '2', label: 'Fazer almoço'},
    {id: '3', label: 'Fazer cafe'},
    {id: '4', label: 'Fazer janta'}
  ]);

  return (
    <>
      <input id="item" type="\" />
      <button>Adicionar</button>

      <ol>
        {item.map((listItem) => (
          <li key={listItem.id}>{listItem.label}</li>
        ))}
      </ol>
    </>
  )
}
