import { useState, FormEvent } from 'react';

interface TaskFormProps {
  onSubmit: (description: string) => void;
}

export default function TaskForm({ onSubmit }: TaskFormProps) {
  const [description, setDescription] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (description.trim() === '') {
      alert('Please enter a task description');
      return;
    }

    onSubmit(description);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task..."
        className="task-input"
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
}
