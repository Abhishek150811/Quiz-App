import {useState , useEffect} from 'react'

const t = 10000 ; 
export default function QuestionTimer(timeout , onTimeout) {
    const [remainingTime , setRemainingTime] = useState(timeout) ;
    // console.log("The curr time is : " + remainingTime) ; 
    
    useEffect(()=>{
        setTimeout(onTimeout , timeout) ;
    } , [timeout , onTimeout]) ;
    
    useEffect(()=>{
        setInterval(() => {
            setRemainingTime(prevTime => prevTime - 100) ;
        }, 100);
    } , []) ;


  return ( 
    <progress id='question-time'  value={remainingTime} max={timeout} />
  )
}
