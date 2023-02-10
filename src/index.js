import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import { chakraTheme } from './configs/chakra-theme';
import './index.css';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={chakraTheme}>
        <RecoilRoot>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RecoilRoot>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
