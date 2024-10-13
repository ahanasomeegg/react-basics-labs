import React from 'react';

const Task = (props) => {
    
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High':
                return { backgroundColor: 'red',color: 'white' }; 
            case 'Medium':
                return {backgroundColor: 'orange', color: 'white' }; 
            case 'Low':
                return {backgroundColor: 'green', color: 'white' };  
        }
      }

    return (
        <div className="card ${props.priority}" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="word">{props.description}</p>
            <p className="priority" style={getPriorityColor(props.priority)}> {props.priority.charAt(0).toUpperCase() + props.priority.slice(1)}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}

export default Task;