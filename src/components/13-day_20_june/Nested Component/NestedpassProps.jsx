import React from 'react'
  
const data = [
    {name: 'parth sagar', email: 'parthkalathiyagmail.com'},
    {name: 'kiran bhai', email: 'kiranbhaiagmail.com'},
    {name: 'mayur gorfad', email: 'gorfadmayurgmail.com'}
];

const Contact = props =>
       <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
       </div>



export default function NestedpassProps() {
  return (
    <div>
      {
        data.map(info =>
            <Contact {...info}/>
        )
      }
    </div>
  )
}
