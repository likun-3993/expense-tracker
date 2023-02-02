import React from 'react' ;
import ExpItem from "./ExpItem";

let Exp=(props)=>{

    return (
        props.data.map(
          item=>
          (
            <ExpItem 
            date= {item.date}
            amount={item.amount}
            title={item.title}
            />
          )
        )
    ) ;
}
export default Exp ;
