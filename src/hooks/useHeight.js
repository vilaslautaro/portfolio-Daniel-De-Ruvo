import { useEffect, useState } from "react";

const useHeight = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updatedScroll = () => {
      const scrollY = window.scrollY;
      setHeight(scrollY);
    };
    updatedScroll();
    window.addEventListener("scroll", updatedScroll);

    return () => {
      window.removeEventListener("scroll", updatedScroll);
    };
  }, []);

  return { height };
};

export default useHeight;
