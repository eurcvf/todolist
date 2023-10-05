import { ITask } from '../../App';
import styles from './Task.module.scss';
import { TbTrash } from 'react-icons/tb';
import { BsFillCheckCircleFill } from 'react-icons/bs';

interface Props {
  task: ITask;
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}

export function Task({ task, onDeleteTask, onCompleteTask }: Props) {

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  }

  const handleCompleteTask = () => {
    onCompleteTask(task.id)
  }

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={handleCompleteTask}>
        {task.isCompleted ? (
          <BsFillCheckCircleFill size={20} />
        ) : <div />}
      </button>
      <p className={task.isCompleted ? styles.isCompletedTask : ""}>
        {task.title}
      </p>
      <button className={styles.deleteTaskButton} onClick={handleDeleteTask}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}