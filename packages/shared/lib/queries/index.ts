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
      term_id
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
      term {
        vault: vaults(where: { curve_id: { _eq: 1 } }) {
          position_count
          total_shares
          current_share_price
          myPosition: positions(limit: 1, where: { shares: { _gt: 0 }, account_id: { _eq: $address } }) {
            shares
            account_id
          }
          positions(where: { shares: { _gt: 0 } }, order_by: { shares: desc }, limit: 5) {
            shares
            account {
              id
              image
              label
            }
          }
        }
      }
      as_subject_triples {
        term_id
        object {
          term_id
          label
          emoji
          image
        }
        predicate {
          emoji
          label
          image
          term_id
        }
        counter_term {
          vault: vaults(where: { curve_id: { _eq: 1 } }) {
            term_id
            position_count
            total_shares
            current_share_price
            myPosition: positions(limit: 1, where: { shares: { _gt: 0 }, account_id: { _eq: $address } }) {
              shares
              account_id
            }
            positions(where: { shares: { _gt: 0 } }) {
              shares
              account_id
            }
          }
        }
        term {
          vault: vaults(where: { curve_id: { _eq: 1 } }) {
            term_id
            position_count
            total_shares
            current_share_price
            myPosition: positions(limit: 1, where: { shares: { _gt: 0 }, account_id: { _eq: $address } }) {
              shares
              account_id
            }
            positions(where: { shares: { _gt: 0 } }) {
              shares
              account_id
            }
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

// FIXME
export const getClaimsFromFollowingAboutSubject = gql(/* GraphQL */ `
  query ClaimsFromFollowingAboutSubject($address: String!, $subjectId: String!) {
    positions_from_following(
      args: { address: $address }
      where: { term: { triple: { subject_id: { _eq: $subjectId } } } }
    ) {
      shares
      term_id
      term {
        triple {
          counter_term_id
          subject {
            emoji
            label
            image
            term_id
          }
          predicate {
            emoji
            label
            image
            term_id
          }
          object {
            emoji
            label
            image
            term_id
          }
          counter_term {
            vaults {
              term_id
              curve_id
              position_count
              total_shares
              current_share_price
              myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {
                shares
                account_id
              }
            }
          }
          term {
            vaults {
              term_id
              curve_id
              position_count
              total_shares
              current_share_price
              myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {
                shares
                account_id
              }
            }
          }
        }
      }

      account {
        id
        label
      }
    }
  }
`);

export const searchAtomsQuery = gql(/* GraphQL */ `
  query SearchAtoms($label: String!) {
    atoms(
      order_by: { term: { total_market_cap: desc } }
      limit: 30
      where: { type: { _in: ["Thing", "Person", "Organization"] }, label: { _ilike: $label } }
    ) {
      term_id
      image
      label
      term {
        total_market_cap
      }
    }
  }
`);

export const getTransactionEventsQuery = gql(/* GraphQL */ `
  query GetTransactionEvents($hash: String!) {
    events(where: { transaction_hash: { _eq: $hash } }) {
      transaction_hash
    }
  }
`);
