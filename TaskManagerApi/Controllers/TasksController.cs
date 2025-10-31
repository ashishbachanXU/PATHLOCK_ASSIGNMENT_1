using Microsoft.AspNetCore.Mvc;
using TaskManagerApi.Models;
using TaskManagerApi.Services;

namespace TaskManagerApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    private readonly TaskService _taskService;

    public TasksController(TaskService taskService)
    {
        _taskService = taskService;
    }

    [HttpGet]
    public ActionResult<List<TaskItem>> GetAll()
    {
        return Ok(_taskService.GetAll());
    }

    [HttpPost]
    public ActionResult<TaskItem> Create([FromBody] CreateTaskRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Description))
        {
            return BadRequest(new { error = "Description is required" });
        }

        var task = new TaskItem
        {
            Description = request.Description
        };

        var createdTask = _taskService.Create(task);
        return CreatedAtAction(nameof(GetAll), new { id = createdTask.Id }, createdTask);
    }

    [HttpPut("{id}")]
    public ActionResult<TaskItem> Update(Guid id, [FromBody] UpdateTaskRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Description))
        {
            return BadRequest(new { error = "Description is required" });
        }

        var updatedTask = new TaskItem
        {
            Description = request.Description,
            IsCompleted = request.IsCompleted
        };

        var result = _taskService.Update(id, updatedTask);
        if (result == null)
        {
            return NotFound(new { error = "Task not found" });
        }

        return Ok(result);
    }

    [HttpDelete("{id}")]
    public ActionResult Delete(Guid id)
    {
        var success = _taskService.Delete(id);
        if (!success)
        {
            return NotFound(new { error = "Task not found" });
        }

        return NoContent();
    }
}

public class CreateTaskRequest
{
    public string Description { get; set; } = string.Empty;
}

public class UpdateTaskRequest
{
    public string Description { get; set; } = string.Empty;
    public bool IsCompleted { get; set; }
}
