import { useState, useEffect } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // kita bisa mereturn state disini supaya bisa digunakan di component yang lain
  return counter;
};

export default useCounter;
