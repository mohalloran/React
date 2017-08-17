import React from 'react';
import {Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

//when you have defaault you are just going to be interested in one function 
export function Chart(props) {

    

     return (

         <div>
           <Sparklines height={120}  width={180} data={props.data}>
                        <SparklinesLine color={props.color} />
                        <SparklinesReferenceLine type="avg"/>

          </Sparklines>

          <div>
            {average(props.data)} ({props.units})
         </div>
         </div>
         
     );

} 

function average(data){
    return _.round(_.sum(data)/data.length);
}

export function SayHello(props){

    return (
        <div>Hi there</div>
    )
}