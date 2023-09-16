import { gql } from "@apollo/client";
export const queryCategories = gql`
  query Query {
    categories {
      id
      name
      image
      disabled
    }
  }
`;