import { gql } from "@apollo/client";

export const updateParamsMutation = gql`
mutation UpdateParam($updateParamInput1: UpdateParamInput!) {
  updateParam(input: $updateParamInput1) {
    id
  }
}

`;