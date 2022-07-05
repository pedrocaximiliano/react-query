import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
//import { ReactQueryDevtools } from "react-query/devtools";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) =>  error.response.status === 404 && failureCount <= 3 ? true : false
    },
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  </React.StrictMode>
);
