import {useState , useEffect} from 'react'

export default function QuestionTimer(timeout , onTimeout) {
    const [remainingTime , setRemainingTime] = useState(timeout) ;

    useEffect(()=>{
        setTimeout(onTimeout , timeout) ;
    } , [timeout , onTimeout]) ;

    useEffect(()=>{
        setInterval(() => {
            console.log("remaining time is : " + remainingTime) ;
            setRemainingTime((prevTime) => prevTime - 100) ;
        }, 100);
    } , []) ;

  return ( 
    <progress id='question-time'  value={remainingTime} max={timeout}></progress>
  )
}
