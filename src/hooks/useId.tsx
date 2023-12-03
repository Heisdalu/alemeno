import { generateRandomKey } from "../helper";
import { useState, useEffect } from "react";

const useId = () => {
  const local = localStorage.getItem("alemeno_id") || null;
  const [id, setId] = useState(local);

  useEffect(() => {
    if (!local) {
      const token = generateRandomKey(14);
      localStorage.setItem("alemeno_id", token);
      setId(token);
    }
  }, [local]);

  return { id };
};
export default useId;
