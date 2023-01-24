import React, { createContext, useState } from 'react'

export const store=createContext()

const Data = (props) => {

    const [students,setStudents]=useState([

{

"Name":"Joe",
"Age":"25",
"Course":"HTML",
"Batch":"August",
"id":"1"

},

{

    "Name":"Biden",
    "Age":"27",
    "Course":"Css",
    "Batch":"september",
    "id":"2"
    
    },
    {

        "Name":"Martin",
        "Age":"27",
        "Course":"React",
        "Batch":"December",
        "id":"3"
        
        },
        
        {
        
            "Name":"Mary",
            "Age":"23",
            "Course":"Nodejs",
            "Batch":"januauary",
            "id":"4"
            
            },
            {
        
                "Name":"Rosie",
                "Age":"24",
                "Course":"Database",
                "Batch":"April",
                "id":"5"
                
                },


    ])
  return (
    <div>



<store.Provider  value={[students,setStudents]}>


    {props.children}


</store.Provider>




        
    </div>
  )
}

export default Data