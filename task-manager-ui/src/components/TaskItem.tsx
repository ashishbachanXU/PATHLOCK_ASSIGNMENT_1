import { TaskItem as TaskItemType } from '../types/task';

interface TaskItemProps {
  task: TaskItemType;
  onToggle: (id: string, isCompleted: boolean) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const handleToggle = () => {
    onToggle(task.id, !task.isCompleted);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={handleToggle}
        className="task-checkbox"
      />
      <span className={task.isCompleted ? 'task-description completed' : 'task-description'}>
        {task.description}
      </span>
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
    </div>
  );
}
