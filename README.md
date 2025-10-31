# 📝 Task Manager - Full Stack Application

<div align="center">

![.NET](https://img.shields.io/badge/.NET-8.0-512BD4?style=for-the-badge&logo=dotnet)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=for-the-badge&logo=typescript)

</div>

---

## ✨ Features

### 🎯 Core Functionality
- ✅ **Display Tasks** - View all tasks in a clean list
- ✅ **Add Tasks** - Create new tasks with descriptions
- ✅ **Toggle Completion** - Mark tasks as done/undone
- ✅ **Delete Tasks** - Remove tasks you no longer need
- ✅ **Real-time Updates** - Instant UI updates after operations

### 🎨 Design & UX
- 🎨 **Hand-drawn Style** - Minimalist, paper-like aesthetic
- 📱 **Responsive Design** - Works on all screen sizes
- ⚡ **Fast & Smooth** - Optimized performance
- 🔄 **Loading States** - Clear feedback during operations
- ❌ **Error Handling** - User-friendly error messages

---

## 🛠️ Tech Stack

### Backend
- **.NET 8.0** - Modern C# framework
- **ASP.NET Core Web API** - RESTful API architecture
- **In-Memory Storage** - Fast, simple data persistence
- **CORS Enabled** - Cross-origin resource sharing

### Frontend
- **React 18** - Modern UI library
- **TypeScript 5.2** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool
- **Axios** - HTTP client for API calls
- **CSS3** - Custom styling with animations

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

| Tool | Version | Download Link |
|------|---------|---------------|
| **.NET SDK** | 8.0+ | [Download](https://dotnet.microsoft.com/download/dotnet/8.0) |
| **Node.js** | 18.0+ | [Download](https://nodejs.org/) |
| **npm** | 9.0+ | Included with Node.js |

**Verify Installation:**

```bash
# Check .NET version
dotnet --version
# Should output: 8.0.xxx

# Check Node.js version
node --version
# Should output: v18.x.x or higher

# Check npm version
npm --version
# Should output: 9.x.x or higher
```

---

### 📦 Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ashishbachanXU/PATHLOCK_ASSIGNMENT_1.git
cd PATHLOCK_ASSIGNMENT_1
```

#### 2️⃣ Backend Setup

```bash
cd TaskManagerApi
dotnet restore
```

#### 3️⃣ Frontend Setup

```bash
cd task-manager-ui
npm install
```

---

### ▶️ Running the Application

You need **TWO terminal windows** - one for backend, one for frontend.

#### Terminal 1: Start Backend 🔧

```bash
cd TaskManagerApi
dotnet run
```

**Expected Output:**
```
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://localhost:5000
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
```

✅ **Backend is running on:** `http://localhost:5000`

---

#### Terminal 2: Start Frontend 🎨

```bash
cd task-manager-ui
npm run dev
```

**Expected Output:**
```
  VITE v5.4.21  ready in 2738 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

✅ **Frontend is running on:** `http://localhost:5173`

---

### 🌐 Access the Application

Open your browser and navigate to:

```
http://localhost:5173/
```

You should see the Task Manager interface! 🎉

---

### ⏹️ Stopping the Application

To stop the servers:

1. Go to each terminal window
2. Press `Ctrl + C`
3. Confirm shutdown if prompted

---

## 📖 API Documentation

### Base URL
```
http://localhost:5000/api/tasks
```

### Endpoints

#### 📋 Get All Tasks

```http
GET /api/tasks
```

**Response:** `200 OK`

```json
[
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "description": "Buy groceries",
    "isCompleted": false
  }
]
```

---

#### ➕ Create Task

```http
POST /api/tasks
Content-Type: application/json
```

**Request Body:**

```json
{
  "description": "Complete assignment"
}
```

**Response:** `201 Created`

```json
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "description": "Complete assignment",
  "isCompleted": false
}
```

---

#### ✏️ Update Task

```http
PUT /api/tasks/{id}
Content-Type: application/json
```

**Request Body:**

```json
{
  "description": "Complete assignment",
  "isCompleted": true
}
```

**Response:** `200 OK`

```json
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "description": "Complete assignment",
  "isCompleted": true
}
```

---

#### 🗑️ Delete Task

```http
DELETE /api/tasks/{id}
```

**Response:** `204 No Content`

---

### Error Responses

| Status Code | Description |
|-------------|-------------|
| `400 Bad Request` | Invalid request data (e.g., empty description) |
| `404 Not Found` | Task with specified ID doesn't exist |
| `500 Internal Server Error` | Server error |

---

## 📁 Project Structure

```
PATHLOCK_ASSIGNMENT_1/
│
├── 📂 TaskManagerApi/                 # Backend (.NET 8 Web API)
│   ├── 📂 Models/
│   │   └── TaskItem.cs               # Data model (Id, Description, IsCompleted)
│   ├── 📂 Services/
│   │   └── TaskService.cs            # Business logic & in-memory storage
│   ├── 📂 Controllers/
│   │   └── TasksController.cs        # API endpoints (GET, POST, PUT, DELETE)
│   ├── 📂 Properties/
│   │   └── launchSettings.json       # Server configuration
│   ├── Program.cs                    # App entry point & configuration
│   └── TaskManagerApi.csproj         # Project file
│
├── 📂 task-manager-ui/                # Frontend (React + TypeScript)
│   ├── 📂 src/
│   │   ├── 📂 components/
│   │   │   ├── TaskForm.tsx          # Add task form component
│   │   │   ├── TaskItem.tsx          # Individual task component
│   │   │   └── TaskList.tsx          # Task list container
│   │   ├── 📂 services/
│   │   │   └── taskService.ts        # API communication (Axios)
│   │   ├── 📂 types/
│   │   │   └── task.ts               # TypeScript interfaces
│   │   ├── App.tsx                   # Main application component
│   │   ├── App.css                   # Application styles
│   │   └── main.tsx                  # React entry point
│   ├── index.html                    # HTML template
│   ├── package.json                  # Dependencies
│   ├── tsconfig.json                 # TypeScript configuration
│   └── vite.config.ts                # Vite configuration
│
├── 📄 README.md                       # This file
└── 📄 .gitignore                      # Git ignore rules
```

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser                              │
│                   http://localhost:5173                     │
│                                                             │
│  ┌───────────────────────────────────────────────────┐     │
│  │           React Frontend (TypeScript)             │     │
│  │                                                   │     │
│  │  ┌─────────────┐  ┌─────────────┐  ┌──────────┐ │     │
│  │  │  TaskForm   │  │  TaskList   │  │ TaskItem │ │     │
│  │  └─────────────┘  └─────────────┘  └──────────┘ │     │
│  │                                                   │     │
│  │  ┌─────────────────────────────────────────────┐ │     │
│  │  │         taskService.ts (Axios)              │ │     │
│  │  └─────────────────────────────────────────────┘ │     │
│  └───────────────────────────────────────────────────┘     │
└──────────────────────┬──────────────────────────────────────┘
                       │ HTTP/JSON
                       │ (GET, POST, PUT, DELETE)
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                    .NET 8 Backend                           │
│                 http://localhost:5000                       │
│                                                             │
│  ┌───────────────────────────────────────────────────┐     │
│  │         TasksController (API Endpoints)           │     │
│  └───────────────────────────────────────────────────┘     │
│                       │                                     │
│                       ▼                                     │
│  ┌───────────────────────────────────────────────────┐     │
│  │      TaskService (Business Logic)                 │     │
│  │      • GetAll()                                   │     │
│  │      • Create()                                   │     │
│  │      • Update()                                   │     │
│  │      • Delete()                                   │     │
│  └───────────────────────────────────────────────────┘     │
│                       │                                     │
│                       ▼                                     │
│  ┌───────────────────────────────────────────────────┐     │
│  │      In-Memory Storage (List<TaskItem>)           │     │
│  └───────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

---


## 🔧 Configuration

### Backend Configuration

**Port Configuration** (`Properties/launchSettings.json`):

```json
{
  "applicationUrl": "http://localhost:5000"
}
```

**CORS Configuration** (`Program.cs`):

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});
```

### Frontend Configuration

**API Base URL** (`src/services/taskService.ts`):

```typescript
const API_BASE_URL = 'http://localhost:5000';
```

## ✅ Assignment Requirements

This project fulfills all requirements for the Basic Task Manager assignment:

### Functional Requirements
- ✅ Display a list of tasks
- ✅ Add a new task with a description
- ✅ Mark a task as completed or uncompleted
- ✅ Delete a task

### Backend Requirements (C# .NET 8)
- ✅ RESTful API using .NET 8 Core
- ✅ In-memory data storage (no database)
- ✅ TaskItem model with Id (Guid), Description (string), IsCompleted (bool)
- ✅ API Endpoints: GET, POST, PUT, DELETE

### Frontend Requirements (React + TypeScript)
- ✅ Single-page application using React
- ✅ TypeScript for type safety
- ✅ Axios for API integration
- ✅ React Hooks for state management

---

## 🎓 Learning Outcomes

Building this project demonstrates proficiency in:

- ✅ Full-stack development
- ✅ RESTful API design
- ✅ React component architecture
- ✅ TypeScript type system
- ✅ State management with hooks
- ✅ HTTP client integration
- ✅ CORS configuration
- ✅ Modern build tools (Vite)
- ✅ Responsive UI design

---

## 📝 Notes

- **Data Persistence**: Tasks are stored in-memory and will be lost when the backend stops
- **Development Only**: This setup is for development/learning purposes
- **SSL Certificate**: Self-signed certificate for local HTTPS (if enabled)
- **Cross-Platform**: Works on Windows, macOS, and Linux

---


<div align="center">

</div>
