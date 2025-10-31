using TaskManagerApi.Models;

namespace TaskManagerApi.Services;

public class TaskService
{
    private readonly List<TaskItem> _tasks = new();

    public List<TaskItem> GetAll()
    {
        return _tasks;
    }

    public TaskItem? GetById(Guid id)
    {
        return _tasks.FirstOrDefault(t => t.Id == id);
    }

    public TaskItem Create(TaskItem task)
    {
        task.Id = Guid.NewGuid();
        task.IsCompleted = false;
        _tasks.Add(task);
        return task;
    }

    public TaskItem? Update(Guid id, TaskItem updatedTask)
    {
        var task = GetById(id);
        if (task == null)
            return null;

        task.Description = updatedTask.Description;
        task.IsCompleted = updatedTask.IsCompleted;
        return task;
    }

    public bool Delete(Guid id)
    {
        var task = GetById(id);
        if (task == null)
            return false;

        _tasks.Remove(task);
        return true;
    }
}
