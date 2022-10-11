import React from "react";

export const Training = ({listOfThings,deleteItem}) => {

    return(
        <div id='training'>
           <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Year</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    listOfThings.map((person,i)=>{
                        return (
                            <tr key={person.id}>
                                <td>
                                    {person.id}
                                </td>
                                <td>
                                    {person.name}
                                </td>
                                <td>
                                    {person.lastName}
                                </td>
                                <td>
                                    {person.year}
                                </td>
                                <td>
                                    <button onClick={()=>{deleteItem(person.id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
           </table>
        </div>
    )
}