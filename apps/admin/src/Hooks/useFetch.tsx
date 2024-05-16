import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
export interface FetchHookProps {
  url: string;
  method?: string;
  body?: object; // Updated the type for the body
  token?: string | null | undefined;
}

// export const useFetch = ({ url, method, body, token }: FetchHookProps) => {
//     const [data, setData] = useState<object | null>(null);
//     const [loading, setLoading] = useState<boolean>(false);
//     const [error, setError] = useState<boolean>(false);

//     const abortControllerRef = useRef<AbortController | null>(null);

//     useEffect(()=>{
//         abortControllerRef.current = new AbortController();

//         // eslint-disable-next-line no-extra-semi
//         ;(async () => {
//             setLoading(true);
//             try {
//                 const headers: Record<string, string> = {
//                     'Content-Type': 'application/json',
//                 };

//                 if (token) {
//                     headers['Authorization'] = `Bearer ${token}`;
//                 }

//                 let response;

//                 if (method === "GET" || method === "DELETE") {
//                     response = await fetch(url, { headers });
//                 } else {
//                     console.log("in post method")
//                     // Handle other HTTP methods if needed
//                     response = await fetch(url, {
//                         signal: abortControllerRef.current?.signal,
//                         method,
//                         headers,
//                         body: JSON.stringify(body),
//                     });
//                 }

//                 const responseData = await response.json();
//                 setData(responseData);
//                 setLoading(false);

//                 return ()=>{
//                     abortControllerRef.current?.abort();
//                 }
//             // eslint-disable-next-line @typescript-eslint/no-explicit-any
//             } catch (error: any) {
//                 if (error.name === "AbortError") return;
//                 setError(true);
//                 setLoading(false);
//                 console.log(error);
//                 throw error;
//             } finally {
//                 setLoading(false);
//             }
//         })();
//     }, [url, method]);

//     return { data, loading, error };
// };

export const useFetch = () => {
  const [data, setData] = useState<object>({
    code: 0,
    message: "",
    data: [],
    role: "",
    name: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);

//   function to fetch data 
  const fetchData = async ({
    url,
    method = "GET",
    body,
    token,
  }: FetchHookProps) => {
    setLoading(true);
    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      };
      const options: RequestInit = {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
        signal: abortControllerRef.current?.signal,
      };
      const response = await fetch(url, options);
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      if (error.name === "AbortError") return;
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

//   function to post data
const postData = async ({
    url,
    method = "POST",
    body,
    token
}:FetchHookProps) => {
    setLoading(true);
    try {
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          };

          const options: RequestInit = {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal: abortControllerRef.current?.signal,
          };
          const response = await fetch(url, options);
          const responseData = await response.json();
          setData(responseData);
    } catch (error) {
        if (error.name === "AbortError") return;
        setError(true);
        console.log(error);
    } finally {
        setLoading(false);
    }
}


// function to make delete request
const deleteData = async ({
  url,
  method = "DELETE",
  token
}: FetchHookProps) => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    const options: RequestInit = {
      method,
      headers,
      // body: body ? JSON.stringify(body) : undefined,
      signal: abortControllerRef.current?.signal,
    };
    const response = fetch(url, options);
    console.log(response)
  } catch (error) {
    if (error.name === "AbortError") return;
    setError(true);
    console.log(error);
  }
} 


  const handleFetch = (props: FetchHookProps) => {
    abortControllerRef.current = new AbortController();
    fetchData(props);
  };

  const handlePost = (props: FetchHookProps) => {
    abortControllerRef.current = new AbortController();
    postData(props);
  }

  const handleDelete = (props: FetchHookProps) => {
    abortControllerRef.current = new AbortController();
    deleteData(props);
  }

  useEffect(() => {
    // Component mounting logic
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);
  return { data, loading, error, handleFetch, handlePost, handleDelete };
};
