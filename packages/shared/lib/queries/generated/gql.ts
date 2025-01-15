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
  '\nquery SearchAtomsByUri($uri: String, $address: String) {\n  atoms(\n    where: {\n      _or: [\n        { data: { _eq: $uri } }\n        { value: { thing: { url: { _eq: $uri } } } }\n        { value: { person: { url: { _eq: $uri } } } }\n        { value: { organization: { url: { _eq: $uri } } } }\n        { value: { book: { url: { _eq: $uri } } } }\n      ]\n    }\n  ) {\n    id\n    data\n    type\n    label\n    image\n    emoji\n    value {\n      person {\n        name\n        image\n        description\n        email\n        identifier\n      }\n      thing {\n        url\n        name\n        image\n        description\n      }\n      organization {\n        name\n        email\n        description\n        url\n      }\n    }\n    vault {\n      position_count\n      total_shares\n      current_share_price\n      myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n        shares\n        account_id\n      }\n      positions(order_by: { shares: desc }, limit: 5) {\n        shares\n        account {\n          id\n          type\n          image\n          label\n        }\n      }\n    }\n    as_subject_triples {\n      id\n      object {\n        id\n        label\n        emoji\n        image\n      }\n      predicate {\n        emoji\n        label\n        image\n        id\n      }\n      counter_vault {\n        id\n        position_count\n        total_shares\n        current_share_price\n        myPosition: positions(\n          limit: 1\n          where: { account_id: { _eq: $address } }\n        ) {\n          shares\n          account_id\n        }\n        positions {\n          shares\n          account_id\n        }\n      }\n      vault {\n        id\n        position_count\n        total_shares\n        current_share_price\n        myPosition: positions(\n          limit: 1\n          where: { account_id: { _eq: $address } }\n        ) {\n          shares\n          account_id\n        }\n        positions {\n          shares\n          account_id\n        }\n      }\n    }\n  }\n}':
    types.SearchAtomsByUriDocument,
  '\nmutation PinThing($thing: PinThingInput!) {\n  pinThing(thing: $thing) {\n    uri\n  }\n}\n':
    types.PinThingDocument,
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
  source: '\nquery SearchAtomsByUri($uri: String, $address: String) {\n  atoms(\n    where: {\n      _or: [\n        { data: { _eq: $uri } }\n        { value: { thing: { url: { _eq: $uri } } } }\n        { value: { person: { url: { _eq: $uri } } } }\n        { value: { organization: { url: { _eq: $uri } } } }\n        { value: { book: { url: { _eq: $uri } } } }\n      ]\n    }\n  ) {\n    id\n    data\n    type\n    label\n    image\n    emoji\n    value {\n      person {\n        name\n        image\n        description\n        email\n        identifier\n      }\n      thing {\n        url\n        name\n        image\n        description\n      }\n      organization {\n        name\n        email\n        description\n        url\n      }\n    }\n    vault {\n      position_count\n      total_shares\n      current_share_price\n      myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n        shares\n        account_id\n      }\n      positions(order_by: { shares: desc }, limit: 5) {\n        shares\n        account {\n          id\n          type\n          image\n          label\n        }\n      }\n    }\n    as_subject_triples {\n      id\n      object {\n        id\n        label\n        emoji\n        image\n      }\n      predicate {\n        emoji\n        label\n        image\n        id\n      }\n      counter_vault {\n        id\n        position_count\n        total_shares\n        current_share_price\n        myPosition: positions(\n          limit: 1\n          where: { account_id: { _eq: $address } }\n        ) {\n          shares\n          account_id\n        }\n        positions {\n          shares\n          account_id\n        }\n      }\n      vault {\n        id\n        position_count\n        total_shares\n        current_share_price\n        myPosition: positions(\n          limit: 1\n          where: { account_id: { _eq: $address } }\n        ) {\n          shares\n          account_id\n        }\n        positions {\n          shares\n          account_id\n        }\n      }\n    }\n  }\n}',
): (typeof documents)['\nquery SearchAtomsByUri($uri: String, $address: String) {\n  atoms(\n    where: {\n      _or: [\n        { data: { _eq: $uri } }\n        { value: { thing: { url: { _eq: $uri } } } }\n        { value: { person: { url: { _eq: $uri } } } }\n        { value: { organization: { url: { _eq: $uri } } } }\n        { value: { book: { url: { _eq: $uri } } } }\n      ]\n    }\n  ) {\n    id\n    data\n    type\n    label\n    image\n    emoji\n    value {\n      person {\n        name\n        image\n        description\n        email\n        identifier\n      }\n      thing {\n        url\n        name\n        image\n        description\n      }\n      organization {\n        name\n        email\n        description\n        url\n      }\n    }\n    vault {\n      position_count\n      total_shares\n      current_share_price\n      myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {\n        shares\n        account_id\n      }\n      positions(order_by: { shares: desc }, limit: 5) {\n        shares\n        account {\n          id\n          type\n          image\n          label\n        }\n      }\n    }\n    as_subject_triples {\n      id\n      object {\n        id\n        label\n        emoji\n        image\n      }\n      predicate {\n        emoji\n        label\n        image\n        id\n      }\n      counter_vault {\n        id\n        position_count\n        total_shares\n        current_share_price\n        myPosition: positions(\n          limit: 1\n          where: { account_id: { _eq: $address } }\n        ) {\n          shares\n          account_id\n        }\n        positions {\n          shares\n          account_id\n        }\n      }\n      vault {\n        id\n        position_count\n        total_shares\n        current_share_price\n        myPosition: positions(\n          limit: 1\n          where: { account_id: { _eq: $address } }\n        ) {\n          shares\n          account_id\n        }\n        positions {\n          shares\n          account_id\n        }\n      }\n    }\n  }\n}'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\nmutation PinThing($thing: PinThingInput!) {\n  pinThing(thing: $thing) {\n    uri\n  }\n}\n',
): (typeof documents)['\nmutation PinThing($thing: PinThingInput!) {\n  pinThing(thing: $thing) {\n    uri\n  }\n}\n'];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
