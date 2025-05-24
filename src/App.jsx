import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Opening from "./components/Opening";
function App() {
  const [isSplashVisibile, setSplashVisible] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
     setSplashVisible(false);
    },4000)

    return ()=> clearTimeout(timer);
  },[])
  
  return (
    <div>
      {isSplashVisibile && <Opening />}
      <Home />
    </div>
  );
}

export default App;
