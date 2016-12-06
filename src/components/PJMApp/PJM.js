import React, {Component} from 'react';
import "./PJM.css";
export default class PJM extends Component {
   
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Tasks <button className="btntask" onClick={this.addTask}>Add task</button>
                        </th>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                    </tr>
                </table>


            </div>
        );


    }
    addTask(){
        alert("Task");
    }
}
