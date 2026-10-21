import { useState } from 'react';

interface IInputProps {
  onAdd(value: string): void;
}

export const InputAdd = (props: IInputProps) => {
    const [value, setValue] = useState('')

    const handleAdd = () => {
        props.onAdd(value);
        setValue('');
    }

    return (
        <div>
            <input id="item" 
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                onClick={handleAdd}
            >Adicionar</button>
        </div>
    )
}