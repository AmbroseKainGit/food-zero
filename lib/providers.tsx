"use client";

/* Core */
import { Provider } from "react-redux";

/* Instruments */
import { reduxStore } from "@/lib/redux";
import GraphQlProvider from "./graphql/provider";

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <GraphQlProvider>
      <Provider store={reduxStore}>{props.children}</Provider>
    </GraphQlProvider>
  );
};
