import { useEffect, useState } from "react";

export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    const fetchApi = async url => {
      const request = await fetch(url);
      const data = await request.text();
      setState({ data, loading: false });
    };

    fetchApi(url);
  }, [url, setState]);

  return state;
};
