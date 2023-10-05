import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";

const LOCAL_STORAGE_KEY = 'todolist:saveTasks'

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
  ]);

  const handleGetSaveTask = () => {
    const savedTask = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedTask) {
      setTasks(JSON.parse(savedTask))
    }
  }

  useEffect(() => {
    handleGetSaveTask()
  }, [])

  const handleSetSaveTask = (newTasks: ITask[]) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  const handleAddTask = (taskTitle: string) => {
    handleSetSaveTask([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ])
  }

  const handleDeleteTask = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    handleSetSaveTask(newTasks)
  }

  const handleCompleteTask = (taskId: string) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    })

    handleSetSaveTask(newTasks);
  }

  return (
    <>
      <Header onAddTask={handleAddTask} />
      <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} onCompleteTask={handleCompleteTask} />
    </>
  )
}

