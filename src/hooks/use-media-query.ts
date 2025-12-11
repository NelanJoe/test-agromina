import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [value, setValue] = useState(true);

  useEffect(() => {
    const onChange = (e: MediaQueryListEvent) => {
      setValue(e.matches);
    };

    const result = matchMedia(query);
    result.addEventListener("change", onChange);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
};
