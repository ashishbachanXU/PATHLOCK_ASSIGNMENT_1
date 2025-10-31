import { useState, useEffect } from 'react';
import './App.css';
import { TaskItem } from './types/task';
import { getTasks, createTask, updateTask, deleteTask } from './services/taskService';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch tasks on component mount
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    } catch (err) {
      setError('Failed to load tasks. Make sure the backend is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (description: string) => {
    try {
      setError(null);
      const newTask = await createTask(description);
      setTasks([...tasks, newTask]);
    } catch (err) {
      setError('Failed to create task');
      console.error(err);
    }
  };

  const handleToggleTask = async (id: string, isCompleted: boolean) => {
    try {
      setError(null);
      const taskToUpdate = tasks.find(t => t.id === id);
      if (!taskToUpdate) return;

      const updatedTask = await updateTask(id, {
        description: taskToUpdate.description,
        isCompleted
      });

      setTasks(tasks.map(t => t.id === id ? updatedTask : t));
    } catch (err) {
      setError('Failed to update task');
      console.error(err);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      setError(null);
      await deleteTask(id);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (err) {
      setError('Failed to delete task');
      console.error(err);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>To-Do List!</h1>
        
        {error && <div className="error-message">{error}</div>}
        
        <TaskForm onSubmit={handleCreateTask} />
        
        {loading ? (
          <p className="loading-message">Loading tasks...</p>
        ) : (
          <TaskList
            tasks={tasks}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        )}
      </div>
    </div>
  );
}

export default App;
