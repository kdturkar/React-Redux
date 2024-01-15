import { useState } from "react";
import { useEffect } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    console.log("Interval is setuped");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    // 1 sec = 1000ms
    return () => {
       clearInterval(intervalId);
      console.log("Cancelled the interval.");
    }
  },[])

  return (
    <div>
      <p>Current Date & Time:  {time.toLocaleDateString()} - {time.toLocaleTimeString()} </p>
    </div>
  );
}
export default CurrentTime; 