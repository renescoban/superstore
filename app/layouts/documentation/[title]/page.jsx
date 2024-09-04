import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <h2>Title Page</h2> 
        {params.title}
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis laborum corrupti alias quibusdam laboriosam impedit nam voluptatum, ipsam assumenda ducimus! Quidem quam amet nulla rem unde impedit voluptate ipsam fuga!</p>
    </div>
  )
}

export default page