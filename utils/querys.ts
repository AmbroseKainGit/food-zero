import { gql } from "@apollo/client";
export const queryCategories = gql`
query Categories {
  categories {
    disabled
    description
    image
  }
}
`;
export const queryMenu = gql`
query Categories {
  categories {
    id
    name
    description
    image
    products {
      name
      description
      disabled
      id
      image
      price
      priority
    }
  }
}
`;