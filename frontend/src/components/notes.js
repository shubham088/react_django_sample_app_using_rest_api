import React from 'react';
import axios from "axios";


class NotesComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            notes : []
        }
    }

    componentDidMount(){
        axios
        .get('http://localhost:8000/api/todos/')
        .then(res => {
            console.log(res['data'])

            this.setState({
                notes : res['data']
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Description</td>
                            <td>is completed</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.notes.map((obj, index)=>{
                        return (
                            <tr key = {index}>
                                <td>{obj.title}</td>
                                <td>{obj.description}</td>
                                <td>{obj.completed ? "True" : "False"}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default NotesComponent