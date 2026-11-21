function TaskStatistics({ tasks }) {

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(task => task.completed).length;

    return (
        <div>
            <p>Total tasks: {totalTasks}</p>
            <p>Completed tasks: {completedTasks}</p>
        </div>
    );

}

export default TaskStatistics;