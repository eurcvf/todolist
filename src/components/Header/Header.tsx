import styles from './Header.module.scss';
import todoLogo from '../../assets/todoLogo.svg';
import iconPlus from '../../assets/icon-plus.svg';
import { useState, FormEvent, ChangeEvent } from 'react';

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    onAddTask(title)
    setTitle('');
  }

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const titleInputChange = event.target.value;

    setTitle(titleInputChange);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logo Todo" />

      <form className={styles.formTask} onSubmit={handleSubmit}>
        <input type="text" placeholder='Adicione uma nova tarefa' onChange={onChangeTitle} value={title} />
        <button>
          Criar
          <img src={iconPlus} alt="Icone +" />
        </button>
      </form>
    </header>
  )
}