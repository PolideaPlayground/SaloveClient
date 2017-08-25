import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient } from 'react-apollo'

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: 'http://3b62e363.ngrok.io',
    }),
  });

ReactDOM.render(
<App> 
    <ApolloProvider client={client}>
        <MyRootComponent/>
    </ApolloProvider>,
</App>, 
document.getElementById('root'));

registerServiceWorker();
