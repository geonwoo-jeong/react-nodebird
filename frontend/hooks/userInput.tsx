import { useCallback, useState } from "react";

const useInput = (initialValue = null) => {
  const [value, setter] = useState(initialValue);
  const handler = useCallback(event => {
    const {
      target: { value: inputValue }
    } = event;
    setter(inputValue);
  }, []);

  return [value, handler];
};

export default useInput;
