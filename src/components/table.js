import React from 'react';

const CamperTable = ({data}) => {

    const Output = data.map((person,index)=>{
        return <List key={index} number = {index+1} person = {person} />
    });


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Camper Name</th>
                        <th>All time</th>
                        <th>Recent</th>
                    </tr>
                </thead>
                <tbody>
                    {Output}
                </tbody>
            </table>



        </div>);
};



export default CamperTable;


const List = ({number,person}) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{person.username}</td>
            <td>{person.alltime}</td>
            <td>{person.recent}</td>

        </tr>
    );

}


