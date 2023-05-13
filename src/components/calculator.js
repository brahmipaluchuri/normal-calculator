import React,{useState} from 'react';
import * as math from 'mathjs';


export const Calculator=()=>{
    const[expression,setExpression] =useState('')

    const handleButtonClick=(value)=>{

        switch(value){
            case 'AC':
                setExpression('');
                break;
            case 'DE':
          setExpression(expression.slice(0,expression.length-1))
        //    (prevExpression)=>prevExpression.slice(0,prevExpression.length-1)
          break;
        case '=':
            try{
            const result = math.evaluate(expression);
            setExpression(result.toString())
            
              } catch(error){
                setExpression('Error');
              }   
              break; 
              default:
                setExpression(expression+value)
                    // (prevExpression)=>prevExpression+value)
                break;
        }
    }

    return <>
       <div className='container'>
        <div className='calculator'>
            <div className='item-body'>
            <form>
                <div className='display'>
                    <input type='text' name='display' value={expression} />
                </div>
                <div>
                    <input type='button' value='AC' onClick={()=>handleButtonClick('AC')} />
                    <input type='button' value='DE' onClick={()=>handleButtonClick('DE')} />
                    <input type='button' value='*' onClick={()=>handleButtonClick('*')} />
                    <input type='button' value='/' onClick={()=>handleButtonClick('/')} />
                </div>
                <div>
                    <input type='button' value='7' onClick={()=>handleButtonClick('7')}/>
                    <input type='button' value='8' onClick={()=>handleButtonClick('8')} />
                    <input type='button' value='9' onClick={()=>handleButtonClick('9')}/>
                    <input type='button' value='%' onClick={()=>handleButtonClick('%')} />
                </div>
                <div>
                    <input type='button' value='6' onClick={()=>handleButtonClick('6')} />
                    <input type='button' value='5' onClick={()=>handleButtonClick('5')}/>
                    <input type='button' value='4' onClick={()=>handleButtonClick('4')} />
                    <input type='button' value='-' onClick={()=>handleButtonClick('-')}/>
                </div>
                <div>
                    <input type='button' value='3' onClick={()=>handleButtonClick('3')} />
                    <input type='button' value='2' onClick={()=>handleButtonClick('2')} />
                    <input type='button' value='1' onClick={()=>handleButtonClick('1')} />
                    <input type='button' value='+' onClick={()=>handleButtonClick('+')}/>
                </div>
                <div>
                    <input type='button' value='0' onClick={()=>handleButtonClick('0')}/>
                    <input type='button' value='00' onClick={()=>handleButtonClick('00')} />
                    <input type='button' value='=' onClick={()=>handleButtonClick('=')} className='equal'/>
                </div>
            </form>

        </div>

       </div>
       </div>
    </>
}