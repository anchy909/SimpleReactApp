import React from 'react'

export const ButtonComponent = (props ) => {
    const onClick = () => {
        console.log('Mock')
    }
    // const handleSubmit = () => {
    //     console.log("HAndle submit")
    // }
  return (
    <div>
        <button onClick={props.onClick}> Click</button>
        
         {/* <div id="awesome"> {text} </div> */}
         
         </div>
  )
}
