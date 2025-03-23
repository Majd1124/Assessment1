class Taskmanager 
{
    private tasks: { id: number; name: string; status: string }[] = [];
    private currentId: number = 1;

    addTask(name: string): void 
    {
        const task1 = { id: this.currentId++,  name: name, status: 'Incomplete'};
        this.tasks.push(task1);  
    }

    completeTask(id: number): void 
    {
        const task1 = this.tasks.find(task1 => task1.id === id); 
        if (task1) 
        {
            task1.status = 'Completed';  
        } 
        else 
        {
            console.log('Task is not found.');
        }
    }

    displayTasks(): void 
    {
        this.tasks.forEach(task => {
            console.log(`Task ID: ${task.id}, Name: "${task.name}", Status: ${task.status}`);
        });
    }
}

const taskManager = new Taskmanager(); 
taskManager.addTask("Learn TypeScript"); 
taskManager.completeTask(1); 
taskManager.displayTasks(); 