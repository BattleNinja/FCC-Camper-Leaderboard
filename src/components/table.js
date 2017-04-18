import React from 'react';

const CamperTable = ({data}) => {

    const Output = data.map((person,index)=>{
        return <List key={index} number = {index+1} person = {person} />
    });
    return (
        <div>
            <table className = "table table-striped text-center">
                <thead className="thead" >
                    <tr >
                        <th>Rank</th>
                        <th>Camper Name</th>
                        <th>All time</th>
                        <th>Recent</th>
                    </tr>
                </thead>
                <tbody className="tbody">
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
            <td><img className="userimg" src = {person.img}/>{person.username}</td>
            <td>{person.alltime}</td>
            <td>{person.recent}</td>
        </tr>
    );

}


