import { useState } from "react";

const useInput = (validation, cl) => {
  const [isTouched, setIsTouched] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const valueIsValid = validation(inputValue);
  const hasError = !valueIsValid && isTouched;

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const reset = () => {
    setIsTouched(false);
    setInputValue("");
  };

  const inputClass = hasError ? cl + " invalid" : cl;
  
  return {
    setInputValue,
    inputValue,
    hasError,
    onBlurHandler,
    reset,
    inputClass,
  };
};

export default useInput;
