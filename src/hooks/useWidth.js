import { useEffect, useState } from "react";

const useWidth = () => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
      const updatedWidth = () => {
        const width = document.body.clientWidth;
        setWidth(width);
      };
      updatedWidth();
      window.addEventListener("resize", updatedWidth);
    
      return () => {
        window.removeEventListener("resize", updatedWidth);
      };
    }, []);

    return {width}
}

export default useWidth