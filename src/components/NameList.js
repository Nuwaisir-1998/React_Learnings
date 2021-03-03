import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['a', 'b', 'c']
    const nameList = names.map(name => <h2>{name}</h2>)
    const persons = [
        {
            id: 1,
            name: "name1",
            age: 1234,
            skill: 'Time travel'
        },
        {
            id: 2,
            name: "seifagest",
            age: "90092",
            skill: 'Teleportation'
        }
    ]

    const personList = persons.map(person => <Person person={person} />)
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
