import React , {useState} from "react" ;
import './ExpItem.css' ;
import ExpDate from './ExpDate'; 
let ExpItem=(props)=>
{
    return (
        <div className='container' >
            <ExpDate date={props.date}/>
            <p className='para'>
            {props.title}
            </p>
            <p className="amount">
                ₹ {props.amount}
            </p>
            
        </div>
    ) ;
}
export default ExpItem ;
