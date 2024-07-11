import React from 'react'

function NameList() {

    // const names = ['John', 'Malcolm', 'Awarlé'];

//   return (
//     <div>
//         {/* <h2>{names[0]}</h2>
//         <h2>{names[1]}</h2>
//         <h2>{names[2]}</h2> */}
        
//         {
//             names.map(name => <h2>{name}</h2>)
//         }
//     </div>
//   )




    // // affichage avec boucle
    // const listeDeNom = names.map(name => <h2>{name}</h2>)
    // return (<div>{listeDeNom}</div>);




    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
      ]

      const personList = persons.map(person => <h2> je suis {person.name}. J'ai {person.age} ans. J'aime {person.skill}</h2>)
      return (<div>{personList}</div>);



}
    

export default NameList 
