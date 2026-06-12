import React, { useState, useEffect } from "react";

const useFetch = (apiUrl) => {
  console.log("Api Url: ", apiUrl);

  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  setLoading(true);
  fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .then((actualData) => {
      console.log("Api res: ", actualData);
      if (actualData) {
        setData(actualData);
      }
    })
    .catch((err) => {
      console.log("Err while calling an api: ", err);
      setErr(err);
    })
    .finally(() => {
      setLoading(false);
    });

  return {
    data,
    err,
    loading,
  };
};

export default useFetch;