"use client";
import { useEffect, useState } from "react";

// Hook que permite mejorar el performance
export const useDebounced = <T>(value: T, wait = 0) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeOutId = window.setTimeout(() => {
      setDebouncedValue(value);
    }, wait);

    //especificar el momento en el que el efecto cambia
    return () => {
      window.clearTimeout(timeOutId);
    };
  }, [value, wait]);

  return debouncedValue;
};
