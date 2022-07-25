import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { app } from '../firebase'
import { persistor, store } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';


function MyApp({ 
    Component, 
    pageProps: { session, ...pageProps } 
}: AppProps) {
  app
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
