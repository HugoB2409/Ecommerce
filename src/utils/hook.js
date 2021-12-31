import { useState, useEffect } from "react";

const useFetch = (url, isProtected) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUrl() {
      var response = "";

      if (isProtected) {
        response = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: JSON.parse(localStorage.getItem("tokens")),
          },
        });
      } else {
        response = await fetch(url);
      }

      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchUrl();
  }, [url, isProtected]);

  return [data, loading];
};

export { useFetch };
