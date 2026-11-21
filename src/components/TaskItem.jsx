function TaskItem({ task, onDelete , onToggle}) {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.completed ? "Completed" : "Not completed"}</p>
            <button onClick={() => onToggle(task.id)}>Change status</button>
            <button onClick={() => onDelete(task.id)}>Delete
            </button>
        </div>
    );

}

export default TaskItem;