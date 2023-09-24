"use client";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri:
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:4000/graphql"
});

const authLink = setContext((_, { headers }) => {
  if (_.operationName === "GetParams") {
    return { headers };
  }
  const token = localStorage.getItem("token");
  if (!token) {
    return { headers };
  }
  return {
    headers: {
      ...headers,
      authorization: `${token}`
    }
  };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

interface IGraphQlProviderProps {
  children: React.ReactNode;
}

const GraphQlProvider: React.FC<IGraphQlProviderProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQlProvider;
