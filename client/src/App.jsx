import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

// Create an ApolloClient instance
const client = new ApolloClient({
  uri: 'YOUR_GRAPHQL_ENDPOINT', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Navbar />
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;
