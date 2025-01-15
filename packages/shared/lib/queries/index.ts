import { gql } from './generated/gql.js';

export const searchAtomsByUriQuery = gql(/* GraphQL */ `
  query SearchAtomsByUri($uri: String, $address: String) {
    atoms(
      where: {
        _or: [
          { data: { _eq: $uri } }
          { value: { thing: { url: { _eq: $uri } } } }
          { value: { person: { url: { _eq: $uri } } } }
          { value: { organization: { url: { _eq: $uri } } } }
          { value: { book: { url: { _eq: $uri } } } }
        ]
      }
    ) {
      id
      data
      type
      label
      image
      emoji
      value {
        person {
          name
          image
          description
          email
          identifier
        }
        thing {
          url
          name
          image
          description
        }
        organization {
          name
          email
          description
          url
        }
      }
      vault {
        position_count
        total_shares
        current_share_price
        myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {
          shares
          account_id
        }
        positions(order_by: { shares: desc }, limit: 5) {
          shares
          account {
            id
            type
            image
            label
          }
        }
      }
      as_subject_triples {
        id
        object {
          id
          label
          emoji
          image
        }
        predicate {
          emoji
          label
          image
          id
        }
        counter_vault {
          id
          position_count
          total_shares
          current_share_price
          myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {
            shares
            account_id
          }
          positions {
            shares
            account_id
          }
        }
        vault {
          id
          position_count
          total_shares
          current_share_price
          myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {
            shares
            account_id
          }
          positions {
            shares
            account_id
          }
        }
      }
    }
  }
`);

export const pinThingMutation = gql(/* GraphQL */ `
  mutation PinThing($thing: PinThingInput!) {
    pinThing(thing: $thing) {
      uri
    }
  }
`);
