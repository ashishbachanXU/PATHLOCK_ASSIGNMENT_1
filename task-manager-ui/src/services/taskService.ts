import axios from 'axios';
import { TaskItem, CreateTaskRequest, UpdateTaskRequest } from '../types/task';

const API_BASE_URL = 'http://localhost:5000';

export const getTasks = async (): Promise<TaskItem[]> => {
  try {
    const response = await axios.get<TaskItem[]>(`${API_BASE_URL}/api/tasks`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw new Error('Failed to fetch tasks');
  }
};

export const createTask = async (description: string): Promise<TaskItem> => {
  try {
    const request: CreateTaskRequest = { description };
    const response = await axios.post<TaskItem>(`${API_BASE_URL}/api/tasks`, request);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw new Error('Failed to create task');
  }
};

export const updateTask = async (id: string, task: UpdateTaskRequest): Promise<TaskItem> => {
  try {
    const response = await axios.put<TaskItem>(`${API_BASE_URL}/api/tasks/${id}`, task);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw new Error('Failed to update task');
  }
};

export const deleteTask = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/api/tasks/${id}`);
  } catch (error) {
    console.error('Error deleting task:', error);
    throw new Error('Failed to delete task');
  }
};
