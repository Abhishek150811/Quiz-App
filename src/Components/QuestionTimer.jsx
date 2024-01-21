import {useState , useEffect} from 'react'

// const t = 10000 ; 
export default function QuestionTimer({timeout , onTimeout , mode}) {
    const [remainingTime , setRemainingTime] = useState(timeout) ;
    // console.log(timeout) ; 
    
    useEffect(()=>{
      console.log("Setting Timeout") ;
        const timer = setTimeout(onTimeout , timeout) ;
        return ()=>{
          clearInterval(timer) ;
        }
    } , [timeout , onTimeout]) ;
    
    useEffect(()=>{
      console.log("Setting Interval") ;
        const timer =   setInterval(() => {
            setRemainingTime(prevTime => prevTime - 10) ;
        }, 10);

        return ()=> { clearInterval(timer) }
    } , []) ;


  return ( 
    <progress id='question-time'  value={remainingTime} max={timeout} className={mode}/>
  )
}
