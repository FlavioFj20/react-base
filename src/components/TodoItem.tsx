
interface ITodoItemProps {
    id: string;
    label: string;
    complete: boolean;
    onComplete(id: string): void;
    onRemove(id : string): void;
}

export const TodoItem = ({id, label, complete, onComplete, onRemove}: ITodoItemProps) => {
    return (
        <li key={id}>
            {label + ' '}
            {complete ? 'Concluido' : ''}

            <button onClick={() => onComplete(id)}>Concluir</button>
            <button onClick={() => onRemove(id)}>Remover</button>
        </li>
    )
}