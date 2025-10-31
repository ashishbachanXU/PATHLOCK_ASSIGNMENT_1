import { TaskItem as TaskItemType } from '../types/task';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: TaskItemType[];
  onToggle: (id: string, isCompleted: boolean) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks yet... Start adding some!</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
