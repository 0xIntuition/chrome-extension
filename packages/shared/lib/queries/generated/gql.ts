/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
  '\n  query SearchAtomsByUri($uri: String, $address: String) {\n    atoms(\n      where: {\n        _or: [\n          { data: { _eq: $uri } }\n          { value: { thing: { url: { _eq: $uri } } } }\n          { value: { person: { url: { _eq: $uri } } } }\n          { value: { organization: { url: { _eq: $uri } } } }\n          { value: { book: { url: { _eq: $uri } } } }\n        ]\n      }\n    ) {\n      id\n      data\n      type\n      label\n      image\n      emoji\n      value {\n        person {\n          name\n          image\n          description\n          email\n          identifier\n        }\n        thing {\n          url\n          name\n          image\n          description\n        }\n        organization {\n          name\n          email\n          description\n          url\n        }\n      }\n      vault {\n        position_count\n        total_shares\n        current_share_price\n        myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n          shares\n          account_id\n        }\n        positions(order_by: { shares: desc }, limit: 5) {\n          shares\n          account {\n            id\n            type\n            image\n            label\n          }\n        }\n      }\n      as_subject_triples {\n        id\n        object {\n          id\n          label\n          emoji\n          image\n        }\n        predicate {\n          emoji\n          label\n          image\n          id\n        }\n        counter_vault {\n          id\n          position_count\n          total_shares\n          current_share_price\n          myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n            shares\n            account_id\n          }\n          positions {\n            shares\n            account_id\n          }\n        }\n        vault {\n          id\n          position_count\n          total_shares\n          current_share_price\n          myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n            shares\n            account_id\n          }\n          positions {\n            shares\n            account_id\n          }\n        }\n      }\n    }\n  }\n':
    types.SearchAtomsByUriDocument,
  '\n  mutation PinThing($thing: PinThingInput!) {\n    pinThing(thing: $thing) {\n      uri\n    }\n  }\n':
    types.PinThingDocument,
  '\n  query ClaimsFromFollowingAboutSubject($address: String!, $subjectId: numeric!) {\n    claims_from_following(args: { address: $address }, where: { subject_id: { _eq: $subjectId } }) {\n      shares\n      counter_shares\n      triple {\n        id\n        vault_id\n        counter_vault_id\n        subject {\n          emoji\n          label\n          image\n          id\n        }\n        predicate {\n          emoji\n          label\n          image\n          id\n        }\n        object {\n          emoji\n          label\n          image\n          id\n        }\n        counter_vault {\n          id\n          position_count\n          total_shares\n          current_share_price\n          myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n            shares\n            account_id\n          }\n        }\n        vault {\n          id\n          position_count\n          total_shares\n          current_share_price\n          myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n            shares\n            account_id\n          }\n        }\n      }\n      account {\n        id\n        label\n      }\n    }\n  }\n':
    types.ClaimsFromFollowingAboutSubjectDocument,
  '\n  query SearchAtoms($label: String!) {\n    atoms(\n      order_by: { block_timestamp: desc }\n      limit: 30\n      where: { type: { _in: ["Thing", "Person", "Organization"] }, label: { _ilike: $label } }\n    ) {\n      id\n      image\n      label\n    }\n  }\n':
    types.SearchAtomsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query SearchAtomsByUri($uri: String, $address: String) {\n    atoms(\n      where: {\n        _or: [\n          { data: { _eq: $uri } }\n          { value: { thing: { url: { _eq: $uri } } } }\n          { value: { person: { url: { _eq: $uri } } } }\n          { value: { organization: { url: { _eq: $uri } } } }\n          { value: { book: { url: { _eq: $uri } } } }\n        ]\n      }\n    ) {\n      id\n      data\n      type\n      label\n      image\n      emoji\n      value {\n        person {\n          name\n          image\n          description\n          email\n          identifier\n        }\n        thing {\n          url\n          name\n          image\n          description\n        }\n        organization {\n          name\n          email\n          description\n          url\n        }\n      }\n      vault {\n        position_count\n        total_shares\n        current_share_price\n        myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n          shares\n          account_id\n        }\n        positions(order_by: { shares: desc }, limit: 5) {\n          shares\n          account {\n            id\n            type\n            image\n            label\n          }\n        }\n      }\n      as_subject_triples {\n        id\n        object {\n          id\n          label\n          emoji\n          image\n        }\n        predicate {\n          emoji\n          label\n          image\n          id\n        }\n        counter_vault {\n          id\n          position_count\n          total_shares\n          current_share_price\n          myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n            shares\n            account_id\n          }\n          positions {\n            shares\n            account_id\n          }\n        }\n        vault {\n          id\n          position_count\n          total_shares\n          current_share_price\n          myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n            shares\n            account_id\n          }\n          positions {\n            shares\n            account_id\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query SearchAtomsByUri($uri: String, $address: String) {\n    atoms(\n      where: {\n        _or: [\n          { data: { _eq: $uri } }\n          { value: { thing: { url: { _eq: $uri } } } }\n          { value: { person: { url: { _eq: $uri } } } }\n          { value: { organization: { url: { _eq: $uri } } } }\n          { value: { book: { url: { _eq: $uri } } } }\n        ]\n      }\n    ) {\n      id\n      data\n      type\n      label\n      image\n      emoji\n      value {\n        person {\n          name\n          image\n          description\n          email\n          identifier\n        }\n        thing {\n          url\n          name\n          image\n          description\n        }\n        organization {\n          name\n          email\n          description\n          url\n        }\n      }\n      vault {\n        position_count\n        total_shares\n        current_share_price\n        myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n          shares\n          account_id\n        }\n        positions(order_by: { shares: desc }, limit: 5) {\n          shares\n          account {\n            id\n            type\n            image\n            label\n          }\n        }\n      }\n      as_subject_triples {\n        id\n        object {\n          id\n          label\n          emoji\n          image\n        }\n        predicate {\n          emoji\n          label\n          image\n          id\n        }\n        counter_vault {\n          id\n          position_count\n          total_shares\n          current_share_price\n          myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n            shares\n            account_id\n          }\n          positions {\n            shares\n            account_id\n          }\n        }\n        vault {\n          id\n          position_count\n          total_shares\n          current_share_price\n          myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n            shares\n            account_id\n          }\n          positions {\n            shares\n            account_id\n          }\n        }\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation PinThing($thing: PinThingInput!) {\n    pinThing(thing: $thing) {\n      uri\n    }\n  }\n',
): (typeof documents)['\n  mutation PinThing($thing: PinThingInput!) {\n    pinThing(thing: $thing) {\n      uri\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query ClaimsFromFollowingAboutSubject($address: String!, $subjectId: numeric!) {\n    claims_from_following(args: { address: $address }, where: { subject_id: { _eq: $subjectId } }) {\n      shares\n      counter_shares\n      triple {\n        id\n        vault_id\n        counter_vault_id\n        subject {\n          emoji\n          label\n          image\n          id\n        }\n        predicate {\n          emoji\n          label\n          image\n          id\n        }\n        object {\n          emoji\n          label\n          image\n          id\n        }\n        counter_vault {\n          id\n          position_count\n          total_shares\n          current_share_price\n          myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n            shares\n            account_id\n          }\n        }\n        vault {\n          id\n          position_count\n          total_shares\n          current_share_price\n          myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n            shares\n            account_id\n          }\n        }\n      }\n      account {\n        id\n        label\n      }\n    }\n  }\n',
): (typeof documents)['\n  query ClaimsFromFollowingAboutSubject($address: String!, $subjectId: numeric!) {\n    claims_from_following(args: { address: $address }, where: { subject_id: { _eq: $subjectId } }) {\n      shares\n      counter_shares\n      triple {\n        id\n        vault_id\n        counter_vault_id\n        subject {\n          emoji\n          label\n          image\n          id\n        }\n        predicate {\n          emoji\n          label\n          image\n          id\n        }\n        object {\n          emoji\n          label\n          image\n          id\n        }\n        counter_vault {\n          id\n          position_count\n          total_shares\n          current_share_price\n          myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n            shares\n            account_id\n          }\n        }\n        vault {\n          id\n          position_count\n          total_shares\n          current_share_price\n          myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n            shares\n            account_id\n          }\n        }\n      }\n      account {\n        id\n        label\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query SearchAtoms($label: String!) {\n    atoms(\n      order_by: { block_timestamp: desc }\n      limit: 30\n      where: { type: { _in: ["Thing", "Person", "Organization"] }, label: { _ilike: $label } }\n    ) {\n      id\n      image\n      label\n    }\n  }\n',
): (typeof documents)['\n  query SearchAtoms($label: String!) {\n    atoms(\n      order_by: { block_timestamp: desc }\n      limit: 30\n      where: { type: { _in: ["Thing", "Person", "Organization"] }, label: { _ilike: $label } }\n    ) {\n      id\n      image\n      label\n    }\n  }\n'];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
