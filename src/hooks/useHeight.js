import { useEffect, useState } from "react";

const useHeight = () => {
    const [height, setHeight] = useState(0);
    
    useEffect(() => {
      const actualizarHeight = () => {
        const height = document.body.clientHeight;
        setHeight(height);
      };
      actualizarHeight();
      window.addEventListener("height", actualizarHeight);
    
      return () => {
        window.removeEventListener("height", actualizarHeight);
      };
    }, []);

    return {height}
}

export default useHeight