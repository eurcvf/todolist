import { ITask } from '../../App';
import { Task } from '../Task/Task';
import styles from './Tasks.module.scss';
import { TbClipboardText } from 'react-icons/tb';

interface Props {
  tasks: ITask[];
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}

export function Tasks({ tasks, onDeleteTask, onCompleteTask }: Props) {
  const tasksQuantity = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.tasksHeader}>
        <div className={styles.newTasks}>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>
        <div className={styles.completeTasks}>
          <p>Concluídas</p>
          <span>{tasksCompleted} de {tasksQuantity}</span>
        </div>
      </header>

      <div className={styles.listTasks}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onCompleteTask={onCompleteTask} />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboardText className={styles.icon} size={50} />
            <div className={styles.texts}>
              <p>Você ainda não tem tarefas cadastradas!</p>
              <span>Crie tarefas e organize seus itens a fazer.</span>
            </div>
          </section>
        )}
      </div>

    </section>
  )
}