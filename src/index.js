import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: 'http://b3f241e3.ngrok.io/graphql',
    }),
  });

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>, 
document.getElementById('root'));

registerServiceWorker();