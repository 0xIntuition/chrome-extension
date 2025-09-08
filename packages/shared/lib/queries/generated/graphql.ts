/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  _text: { input: any; output: any };
  account_type: { input: any; output: any };
  atom_resolving_status: { input: any; output: any };
  atom_type: { input: any; output: any };
  bigint: { input: any; output: any };
  bytea: { input: any; output: any };
  event_type: { input: any; output: any };
  float8: { input: any; output: any };
  jsonb: { input: any; output: any };
  numeric: { input: any; output: any };
  term_type: { input: any; output: any };
  timestamptz: { input: any; output: any };
  vault_type: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type PinOrganizationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type PinOutput = {
  __typename?: 'PinOutput';
  uri?: Maybe<Scalars['String']['output']>;
};

export type PinPersonInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type PinThingInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "account_type". All fields are combined with logical 'AND'. */
export type Account_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['account_type']['input']>;
  _gt?: InputMaybe<Scalars['account_type']['input']>;
  _gte?: InputMaybe<Scalars['account_type']['input']>;
  _in?: InputMaybe<Array<Scalars['account_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['account_type']['input']>;
  _lte?: InputMaybe<Scalars['account_type']['input']>;
  _neq?: InputMaybe<Scalars['account_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['account_type']['input']>>;
};

/** columns and relationships of "account" */
export type Accounts = {
  __typename?: 'accounts';
  /** An object relationship */
  atom?: Maybe<Atoms>;
  atom_id?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  atoms: Array<Atoms>;
  /** An aggregate relationship */
  atoms_aggregate: Atoms_Aggregate;
  cached_image?: Maybe<Cached_Images_Cached_Image>;
  /** An array relationship */
  deposits_received: Array<Deposits>;
  /** An aggregate relationship */
  deposits_received_aggregate: Deposits_Aggregate;
  /** An array relationship */
  deposits_sent: Array<Deposits>;
  /** An aggregate relationship */
  deposits_sent_aggregate: Deposits_Aggregate;
  /** An array relationship */
  fee_transfers: Array<Fee_Transfers>;
  /** An aggregate relationship */
  fee_transfers_aggregate: Fee_Transfers_Aggregate;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  /** An array relationship */
  positions: Array<Positions>;
  /** An aggregate relationship */
  positions_aggregate: Positions_Aggregate;
  /** An array relationship */
  redemptions_received: Array<Redemptions>;
  /** An aggregate relationship */
  redemptions_received_aggregate: Redemptions_Aggregate;
  /** An array relationship */
  redemptions_sent: Array<Redemptions>;
  /** An aggregate relationship */
  redemptions_sent_aggregate: Redemptions_Aggregate;
  /** An array relationship */
  signals: Array<Signals>;
  /** An aggregate relationship */
  signals_aggregate: Signals_Aggregate;
  /** An array relationship */
  triples: Array<Triples>;
  /** An aggregate relationship */
  triples_aggregate: Triples_Aggregate;
  type: Scalars['account_type']['output'];
};

/** columns and relationships of "account" */
export type AccountsAtomsArgs = {
  distinct_on?: InputMaybe<Array<Atoms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Atoms_Order_By>>;
  where?: InputMaybe<Atoms_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountsAtoms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Atoms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Atoms_Order_By>>;
  where?: InputMaybe<Atoms_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountsDeposits_ReceivedArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposits_Order_By>>;
  where?: InputMaybe<Deposits_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountsDeposits_Received_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposits_Order_By>>;
  where?: InputMaybe<Deposits_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountsDeposits_SentArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposits_Order_By>>;
  where?: InputMaybe<Deposits_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountsDeposits_Sent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposits_Order_By>>;
  where?: InputMaybe<Deposits_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountsFee_TransfersArgs = {
  distinct_on?: InputMaybe<Array<Fee_Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fee_Transfers_Order_By>>;
  where?: InputMaybe<Fee_Transfers_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountsFee_Transfers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fee_Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fee_Transfers_Order_By>>;
  where?: InputMaybe<Fee_Transfers_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountsPositionsArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountsPositions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountsRedemptions_ReceivedArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Redemptions_Order_By>>;
  where?: InputMaybe<Redemptions_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountsRedemptions_Received_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Redemptions_Order_By>>;
  where?: InputMaybe<Redemptions_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountsRedemptions_SentArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Redemptions_Order_By>>;
  where?: InputMaybe<Redemptions_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountsRedemptions_Sent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Redemptions_Order_By>>;
  where?: InputMaybe<Redemptions_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountsSignalsArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signals_Order_By>>;
  where?: InputMaybe<Signals_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountsSignals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signals_Order_By>>;
  where?: InputMaybe<Signals_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountsTriplesArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Triples_Order_By>>;
  where?: InputMaybe<Triples_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountsTriples_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Triples_Order_By>>;
  where?: InputMaybe<Triples_Bool_Exp>;
};

/** aggregated selection of "account" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

export type Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Accounts_Aggregate_Bool_Exp_Count>;
};

export type Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Accounts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "account" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
};

/** aggregate fields of "account" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "account" */
export type Accounts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Accounts_Max_Order_By>;
  min?: InputMaybe<Accounts_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  atom?: InputMaybe<Atoms_Bool_Exp>;
  atom_id?: InputMaybe<String_Comparison_Exp>;
  atoms?: InputMaybe<Atoms_Bool_Exp>;
  atoms_aggregate?: InputMaybe<Atoms_Aggregate_Bool_Exp>;
  deposits_received?: InputMaybe<Deposits_Bool_Exp>;
  deposits_received_aggregate?: InputMaybe<Deposits_Aggregate_Bool_Exp>;
  deposits_sent?: InputMaybe<Deposits_Bool_Exp>;
  deposits_sent_aggregate?: InputMaybe<Deposits_Aggregate_Bool_Exp>;
  fee_transfers?: InputMaybe<Fee_Transfers_Bool_Exp>;
  fee_transfers_aggregate?: InputMaybe<Fee_Transfers_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  positions?: InputMaybe<Positions_Bool_Exp>;
  positions_aggregate?: InputMaybe<Positions_Aggregate_Bool_Exp>;
  redemptions_received?: InputMaybe<Redemptions_Bool_Exp>;
  redemptions_received_aggregate?: InputMaybe<Redemptions_Aggregate_Bool_Exp>;
  redemptions_sent?: InputMaybe<Redemptions_Bool_Exp>;
  redemptions_sent_aggregate?: InputMaybe<Redemptions_Aggregate_Bool_Exp>;
  signals?: InputMaybe<Signals_Bool_Exp>;
  signals_aggregate?: InputMaybe<Signals_Aggregate_Bool_Exp>;
  triples?: InputMaybe<Triples_Bool_Exp>;
  triples_aggregate?: InputMaybe<Triples_Aggregate_Bool_Exp>;
  type?: InputMaybe<Account_Type_Comparison_Exp>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  atom_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['account_type']['output']>;
};

/** order by max() on columns of table "account" */
export type Accounts_Max_Order_By = {
  atom_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  atom_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['account_type']['output']>;
};

/** order by min() on columns of table "account" */
export type Accounts_Min_Order_By = {
  atom_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "account". */
export type Accounts_Order_By = {
  atom?: InputMaybe<Atoms_Order_By>;
  atom_id?: InputMaybe<Order_By>;
  atoms_aggregate?: InputMaybe<Atoms_Aggregate_Order_By>;
  deposits_received_aggregate?: InputMaybe<Deposits_Aggregate_Order_By>;
  deposits_sent_aggregate?: InputMaybe<Deposits_Aggregate_Order_By>;
  fee_transfers_aggregate?: InputMaybe<Fee_Transfers_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  positions_aggregate?: InputMaybe<Positions_Aggregate_Order_By>;
  redemptions_received_aggregate?: InputMaybe<Redemptions_Aggregate_Order_By>;
  redemptions_sent_aggregate?: InputMaybe<Redemptions_Aggregate_Order_By>;
  signals_aggregate?: InputMaybe<Signals_Aggregate_Order_By>;
  triples_aggregate?: InputMaybe<Triples_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "account" */
export enum Accounts_Select_Column {
  /** column name */
  AtomId = 'atom_id',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Label = 'label',
  /** column name */
  Type = 'type',
}

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  atom_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['account_type']['input']>;
};

/** Boolean expression to compare columns of type "atom_resolving_status". All fields are combined with logical 'AND'. */
export type Atom_Resolving_Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['atom_resolving_status']['input']>;
  _gt?: InputMaybe<Scalars['atom_resolving_status']['input']>;
  _gte?: InputMaybe<Scalars['atom_resolving_status']['input']>;
  _in?: InputMaybe<Array<Scalars['atom_resolving_status']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['atom_resolving_status']['input']>;
  _lte?: InputMaybe<Scalars['atom_resolving_status']['input']>;
  _neq?: InputMaybe<Scalars['atom_resolving_status']['input']>;
  _nin?: InputMaybe<Array<Scalars['atom_resolving_status']['input']>>;
};

/** Boolean expression to compare columns of type "atom_type". All fields are combined with logical 'AND'. */
export type Atom_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['atom_type']['input']>;
  _gt?: InputMaybe<Scalars['atom_type']['input']>;
  _gte?: InputMaybe<Scalars['atom_type']['input']>;
  _in?: InputMaybe<Array<Scalars['atom_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['atom_type']['input']>;
  _lte?: InputMaybe<Scalars['atom_type']['input']>;
  _neq?: InputMaybe<Scalars['atom_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['atom_type']['input']>>;
};

/** columns and relationships of "atom_value" */
export type Atom_Values = {
  __typename?: 'atom_values';
  /** An object relationship */
  account?: Maybe<Accounts>;
  account_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  atom: Atoms;
  /** An object relationship */
  book?: Maybe<Books>;
  book_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  byte_object?: Maybe<Byte_Object>;
  byte_object_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  caip10?: Maybe<Caip10>;
  caip10_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** An object relationship */
  json_object?: Maybe<Json_Objects>;
  json_object_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  organization?: Maybe<Organizations>;
  organization_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  person?: Maybe<Persons>;
  person_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  text_object?: Maybe<Text_Objects>;
  text_object_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  thing?: Maybe<Things>;
  thing_id?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "atom_value" */
export type Atom_Values_Aggregate = {
  __typename?: 'atom_values_aggregate';
  aggregate?: Maybe<Atom_Values_Aggregate_Fields>;
  nodes: Array<Atom_Values>;
};

/** aggregate fields of "atom_value" */
export type Atom_Values_Aggregate_Fields = {
  __typename?: 'atom_values_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Atom_Values_Max_Fields>;
  min?: Maybe<Atom_Values_Min_Fields>;
};

/** aggregate fields of "atom_value" */
export type Atom_Values_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Atom_Values_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "atom_value". All fields are combined with a logical 'AND'. */
export type Atom_Values_Bool_Exp = {
  _and?: InputMaybe<Array<Atom_Values_Bool_Exp>>;
  _not?: InputMaybe<Atom_Values_Bool_Exp>;
  _or?: InputMaybe<Array<Atom_Values_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  account_id?: InputMaybe<String_Comparison_Exp>;
  atom?: InputMaybe<Atoms_Bool_Exp>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<String_Comparison_Exp>;
  byte_object?: InputMaybe<Byte_Object_Bool_Exp>;
  byte_object_id?: InputMaybe<String_Comparison_Exp>;
  caip10?: InputMaybe<Caip10_Bool_Exp>;
  caip10_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  json_object?: InputMaybe<Json_Objects_Bool_Exp>;
  json_object_id?: InputMaybe<String_Comparison_Exp>;
  organization?: InputMaybe<Organizations_Bool_Exp>;
  organization_id?: InputMaybe<String_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<String_Comparison_Exp>;
  text_object?: InputMaybe<Text_Objects_Bool_Exp>;
  text_object_id?: InputMaybe<String_Comparison_Exp>;
  thing?: InputMaybe<Things_Bool_Exp>;
  thing_id?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Atom_Values_Max_Fields = {
  __typename?: 'atom_values_max_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  book_id?: Maybe<Scalars['String']['output']>;
  byte_object_id?: Maybe<Scalars['String']['output']>;
  caip10_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  json_object_id?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['String']['output']>;
  person_id?: Maybe<Scalars['String']['output']>;
  text_object_id?: Maybe<Scalars['String']['output']>;
  thing_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Atom_Values_Min_Fields = {
  __typename?: 'atom_values_min_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  book_id?: Maybe<Scalars['String']['output']>;
  byte_object_id?: Maybe<Scalars['String']['output']>;
  caip10_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  json_object_id?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['String']['output']>;
  person_id?: Maybe<Scalars['String']['output']>;
  text_object_id?: Maybe<Scalars['String']['output']>;
  thing_id?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "atom_value". */
export type Atom_Values_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  account_id?: InputMaybe<Order_By>;
  atom?: InputMaybe<Atoms_Order_By>;
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  byte_object?: InputMaybe<Byte_Object_Order_By>;
  byte_object_id?: InputMaybe<Order_By>;
  caip10?: InputMaybe<Caip10_Order_By>;
  caip10_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  json_object?: InputMaybe<Json_Objects_Order_By>;
  json_object_id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organizations_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  text_object?: InputMaybe<Text_Objects_Order_By>;
  text_object_id?: InputMaybe<Order_By>;
  thing?: InputMaybe<Things_Order_By>;
  thing_id?: InputMaybe<Order_By>;
};

/** select columns of table "atom_value" */
export enum Atom_Values_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  BookId = 'book_id',
  /** column name */
  ByteObjectId = 'byte_object_id',
  /** column name */
  Caip10Id = 'caip10_id',
  /** column name */
  Id = 'id',
  /** column name */
  JsonObjectId = 'json_object_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  TextObjectId = 'text_object_id',
  /** column name */
  ThingId = 'thing_id',
}

/** Streaming cursor of the table "atom_values" */
export type Atom_Values_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Atom_Values_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Atom_Values_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['String']['input']>;
  book_id?: InputMaybe<Scalars['String']['input']>;
  byte_object_id?: InputMaybe<Scalars['String']['input']>;
  caip10_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  json_object_id?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  person_id?: InputMaybe<Scalars['String']['input']>;
  text_object_id?: InputMaybe<Scalars['String']['input']>;
  thing_id?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "atom" */
export type Atoms = {
  __typename?: 'atoms';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** An array relationship */
  as_object_predicate_objects: Array<Predicate_Objects>;
  /** An aggregate relationship */
  as_object_predicate_objects_aggregate: Predicate_Objects_Aggregate;
  /** An array relationship */
  as_object_triples: Array<Triples>;
  /** An aggregate relationship */
  as_object_triples_aggregate: Triples_Aggregate;
  /** An array relationship */
  as_predicate_predicate_objects: Array<Predicate_Objects>;
  /** An aggregate relationship */
  as_predicate_predicate_objects_aggregate: Predicate_Objects_Aggregate;
  /** An array relationship */
  as_predicate_triples: Array<Triples>;
  /** An aggregate relationship */
  as_predicate_triples_aggregate: Triples_Aggregate;
  /** An array relationship */
  as_subject_triples: Array<Triples>;
  /** An aggregate relationship */
  as_subject_triples_aggregate: Triples_Aggregate;
  block_number: Scalars['numeric']['output'];
  cached_image?: Maybe<Cached_Images_Cached_Image>;
  /** An object relationship */
  controller?: Maybe<Accounts>;
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  creator: Accounts;
  creator_id: Scalars['String']['output'];
  data?: Maybe<Scalars['String']['output']>;
  emoji?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  log_index: Scalars['bigint']['output'];
  /** An array relationship */
  positions: Array<Positions>;
  /** An aggregate relationship */
  positions_aggregate: Positions_Aggregate;
  raw_data: Scalars['String']['output'];
  resolving_status: Scalars['atom_resolving_status']['output'];
  /** An array relationship */
  signals: Array<Signals>;
  /** An aggregate relationship */
  signals_aggregate: Signals_Aggregate;
  /** An object relationship */
  term: Terms;
  term_id: Scalars['String']['output'];
  transaction_hash: Scalars['String']['output'];
  type: Scalars['atom_type']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  value?: Maybe<Atom_Values>;
  value_id?: Maybe<Scalars['String']['output']>;
  wallet_id: Scalars['String']['output'];
};

/** columns and relationships of "atom" */
export type AtomsAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** columns and relationships of "atom" */
export type AtomsAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** columns and relationships of "atom" */
export type AtomsAs_Object_Predicate_ObjectsArgs = {
  distinct_on?: InputMaybe<Array<Predicate_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Predicate_Objects_Order_By>>;
  where?: InputMaybe<Predicate_Objects_Bool_Exp>;
};

/** columns and relationships of "atom" */
export type AtomsAs_Object_Predicate_Objects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Predicate_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Predicate_Objects_Order_By>>;
  where?: InputMaybe<Predicate_Objects_Bool_Exp>;
};

/** columns and relationships of "atom" */
export type AtomsAs_Object_TriplesArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Triples_Order_By>>;
  where?: InputMaybe<Triples_Bool_Exp>;
};

/** columns and relationships of "atom" */
export type AtomsAs_Object_Triples_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Triples_Order_By>>;
  where?: InputMaybe<Triples_Bool_Exp>;
};

/** columns and relationships of "atom" */
export type AtomsAs_Predicate_Predicate_ObjectsArgs = {
  distinct_on?: InputMaybe<Array<Predicate_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Predicate_Objects_Order_By>>;
  where?: InputMaybe<Predicate_Objects_Bool_Exp>;
};

/** columns and relationships of "atom" */
export type AtomsAs_Predicate_Predicate_Objects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Predicate_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Predicate_Objects_Order_By>>;
  where?: InputMaybe<Predicate_Objects_Bool_Exp>;
};

/** columns and relationships of "atom" */
export type AtomsAs_Predicate_TriplesArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Triples_Order_By>>;
  where?: InputMaybe<Triples_Bool_Exp>;
};

/** columns and relationships of "atom" */
export type AtomsAs_Predicate_Triples_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Triples_Order_By>>;
  where?: InputMaybe<Triples_Bool_Exp>;
};

/** columns and relationships of "atom" */
export type AtomsAs_Subject_TriplesArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Triples_Order_By>>;
  where?: InputMaybe<Triples_Bool_Exp>;
};

/** columns and relationships of "atom" */
export type AtomsAs_Subject_Triples_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Triples_Order_By>>;
  where?: InputMaybe<Triples_Bool_Exp>;
};

/** columns and relationships of "atom" */
export type AtomsPositionsArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

/** columns and relationships of "atom" */
export type AtomsPositions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

/** columns and relationships of "atom" */
export type AtomsSignalsArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signals_Order_By>>;
  where?: InputMaybe<Signals_Bool_Exp>;
};

/** columns and relationships of "atom" */
export type AtomsSignals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signals_Order_By>>;
  where?: InputMaybe<Signals_Bool_Exp>;
};

/** aggregated selection of "atom" */
export type Atoms_Aggregate = {
  __typename?: 'atoms_aggregate';
  aggregate?: Maybe<Atoms_Aggregate_Fields>;
  nodes: Array<Atoms>;
};

export type Atoms_Aggregate_Bool_Exp = {
  count?: InputMaybe<Atoms_Aggregate_Bool_Exp_Count>;
};

export type Atoms_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Atoms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Atoms_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "atom" */
export type Atoms_Aggregate_Fields = {
  __typename?: 'atoms_aggregate_fields';
  avg?: Maybe<Atoms_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Atoms_Max_Fields>;
  min?: Maybe<Atoms_Min_Fields>;
  stddev?: Maybe<Atoms_Stddev_Fields>;
  stddev_pop?: Maybe<Atoms_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Atoms_Stddev_Samp_Fields>;
  sum?: Maybe<Atoms_Sum_Fields>;
  var_pop?: Maybe<Atoms_Var_Pop_Fields>;
  var_samp?: Maybe<Atoms_Var_Samp_Fields>;
  variance?: Maybe<Atoms_Variance_Fields>;
};

/** aggregate fields of "atom" */
export type Atoms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Atoms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "atom" */
export type Atoms_Aggregate_Order_By = {
  avg?: InputMaybe<Atoms_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Atoms_Max_Order_By>;
  min?: InputMaybe<Atoms_Min_Order_By>;
  stddev?: InputMaybe<Atoms_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Atoms_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Atoms_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Atoms_Sum_Order_By>;
  var_pop?: InputMaybe<Atoms_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Atoms_Var_Samp_Order_By>;
  variance?: InputMaybe<Atoms_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Atoms_Avg_Fields = {
  __typename?: 'atoms_avg_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "atom" */
export type Atoms_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "atom". All fields are combined with a logical 'AND'. */
export type Atoms_Bool_Exp = {
  _and?: InputMaybe<Array<Atoms_Bool_Exp>>;
  _not?: InputMaybe<Atoms_Bool_Exp>;
  _or?: InputMaybe<Array<Atoms_Bool_Exp>>;
  accounts?: InputMaybe<Accounts_Bool_Exp>;
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Bool_Exp>;
  as_object_predicate_objects?: InputMaybe<Predicate_Objects_Bool_Exp>;
  as_object_predicate_objects_aggregate?: InputMaybe<Predicate_Objects_Aggregate_Bool_Exp>;
  as_object_triples?: InputMaybe<Triples_Bool_Exp>;
  as_object_triples_aggregate?: InputMaybe<Triples_Aggregate_Bool_Exp>;
  as_predicate_predicate_objects?: InputMaybe<Predicate_Objects_Bool_Exp>;
  as_predicate_predicate_objects_aggregate?: InputMaybe<Predicate_Objects_Aggregate_Bool_Exp>;
  as_predicate_triples?: InputMaybe<Triples_Bool_Exp>;
  as_predicate_triples_aggregate?: InputMaybe<Triples_Aggregate_Bool_Exp>;
  as_subject_triples?: InputMaybe<Triples_Bool_Exp>;
  as_subject_triples_aggregate?: InputMaybe<Triples_Aggregate_Bool_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  controller?: InputMaybe<Accounts_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  creator?: InputMaybe<Accounts_Bool_Exp>;
  creator_id?: InputMaybe<String_Comparison_Exp>;
  data?: InputMaybe<String_Comparison_Exp>;
  emoji?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Bigint_Comparison_Exp>;
  positions?: InputMaybe<Positions_Bool_Exp>;
  positions_aggregate?: InputMaybe<Positions_Aggregate_Bool_Exp>;
  raw_data?: InputMaybe<String_Comparison_Exp>;
  resolving_status?: InputMaybe<Atom_Resolving_Status_Comparison_Exp>;
  signals?: InputMaybe<Signals_Bool_Exp>;
  signals_aggregate?: InputMaybe<Signals_Aggregate_Bool_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Atom_Type_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<Atom_Values_Bool_Exp>;
  value_id?: InputMaybe<String_Comparison_Exp>;
  wallet_id?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Atoms_Max_Fields = {
  __typename?: 'atoms_max_fields';
  block_number?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  creator_id?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  emoji?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
  raw_data?: Maybe<Scalars['String']['output']>;
  resolving_status?: Maybe<Scalars['atom_resolving_status']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['atom_type']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  value_id?: Maybe<Scalars['String']['output']>;
  wallet_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "atom" */
export type Atoms_Max_Order_By = {
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  emoji?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  raw_data?: InputMaybe<Order_By>;
  resolving_status?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value_id?: InputMaybe<Order_By>;
  wallet_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Atoms_Min_Fields = {
  __typename?: 'atoms_min_fields';
  block_number?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  creator_id?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  emoji?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
  raw_data?: Maybe<Scalars['String']['output']>;
  resolving_status?: Maybe<Scalars['atom_resolving_status']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['atom_type']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  value_id?: Maybe<Scalars['String']['output']>;
  wallet_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "atom" */
export type Atoms_Min_Order_By = {
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  emoji?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  raw_data?: InputMaybe<Order_By>;
  resolving_status?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value_id?: InputMaybe<Order_By>;
  wallet_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "atom". */
export type Atoms_Order_By = {
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Order_By>;
  as_object_predicate_objects_aggregate?: InputMaybe<Predicate_Objects_Aggregate_Order_By>;
  as_object_triples_aggregate?: InputMaybe<Triples_Aggregate_Order_By>;
  as_predicate_predicate_objects_aggregate?: InputMaybe<Predicate_Objects_Aggregate_Order_By>;
  as_predicate_triples_aggregate?: InputMaybe<Triples_Aggregate_Order_By>;
  as_subject_triples_aggregate?: InputMaybe<Triples_Aggregate_Order_By>;
  block_number?: InputMaybe<Order_By>;
  controller?: InputMaybe<Accounts_Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator?: InputMaybe<Accounts_Order_By>;
  creator_id?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  emoji?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  positions_aggregate?: InputMaybe<Positions_Aggregate_Order_By>;
  raw_data?: InputMaybe<Order_By>;
  resolving_status?: InputMaybe<Order_By>;
  signals_aggregate?: InputMaybe<Signals_Aggregate_Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Atom_Values_Order_By>;
  value_id?: InputMaybe<Order_By>;
  wallet_id?: InputMaybe<Order_By>;
};

/** select columns of table "atom" */
export enum Atoms_Select_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  Data = 'data',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Image = 'image',
  /** column name */
  Label = 'label',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  ResolvingStatus = 'resolving_status',
  /** column name */
  TermId = 'term_id',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ValueId = 'value_id',
  /** column name */
  WalletId = 'wallet_id',
}

/** aggregate stddev on columns */
export type Atoms_Stddev_Fields = {
  __typename?: 'atoms_stddev_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "atom" */
export type Atoms_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Atoms_Stddev_Pop_Fields = {
  __typename?: 'atoms_stddev_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "atom" */
export type Atoms_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Atoms_Stddev_Samp_Fields = {
  __typename?: 'atoms_stddev_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "atom" */
export type Atoms_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "atoms" */
export type Atoms_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Atoms_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Atoms_Stream_Cursor_Value_Input = {
  block_number?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  creator_id?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  log_index?: InputMaybe<Scalars['bigint']['input']>;
  raw_data?: InputMaybe<Scalars['String']['input']>;
  resolving_status?: InputMaybe<Scalars['atom_resolving_status']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
  transaction_hash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['atom_type']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  value_id?: InputMaybe<Scalars['String']['input']>;
  wallet_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Atoms_Sum_Fields = {
  __typename?: 'atoms_sum_fields';
  block_number?: Maybe<Scalars['numeric']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "atom" */
export type Atoms_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Atoms_Var_Pop_Fields = {
  __typename?: 'atoms_var_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "atom" */
export type Atoms_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Atoms_Var_Samp_Fields = {
  __typename?: 'atoms_var_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "atom" */
export type Atoms_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Atoms_Variance_Fields = {
  __typename?: 'atoms_variance_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "atom" */
export type Atoms_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "book" */
export type Books = {
  __typename?: 'books';
  /** An object relationship */
  atom?: Maybe<Atoms>;
  description?: Maybe<Scalars['String']['output']>;
  genre?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "book" */
export type Books_Aggregate = {
  __typename?: 'books_aggregate';
  aggregate?: Maybe<Books_Aggregate_Fields>;
  nodes: Array<Books>;
};

/** aggregate fields of "book" */
export type Books_Aggregate_Fields = {
  __typename?: 'books_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Books_Max_Fields>;
  min?: Maybe<Books_Min_Fields>;
};

/** aggregate fields of "book" */
export type Books_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Books_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "book". All fields are combined with a logical 'AND'. */
export type Books_Bool_Exp = {
  _and?: InputMaybe<Array<Books_Bool_Exp>>;
  _not?: InputMaybe<Books_Bool_Exp>;
  _or?: InputMaybe<Array<Books_Bool_Exp>>;
  atom?: InputMaybe<Atoms_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  genre?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Books_Max_Fields = {
  __typename?: 'books_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  genre?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Books_Min_Fields = {
  __typename?: 'books_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  genre?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "book". */
export type Books_Order_By = {
  atom?: InputMaybe<Atoms_Order_By>;
  description?: InputMaybe<Order_By>;
  genre?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** select columns of table "book" */
export enum Books_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Genre = 'genre',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url',
}

/** Streaming cursor of the table "books" */
export type Books_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Books_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Books_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "byte_object" */
export type Byte_Object = {
  __typename?: 'byte_object';
  /** An object relationship */
  atom?: Maybe<Atoms>;
  data: Scalars['bytea']['output'];
  id: Scalars['String']['output'];
};

/** aggregated selection of "byte_object" */
export type Byte_Object_Aggregate = {
  __typename?: 'byte_object_aggregate';
  aggregate?: Maybe<Byte_Object_Aggregate_Fields>;
  nodes: Array<Byte_Object>;
};

/** aggregate fields of "byte_object" */
export type Byte_Object_Aggregate_Fields = {
  __typename?: 'byte_object_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Byte_Object_Max_Fields>;
  min?: Maybe<Byte_Object_Min_Fields>;
};

/** aggregate fields of "byte_object" */
export type Byte_Object_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Byte_Object_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "byte_object". All fields are combined with a logical 'AND'. */
export type Byte_Object_Bool_Exp = {
  _and?: InputMaybe<Array<Byte_Object_Bool_Exp>>;
  _not?: InputMaybe<Byte_Object_Bool_Exp>;
  _or?: InputMaybe<Array<Byte_Object_Bool_Exp>>;
  atom?: InputMaybe<Atoms_Bool_Exp>;
  data?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Byte_Object_Max_Fields = {
  __typename?: 'byte_object_max_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Byte_Object_Min_Fields = {
  __typename?: 'byte_object_min_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "byte_object". */
export type Byte_Object_Order_By = {
  atom?: InputMaybe<Atoms_Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** select columns of table "byte_object" */
export enum Byte_Object_Select_Column {
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
}

/** Streaming cursor of the table "byte_object" */
export type Byte_Object_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Byte_Object_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Byte_Object_Stream_Cursor_Value_Input = {
  data?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']['input']>;
  _gt?: InputMaybe<Scalars['bytea']['input']>;
  _gte?: InputMaybe<Scalars['bytea']['input']>;
  _in?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bytea']['input']>;
  _lte?: InputMaybe<Scalars['bytea']['input']>;
  _neq?: InputMaybe<Scalars['bytea']['input']>;
  _nin?: InputMaybe<Array<Scalars['bytea']['input']>>;
};

/** columns and relationships of "cached_images.cached_image" */
export type Cached_Images_Cached_Image = {
  __typename?: 'cached_images_cached_image';
  created_at: Scalars['timestamptz']['output'];
  model?: Maybe<Scalars['String']['output']>;
  original_url: Scalars['String']['output'];
  safe: Scalars['Boolean']['output'];
  score?: Maybe<Scalars['jsonb']['output']>;
  url: Scalars['String']['output'];
};

/** columns and relationships of "cached_images.cached_image" */
export type Cached_Images_Cached_ImageScoreArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "cached_images.cached_image". All fields are combined with a logical 'AND'. */
export type Cached_Images_Cached_Image_Bool_Exp = {
  _and?: InputMaybe<Array<Cached_Images_Cached_Image_Bool_Exp>>;
  _not?: InputMaybe<Cached_Images_Cached_Image_Bool_Exp>;
  _or?: InputMaybe<Array<Cached_Images_Cached_Image_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  model?: InputMaybe<String_Comparison_Exp>;
  original_url?: InputMaybe<String_Comparison_Exp>;
  safe?: InputMaybe<Boolean_Comparison_Exp>;
  score?: InputMaybe<Jsonb_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "cached_images.cached_image". */
export type Cached_Images_Cached_Image_Order_By = {
  created_at?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  original_url?: InputMaybe<Order_By>;
  safe?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** select columns of table "cached_images.cached_image" */
export enum Cached_Images_Cached_Image_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Model = 'model',
  /** column name */
  OriginalUrl = 'original_url',
  /** column name */
  Safe = 'safe',
  /** column name */
  Score = 'score',
  /** column name */
  Url = 'url',
}

/** Streaming cursor of the table "cached_images_cached_image" */
export type Cached_Images_Cached_Image_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cached_Images_Cached_Image_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cached_Images_Cached_Image_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  original_url?: InputMaybe<Scalars['String']['input']>;
  safe?: InputMaybe<Scalars['Boolean']['input']>;
  score?: InputMaybe<Scalars['jsonb']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "caip10" */
export type Caip10 = {
  __typename?: 'caip10';
  account_address: Scalars['String']['output'];
  /** An object relationship */
  atom?: Maybe<Atoms>;
  chain_id: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  namespace: Scalars['String']['output'];
};

/** aggregated selection of "caip10" */
export type Caip10_Aggregate = {
  __typename?: 'caip10_aggregate';
  aggregate?: Maybe<Caip10_Aggregate_Fields>;
  nodes: Array<Caip10>;
};

/** aggregate fields of "caip10" */
export type Caip10_Aggregate_Fields = {
  __typename?: 'caip10_aggregate_fields';
  avg?: Maybe<Caip10_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Caip10_Max_Fields>;
  min?: Maybe<Caip10_Min_Fields>;
  stddev?: Maybe<Caip10_Stddev_Fields>;
  stddev_pop?: Maybe<Caip10_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Caip10_Stddev_Samp_Fields>;
  sum?: Maybe<Caip10_Sum_Fields>;
  var_pop?: Maybe<Caip10_Var_Pop_Fields>;
  var_samp?: Maybe<Caip10_Var_Samp_Fields>;
  variance?: Maybe<Caip10_Variance_Fields>;
};

/** aggregate fields of "caip10" */
export type Caip10_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Caip10_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Caip10_Avg_Fields = {
  __typename?: 'caip10_avg_fields';
  chain_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "caip10". All fields are combined with a logical 'AND'. */
export type Caip10_Bool_Exp = {
  _and?: InputMaybe<Array<Caip10_Bool_Exp>>;
  _not?: InputMaybe<Caip10_Bool_Exp>;
  _or?: InputMaybe<Array<Caip10_Bool_Exp>>;
  account_address?: InputMaybe<String_Comparison_Exp>;
  atom?: InputMaybe<Atoms_Bool_Exp>;
  chain_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  namespace?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Caip10_Max_Fields = {
  __typename?: 'caip10_max_fields';
  account_address?: Maybe<Scalars['String']['output']>;
  chain_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  namespace?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Caip10_Min_Fields = {
  __typename?: 'caip10_min_fields';
  account_address?: Maybe<Scalars['String']['output']>;
  chain_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  namespace?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "caip10". */
export type Caip10_Order_By = {
  account_address?: InputMaybe<Order_By>;
  atom?: InputMaybe<Atoms_Order_By>;
  chain_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  namespace?: InputMaybe<Order_By>;
};

/** select columns of table "caip10" */
export enum Caip10_Select_Column {
  /** column name */
  AccountAddress = 'account_address',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  Id = 'id',
  /** column name */
  Namespace = 'namespace',
}

/** aggregate stddev on columns */
export type Caip10_Stddev_Fields = {
  __typename?: 'caip10_stddev_fields';
  chain_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Caip10_Stddev_Pop_Fields = {
  __typename?: 'caip10_stddev_pop_fields';
  chain_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Caip10_Stddev_Samp_Fields = {
  __typename?: 'caip10_stddev_samp_fields';
  chain_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "caip10" */
export type Caip10_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Caip10_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Caip10_Stream_Cursor_Value_Input = {
  account_address?: InputMaybe<Scalars['String']['input']>;
  chain_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  namespace?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Caip10_Sum_Fields = {
  __typename?: 'caip10_sum_fields';
  chain_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Caip10_Var_Pop_Fields = {
  __typename?: 'caip10_var_pop_fields';
  chain_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Caip10_Var_Samp_Fields = {
  __typename?: 'caip10_var_samp_fields';
  chain_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Caip10_Variance_Fields = {
  __typename?: 'caip10_variance_fields';
  chain_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "chainlink_price" */
export type Chainlink_Prices = {
  __typename?: 'chainlink_prices';
  id: Scalars['numeric']['output'];
  usd?: Maybe<Scalars['float8']['output']>;
};

/** Boolean expression to filter rows from the table "chainlink_price". All fields are combined with a logical 'AND'. */
export type Chainlink_Prices_Bool_Exp = {
  _and?: InputMaybe<Array<Chainlink_Prices_Bool_Exp>>;
  _not?: InputMaybe<Chainlink_Prices_Bool_Exp>;
  _or?: InputMaybe<Array<Chainlink_Prices_Bool_Exp>>;
  id?: InputMaybe<Numeric_Comparison_Exp>;
  usd?: InputMaybe<Float8_Comparison_Exp>;
};

/** Ordering options when selecting data from "chainlink_price". */
export type Chainlink_Prices_Order_By = {
  id?: InputMaybe<Order_By>;
  usd?: InputMaybe<Order_By>;
};

/** select columns of table "chainlink_price" */
export enum Chainlink_Prices_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Usd = 'usd',
}

/** Streaming cursor of the table "chainlink_prices" */
export type Chainlink_Prices_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chainlink_Prices_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chainlink_Prices_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['numeric']['input']>;
  usd?: InputMaybe<Scalars['float8']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** columns and relationships of "deposit" */
export type Deposits = {
  __typename?: 'deposits';
  assets_after_fees: Scalars['numeric']['output'];
  block_number: Scalars['numeric']['output'];
  created_at: Scalars['timestamptz']['output'];
  curve_id: Scalars['numeric']['output'];
  id: Scalars['String']['output'];
  log_index: Scalars['bigint']['output'];
  /** An object relationship */
  receiver: Accounts;
  receiver_id: Scalars['String']['output'];
  /** An object relationship */
  sender?: Maybe<Accounts>;
  sender_id: Scalars['String']['output'];
  shares: Scalars['numeric']['output'];
  /** An object relationship */
  term: Terms;
  term_id: Scalars['String']['output'];
  total_shares: Scalars['numeric']['output'];
  transaction_hash: Scalars['String']['output'];
  /** An object relationship */
  vault?: Maybe<Vaults>;
  vault_type: Scalars['vault_type']['output'];
};

/** aggregated selection of "deposit" */
export type Deposits_Aggregate = {
  __typename?: 'deposits_aggregate';
  aggregate?: Maybe<Deposits_Aggregate_Fields>;
  nodes: Array<Deposits>;
};

export type Deposits_Aggregate_Bool_Exp = {
  count?: InputMaybe<Deposits_Aggregate_Bool_Exp_Count>;
};

export type Deposits_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Deposits_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Deposits_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "deposit" */
export type Deposits_Aggregate_Fields = {
  __typename?: 'deposits_aggregate_fields';
  avg?: Maybe<Deposits_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Deposits_Max_Fields>;
  min?: Maybe<Deposits_Min_Fields>;
  stddev?: Maybe<Deposits_Stddev_Fields>;
  stddev_pop?: Maybe<Deposits_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Deposits_Stddev_Samp_Fields>;
  sum?: Maybe<Deposits_Sum_Fields>;
  var_pop?: Maybe<Deposits_Var_Pop_Fields>;
  var_samp?: Maybe<Deposits_Var_Samp_Fields>;
  variance?: Maybe<Deposits_Variance_Fields>;
};

/** aggregate fields of "deposit" */
export type Deposits_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Deposits_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "deposit" */
export type Deposits_Aggregate_Order_By = {
  avg?: InputMaybe<Deposits_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Deposits_Max_Order_By>;
  min?: InputMaybe<Deposits_Min_Order_By>;
  stddev?: InputMaybe<Deposits_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Deposits_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Deposits_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Deposits_Sum_Order_By>;
  var_pop?: InputMaybe<Deposits_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Deposits_Var_Samp_Order_By>;
  variance?: InputMaybe<Deposits_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Deposits_Avg_Fields = {
  __typename?: 'deposits_avg_fields';
  assets_after_fees?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "deposit" */
export type Deposits_Avg_Order_By = {
  assets_after_fees?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "deposit". All fields are combined with a logical 'AND'. */
export type Deposits_Bool_Exp = {
  _and?: InputMaybe<Array<Deposits_Bool_Exp>>;
  _not?: InputMaybe<Deposits_Bool_Exp>;
  _or?: InputMaybe<Array<Deposits_Bool_Exp>>;
  assets_after_fees?: InputMaybe<Numeric_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  curve_id?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Bigint_Comparison_Exp>;
  receiver?: InputMaybe<Accounts_Bool_Exp>;
  receiver_id?: InputMaybe<String_Comparison_Exp>;
  sender?: InputMaybe<Accounts_Bool_Exp>;
  sender_id?: InputMaybe<String_Comparison_Exp>;
  shares?: InputMaybe<Numeric_Comparison_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
  total_shares?: InputMaybe<Numeric_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  vault?: InputMaybe<Vaults_Bool_Exp>;
  vault_type?: InputMaybe<Vault_Type_Comparison_Exp>;
};

/** aggregate max on columns */
export type Deposits_Max_Fields = {
  __typename?: 'deposits_max_fields';
  assets_after_fees?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
  receiver_id?: Maybe<Scalars['String']['output']>;
  sender_id?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Scalars['numeric']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
  vault_type?: Maybe<Scalars['vault_type']['output']>;
};

/** order by max() on columns of table "deposit" */
export type Deposits_Max_Order_By = {
  assets_after_fees?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  receiver_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  vault_type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Deposits_Min_Fields = {
  __typename?: 'deposits_min_fields';
  assets_after_fees?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
  receiver_id?: Maybe<Scalars['String']['output']>;
  sender_id?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Scalars['numeric']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
  vault_type?: Maybe<Scalars['vault_type']['output']>;
};

/** order by min() on columns of table "deposit" */
export type Deposits_Min_Order_By = {
  assets_after_fees?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  receiver_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  vault_type?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "deposit". */
export type Deposits_Order_By = {
  assets_after_fees?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  receiver?: InputMaybe<Accounts_Order_By>;
  receiver_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Accounts_Order_By>;
  sender_id?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  vault?: InputMaybe<Vaults_Order_By>;
  vault_type?: InputMaybe<Order_By>;
};

/** select columns of table "deposit" */
export enum Deposits_Select_Column {
  /** column name */
  AssetsAfterFees = 'assets_after_fees',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurveId = 'curve_id',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  ReceiverId = 'receiver_id',
  /** column name */
  SenderId = 'sender_id',
  /** column name */
  Shares = 'shares',
  /** column name */
  TermId = 'term_id',
  /** column name */
  TotalShares = 'total_shares',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  VaultType = 'vault_type',
}

/** aggregate stddev on columns */
export type Deposits_Stddev_Fields = {
  __typename?: 'deposits_stddev_fields';
  assets_after_fees?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "deposit" */
export type Deposits_Stddev_Order_By = {
  assets_after_fees?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Deposits_Stddev_Pop_Fields = {
  __typename?: 'deposits_stddev_pop_fields';
  assets_after_fees?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "deposit" */
export type Deposits_Stddev_Pop_Order_By = {
  assets_after_fees?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Deposits_Stddev_Samp_Fields = {
  __typename?: 'deposits_stddev_samp_fields';
  assets_after_fees?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "deposit" */
export type Deposits_Stddev_Samp_Order_By = {
  assets_after_fees?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "deposits" */
export type Deposits_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Deposits_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Deposits_Stream_Cursor_Value_Input = {
  assets_after_fees?: InputMaybe<Scalars['numeric']['input']>;
  block_number?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  curve_id?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  log_index?: InputMaybe<Scalars['bigint']['input']>;
  receiver_id?: InputMaybe<Scalars['String']['input']>;
  sender_id?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Scalars['numeric']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
  total_shares?: InputMaybe<Scalars['numeric']['input']>;
  transaction_hash?: InputMaybe<Scalars['String']['input']>;
  vault_type?: InputMaybe<Scalars['vault_type']['input']>;
};

/** aggregate sum on columns */
export type Deposits_Sum_Fields = {
  __typename?: 'deposits_sum_fields';
  assets_after_fees?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
  shares?: Maybe<Scalars['numeric']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "deposit" */
export type Deposits_Sum_Order_By = {
  assets_after_fees?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Deposits_Var_Pop_Fields = {
  __typename?: 'deposits_var_pop_fields';
  assets_after_fees?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "deposit" */
export type Deposits_Var_Pop_Order_By = {
  assets_after_fees?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Deposits_Var_Samp_Fields = {
  __typename?: 'deposits_var_samp_fields';
  assets_after_fees?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "deposit" */
export type Deposits_Var_Samp_Order_By = {
  assets_after_fees?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Deposits_Variance_Fields = {
  __typename?: 'deposits_variance_fields';
  assets_after_fees?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "deposit" */
export type Deposits_Variance_Order_By = {
  assets_after_fees?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "event_type". All fields are combined with logical 'AND'. */
export type Event_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['event_type']['input']>;
  _gt?: InputMaybe<Scalars['event_type']['input']>;
  _gte?: InputMaybe<Scalars['event_type']['input']>;
  _in?: InputMaybe<Array<Scalars['event_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['event_type']['input']>;
  _lte?: InputMaybe<Scalars['event_type']['input']>;
  _neq?: InputMaybe<Scalars['event_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['event_type']['input']>>;
};

/** columns and relationships of "event" */
export type Events = {
  __typename?: 'events';
  /** An object relationship */
  atom?: Maybe<Atoms>;
  atom_id?: Maybe<Scalars['String']['output']>;
  block_number: Scalars['numeric']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  deposit?: Maybe<Deposits>;
  deposit_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  fee_transfer?: Maybe<Fee_Transfers>;
  fee_transfer_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** An object relationship */
  redemption?: Maybe<Redemptions>;
  redemption_id?: Maybe<Scalars['String']['output']>;
  transaction_hash: Scalars['String']['output'];
  /** An object relationship */
  triple?: Maybe<Triples>;
  triple_id?: Maybe<Scalars['String']['output']>;
  type: Scalars['event_type']['output'];
};

/** aggregated selection of "event" */
export type Events_Aggregate = {
  __typename?: 'events_aggregate';
  aggregate?: Maybe<Events_Aggregate_Fields>;
  nodes: Array<Events>;
};

/** aggregate fields of "event" */
export type Events_Aggregate_Fields = {
  __typename?: 'events_aggregate_fields';
  avg?: Maybe<Events_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Events_Max_Fields>;
  min?: Maybe<Events_Min_Fields>;
  stddev?: Maybe<Events_Stddev_Fields>;
  stddev_pop?: Maybe<Events_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Events_Stddev_Samp_Fields>;
  sum?: Maybe<Events_Sum_Fields>;
  var_pop?: Maybe<Events_Var_Pop_Fields>;
  var_samp?: Maybe<Events_Var_Samp_Fields>;
  variance?: Maybe<Events_Variance_Fields>;
};

/** aggregate fields of "event" */
export type Events_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Events_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Events_Avg_Fields = {
  __typename?: 'events_avg_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "event". All fields are combined with a logical 'AND'. */
export type Events_Bool_Exp = {
  _and?: InputMaybe<Array<Events_Bool_Exp>>;
  _not?: InputMaybe<Events_Bool_Exp>;
  _or?: InputMaybe<Array<Events_Bool_Exp>>;
  atom?: InputMaybe<Atoms_Bool_Exp>;
  atom_id?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deposit?: InputMaybe<Deposits_Bool_Exp>;
  deposit_id?: InputMaybe<String_Comparison_Exp>;
  fee_transfer?: InputMaybe<Fee_Transfers_Bool_Exp>;
  fee_transfer_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  redemption?: InputMaybe<Redemptions_Bool_Exp>;
  redemption_id?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  triple?: InputMaybe<Triples_Bool_Exp>;
  triple_id?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Event_Type_Comparison_Exp>;
};

/** aggregate max on columns */
export type Events_Max_Fields = {
  __typename?: 'events_max_fields';
  atom_id?: Maybe<Scalars['String']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deposit_id?: Maybe<Scalars['String']['output']>;
  fee_transfer_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  redemption_id?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
  triple_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['event_type']['output']>;
};

/** aggregate min on columns */
export type Events_Min_Fields = {
  __typename?: 'events_min_fields';
  atom_id?: Maybe<Scalars['String']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deposit_id?: Maybe<Scalars['String']['output']>;
  fee_transfer_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  redemption_id?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
  triple_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['event_type']['output']>;
};

/** Ordering options when selecting data from "event". */
export type Events_Order_By = {
  atom?: InputMaybe<Atoms_Order_By>;
  atom_id?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deposit?: InputMaybe<Deposits_Order_By>;
  deposit_id?: InputMaybe<Order_By>;
  fee_transfer?: InputMaybe<Fee_Transfers_Order_By>;
  fee_transfer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  redemption?: InputMaybe<Redemptions_Order_By>;
  redemption_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  triple?: InputMaybe<Triples_Order_By>;
  triple_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "event" */
export enum Events_Select_Column {
  /** column name */
  AtomId = 'atom_id',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DepositId = 'deposit_id',
  /** column name */
  FeeTransferId = 'fee_transfer_id',
  /** column name */
  Id = 'id',
  /** column name */
  RedemptionId = 'redemption_id',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  TripleId = 'triple_id',
  /** column name */
  Type = 'type',
}

/** aggregate stddev on columns */
export type Events_Stddev_Fields = {
  __typename?: 'events_stddev_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Events_Stddev_Pop_Fields = {
  __typename?: 'events_stddev_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Events_Stddev_Samp_Fields = {
  __typename?: 'events_stddev_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "events" */
export type Events_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Events_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Events_Stream_Cursor_Value_Input = {
  atom_id?: InputMaybe<Scalars['String']['input']>;
  block_number?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deposit_id?: InputMaybe<Scalars['String']['input']>;
  fee_transfer_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  redemption_id?: InputMaybe<Scalars['String']['input']>;
  transaction_hash?: InputMaybe<Scalars['String']['input']>;
  triple_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['event_type']['input']>;
};

/** aggregate sum on columns */
export type Events_Sum_Fields = {
  __typename?: 'events_sum_fields';
  block_number?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Events_Var_Pop_Fields = {
  __typename?: 'events_var_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Events_Var_Samp_Fields = {
  __typename?: 'events_var_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Events_Variance_Fields = {
  __typename?: 'events_variance_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "fee_transfer" */
export type Fee_Transfers = {
  __typename?: 'fee_transfers';
  amount: Scalars['numeric']['output'];
  block_number: Scalars['numeric']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  /** An object relationship */
  receiver: Accounts;
  receiver_id: Scalars['String']['output'];
  /** An object relationship */
  sender?: Maybe<Accounts>;
  sender_id: Scalars['String']['output'];
  transaction_hash: Scalars['String']['output'];
};

/** aggregated selection of "fee_transfer" */
export type Fee_Transfers_Aggregate = {
  __typename?: 'fee_transfers_aggregate';
  aggregate?: Maybe<Fee_Transfers_Aggregate_Fields>;
  nodes: Array<Fee_Transfers>;
};

export type Fee_Transfers_Aggregate_Bool_Exp = {
  count?: InputMaybe<Fee_Transfers_Aggregate_Bool_Exp_Count>;
};

export type Fee_Transfers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Fee_Transfers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Fee_Transfers_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "fee_transfer" */
export type Fee_Transfers_Aggregate_Fields = {
  __typename?: 'fee_transfers_aggregate_fields';
  avg?: Maybe<Fee_Transfers_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Fee_Transfers_Max_Fields>;
  min?: Maybe<Fee_Transfers_Min_Fields>;
  stddev?: Maybe<Fee_Transfers_Stddev_Fields>;
  stddev_pop?: Maybe<Fee_Transfers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Fee_Transfers_Stddev_Samp_Fields>;
  sum?: Maybe<Fee_Transfers_Sum_Fields>;
  var_pop?: Maybe<Fee_Transfers_Var_Pop_Fields>;
  var_samp?: Maybe<Fee_Transfers_Var_Samp_Fields>;
  variance?: Maybe<Fee_Transfers_Variance_Fields>;
};

/** aggregate fields of "fee_transfer" */
export type Fee_Transfers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fee_Transfers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "fee_transfer" */
export type Fee_Transfers_Aggregate_Order_By = {
  avg?: InputMaybe<Fee_Transfers_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Fee_Transfers_Max_Order_By>;
  min?: InputMaybe<Fee_Transfers_Min_Order_By>;
  stddev?: InputMaybe<Fee_Transfers_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Fee_Transfers_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Fee_Transfers_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Fee_Transfers_Sum_Order_By>;
  var_pop?: InputMaybe<Fee_Transfers_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Fee_Transfers_Var_Samp_Order_By>;
  variance?: InputMaybe<Fee_Transfers_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Fee_Transfers_Avg_Fields = {
  __typename?: 'fee_transfers_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "fee_transfer" */
export type Fee_Transfers_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "fee_transfer". All fields are combined with a logical 'AND'. */
export type Fee_Transfers_Bool_Exp = {
  _and?: InputMaybe<Array<Fee_Transfers_Bool_Exp>>;
  _not?: InputMaybe<Fee_Transfers_Bool_Exp>;
  _or?: InputMaybe<Array<Fee_Transfers_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  receiver?: InputMaybe<Accounts_Bool_Exp>;
  receiver_id?: InputMaybe<String_Comparison_Exp>;
  sender?: InputMaybe<Accounts_Bool_Exp>;
  sender_id?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Fee_Transfers_Max_Fields = {
  __typename?: 'fee_transfers_max_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  receiver_id?: Maybe<Scalars['String']['output']>;
  sender_id?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "fee_transfer" */
export type Fee_Transfers_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  receiver_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Fee_Transfers_Min_Fields = {
  __typename?: 'fee_transfers_min_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  receiver_id?: Maybe<Scalars['String']['output']>;
  sender_id?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "fee_transfer" */
export type Fee_Transfers_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  receiver_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "fee_transfer". */
export type Fee_Transfers_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  receiver?: InputMaybe<Accounts_Order_By>;
  receiver_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Accounts_Order_By>;
  sender_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** select columns of table "fee_transfer" */
export enum Fee_Transfers_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReceiverId = 'receiver_id',
  /** column name */
  SenderId = 'sender_id',
  /** column name */
  TransactionHash = 'transaction_hash',
}

/** aggregate stddev on columns */
export type Fee_Transfers_Stddev_Fields = {
  __typename?: 'fee_transfers_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "fee_transfer" */
export type Fee_Transfers_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Fee_Transfers_Stddev_Pop_Fields = {
  __typename?: 'fee_transfers_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "fee_transfer" */
export type Fee_Transfers_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Fee_Transfers_Stddev_Samp_Fields = {
  __typename?: 'fee_transfers_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "fee_transfer" */
export type Fee_Transfers_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "fee_transfers" */
export type Fee_Transfers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fee_Transfers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fee_Transfers_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  block_number?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  receiver_id?: InputMaybe<Scalars['String']['input']>;
  sender_id?: InputMaybe<Scalars['String']['input']>;
  transaction_hash?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Fee_Transfers_Sum_Fields = {
  __typename?: 'fee_transfers_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "fee_transfer" */
export type Fee_Transfers_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Fee_Transfers_Var_Pop_Fields = {
  __typename?: 'fee_transfers_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "fee_transfer" */
export type Fee_Transfers_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Fee_Transfers_Var_Samp_Fields = {
  __typename?: 'fee_transfers_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "fee_transfer" */
export type Fee_Transfers_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Fee_Transfers_Variance_Fields = {
  __typename?: 'fee_transfers_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "fee_transfer" */
export type Fee_Transfers_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

export type Following_Args = {
  address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "json_object" */
export type Json_Objects = {
  __typename?: 'json_objects';
  /** An object relationship */
  atom?: Maybe<Atoms>;
  data: Scalars['jsonb']['output'];
  id: Scalars['String']['output'];
};

/** columns and relationships of "json_object" */
export type Json_ObjectsDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "json_object" */
export type Json_Objects_Aggregate = {
  __typename?: 'json_objects_aggregate';
  aggregate?: Maybe<Json_Objects_Aggregate_Fields>;
  nodes: Array<Json_Objects>;
};

/** aggregate fields of "json_object" */
export type Json_Objects_Aggregate_Fields = {
  __typename?: 'json_objects_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Json_Objects_Max_Fields>;
  min?: Maybe<Json_Objects_Min_Fields>;
};

/** aggregate fields of "json_object" */
export type Json_Objects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Json_Objects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "json_object". All fields are combined with a logical 'AND'. */
export type Json_Objects_Bool_Exp = {
  _and?: InputMaybe<Array<Json_Objects_Bool_Exp>>;
  _not?: InputMaybe<Json_Objects_Bool_Exp>;
  _or?: InputMaybe<Array<Json_Objects_Bool_Exp>>;
  atom?: InputMaybe<Atoms_Bool_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Json_Objects_Max_Fields = {
  __typename?: 'json_objects_max_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Json_Objects_Min_Fields = {
  __typename?: 'json_objects_min_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "json_object". */
export type Json_Objects_Order_By = {
  atom?: InputMaybe<Atoms_Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** select columns of table "json_object" */
export enum Json_Objects_Select_Column {
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
}

/** Streaming cursor of the table "json_objects" */
export type Json_Objects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Json_Objects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Json_Objects_Stream_Cursor_Value_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** Uploads and pins Organization to IPFS */
  pinOrganization?: Maybe<PinOutput>;
  /** Uploads and pins Person to IPFS */
  pinPerson?: Maybe<PinOutput>;
  /** Uploads and pins Thing to IPFS */
  pinThing?: Maybe<PinOutput>;
};

/** mutation root */
export type Mutation_RootPinOrganizationArgs = {
  organization: PinOrganizationInput;
};

/** mutation root */
export type Mutation_RootPinPersonArgs = {
  person: PinPersonInput;
};

/** mutation root */
export type Mutation_RootPinThingArgs = {
  thing: PinThingInput;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "organization" */
export type Organizations = {
  __typename?: 'organizations';
  /** An object relationship */
  atom?: Maybe<Atoms>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "organization" */
export type Organizations_Aggregate = {
  __typename?: 'organizations_aggregate';
  aggregate?: Maybe<Organizations_Aggregate_Fields>;
  nodes: Array<Organizations>;
};

/** aggregate fields of "organization" */
export type Organizations_Aggregate_Fields = {
  __typename?: 'organizations_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Organizations_Max_Fields>;
  min?: Maybe<Organizations_Min_Fields>;
};

/** aggregate fields of "organization" */
export type Organizations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organizations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
export type Organizations_Bool_Exp = {
  _and?: InputMaybe<Array<Organizations_Bool_Exp>>;
  _not?: InputMaybe<Organizations_Bool_Exp>;
  _or?: InputMaybe<Array<Organizations_Bool_Exp>>;
  atom?: InputMaybe<Atoms_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Organizations_Max_Fields = {
  __typename?: 'organizations_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Organizations_Min_Fields = {
  __typename?: 'organizations_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "organization". */
export type Organizations_Order_By = {
  atom?: InputMaybe<Atoms_Order_By>;
  description?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** select columns of table "organization" */
export enum Organizations_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url',
}

/** Streaming cursor of the table "organizations" */
export type Organizations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organizations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organizations_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "person" */
export type Persons = {
  __typename?: 'persons';
  /** An object relationship */
  atom?: Maybe<Atoms>;
  cached_image?: Maybe<Cached_Images_Cached_Image>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  identifier?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "person" */
export type Persons_Aggregate = {
  __typename?: 'persons_aggregate';
  aggregate?: Maybe<Persons_Aggregate_Fields>;
  nodes: Array<Persons>;
};

/** aggregate fields of "person" */
export type Persons_Aggregate_Fields = {
  __typename?: 'persons_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Persons_Max_Fields>;
  min?: Maybe<Persons_Min_Fields>;
};

/** aggregate fields of "person" */
export type Persons_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Persons_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "person". All fields are combined with a logical 'AND'. */
export type Persons_Bool_Exp = {
  _and?: InputMaybe<Array<Persons_Bool_Exp>>;
  _not?: InputMaybe<Persons_Bool_Exp>;
  _or?: InputMaybe<Array<Persons_Bool_Exp>>;
  atom?: InputMaybe<Atoms_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  identifier?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Persons_Max_Fields = {
  __typename?: 'persons_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Persons_Min_Fields = {
  __typename?: 'persons_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "person". */
export type Persons_Order_By = {
  atom?: InputMaybe<Atoms_Order_By>;
  description?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identifier?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** select columns of table "person" */
export enum Persons_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url',
}

/** Streaming cursor of the table "persons" */
export type Persons_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Persons_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Persons_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "position" */
export type Positions = {
  __typename?: 'positions';
  /** An object relationship */
  account?: Maybe<Accounts>;
  account_id: Scalars['String']['output'];
  block_number: Scalars['bigint']['output'];
  created_at: Scalars['timestamptz']['output'];
  curve_id: Scalars['numeric']['output'];
  id: Scalars['String']['output'];
  log_index: Scalars['bigint']['output'];
  shares: Scalars['numeric']['output'];
  /** An object relationship */
  term: Terms;
  term_id: Scalars['String']['output'];
  total_deposit_assets_after_total_fees: Scalars['numeric']['output'];
  total_redeem_assets_for_receiver: Scalars['numeric']['output'];
  transaction_hash: Scalars['String']['output'];
  transaction_index: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  vault?: Maybe<Vaults>;
};

/** aggregated selection of "position" */
export type Positions_Aggregate = {
  __typename?: 'positions_aggregate';
  aggregate?: Maybe<Positions_Aggregate_Fields>;
  nodes: Array<Positions>;
};

export type Positions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Positions_Aggregate_Bool_Exp_Count>;
};

export type Positions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Positions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Positions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "position" */
export type Positions_Aggregate_Fields = {
  __typename?: 'positions_aggregate_fields';
  avg?: Maybe<Positions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Positions_Max_Fields>;
  min?: Maybe<Positions_Min_Fields>;
  stddev?: Maybe<Positions_Stddev_Fields>;
  stddev_pop?: Maybe<Positions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Positions_Stddev_Samp_Fields>;
  sum?: Maybe<Positions_Sum_Fields>;
  var_pop?: Maybe<Positions_Var_Pop_Fields>;
  var_samp?: Maybe<Positions_Var_Samp_Fields>;
  variance?: Maybe<Positions_Variance_Fields>;
};

/** aggregate fields of "position" */
export type Positions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Positions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "position" */
export type Positions_Aggregate_Order_By = {
  avg?: InputMaybe<Positions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Positions_Max_Order_By>;
  min?: InputMaybe<Positions_Min_Order_By>;
  stddev?: InputMaybe<Positions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Positions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Positions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Positions_Sum_Order_By>;
  var_pop?: InputMaybe<Positions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Positions_Var_Samp_Order_By>;
  variance?: InputMaybe<Positions_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Positions_Avg_Fields = {
  __typename?: 'positions_avg_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_deposit_assets_after_total_fees?: Maybe<Scalars['Float']['output']>;
  total_redeem_assets_for_receiver?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "position" */
export type Positions_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_deposit_assets_after_total_fees?: InputMaybe<Order_By>;
  total_redeem_assets_for_receiver?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "position". All fields are combined with a logical 'AND'. */
export type Positions_Bool_Exp = {
  _and?: InputMaybe<Array<Positions_Bool_Exp>>;
  _not?: InputMaybe<Positions_Bool_Exp>;
  _or?: InputMaybe<Array<Positions_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  account_id?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  curve_id?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Bigint_Comparison_Exp>;
  shares?: InputMaybe<Numeric_Comparison_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
  total_deposit_assets_after_total_fees?: InputMaybe<Numeric_Comparison_Exp>;
  total_redeem_assets_for_receiver?: InputMaybe<Numeric_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  transaction_index?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vault?: InputMaybe<Vaults_Bool_Exp>;
};

export type Positions_From_Following_Args = {
  address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Positions_Max_Fields = {
  __typename?: 'positions_max_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  block_number?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
  shares?: Maybe<Scalars['numeric']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
  total_deposit_assets_after_total_fees?: Maybe<Scalars['numeric']['output']>;
  total_redeem_assets_for_receiver?: Maybe<Scalars['numeric']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
  transaction_index?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "position" */
export type Positions_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_deposit_assets_after_total_fees?: InputMaybe<Order_By>;
  total_redeem_assets_for_receiver?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Positions_Min_Fields = {
  __typename?: 'positions_min_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  block_number?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
  shares?: Maybe<Scalars['numeric']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
  total_deposit_assets_after_total_fees?: Maybe<Scalars['numeric']['output']>;
  total_redeem_assets_for_receiver?: Maybe<Scalars['numeric']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
  transaction_index?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "position" */
export type Positions_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_deposit_assets_after_total_fees?: InputMaybe<Order_By>;
  total_redeem_assets_for_receiver?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "position". */
export type Positions_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  account_id?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_deposit_assets_after_total_fees?: InputMaybe<Order_By>;
  total_redeem_assets_for_receiver?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vault?: InputMaybe<Vaults_Order_By>;
};

/** select columns of table "position" */
export enum Positions_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurveId = 'curve_id',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  Shares = 'shares',
  /** column name */
  TermId = 'term_id',
  /** column name */
  TotalDepositAssetsAfterTotalFees = 'total_deposit_assets_after_total_fees',
  /** column name */
  TotalRedeemAssetsForReceiver = 'total_redeem_assets_for_receiver',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  TransactionIndex = 'transaction_index',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate stddev on columns */
export type Positions_Stddev_Fields = {
  __typename?: 'positions_stddev_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_deposit_assets_after_total_fees?: Maybe<Scalars['Float']['output']>;
  total_redeem_assets_for_receiver?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "position" */
export type Positions_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_deposit_assets_after_total_fees?: InputMaybe<Order_By>;
  total_redeem_assets_for_receiver?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Positions_Stddev_Pop_Fields = {
  __typename?: 'positions_stddev_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_deposit_assets_after_total_fees?: Maybe<Scalars['Float']['output']>;
  total_redeem_assets_for_receiver?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "position" */
export type Positions_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_deposit_assets_after_total_fees?: InputMaybe<Order_By>;
  total_redeem_assets_for_receiver?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Positions_Stddev_Samp_Fields = {
  __typename?: 'positions_stddev_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_deposit_assets_after_total_fees?: Maybe<Scalars['Float']['output']>;
  total_redeem_assets_for_receiver?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "position" */
export type Positions_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_deposit_assets_after_total_fees?: InputMaybe<Order_By>;
  total_redeem_assets_for_receiver?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "positions" */
export type Positions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Positions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Positions_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['String']['input']>;
  block_number?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  curve_id?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  log_index?: InputMaybe<Scalars['bigint']['input']>;
  shares?: InputMaybe<Scalars['numeric']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
  total_deposit_assets_after_total_fees?: InputMaybe<Scalars['numeric']['input']>;
  total_redeem_assets_for_receiver?: InputMaybe<Scalars['numeric']['input']>;
  transaction_hash?: InputMaybe<Scalars['String']['input']>;
  transaction_index?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Positions_Sum_Fields = {
  __typename?: 'positions_sum_fields';
  block_number?: Maybe<Scalars['bigint']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
  shares?: Maybe<Scalars['numeric']['output']>;
  total_deposit_assets_after_total_fees?: Maybe<Scalars['numeric']['output']>;
  total_redeem_assets_for_receiver?: Maybe<Scalars['numeric']['output']>;
  transaction_index?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "position" */
export type Positions_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_deposit_assets_after_total_fees?: InputMaybe<Order_By>;
  total_redeem_assets_for_receiver?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Positions_Var_Pop_Fields = {
  __typename?: 'positions_var_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_deposit_assets_after_total_fees?: Maybe<Scalars['Float']['output']>;
  total_redeem_assets_for_receiver?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "position" */
export type Positions_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_deposit_assets_after_total_fees?: InputMaybe<Order_By>;
  total_redeem_assets_for_receiver?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Positions_Var_Samp_Fields = {
  __typename?: 'positions_var_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_deposit_assets_after_total_fees?: Maybe<Scalars['Float']['output']>;
  total_redeem_assets_for_receiver?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "position" */
export type Positions_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_deposit_assets_after_total_fees?: InputMaybe<Order_By>;
  total_redeem_assets_for_receiver?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Positions_Variance_Fields = {
  __typename?: 'positions_variance_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_deposit_assets_after_total_fees?: Maybe<Scalars['Float']['output']>;
  total_redeem_assets_for_receiver?: Maybe<Scalars['Float']['output']>;
  transaction_index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "position" */
export type Positions_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_deposit_assets_after_total_fees?: InputMaybe<Order_By>;
  total_redeem_assets_for_receiver?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** columns and relationships of "predicate_object" */
export type Predicate_Objects = {
  __typename?: 'predicate_objects';
  id: Scalars['String']['output'];
  /** An object relationship */
  object: Atoms;
  object_id: Scalars['String']['output'];
  /** An object relationship */
  predicate: Atoms;
  predicate_id: Scalars['String']['output'];
  triple_count: Scalars['Int']['output'];
};

/** aggregated selection of "predicate_object" */
export type Predicate_Objects_Aggregate = {
  __typename?: 'predicate_objects_aggregate';
  aggregate?: Maybe<Predicate_Objects_Aggregate_Fields>;
  nodes: Array<Predicate_Objects>;
};

export type Predicate_Objects_Aggregate_Bool_Exp = {
  count?: InputMaybe<Predicate_Objects_Aggregate_Bool_Exp_Count>;
};

export type Predicate_Objects_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Predicate_Objects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Predicate_Objects_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "predicate_object" */
export type Predicate_Objects_Aggregate_Fields = {
  __typename?: 'predicate_objects_aggregate_fields';
  avg?: Maybe<Predicate_Objects_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Predicate_Objects_Max_Fields>;
  min?: Maybe<Predicate_Objects_Min_Fields>;
  stddev?: Maybe<Predicate_Objects_Stddev_Fields>;
  stddev_pop?: Maybe<Predicate_Objects_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Predicate_Objects_Stddev_Samp_Fields>;
  sum?: Maybe<Predicate_Objects_Sum_Fields>;
  var_pop?: Maybe<Predicate_Objects_Var_Pop_Fields>;
  var_samp?: Maybe<Predicate_Objects_Var_Samp_Fields>;
  variance?: Maybe<Predicate_Objects_Variance_Fields>;
};

/** aggregate fields of "predicate_object" */
export type Predicate_Objects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Predicate_Objects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "predicate_object" */
export type Predicate_Objects_Aggregate_Order_By = {
  avg?: InputMaybe<Predicate_Objects_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Predicate_Objects_Max_Order_By>;
  min?: InputMaybe<Predicate_Objects_Min_Order_By>;
  stddev?: InputMaybe<Predicate_Objects_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Predicate_Objects_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Predicate_Objects_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Predicate_Objects_Sum_Order_By>;
  var_pop?: InputMaybe<Predicate_Objects_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Predicate_Objects_Var_Samp_Order_By>;
  variance?: InputMaybe<Predicate_Objects_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Predicate_Objects_Avg_Fields = {
  __typename?: 'predicate_objects_avg_fields';
  triple_count?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "predicate_object" */
export type Predicate_Objects_Avg_Order_By = {
  triple_count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "predicate_object". All fields are combined with a logical 'AND'. */
export type Predicate_Objects_Bool_Exp = {
  _and?: InputMaybe<Array<Predicate_Objects_Bool_Exp>>;
  _not?: InputMaybe<Predicate_Objects_Bool_Exp>;
  _or?: InputMaybe<Array<Predicate_Objects_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  object?: InputMaybe<Atoms_Bool_Exp>;
  object_id?: InputMaybe<String_Comparison_Exp>;
  predicate?: InputMaybe<Atoms_Bool_Exp>;
  predicate_id?: InputMaybe<String_Comparison_Exp>;
  triple_count?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Predicate_Objects_Max_Fields = {
  __typename?: 'predicate_objects_max_fields';
  id?: Maybe<Scalars['String']['output']>;
  object_id?: Maybe<Scalars['String']['output']>;
  predicate_id?: Maybe<Scalars['String']['output']>;
  triple_count?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "predicate_object" */
export type Predicate_Objects_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  object_id?: InputMaybe<Order_By>;
  predicate_id?: InputMaybe<Order_By>;
  triple_count?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Predicate_Objects_Min_Fields = {
  __typename?: 'predicate_objects_min_fields';
  id?: Maybe<Scalars['String']['output']>;
  object_id?: Maybe<Scalars['String']['output']>;
  predicate_id?: Maybe<Scalars['String']['output']>;
  triple_count?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "predicate_object" */
export type Predicate_Objects_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  object_id?: InputMaybe<Order_By>;
  predicate_id?: InputMaybe<Order_By>;
  triple_count?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "predicate_object". */
export type Predicate_Objects_Order_By = {
  id?: InputMaybe<Order_By>;
  object?: InputMaybe<Atoms_Order_By>;
  object_id?: InputMaybe<Order_By>;
  predicate?: InputMaybe<Atoms_Order_By>;
  predicate_id?: InputMaybe<Order_By>;
  triple_count?: InputMaybe<Order_By>;
};

/** select columns of table "predicate_object" */
export enum Predicate_Objects_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  PredicateId = 'predicate_id',
  /** column name */
  TripleCount = 'triple_count',
}

/** aggregate stddev on columns */
export type Predicate_Objects_Stddev_Fields = {
  __typename?: 'predicate_objects_stddev_fields';
  triple_count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "predicate_object" */
export type Predicate_Objects_Stddev_Order_By = {
  triple_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Predicate_Objects_Stddev_Pop_Fields = {
  __typename?: 'predicate_objects_stddev_pop_fields';
  triple_count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "predicate_object" */
export type Predicate_Objects_Stddev_Pop_Order_By = {
  triple_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Predicate_Objects_Stddev_Samp_Fields = {
  __typename?: 'predicate_objects_stddev_samp_fields';
  triple_count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "predicate_object" */
export type Predicate_Objects_Stddev_Samp_Order_By = {
  triple_count?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "predicate_objects" */
export type Predicate_Objects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Predicate_Objects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Predicate_Objects_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  object_id?: InputMaybe<Scalars['String']['input']>;
  predicate_id?: InputMaybe<Scalars['String']['input']>;
  triple_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Predicate_Objects_Sum_Fields = {
  __typename?: 'predicate_objects_sum_fields';
  triple_count?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "predicate_object" */
export type Predicate_Objects_Sum_Order_By = {
  triple_count?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Predicate_Objects_Var_Pop_Fields = {
  __typename?: 'predicate_objects_var_pop_fields';
  triple_count?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "predicate_object" */
export type Predicate_Objects_Var_Pop_Order_By = {
  triple_count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Predicate_Objects_Var_Samp_Fields = {
  __typename?: 'predicate_objects_var_samp_fields';
  triple_count?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "predicate_object" */
export type Predicate_Objects_Var_Samp_Order_By = {
  triple_count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Predicate_Objects_Variance_Fields = {
  __typename?: 'predicate_objects_variance_fields';
  triple_count?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "predicate_object" */
export type Predicate_Objects_Variance_Order_By = {
  triple_count?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account" using primary key columns */
  account?: Maybe<Accounts>;
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "atom" using primary key columns */
  atom?: Maybe<Atoms>;
  /** fetch data from the table: "atom_value" using primary key columns */
  atom_value?: Maybe<Atom_Values>;
  /** fetch data from the table: "atom_value" */
  atom_values: Array<Atom_Values>;
  /** fetch aggregated fields from the table: "atom_value" */
  atom_values_aggregate: Atom_Values_Aggregate;
  /** An array relationship */
  atoms: Array<Atoms>;
  /** An aggregate relationship */
  atoms_aggregate: Atoms_Aggregate;
  /** fetch data from the table: "book" using primary key columns */
  book?: Maybe<Books>;
  /** fetch data from the table: "book" */
  books: Array<Books>;
  /** fetch aggregated fields from the table: "book" */
  books_aggregate: Books_Aggregate;
  /** fetch data from the table: "byte_object" */
  byte_object: Array<Byte_Object>;
  /** fetch aggregated fields from the table: "byte_object" */
  byte_object_aggregate: Byte_Object_Aggregate;
  /** fetch data from the table: "byte_object" using primary key columns */
  byte_object_by_pk?: Maybe<Byte_Object>;
  /** fetch data from the table: "cached_images.cached_image" */
  cached_images_cached_image: Array<Cached_Images_Cached_Image>;
  /** fetch data from the table: "cached_images.cached_image" using primary key columns */
  cached_images_cached_image_by_pk?: Maybe<Cached_Images_Cached_Image>;
  /** fetch data from the table: "caip10" using primary key columns */
  caip10?: Maybe<Caip10>;
  /** fetch aggregated fields from the table: "caip10" */
  caip10_aggregate: Caip10_Aggregate;
  /** fetch data from the table: "caip10" */
  caip10s: Array<Caip10>;
  /** fetch data from the table: "chainlink_price" using primary key columns */
  chainlink_price?: Maybe<Chainlink_Prices>;
  /** fetch data from the table: "chainlink_price" */
  chainlink_prices: Array<Chainlink_Prices>;
  /** fetch data from the table: "deposit" using primary key columns */
  deposit?: Maybe<Deposits>;
  /** An array relationship */
  deposits: Array<Deposits>;
  /** An aggregate relationship */
  deposits_aggregate: Deposits_Aggregate;
  /** fetch data from the table: "event" using primary key columns */
  event?: Maybe<Events>;
  /** fetch data from the table: "event" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "event" */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table: "fee_transfer" using primary key columns */
  fee_transfer?: Maybe<Fee_Transfers>;
  /** An array relationship */
  fee_transfers: Array<Fee_Transfers>;
  /** An aggregate relationship */
  fee_transfers_aggregate: Fee_Transfers_Aggregate;
  /** execute function "following" which returns "account" */
  following: Array<Accounts>;
  /** execute function "following" and query aggregates on result of table type "account" */
  following_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "json_object" using primary key columns */
  json_object?: Maybe<Json_Objects>;
  /** fetch data from the table: "json_object" */
  json_objects: Array<Json_Objects>;
  /** fetch aggregated fields from the table: "json_object" */
  json_objects_aggregate: Json_Objects_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization?: Maybe<Organizations>;
  /** fetch data from the table: "organization" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organization" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "person" using primary key columns */
  person?: Maybe<Persons>;
  /** fetch data from the table: "person" */
  persons: Array<Persons>;
  /** fetch aggregated fields from the table: "person" */
  persons_aggregate: Persons_Aggregate;
  /** fetch data from the table: "position" using primary key columns */
  position?: Maybe<Positions>;
  /** An array relationship */
  positions: Array<Positions>;
  /** An aggregate relationship */
  positions_aggregate: Positions_Aggregate;
  /** execute function "positions_from_following" which returns "position" */
  positions_from_following: Array<Positions>;
  /** execute function "positions_from_following" and query aggregates on result of table type "position" */
  positions_from_following_aggregate: Positions_Aggregate;
  /** fetch data from the table: "predicate_object" */
  predicate_objects: Array<Predicate_Objects>;
  /** fetch aggregated fields from the table: "predicate_object" */
  predicate_objects_aggregate: Predicate_Objects_Aggregate;
  /** fetch data from the table: "predicate_object" using primary key columns */
  predicate_objects_by_pk?: Maybe<Predicate_Objects>;
  /** fetch data from the table: "redemption" using primary key columns */
  redemption?: Maybe<Redemptions>;
  /** An array relationship */
  redemptions: Array<Redemptions>;
  /** An aggregate relationship */
  redemptions_aggregate: Redemptions_Aggregate;
  /** execute function "search_positions_on_subject" which returns "position" */
  search_positions_on_subject: Array<Positions>;
  /** execute function "search_positions_on_subject" and query aggregates on result of table type "position" */
  search_positions_on_subject_aggregate: Positions_Aggregate;
  /** execute function "search_term" which returns "term" */
  search_term: Array<Terms>;
  /** execute function "search_term" and query aggregates on result of table type "term" */
  search_term_aggregate: Terms_Aggregate;
  /** execute function "search_term_from_following" which returns "term" */
  search_term_from_following: Array<Terms>;
  /** execute function "search_term_from_following" and query aggregates on result of table type "term" */
  search_term_from_following_aggregate: Terms_Aggregate;
  /** An array relationship */
  share_price_change_stats_daily: Array<Share_Price_Change_Stats_Daily>;
  /** An array relationship */
  share_price_change_stats_hourly: Array<Share_Price_Change_Stats_Hourly>;
  /** An array relationship */
  share_price_change_stats_monthly: Array<Share_Price_Change_Stats_Monthly>;
  /** An array relationship */
  share_price_change_stats_weekly: Array<Share_Price_Change_Stats_Weekly>;
  /** An array relationship */
  share_price_changes: Array<Share_Price_Changes>;
  /** An aggregate relationship */
  share_price_changes_aggregate: Share_Price_Changes_Aggregate;
  /** fetch data from the table: "signal_stats_daily" */
  signal_stats_daily: Array<Signal_Stats_Daily>;
  /** fetch data from the table: "signal_stats_hourly" */
  signal_stats_hourly: Array<Signal_Stats_Hourly>;
  /** fetch data from the table: "signal_stats_monthly" */
  signal_stats_monthly: Array<Signal_Stats_Monthly>;
  /** fetch data from the table: "signal_stats_weekly" */
  signal_stats_weekly: Array<Signal_Stats_Weekly>;
  /** An array relationship */
  signals: Array<Signals>;
  /** An aggregate relationship */
  signals_aggregate: Signals_Aggregate;
  /** execute function "signals_from_following" which returns "signal" */
  signals_from_following: Array<Signals>;
  /** execute function "signals_from_following" and query aggregates on result of table type "signal" */
  signals_from_following_aggregate: Signals_Aggregate;
  /** fetch data from the table: "stats" using primary key columns */
  stat?: Maybe<Stats>;
  /** fetch data from the table: "stats_hour" using primary key columns */
  statHour?: Maybe<StatHours>;
  /** fetch data from the table: "stats_hour" */
  statHours: Array<StatHours>;
  /** fetch data from the table: "stats" */
  stats: Array<Stats>;
  /** fetch aggregated fields from the table: "stats" */
  stats_aggregate: Stats_Aggregate;
  /** fetch data from the table: "term" using primary key columns */
  term?: Maybe<Terms>;
  /** fetch data from the table: "term_total_state_change_stats_daily" */
  term_total_state_change_stats_daily: Array<Term_Total_State_Change_Stats_Daily>;
  /** fetch data from the table: "term_total_state_change_stats_hourly" */
  term_total_state_change_stats_hourly: Array<Term_Total_State_Change_Stats_Hourly>;
  /** fetch data from the table: "term_total_state_change_stats_monthly" */
  term_total_state_change_stats_monthly: Array<Term_Total_State_Change_Stats_Monthly>;
  /** fetch data from the table: "term_total_state_change_stats_weekly" */
  term_total_state_change_stats_weekly: Array<Term_Total_State_Change_Stats_Weekly>;
  /** An array relationship */
  term_total_state_changes: Array<Term_Total_State_Changes>;
  /** fetch data from the table: "term" */
  terms: Array<Terms>;
  /** fetch aggregated fields from the table: "term" */
  terms_aggregate: Terms_Aggregate;
  /** fetch data from the table: "text_object" using primary key columns */
  text_object?: Maybe<Text_Objects>;
  /** fetch data from the table: "text_object" */
  text_objects: Array<Text_Objects>;
  /** fetch aggregated fields from the table: "text_object" */
  text_objects_aggregate: Text_Objects_Aggregate;
  /** fetch data from the table: "thing" using primary key columns */
  thing?: Maybe<Things>;
  /** fetch data from the table: "thing" */
  things: Array<Things>;
  /** fetch aggregated fields from the table: "thing" */
  things_aggregate: Things_Aggregate;
  /** fetch data from the table: "triple" using primary key columns */
  triple?: Maybe<Triples>;
  /** fetch data from the table: "triple_term" using primary key columns */
  triple_term?: Maybe<Triple_Term>;
  /** fetch data from the table: "triple_term" */
  triple_terms: Array<Triple_Term>;
  /** fetch data from the table: "triple_vault" using primary key columns */
  triple_vault?: Maybe<Triple_Vault>;
  /** fetch data from the table: "triple_vault" */
  triple_vaults: Array<Triple_Vault>;
  /** An array relationship */
  triples: Array<Triples>;
  /** An aggregate relationship */
  triples_aggregate: Triples_Aggregate;
  /** fetch data from the table: "vault" using primary key columns */
  vault?: Maybe<Vaults>;
  /** An array relationship */
  vaults: Array<Vaults>;
  /** An aggregate relationship */
  vaults_aggregate: Vaults_Aggregate;
};

export type Query_RootAccountArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Query_RootAtomArgs = {
  term_id: Scalars['String']['input'];
};

export type Query_RootAtom_ValueArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootAtom_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Atom_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Atom_Values_Order_By>>;
  where?: InputMaybe<Atom_Values_Bool_Exp>;
};

export type Query_RootAtom_Values_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Atom_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Atom_Values_Order_By>>;
  where?: InputMaybe<Atom_Values_Bool_Exp>;
};

export type Query_RootAtomsArgs = {
  distinct_on?: InputMaybe<Array<Atoms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Atoms_Order_By>>;
  where?: InputMaybe<Atoms_Bool_Exp>;
};

export type Query_RootAtoms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Atoms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Atoms_Order_By>>;
  where?: InputMaybe<Atoms_Bool_Exp>;
};

export type Query_RootBookArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootBooksArgs = {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
};

export type Query_RootBooks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
};

export type Query_RootByte_ObjectArgs = {
  distinct_on?: InputMaybe<Array<Byte_Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Byte_Object_Order_By>>;
  where?: InputMaybe<Byte_Object_Bool_Exp>;
};

export type Query_RootByte_Object_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Byte_Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Byte_Object_Order_By>>;
  where?: InputMaybe<Byte_Object_Bool_Exp>;
};

export type Query_RootByte_Object_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootCached_Images_Cached_ImageArgs = {
  distinct_on?: InputMaybe<Array<Cached_Images_Cached_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cached_Images_Cached_Image_Order_By>>;
  where?: InputMaybe<Cached_Images_Cached_Image_Bool_Exp>;
};

export type Query_RootCached_Images_Cached_Image_By_PkArgs = {
  url: Scalars['String']['input'];
};

export type Query_RootCaip10Args = {
  id: Scalars['String']['input'];
};

export type Query_RootCaip10_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Caip10_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Caip10_Order_By>>;
  where?: InputMaybe<Caip10_Bool_Exp>;
};

export type Query_RootCaip10sArgs = {
  distinct_on?: InputMaybe<Array<Caip10_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Caip10_Order_By>>;
  where?: InputMaybe<Caip10_Bool_Exp>;
};

export type Query_RootChainlink_PriceArgs = {
  id: Scalars['numeric']['input'];
};

export type Query_RootChainlink_PricesArgs = {
  distinct_on?: InputMaybe<Array<Chainlink_Prices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chainlink_Prices_Order_By>>;
  where?: InputMaybe<Chainlink_Prices_Bool_Exp>;
};

export type Query_RootDepositArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootDepositsArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposits_Order_By>>;
  where?: InputMaybe<Deposits_Bool_Exp>;
};

export type Query_RootDeposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposits_Order_By>>;
  where?: InputMaybe<Deposits_Bool_Exp>;
};

export type Query_RootEventArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};

export type Query_RootEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};

export type Query_RootFee_TransferArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootFee_TransfersArgs = {
  distinct_on?: InputMaybe<Array<Fee_Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fee_Transfers_Order_By>>;
  where?: InputMaybe<Fee_Transfers_Bool_Exp>;
};

export type Query_RootFee_Transfers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fee_Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fee_Transfers_Order_By>>;
  where?: InputMaybe<Fee_Transfers_Bool_Exp>;
};

export type Query_RootFollowingArgs = {
  args: Following_Args;
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Query_RootFollowing_AggregateArgs = {
  args: Following_Args;
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Query_RootJson_ObjectArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootJson_ObjectsArgs = {
  distinct_on?: InputMaybe<Array<Json_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Json_Objects_Order_By>>;
  where?: InputMaybe<Json_Objects_Bool_Exp>;
};

export type Query_RootJson_Objects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Json_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Json_Objects_Order_By>>;
  where?: InputMaybe<Json_Objects_Bool_Exp>;
};

export type Query_RootOrganizationArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};

export type Query_RootOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};

export type Query_RootPersonArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootPersonsArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};

export type Query_RootPersons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};

export type Query_RootPositionArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootPositionsArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

export type Query_RootPositions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

export type Query_RootPositions_From_FollowingArgs = {
  args: Positions_From_Following_Args;
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

export type Query_RootPositions_From_Following_AggregateArgs = {
  args: Positions_From_Following_Args;
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

export type Query_RootPredicate_ObjectsArgs = {
  distinct_on?: InputMaybe<Array<Predicate_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Predicate_Objects_Order_By>>;
  where?: InputMaybe<Predicate_Objects_Bool_Exp>;
};

export type Query_RootPredicate_Objects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Predicate_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Predicate_Objects_Order_By>>;
  where?: InputMaybe<Predicate_Objects_Bool_Exp>;
};

export type Query_RootPredicate_Objects_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootRedemptionArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootRedemptionsArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Redemptions_Order_By>>;
  where?: InputMaybe<Redemptions_Bool_Exp>;
};

export type Query_RootRedemptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Redemptions_Order_By>>;
  where?: InputMaybe<Redemptions_Bool_Exp>;
};

export type Query_RootSearch_Positions_On_SubjectArgs = {
  args: Search_Positions_On_Subject_Args;
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

export type Query_RootSearch_Positions_On_Subject_AggregateArgs = {
  args: Search_Positions_On_Subject_Args;
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

export type Query_RootSearch_TermArgs = {
  args: Search_Term_Args;
  distinct_on?: InputMaybe<Array<Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Terms_Order_By>>;
  where?: InputMaybe<Terms_Bool_Exp>;
};

export type Query_RootSearch_Term_AggregateArgs = {
  args: Search_Term_Args;
  distinct_on?: InputMaybe<Array<Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Terms_Order_By>>;
  where?: InputMaybe<Terms_Bool_Exp>;
};

export type Query_RootSearch_Term_From_FollowingArgs = {
  args: Search_Term_From_Following_Args;
  distinct_on?: InputMaybe<Array<Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Terms_Order_By>>;
  where?: InputMaybe<Terms_Bool_Exp>;
};

export type Query_RootSearch_Term_From_Following_AggregateArgs = {
  args: Search_Term_From_Following_Args;
  distinct_on?: InputMaybe<Array<Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Terms_Order_By>>;
  where?: InputMaybe<Terms_Bool_Exp>;
};

export type Query_RootShare_Price_Change_Stats_DailyArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Change_Stats_Daily_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Change_Stats_Daily_Order_By>>;
  where?: InputMaybe<Share_Price_Change_Stats_Daily_Bool_Exp>;
};

export type Query_RootShare_Price_Change_Stats_HourlyArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Change_Stats_Hourly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Change_Stats_Hourly_Order_By>>;
  where?: InputMaybe<Share_Price_Change_Stats_Hourly_Bool_Exp>;
};

export type Query_RootShare_Price_Change_Stats_MonthlyArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Change_Stats_Monthly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Change_Stats_Monthly_Order_By>>;
  where?: InputMaybe<Share_Price_Change_Stats_Monthly_Bool_Exp>;
};

export type Query_RootShare_Price_Change_Stats_WeeklyArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Change_Stats_Weekly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Change_Stats_Weekly_Order_By>>;
  where?: InputMaybe<Share_Price_Change_Stats_Weekly_Bool_Exp>;
};

export type Query_RootShare_Price_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Changes_Order_By>>;
  where?: InputMaybe<Share_Price_Changes_Bool_Exp>;
};

export type Query_RootShare_Price_Changes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Changes_Order_By>>;
  where?: InputMaybe<Share_Price_Changes_Bool_Exp>;
};

export type Query_RootSignal_Stats_DailyArgs = {
  distinct_on?: InputMaybe<Array<Signal_Stats_Daily_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signal_Stats_Daily_Order_By>>;
  where?: InputMaybe<Signal_Stats_Daily_Bool_Exp>;
};

export type Query_RootSignal_Stats_HourlyArgs = {
  distinct_on?: InputMaybe<Array<Signal_Stats_Hourly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signal_Stats_Hourly_Order_By>>;
  where?: InputMaybe<Signal_Stats_Hourly_Bool_Exp>;
};

export type Query_RootSignal_Stats_MonthlyArgs = {
  distinct_on?: InputMaybe<Array<Signal_Stats_Monthly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signal_Stats_Monthly_Order_By>>;
  where?: InputMaybe<Signal_Stats_Monthly_Bool_Exp>;
};

export type Query_RootSignal_Stats_WeeklyArgs = {
  distinct_on?: InputMaybe<Array<Signal_Stats_Weekly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signal_Stats_Weekly_Order_By>>;
  where?: InputMaybe<Signal_Stats_Weekly_Bool_Exp>;
};

export type Query_RootSignalsArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signals_Order_By>>;
  where?: InputMaybe<Signals_Bool_Exp>;
};

export type Query_RootSignals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signals_Order_By>>;
  where?: InputMaybe<Signals_Bool_Exp>;
};

export type Query_RootSignals_From_FollowingArgs = {
  args: Signals_From_Following_Args;
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signals_Order_By>>;
  where?: InputMaybe<Signals_Bool_Exp>;
};

export type Query_RootSignals_From_Following_AggregateArgs = {
  args: Signals_From_Following_Args;
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signals_Order_By>>;
  where?: InputMaybe<Signals_Bool_Exp>;
};

export type Query_RootStatArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootStatHourArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootStatHoursArgs = {
  distinct_on?: InputMaybe<Array<StatHours_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<StatHours_Order_By>>;
  where?: InputMaybe<StatHours_Bool_Exp>;
};

export type Query_RootStatsArgs = {
  distinct_on?: InputMaybe<Array<Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stats_Order_By>>;
  where?: InputMaybe<Stats_Bool_Exp>;
};

export type Query_RootStats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stats_Order_By>>;
  where?: InputMaybe<Stats_Bool_Exp>;
};

export type Query_RootTermArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootTerm_Total_State_Change_Stats_DailyArgs = {
  distinct_on?: InputMaybe<Array<Term_Total_State_Change_Stats_Daily_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Term_Total_State_Change_Stats_Daily_Order_By>>;
  where?: InputMaybe<Term_Total_State_Change_Stats_Daily_Bool_Exp>;
};

export type Query_RootTerm_Total_State_Change_Stats_HourlyArgs = {
  distinct_on?: InputMaybe<Array<Term_Total_State_Change_Stats_Hourly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Term_Total_State_Change_Stats_Hourly_Order_By>>;
  where?: InputMaybe<Term_Total_State_Change_Stats_Hourly_Bool_Exp>;
};

export type Query_RootTerm_Total_State_Change_Stats_MonthlyArgs = {
  distinct_on?: InputMaybe<Array<Term_Total_State_Change_Stats_Monthly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Term_Total_State_Change_Stats_Monthly_Order_By>>;
  where?: InputMaybe<Term_Total_State_Change_Stats_Monthly_Bool_Exp>;
};

export type Query_RootTerm_Total_State_Change_Stats_WeeklyArgs = {
  distinct_on?: InputMaybe<Array<Term_Total_State_Change_Stats_Weekly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Term_Total_State_Change_Stats_Weekly_Order_By>>;
  where?: InputMaybe<Term_Total_State_Change_Stats_Weekly_Bool_Exp>;
};

export type Query_RootTerm_Total_State_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Term_Total_State_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Term_Total_State_Changes_Order_By>>;
  where?: InputMaybe<Term_Total_State_Changes_Bool_Exp>;
};

export type Query_RootTermsArgs = {
  distinct_on?: InputMaybe<Array<Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Terms_Order_By>>;
  where?: InputMaybe<Terms_Bool_Exp>;
};

export type Query_RootTerms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Terms_Order_By>>;
  where?: InputMaybe<Terms_Bool_Exp>;
};

export type Query_RootText_ObjectArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootText_ObjectsArgs = {
  distinct_on?: InputMaybe<Array<Text_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Text_Objects_Order_By>>;
  where?: InputMaybe<Text_Objects_Bool_Exp>;
};

export type Query_RootText_Objects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Text_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Text_Objects_Order_By>>;
  where?: InputMaybe<Text_Objects_Bool_Exp>;
};

export type Query_RootThingArgs = {
  id: Scalars['String']['input'];
};

export type Query_RootThingsArgs = {
  distinct_on?: InputMaybe<Array<Things_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Things_Order_By>>;
  where?: InputMaybe<Things_Bool_Exp>;
};

export type Query_RootThings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Things_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Things_Order_By>>;
  where?: InputMaybe<Things_Bool_Exp>;
};

export type Query_RootTripleArgs = {
  term_id: Scalars['String']['input'];
};

export type Query_RootTriple_TermArgs = {
  term_id: Scalars['String']['input'];
};

export type Query_RootTriple_TermsArgs = {
  distinct_on?: InputMaybe<Array<Triple_Term_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Triple_Term_Order_By>>;
  where?: InputMaybe<Triple_Term_Bool_Exp>;
};

export type Query_RootTriple_VaultArgs = {
  curve_id: Scalars['numeric']['input'];
  term_id: Scalars['String']['input'];
};

export type Query_RootTriple_VaultsArgs = {
  distinct_on?: InputMaybe<Array<Triple_Vault_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Triple_Vault_Order_By>>;
  where?: InputMaybe<Triple_Vault_Bool_Exp>;
};

export type Query_RootTriplesArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Triples_Order_By>>;
  where?: InputMaybe<Triples_Bool_Exp>;
};

export type Query_RootTriples_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Triples_Order_By>>;
  where?: InputMaybe<Triples_Bool_Exp>;
};

export type Query_RootVaultArgs = {
  curve_id: Scalars['numeric']['input'];
  term_id: Scalars['String']['input'];
};

export type Query_RootVaultsArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vaults_Order_By>>;
  where?: InputMaybe<Vaults_Bool_Exp>;
};

export type Query_RootVaults_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vaults_Order_By>>;
  where?: InputMaybe<Vaults_Bool_Exp>;
};

/** columns and relationships of "redemption" */
export type Redemptions = {
  __typename?: 'redemptions';
  assets: Scalars['numeric']['output'];
  block_number: Scalars['numeric']['output'];
  created_at: Scalars['timestamptz']['output'];
  curve_id: Scalars['numeric']['output'];
  fees: Scalars['numeric']['output'];
  id: Scalars['String']['output'];
  log_index: Scalars['bigint']['output'];
  /** An object relationship */
  receiver: Accounts;
  receiver_id: Scalars['String']['output'];
  /** An object relationship */
  sender?: Maybe<Accounts>;
  sender_id: Scalars['String']['output'];
  shares: Scalars['numeric']['output'];
  /** An object relationship */
  term: Terms;
  term_id: Scalars['String']['output'];
  total_shares: Scalars['numeric']['output'];
  transaction_hash: Scalars['String']['output'];
  /** An object relationship */
  vault?: Maybe<Vaults>;
  vault_type: Scalars['vault_type']['output'];
};

/** aggregated selection of "redemption" */
export type Redemptions_Aggregate = {
  __typename?: 'redemptions_aggregate';
  aggregate?: Maybe<Redemptions_Aggregate_Fields>;
  nodes: Array<Redemptions>;
};

export type Redemptions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Redemptions_Aggregate_Bool_Exp_Count>;
};

export type Redemptions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Redemptions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Redemptions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "redemption" */
export type Redemptions_Aggregate_Fields = {
  __typename?: 'redemptions_aggregate_fields';
  avg?: Maybe<Redemptions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Redemptions_Max_Fields>;
  min?: Maybe<Redemptions_Min_Fields>;
  stddev?: Maybe<Redemptions_Stddev_Fields>;
  stddev_pop?: Maybe<Redemptions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Redemptions_Stddev_Samp_Fields>;
  sum?: Maybe<Redemptions_Sum_Fields>;
  var_pop?: Maybe<Redemptions_Var_Pop_Fields>;
  var_samp?: Maybe<Redemptions_Var_Samp_Fields>;
  variance?: Maybe<Redemptions_Variance_Fields>;
};

/** aggregate fields of "redemption" */
export type Redemptions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Redemptions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "redemption" */
export type Redemptions_Aggregate_Order_By = {
  avg?: InputMaybe<Redemptions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Redemptions_Max_Order_By>;
  min?: InputMaybe<Redemptions_Min_Order_By>;
  stddev?: InputMaybe<Redemptions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Redemptions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Redemptions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Redemptions_Sum_Order_By>;
  var_pop?: InputMaybe<Redemptions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Redemptions_Var_Samp_Order_By>;
  variance?: InputMaybe<Redemptions_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Redemptions_Avg_Fields = {
  __typename?: 'redemptions_avg_fields';
  assets?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  fees?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "redemption" */
export type Redemptions_Avg_Order_By = {
  assets?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "redemption". All fields are combined with a logical 'AND'. */
export type Redemptions_Bool_Exp = {
  _and?: InputMaybe<Array<Redemptions_Bool_Exp>>;
  _not?: InputMaybe<Redemptions_Bool_Exp>;
  _or?: InputMaybe<Array<Redemptions_Bool_Exp>>;
  assets?: InputMaybe<Numeric_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  curve_id?: InputMaybe<Numeric_Comparison_Exp>;
  fees?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Bigint_Comparison_Exp>;
  receiver?: InputMaybe<Accounts_Bool_Exp>;
  receiver_id?: InputMaybe<String_Comparison_Exp>;
  sender?: InputMaybe<Accounts_Bool_Exp>;
  sender_id?: InputMaybe<String_Comparison_Exp>;
  shares?: InputMaybe<Numeric_Comparison_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
  total_shares?: InputMaybe<Numeric_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  vault?: InputMaybe<Vaults_Bool_Exp>;
  vault_type?: InputMaybe<Vault_Type_Comparison_Exp>;
};

/** aggregate max on columns */
export type Redemptions_Max_Fields = {
  __typename?: 'redemptions_max_fields';
  assets?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  fees?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
  receiver_id?: Maybe<Scalars['String']['output']>;
  sender_id?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Scalars['numeric']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
  vault_type?: Maybe<Scalars['vault_type']['output']>;
};

/** order by max() on columns of table "redemption" */
export type Redemptions_Max_Order_By = {
  assets?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  receiver_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  vault_type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Redemptions_Min_Fields = {
  __typename?: 'redemptions_min_fields';
  assets?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  fees?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
  receiver_id?: Maybe<Scalars['String']['output']>;
  sender_id?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Scalars['numeric']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
  vault_type?: Maybe<Scalars['vault_type']['output']>;
};

/** order by min() on columns of table "redemption" */
export type Redemptions_Min_Order_By = {
  assets?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  receiver_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  vault_type?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "redemption". */
export type Redemptions_Order_By = {
  assets?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  receiver?: InputMaybe<Accounts_Order_By>;
  receiver_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Accounts_Order_By>;
  sender_id?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  vault?: InputMaybe<Vaults_Order_By>;
  vault_type?: InputMaybe<Order_By>;
};

/** select columns of table "redemption" */
export enum Redemptions_Select_Column {
  /** column name */
  Assets = 'assets',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurveId = 'curve_id',
  /** column name */
  Fees = 'fees',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  ReceiverId = 'receiver_id',
  /** column name */
  SenderId = 'sender_id',
  /** column name */
  Shares = 'shares',
  /** column name */
  TermId = 'term_id',
  /** column name */
  TotalShares = 'total_shares',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  VaultType = 'vault_type',
}

/** aggregate stddev on columns */
export type Redemptions_Stddev_Fields = {
  __typename?: 'redemptions_stddev_fields';
  assets?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  fees?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "redemption" */
export type Redemptions_Stddev_Order_By = {
  assets?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Redemptions_Stddev_Pop_Fields = {
  __typename?: 'redemptions_stddev_pop_fields';
  assets?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  fees?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "redemption" */
export type Redemptions_Stddev_Pop_Order_By = {
  assets?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Redemptions_Stddev_Samp_Fields = {
  __typename?: 'redemptions_stddev_samp_fields';
  assets?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  fees?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "redemption" */
export type Redemptions_Stddev_Samp_Order_By = {
  assets?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "redemptions" */
export type Redemptions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Redemptions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Redemptions_Stream_Cursor_Value_Input = {
  assets?: InputMaybe<Scalars['numeric']['input']>;
  block_number?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  curve_id?: InputMaybe<Scalars['numeric']['input']>;
  fees?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  log_index?: InputMaybe<Scalars['bigint']['input']>;
  receiver_id?: InputMaybe<Scalars['String']['input']>;
  sender_id?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Scalars['numeric']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
  total_shares?: InputMaybe<Scalars['numeric']['input']>;
  transaction_hash?: InputMaybe<Scalars['String']['input']>;
  vault_type?: InputMaybe<Scalars['vault_type']['input']>;
};

/** aggregate sum on columns */
export type Redemptions_Sum_Fields = {
  __typename?: 'redemptions_sum_fields';
  assets?: Maybe<Scalars['numeric']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  fees?: Maybe<Scalars['numeric']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
  shares?: Maybe<Scalars['numeric']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "redemption" */
export type Redemptions_Sum_Order_By = {
  assets?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Redemptions_Var_Pop_Fields = {
  __typename?: 'redemptions_var_pop_fields';
  assets?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  fees?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "redemption" */
export type Redemptions_Var_Pop_Order_By = {
  assets?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Redemptions_Var_Samp_Fields = {
  __typename?: 'redemptions_var_samp_fields';
  assets?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  fees?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "redemption" */
export type Redemptions_Var_Samp_Order_By = {
  assets?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Redemptions_Variance_Fields = {
  __typename?: 'redemptions_variance_fields';
  assets?: Maybe<Scalars['Float']['output']>;
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  fees?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  shares?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "redemption" */
export type Redemptions_Variance_Order_By = {
  assets?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  shares?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

export type Search_Positions_On_Subject_Args = {
  addresses?: InputMaybe<Scalars['_text']['input']>;
  search_fields?: InputMaybe<Scalars['jsonb']['input']>;
};

export type Search_Term_Args = {
  query?: InputMaybe<Scalars['String']['input']>;
};

export type Search_Term_From_Following_Args = {
  address?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "share_price_change_stats_daily" */
export type Share_Price_Change_Stats_Daily = {
  __typename?: 'share_price_change_stats_daily';
  bucket?: Maybe<Scalars['timestamptz']['output']>;
  change_count?: Maybe<Scalars['numeric']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  difference?: Maybe<Scalars['numeric']['output']>;
  first_share_price?: Maybe<Scalars['numeric']['output']>;
  last_share_price?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  term?: Maybe<Terms>;
  term_id?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "share_price_change_stats_daily" */
export type Share_Price_Change_Stats_Daily_Aggregate_Order_By = {
  avg?: InputMaybe<Share_Price_Change_Stats_Daily_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Share_Price_Change_Stats_Daily_Max_Order_By>;
  min?: InputMaybe<Share_Price_Change_Stats_Daily_Min_Order_By>;
  stddev?: InputMaybe<Share_Price_Change_Stats_Daily_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Share_Price_Change_Stats_Daily_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Share_Price_Change_Stats_Daily_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Share_Price_Change_Stats_Daily_Sum_Order_By>;
  var_pop?: InputMaybe<Share_Price_Change_Stats_Daily_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Share_Price_Change_Stats_Daily_Var_Samp_Order_By>;
  variance?: InputMaybe<Share_Price_Change_Stats_Daily_Variance_Order_By>;
};

/** order by avg() on columns of table "share_price_change_stats_daily" */
export type Share_Price_Change_Stats_Daily_Avg_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "share_price_change_stats_daily". All fields are combined with a logical 'AND'. */
export type Share_Price_Change_Stats_Daily_Bool_Exp = {
  _and?: InputMaybe<Array<Share_Price_Change_Stats_Daily_Bool_Exp>>;
  _not?: InputMaybe<Share_Price_Change_Stats_Daily_Bool_Exp>;
  _or?: InputMaybe<Array<Share_Price_Change_Stats_Daily_Bool_Exp>>;
  bucket?: InputMaybe<Timestamptz_Comparison_Exp>;
  change_count?: InputMaybe<Numeric_Comparison_Exp>;
  curve_id?: InputMaybe<Numeric_Comparison_Exp>;
  difference?: InputMaybe<Numeric_Comparison_Exp>;
  first_share_price?: InputMaybe<Numeric_Comparison_Exp>;
  last_share_price?: InputMaybe<Numeric_Comparison_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "share_price_change_stats_daily" */
export type Share_Price_Change_Stats_Daily_Max_Order_By = {
  bucket?: InputMaybe<Order_By>;
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "share_price_change_stats_daily" */
export type Share_Price_Change_Stats_Daily_Min_Order_By = {
  bucket?: InputMaybe<Order_By>;
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "share_price_change_stats_daily". */
export type Share_Price_Change_Stats_Daily_Order_By = {
  bucket?: InputMaybe<Order_By>;
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** select columns of table "share_price_change_stats_daily" */
export enum Share_Price_Change_Stats_Daily_Select_Column {
  /** column name */
  Bucket = 'bucket',
  /** column name */
  ChangeCount = 'change_count',
  /** column name */
  CurveId = 'curve_id',
  /** column name */
  Difference = 'difference',
  /** column name */
  FirstSharePrice = 'first_share_price',
  /** column name */
  LastSharePrice = 'last_share_price',
  /** column name */
  TermId = 'term_id',
}

/** order by stddev() on columns of table "share_price_change_stats_daily" */
export type Share_Price_Change_Stats_Daily_Stddev_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "share_price_change_stats_daily" */
export type Share_Price_Change_Stats_Daily_Stddev_Pop_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "share_price_change_stats_daily" */
export type Share_Price_Change_Stats_Daily_Stddev_Samp_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "share_price_change_stats_daily" */
export type Share_Price_Change_Stats_Daily_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Share_Price_Change_Stats_Daily_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Share_Price_Change_Stats_Daily_Stream_Cursor_Value_Input = {
  bucket?: InputMaybe<Scalars['timestamptz']['input']>;
  change_count?: InputMaybe<Scalars['numeric']['input']>;
  curve_id?: InputMaybe<Scalars['numeric']['input']>;
  difference?: InputMaybe<Scalars['numeric']['input']>;
  first_share_price?: InputMaybe<Scalars['numeric']['input']>;
  last_share_price?: InputMaybe<Scalars['numeric']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "share_price_change_stats_daily" */
export type Share_Price_Change_Stats_Daily_Sum_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "share_price_change_stats_daily" */
export type Share_Price_Change_Stats_Daily_Var_Pop_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "share_price_change_stats_daily" */
export type Share_Price_Change_Stats_Daily_Var_Samp_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "share_price_change_stats_daily" */
export type Share_Price_Change_Stats_Daily_Variance_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** columns and relationships of "share_price_change_stats_hourly" */
export type Share_Price_Change_Stats_Hourly = {
  __typename?: 'share_price_change_stats_hourly';
  bucket?: Maybe<Scalars['timestamptz']['output']>;
  change_count?: Maybe<Scalars['bigint']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  difference?: Maybe<Scalars['numeric']['output']>;
  first_share_price?: Maybe<Scalars['numeric']['output']>;
  last_share_price?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  term?: Maybe<Terms>;
  term_id?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "share_price_change_stats_hourly" */
export type Share_Price_Change_Stats_Hourly_Aggregate_Order_By = {
  avg?: InputMaybe<Share_Price_Change_Stats_Hourly_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Share_Price_Change_Stats_Hourly_Max_Order_By>;
  min?: InputMaybe<Share_Price_Change_Stats_Hourly_Min_Order_By>;
  stddev?: InputMaybe<Share_Price_Change_Stats_Hourly_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Share_Price_Change_Stats_Hourly_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Share_Price_Change_Stats_Hourly_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Share_Price_Change_Stats_Hourly_Sum_Order_By>;
  var_pop?: InputMaybe<Share_Price_Change_Stats_Hourly_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Share_Price_Change_Stats_Hourly_Var_Samp_Order_By>;
  variance?: InputMaybe<Share_Price_Change_Stats_Hourly_Variance_Order_By>;
};

/** order by avg() on columns of table "share_price_change_stats_hourly" */
export type Share_Price_Change_Stats_Hourly_Avg_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "share_price_change_stats_hourly". All fields are combined with a logical 'AND'. */
export type Share_Price_Change_Stats_Hourly_Bool_Exp = {
  _and?: InputMaybe<Array<Share_Price_Change_Stats_Hourly_Bool_Exp>>;
  _not?: InputMaybe<Share_Price_Change_Stats_Hourly_Bool_Exp>;
  _or?: InputMaybe<Array<Share_Price_Change_Stats_Hourly_Bool_Exp>>;
  bucket?: InputMaybe<Timestamptz_Comparison_Exp>;
  change_count?: InputMaybe<Bigint_Comparison_Exp>;
  curve_id?: InputMaybe<Numeric_Comparison_Exp>;
  difference?: InputMaybe<Numeric_Comparison_Exp>;
  first_share_price?: InputMaybe<Numeric_Comparison_Exp>;
  last_share_price?: InputMaybe<Numeric_Comparison_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "share_price_change_stats_hourly" */
export type Share_Price_Change_Stats_Hourly_Max_Order_By = {
  bucket?: InputMaybe<Order_By>;
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "share_price_change_stats_hourly" */
export type Share_Price_Change_Stats_Hourly_Min_Order_By = {
  bucket?: InputMaybe<Order_By>;
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "share_price_change_stats_hourly". */
export type Share_Price_Change_Stats_Hourly_Order_By = {
  bucket?: InputMaybe<Order_By>;
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** select columns of table "share_price_change_stats_hourly" */
export enum Share_Price_Change_Stats_Hourly_Select_Column {
  /** column name */
  Bucket = 'bucket',
  /** column name */
  ChangeCount = 'change_count',
  /** column name */
  CurveId = 'curve_id',
  /** column name */
  Difference = 'difference',
  /** column name */
  FirstSharePrice = 'first_share_price',
  /** column name */
  LastSharePrice = 'last_share_price',
  /** column name */
  TermId = 'term_id',
}

/** order by stddev() on columns of table "share_price_change_stats_hourly" */
export type Share_Price_Change_Stats_Hourly_Stddev_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "share_price_change_stats_hourly" */
export type Share_Price_Change_Stats_Hourly_Stddev_Pop_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "share_price_change_stats_hourly" */
export type Share_Price_Change_Stats_Hourly_Stddev_Samp_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "share_price_change_stats_hourly" */
export type Share_Price_Change_Stats_Hourly_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Share_Price_Change_Stats_Hourly_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Share_Price_Change_Stats_Hourly_Stream_Cursor_Value_Input = {
  bucket?: InputMaybe<Scalars['timestamptz']['input']>;
  change_count?: InputMaybe<Scalars['bigint']['input']>;
  curve_id?: InputMaybe<Scalars['numeric']['input']>;
  difference?: InputMaybe<Scalars['numeric']['input']>;
  first_share_price?: InputMaybe<Scalars['numeric']['input']>;
  last_share_price?: InputMaybe<Scalars['numeric']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "share_price_change_stats_hourly" */
export type Share_Price_Change_Stats_Hourly_Sum_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "share_price_change_stats_hourly" */
export type Share_Price_Change_Stats_Hourly_Var_Pop_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "share_price_change_stats_hourly" */
export type Share_Price_Change_Stats_Hourly_Var_Samp_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "share_price_change_stats_hourly" */
export type Share_Price_Change_Stats_Hourly_Variance_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** columns and relationships of "share_price_change_stats_monthly" */
export type Share_Price_Change_Stats_Monthly = {
  __typename?: 'share_price_change_stats_monthly';
  bucket?: Maybe<Scalars['timestamptz']['output']>;
  change_count?: Maybe<Scalars['numeric']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  difference?: Maybe<Scalars['numeric']['output']>;
  first_share_price?: Maybe<Scalars['numeric']['output']>;
  last_share_price?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  term?: Maybe<Terms>;
  term_id?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "share_price_change_stats_monthly" */
export type Share_Price_Change_Stats_Monthly_Aggregate_Order_By = {
  avg?: InputMaybe<Share_Price_Change_Stats_Monthly_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Share_Price_Change_Stats_Monthly_Max_Order_By>;
  min?: InputMaybe<Share_Price_Change_Stats_Monthly_Min_Order_By>;
  stddev?: InputMaybe<Share_Price_Change_Stats_Monthly_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Share_Price_Change_Stats_Monthly_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Share_Price_Change_Stats_Monthly_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Share_Price_Change_Stats_Monthly_Sum_Order_By>;
  var_pop?: InputMaybe<Share_Price_Change_Stats_Monthly_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Share_Price_Change_Stats_Monthly_Var_Samp_Order_By>;
  variance?: InputMaybe<Share_Price_Change_Stats_Monthly_Variance_Order_By>;
};

/** order by avg() on columns of table "share_price_change_stats_monthly" */
export type Share_Price_Change_Stats_Monthly_Avg_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "share_price_change_stats_monthly". All fields are combined with a logical 'AND'. */
export type Share_Price_Change_Stats_Monthly_Bool_Exp = {
  _and?: InputMaybe<Array<Share_Price_Change_Stats_Monthly_Bool_Exp>>;
  _not?: InputMaybe<Share_Price_Change_Stats_Monthly_Bool_Exp>;
  _or?: InputMaybe<Array<Share_Price_Change_Stats_Monthly_Bool_Exp>>;
  bucket?: InputMaybe<Timestamptz_Comparison_Exp>;
  change_count?: InputMaybe<Numeric_Comparison_Exp>;
  curve_id?: InputMaybe<Numeric_Comparison_Exp>;
  difference?: InputMaybe<Numeric_Comparison_Exp>;
  first_share_price?: InputMaybe<Numeric_Comparison_Exp>;
  last_share_price?: InputMaybe<Numeric_Comparison_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "share_price_change_stats_monthly" */
export type Share_Price_Change_Stats_Monthly_Max_Order_By = {
  bucket?: InputMaybe<Order_By>;
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "share_price_change_stats_monthly" */
export type Share_Price_Change_Stats_Monthly_Min_Order_By = {
  bucket?: InputMaybe<Order_By>;
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "share_price_change_stats_monthly". */
export type Share_Price_Change_Stats_Monthly_Order_By = {
  bucket?: InputMaybe<Order_By>;
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** select columns of table "share_price_change_stats_monthly" */
export enum Share_Price_Change_Stats_Monthly_Select_Column {
  /** column name */
  Bucket = 'bucket',
  /** column name */
  ChangeCount = 'change_count',
  /** column name */
  CurveId = 'curve_id',
  /** column name */
  Difference = 'difference',
  /** column name */
  FirstSharePrice = 'first_share_price',
  /** column name */
  LastSharePrice = 'last_share_price',
  /** column name */
  TermId = 'term_id',
}

/** order by stddev() on columns of table "share_price_change_stats_monthly" */
export type Share_Price_Change_Stats_Monthly_Stddev_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "share_price_change_stats_monthly" */
export type Share_Price_Change_Stats_Monthly_Stddev_Pop_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "share_price_change_stats_monthly" */
export type Share_Price_Change_Stats_Monthly_Stddev_Samp_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "share_price_change_stats_monthly" */
export type Share_Price_Change_Stats_Monthly_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Share_Price_Change_Stats_Monthly_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Share_Price_Change_Stats_Monthly_Stream_Cursor_Value_Input = {
  bucket?: InputMaybe<Scalars['timestamptz']['input']>;
  change_count?: InputMaybe<Scalars['numeric']['input']>;
  curve_id?: InputMaybe<Scalars['numeric']['input']>;
  difference?: InputMaybe<Scalars['numeric']['input']>;
  first_share_price?: InputMaybe<Scalars['numeric']['input']>;
  last_share_price?: InputMaybe<Scalars['numeric']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "share_price_change_stats_monthly" */
export type Share_Price_Change_Stats_Monthly_Sum_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "share_price_change_stats_monthly" */
export type Share_Price_Change_Stats_Monthly_Var_Pop_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "share_price_change_stats_monthly" */
export type Share_Price_Change_Stats_Monthly_Var_Samp_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "share_price_change_stats_monthly" */
export type Share_Price_Change_Stats_Monthly_Variance_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** columns and relationships of "share_price_change_stats_weekly" */
export type Share_Price_Change_Stats_Weekly = {
  __typename?: 'share_price_change_stats_weekly';
  bucket?: Maybe<Scalars['timestamptz']['output']>;
  change_count?: Maybe<Scalars['numeric']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  difference?: Maybe<Scalars['numeric']['output']>;
  first_share_price?: Maybe<Scalars['numeric']['output']>;
  last_share_price?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  term?: Maybe<Terms>;
  term_id?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "share_price_change_stats_weekly" */
export type Share_Price_Change_Stats_Weekly_Aggregate_Order_By = {
  avg?: InputMaybe<Share_Price_Change_Stats_Weekly_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Share_Price_Change_Stats_Weekly_Max_Order_By>;
  min?: InputMaybe<Share_Price_Change_Stats_Weekly_Min_Order_By>;
  stddev?: InputMaybe<Share_Price_Change_Stats_Weekly_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Share_Price_Change_Stats_Weekly_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Share_Price_Change_Stats_Weekly_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Share_Price_Change_Stats_Weekly_Sum_Order_By>;
  var_pop?: InputMaybe<Share_Price_Change_Stats_Weekly_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Share_Price_Change_Stats_Weekly_Var_Samp_Order_By>;
  variance?: InputMaybe<Share_Price_Change_Stats_Weekly_Variance_Order_By>;
};

/** order by avg() on columns of table "share_price_change_stats_weekly" */
export type Share_Price_Change_Stats_Weekly_Avg_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "share_price_change_stats_weekly". All fields are combined with a logical 'AND'. */
export type Share_Price_Change_Stats_Weekly_Bool_Exp = {
  _and?: InputMaybe<Array<Share_Price_Change_Stats_Weekly_Bool_Exp>>;
  _not?: InputMaybe<Share_Price_Change_Stats_Weekly_Bool_Exp>;
  _or?: InputMaybe<Array<Share_Price_Change_Stats_Weekly_Bool_Exp>>;
  bucket?: InputMaybe<Timestamptz_Comparison_Exp>;
  change_count?: InputMaybe<Numeric_Comparison_Exp>;
  curve_id?: InputMaybe<Numeric_Comparison_Exp>;
  difference?: InputMaybe<Numeric_Comparison_Exp>;
  first_share_price?: InputMaybe<Numeric_Comparison_Exp>;
  last_share_price?: InputMaybe<Numeric_Comparison_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "share_price_change_stats_weekly" */
export type Share_Price_Change_Stats_Weekly_Max_Order_By = {
  bucket?: InputMaybe<Order_By>;
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "share_price_change_stats_weekly" */
export type Share_Price_Change_Stats_Weekly_Min_Order_By = {
  bucket?: InputMaybe<Order_By>;
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "share_price_change_stats_weekly". */
export type Share_Price_Change_Stats_Weekly_Order_By = {
  bucket?: InputMaybe<Order_By>;
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** select columns of table "share_price_change_stats_weekly" */
export enum Share_Price_Change_Stats_Weekly_Select_Column {
  /** column name */
  Bucket = 'bucket',
  /** column name */
  ChangeCount = 'change_count',
  /** column name */
  CurveId = 'curve_id',
  /** column name */
  Difference = 'difference',
  /** column name */
  FirstSharePrice = 'first_share_price',
  /** column name */
  LastSharePrice = 'last_share_price',
  /** column name */
  TermId = 'term_id',
}

/** order by stddev() on columns of table "share_price_change_stats_weekly" */
export type Share_Price_Change_Stats_Weekly_Stddev_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "share_price_change_stats_weekly" */
export type Share_Price_Change_Stats_Weekly_Stddev_Pop_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "share_price_change_stats_weekly" */
export type Share_Price_Change_Stats_Weekly_Stddev_Samp_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "share_price_change_stats_weekly" */
export type Share_Price_Change_Stats_Weekly_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Share_Price_Change_Stats_Weekly_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Share_Price_Change_Stats_Weekly_Stream_Cursor_Value_Input = {
  bucket?: InputMaybe<Scalars['timestamptz']['input']>;
  change_count?: InputMaybe<Scalars['numeric']['input']>;
  curve_id?: InputMaybe<Scalars['numeric']['input']>;
  difference?: InputMaybe<Scalars['numeric']['input']>;
  first_share_price?: InputMaybe<Scalars['numeric']['input']>;
  last_share_price?: InputMaybe<Scalars['numeric']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "share_price_change_stats_weekly" */
export type Share_Price_Change_Stats_Weekly_Sum_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "share_price_change_stats_weekly" */
export type Share_Price_Change_Stats_Weekly_Var_Pop_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "share_price_change_stats_weekly" */
export type Share_Price_Change_Stats_Weekly_Var_Samp_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "share_price_change_stats_weekly" */
export type Share_Price_Change_Stats_Weekly_Variance_Order_By = {
  change_count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_share_price?: InputMaybe<Order_By>;
  last_share_price?: InputMaybe<Order_By>;
};

/** columns and relationships of "share_price_change" */
export type Share_Price_Changes = {
  __typename?: 'share_price_changes';
  block_number: Scalars['numeric']['output'];
  block_timestamp: Scalars['bigint']['output'];
  curve_id: Scalars['numeric']['output'];
  id: Scalars['bigint']['output'];
  log_index: Scalars['bigint']['output'];
  share_price: Scalars['numeric']['output'];
  /** An object relationship */
  term: Terms;
  term_id: Scalars['String']['output'];
  total_assets: Scalars['numeric']['output'];
  total_shares: Scalars['numeric']['output'];
  transaction_hash: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  vault?: Maybe<Vaults>;
  vault_type: Scalars['vault_type']['output'];
};

/** aggregated selection of "share_price_change" */
export type Share_Price_Changes_Aggregate = {
  __typename?: 'share_price_changes_aggregate';
  aggregate?: Maybe<Share_Price_Changes_Aggregate_Fields>;
  nodes: Array<Share_Price_Changes>;
};

export type Share_Price_Changes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Share_Price_Changes_Aggregate_Bool_Exp_Count>;
};

export type Share_Price_Changes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Share_Price_Changes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Share_Price_Changes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "share_price_change" */
export type Share_Price_Changes_Aggregate_Fields = {
  __typename?: 'share_price_changes_aggregate_fields';
  avg?: Maybe<Share_Price_Changes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Share_Price_Changes_Max_Fields>;
  min?: Maybe<Share_Price_Changes_Min_Fields>;
  stddev?: Maybe<Share_Price_Changes_Stddev_Fields>;
  stddev_pop?: Maybe<Share_Price_Changes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Share_Price_Changes_Stddev_Samp_Fields>;
  sum?: Maybe<Share_Price_Changes_Sum_Fields>;
  var_pop?: Maybe<Share_Price_Changes_Var_Pop_Fields>;
  var_samp?: Maybe<Share_Price_Changes_Var_Samp_Fields>;
  variance?: Maybe<Share_Price_Changes_Variance_Fields>;
};

/** aggregate fields of "share_price_change" */
export type Share_Price_Changes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Share_Price_Changes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "share_price_change" */
export type Share_Price_Changes_Aggregate_Order_By = {
  avg?: InputMaybe<Share_Price_Changes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Share_Price_Changes_Max_Order_By>;
  min?: InputMaybe<Share_Price_Changes_Min_Order_By>;
  stddev?: InputMaybe<Share_Price_Changes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Share_Price_Changes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Share_Price_Changes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Share_Price_Changes_Sum_Order_By>;
  var_pop?: InputMaybe<Share_Price_Changes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Share_Price_Changes_Var_Samp_Order_By>;
  variance?: InputMaybe<Share_Price_Changes_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Share_Price_Changes_Avg_Fields = {
  __typename?: 'share_price_changes_avg_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  share_price?: Maybe<Scalars['Float']['output']>;
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "share_price_change" */
export type Share_Price_Changes_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  share_price?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "share_price_change". All fields are combined with a logical 'AND'. */
export type Share_Price_Changes_Bool_Exp = {
  _and?: InputMaybe<Array<Share_Price_Changes_Bool_Exp>>;
  _not?: InputMaybe<Share_Price_Changes_Bool_Exp>;
  _or?: InputMaybe<Array<Share_Price_Changes_Bool_Exp>>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  block_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  curve_id?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  log_index?: InputMaybe<Bigint_Comparison_Exp>;
  share_price?: InputMaybe<Numeric_Comparison_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
  total_assets?: InputMaybe<Numeric_Comparison_Exp>;
  total_shares?: InputMaybe<Numeric_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vault?: InputMaybe<Vaults_Bool_Exp>;
  vault_type?: InputMaybe<Vault_Type_Comparison_Exp>;
};

/** aggregate max on columns */
export type Share_Price_Changes_Max_Fields = {
  __typename?: 'share_price_changes_max_fields';
  block_number?: Maybe<Scalars['numeric']['output']>;
  block_timestamp?: Maybe<Scalars['bigint']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
  share_price?: Maybe<Scalars['numeric']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
  total_assets?: Maybe<Scalars['numeric']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vault_type?: Maybe<Scalars['vault_type']['output']>;
};

/** order by max() on columns of table "share_price_change" */
export type Share_Price_Changes_Max_Order_By = {
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  share_price?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vault_type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Share_Price_Changes_Min_Fields = {
  __typename?: 'share_price_changes_min_fields';
  block_number?: Maybe<Scalars['numeric']['output']>;
  block_timestamp?: Maybe<Scalars['bigint']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
  share_price?: Maybe<Scalars['numeric']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
  total_assets?: Maybe<Scalars['numeric']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vault_type?: Maybe<Scalars['vault_type']['output']>;
};

/** order by min() on columns of table "share_price_change" */
export type Share_Price_Changes_Min_Order_By = {
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  share_price?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vault_type?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "share_price_change". */
export type Share_Price_Changes_Order_By = {
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  share_price?: InputMaybe<Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vault?: InputMaybe<Vaults_Order_By>;
  vault_type?: InputMaybe<Order_By>;
};

/** select columns of table "share_price_change" */
export enum Share_Price_Changes_Select_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  BlockTimestamp = 'block_timestamp',
  /** column name */
  CurveId = 'curve_id',
  /** column name */
  Id = 'id',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  SharePrice = 'share_price',
  /** column name */
  TermId = 'term_id',
  /** column name */
  TotalAssets = 'total_assets',
  /** column name */
  TotalShares = 'total_shares',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VaultType = 'vault_type',
}

/** aggregate stddev on columns */
export type Share_Price_Changes_Stddev_Fields = {
  __typename?: 'share_price_changes_stddev_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  share_price?: Maybe<Scalars['Float']['output']>;
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "share_price_change" */
export type Share_Price_Changes_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  share_price?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Share_Price_Changes_Stddev_Pop_Fields = {
  __typename?: 'share_price_changes_stddev_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  share_price?: Maybe<Scalars['Float']['output']>;
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "share_price_change" */
export type Share_Price_Changes_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  share_price?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Share_Price_Changes_Stddev_Samp_Fields = {
  __typename?: 'share_price_changes_stddev_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  share_price?: Maybe<Scalars['Float']['output']>;
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "share_price_change" */
export type Share_Price_Changes_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  share_price?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "share_price_changes" */
export type Share_Price_Changes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Share_Price_Changes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Share_Price_Changes_Stream_Cursor_Value_Input = {
  block_number?: InputMaybe<Scalars['numeric']['input']>;
  block_timestamp?: InputMaybe<Scalars['bigint']['input']>;
  curve_id?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  log_index?: InputMaybe<Scalars['bigint']['input']>;
  share_price?: InputMaybe<Scalars['numeric']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
  total_assets?: InputMaybe<Scalars['numeric']['input']>;
  total_shares?: InputMaybe<Scalars['numeric']['input']>;
  transaction_hash?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vault_type?: InputMaybe<Scalars['vault_type']['input']>;
};

/** aggregate sum on columns */
export type Share_Price_Changes_Sum_Fields = {
  __typename?: 'share_price_changes_sum_fields';
  block_number?: Maybe<Scalars['numeric']['output']>;
  block_timestamp?: Maybe<Scalars['bigint']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
  share_price?: Maybe<Scalars['numeric']['output']>;
  total_assets?: Maybe<Scalars['numeric']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "share_price_change" */
export type Share_Price_Changes_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  share_price?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Share_Price_Changes_Var_Pop_Fields = {
  __typename?: 'share_price_changes_var_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  share_price?: Maybe<Scalars['Float']['output']>;
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "share_price_change" */
export type Share_Price_Changes_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  share_price?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Share_Price_Changes_Var_Samp_Fields = {
  __typename?: 'share_price_changes_var_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  share_price?: Maybe<Scalars['Float']['output']>;
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "share_price_change" */
export type Share_Price_Changes_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  share_price?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Share_Price_Changes_Variance_Fields = {
  __typename?: 'share_price_changes_variance_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  block_timestamp?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  share_price?: Maybe<Scalars['Float']['output']>;
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "share_price_change" */
export type Share_Price_Changes_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  share_price?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** columns and relationships of "signal_stats_daily" */
export type Signal_Stats_Daily = {
  __typename?: 'signal_stats_daily';
  bucket?: Maybe<Scalars['timestamptz']['output']>;
  count?: Maybe<Scalars['numeric']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  term?: Maybe<Terms>;
  term_id?: Maybe<Scalars['String']['output']>;
  volume?: Maybe<Scalars['numeric']['output']>;
};

/** Boolean expression to filter rows from the table "signal_stats_daily". All fields are combined with a logical 'AND'. */
export type Signal_Stats_Daily_Bool_Exp = {
  _and?: InputMaybe<Array<Signal_Stats_Daily_Bool_Exp>>;
  _not?: InputMaybe<Signal_Stats_Daily_Bool_Exp>;
  _or?: InputMaybe<Array<Signal_Stats_Daily_Bool_Exp>>;
  bucket?: InputMaybe<Timestamptz_Comparison_Exp>;
  count?: InputMaybe<Numeric_Comparison_Exp>;
  curve_id?: InputMaybe<Numeric_Comparison_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
  volume?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "signal_stats_daily". */
export type Signal_Stats_Daily_Order_By = {
  bucket?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** select columns of table "signal_stats_daily" */
export enum Signal_Stats_Daily_Select_Column {
  /** column name */
  Bucket = 'bucket',
  /** column name */
  Count = 'count',
  /** column name */
  CurveId = 'curve_id',
  /** column name */
  TermId = 'term_id',
  /** column name */
  Volume = 'volume',
}

/** Streaming cursor of the table "signal_stats_daily" */
export type Signal_Stats_Daily_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Signal_Stats_Daily_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Signal_Stats_Daily_Stream_Cursor_Value_Input = {
  bucket?: InputMaybe<Scalars['timestamptz']['input']>;
  count?: InputMaybe<Scalars['numeric']['input']>;
  curve_id?: InputMaybe<Scalars['numeric']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "signal_stats_hourly" */
export type Signal_Stats_Hourly = {
  __typename?: 'signal_stats_hourly';
  bucket?: Maybe<Scalars['timestamptz']['output']>;
  count?: Maybe<Scalars['bigint']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  term?: Maybe<Terms>;
  term_id?: Maybe<Scalars['String']['output']>;
  volume?: Maybe<Scalars['numeric']['output']>;
};

/** Boolean expression to filter rows from the table "signal_stats_hourly". All fields are combined with a logical 'AND'. */
export type Signal_Stats_Hourly_Bool_Exp = {
  _and?: InputMaybe<Array<Signal_Stats_Hourly_Bool_Exp>>;
  _not?: InputMaybe<Signal_Stats_Hourly_Bool_Exp>;
  _or?: InputMaybe<Array<Signal_Stats_Hourly_Bool_Exp>>;
  bucket?: InputMaybe<Timestamptz_Comparison_Exp>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  curve_id?: InputMaybe<Numeric_Comparison_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
  volume?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "signal_stats_hourly". */
export type Signal_Stats_Hourly_Order_By = {
  bucket?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** select columns of table "signal_stats_hourly" */
export enum Signal_Stats_Hourly_Select_Column {
  /** column name */
  Bucket = 'bucket',
  /** column name */
  Count = 'count',
  /** column name */
  CurveId = 'curve_id',
  /** column name */
  TermId = 'term_id',
  /** column name */
  Volume = 'volume',
}

/** Streaming cursor of the table "signal_stats_hourly" */
export type Signal_Stats_Hourly_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Signal_Stats_Hourly_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Signal_Stats_Hourly_Stream_Cursor_Value_Input = {
  bucket?: InputMaybe<Scalars['timestamptz']['input']>;
  count?: InputMaybe<Scalars['bigint']['input']>;
  curve_id?: InputMaybe<Scalars['numeric']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "signal_stats_monthly" */
export type Signal_Stats_Monthly = {
  __typename?: 'signal_stats_monthly';
  bucket?: Maybe<Scalars['timestamptz']['output']>;
  count?: Maybe<Scalars['numeric']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  term?: Maybe<Terms>;
  term_id?: Maybe<Scalars['String']['output']>;
  volume?: Maybe<Scalars['numeric']['output']>;
};

/** Boolean expression to filter rows from the table "signal_stats_monthly". All fields are combined with a logical 'AND'. */
export type Signal_Stats_Monthly_Bool_Exp = {
  _and?: InputMaybe<Array<Signal_Stats_Monthly_Bool_Exp>>;
  _not?: InputMaybe<Signal_Stats_Monthly_Bool_Exp>;
  _or?: InputMaybe<Array<Signal_Stats_Monthly_Bool_Exp>>;
  bucket?: InputMaybe<Timestamptz_Comparison_Exp>;
  count?: InputMaybe<Numeric_Comparison_Exp>;
  curve_id?: InputMaybe<Numeric_Comparison_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
  volume?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "signal_stats_monthly". */
export type Signal_Stats_Monthly_Order_By = {
  bucket?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** select columns of table "signal_stats_monthly" */
export enum Signal_Stats_Monthly_Select_Column {
  /** column name */
  Bucket = 'bucket',
  /** column name */
  Count = 'count',
  /** column name */
  CurveId = 'curve_id',
  /** column name */
  TermId = 'term_id',
  /** column name */
  Volume = 'volume',
}

/** Streaming cursor of the table "signal_stats_monthly" */
export type Signal_Stats_Monthly_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Signal_Stats_Monthly_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Signal_Stats_Monthly_Stream_Cursor_Value_Input = {
  bucket?: InputMaybe<Scalars['timestamptz']['input']>;
  count?: InputMaybe<Scalars['numeric']['input']>;
  curve_id?: InputMaybe<Scalars['numeric']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "signal_stats_weekly" */
export type Signal_Stats_Weekly = {
  __typename?: 'signal_stats_weekly';
  bucket?: Maybe<Scalars['timestamptz']['output']>;
  count?: Maybe<Scalars['numeric']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  term?: Maybe<Terms>;
  term_id?: Maybe<Scalars['String']['output']>;
  volume?: Maybe<Scalars['numeric']['output']>;
};

/** Boolean expression to filter rows from the table "signal_stats_weekly". All fields are combined with a logical 'AND'. */
export type Signal_Stats_Weekly_Bool_Exp = {
  _and?: InputMaybe<Array<Signal_Stats_Weekly_Bool_Exp>>;
  _not?: InputMaybe<Signal_Stats_Weekly_Bool_Exp>;
  _or?: InputMaybe<Array<Signal_Stats_Weekly_Bool_Exp>>;
  bucket?: InputMaybe<Timestamptz_Comparison_Exp>;
  count?: InputMaybe<Numeric_Comparison_Exp>;
  curve_id?: InputMaybe<Numeric_Comparison_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
  volume?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "signal_stats_weekly". */
export type Signal_Stats_Weekly_Order_By = {
  bucket?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
  volume?: InputMaybe<Order_By>;
};

/** select columns of table "signal_stats_weekly" */
export enum Signal_Stats_Weekly_Select_Column {
  /** column name */
  Bucket = 'bucket',
  /** column name */
  Count = 'count',
  /** column name */
  CurveId = 'curve_id',
  /** column name */
  TermId = 'term_id',
  /** column name */
  Volume = 'volume',
}

/** Streaming cursor of the table "signal_stats_weekly" */
export type Signal_Stats_Weekly_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Signal_Stats_Weekly_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Signal_Stats_Weekly_Stream_Cursor_Value_Input = {
  bucket?: InputMaybe<Scalars['timestamptz']['input']>;
  count?: InputMaybe<Scalars['numeric']['input']>;
  curve_id?: InputMaybe<Scalars['numeric']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['numeric']['input']>;
};

/** columns and relationships of "signal" */
export type Signals = {
  __typename?: 'signals';
  /** An object relationship */
  account?: Maybe<Accounts>;
  account_id: Scalars['String']['output'];
  atom_id?: Maybe<Scalars['String']['output']>;
  block_number: Scalars['numeric']['output'];
  created_at: Scalars['timestamptz']['output'];
  curve_id: Scalars['numeric']['output'];
  delta: Scalars['numeric']['output'];
  /** An object relationship */
  deposit?: Maybe<Deposits>;
  deposit_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** An object relationship */
  redemption?: Maybe<Redemptions>;
  redemption_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  term: Terms;
  term_id: Scalars['String']['output'];
  transaction_hash: Scalars['String']['output'];
  triple_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  vault?: Maybe<Vaults>;
};

/** aggregated selection of "signal" */
export type Signals_Aggregate = {
  __typename?: 'signals_aggregate';
  aggregate?: Maybe<Signals_Aggregate_Fields>;
  nodes: Array<Signals>;
};

export type Signals_Aggregate_Bool_Exp = {
  count?: InputMaybe<Signals_Aggregate_Bool_Exp_Count>;
};

export type Signals_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Signals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Signals_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "signal" */
export type Signals_Aggregate_Fields = {
  __typename?: 'signals_aggregate_fields';
  avg?: Maybe<Signals_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Signals_Max_Fields>;
  min?: Maybe<Signals_Min_Fields>;
  stddev?: Maybe<Signals_Stddev_Fields>;
  stddev_pop?: Maybe<Signals_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Signals_Stddev_Samp_Fields>;
  sum?: Maybe<Signals_Sum_Fields>;
  var_pop?: Maybe<Signals_Var_Pop_Fields>;
  var_samp?: Maybe<Signals_Var_Samp_Fields>;
  variance?: Maybe<Signals_Variance_Fields>;
};

/** aggregate fields of "signal" */
export type Signals_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Signals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "signal" */
export type Signals_Aggregate_Order_By = {
  avg?: InputMaybe<Signals_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Signals_Max_Order_By>;
  min?: InputMaybe<Signals_Min_Order_By>;
  stddev?: InputMaybe<Signals_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Signals_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Signals_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Signals_Sum_Order_By>;
  var_pop?: InputMaybe<Signals_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Signals_Var_Samp_Order_By>;
  variance?: InputMaybe<Signals_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Signals_Avg_Fields = {
  __typename?: 'signals_avg_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  delta?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "signal" */
export type Signals_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  delta?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "signal". All fields are combined with a logical 'AND'. */
export type Signals_Bool_Exp = {
  _and?: InputMaybe<Array<Signals_Bool_Exp>>;
  _not?: InputMaybe<Signals_Bool_Exp>;
  _or?: InputMaybe<Array<Signals_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  account_id?: InputMaybe<String_Comparison_Exp>;
  atom_id?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  curve_id?: InputMaybe<Numeric_Comparison_Exp>;
  delta?: InputMaybe<Numeric_Comparison_Exp>;
  deposit?: InputMaybe<Deposits_Bool_Exp>;
  deposit_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  redemption?: InputMaybe<Redemptions_Bool_Exp>;
  redemption_id?: InputMaybe<String_Comparison_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  triple_id?: InputMaybe<String_Comparison_Exp>;
  vault?: InputMaybe<Vaults_Bool_Exp>;
};

export type Signals_From_Following_Args = {
  address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Signals_Max_Fields = {
  __typename?: 'signals_max_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  atom_id?: Maybe<Scalars['String']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  delta?: Maybe<Scalars['numeric']['output']>;
  deposit_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  redemption_id?: Maybe<Scalars['String']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
  triple_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "signal" */
export type Signals_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  atom_id?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  delta?: InputMaybe<Order_By>;
  deposit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  redemption_id?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  triple_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Signals_Min_Fields = {
  __typename?: 'signals_min_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  atom_id?: Maybe<Scalars['String']['output']>;
  block_number?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  delta?: Maybe<Scalars['numeric']['output']>;
  deposit_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  redemption_id?: Maybe<Scalars['String']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
  triple_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "signal" */
export type Signals_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  atom_id?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  delta?: InputMaybe<Order_By>;
  deposit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  redemption_id?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  triple_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "signal". */
export type Signals_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  account_id?: InputMaybe<Order_By>;
  atom_id?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  delta?: InputMaybe<Order_By>;
  deposit?: InputMaybe<Deposits_Order_By>;
  deposit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  redemption?: InputMaybe<Redemptions_Order_By>;
  redemption_id?: InputMaybe<Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  triple_id?: InputMaybe<Order_By>;
  vault?: InputMaybe<Vaults_Order_By>;
};

/** select columns of table "signal" */
export enum Signals_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AtomId = 'atom_id',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurveId = 'curve_id',
  /** column name */
  Delta = 'delta',
  /** column name */
  DepositId = 'deposit_id',
  /** column name */
  Id = 'id',
  /** column name */
  RedemptionId = 'redemption_id',
  /** column name */
  TermId = 'term_id',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  TripleId = 'triple_id',
}

/** aggregate stddev on columns */
export type Signals_Stddev_Fields = {
  __typename?: 'signals_stddev_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  delta?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "signal" */
export type Signals_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  delta?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Signals_Stddev_Pop_Fields = {
  __typename?: 'signals_stddev_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  delta?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "signal" */
export type Signals_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  delta?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Signals_Stddev_Samp_Fields = {
  __typename?: 'signals_stddev_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  delta?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "signal" */
export type Signals_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  delta?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "signals" */
export type Signals_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Signals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Signals_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['String']['input']>;
  atom_id?: InputMaybe<Scalars['String']['input']>;
  block_number?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  curve_id?: InputMaybe<Scalars['numeric']['input']>;
  delta?: InputMaybe<Scalars['numeric']['input']>;
  deposit_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  redemption_id?: InputMaybe<Scalars['String']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
  transaction_hash?: InputMaybe<Scalars['String']['input']>;
  triple_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Signals_Sum_Fields = {
  __typename?: 'signals_sum_fields';
  block_number?: Maybe<Scalars['numeric']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  delta?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "signal" */
export type Signals_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  delta?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Signals_Var_Pop_Fields = {
  __typename?: 'signals_var_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  delta?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "signal" */
export type Signals_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  delta?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Signals_Var_Samp_Fields = {
  __typename?: 'signals_var_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  delta?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "signal" */
export type Signals_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  delta?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Signals_Variance_Fields = {
  __typename?: 'signals_variance_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  delta?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "signal" */
export type Signals_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  delta?: InputMaybe<Order_By>;
};

/** columns and relationships of "stats_hour" */
export type StatHours = {
  __typename?: 'statHours';
  contract_balance?: Maybe<Scalars['numeric']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  total_accounts?: Maybe<Scalars['Int']['output']>;
  total_atoms?: Maybe<Scalars['Int']['output']>;
  total_fees?: Maybe<Scalars['numeric']['output']>;
  total_positions?: Maybe<Scalars['Int']['output']>;
  total_signals?: Maybe<Scalars['Int']['output']>;
  total_triples?: Maybe<Scalars['Int']['output']>;
};

/** Boolean expression to filter rows from the table "stats_hour". All fields are combined with a logical 'AND'. */
export type StatHours_Bool_Exp = {
  _and?: InputMaybe<Array<StatHours_Bool_Exp>>;
  _not?: InputMaybe<StatHours_Bool_Exp>;
  _or?: InputMaybe<Array<StatHours_Bool_Exp>>;
  contract_balance?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  total_accounts?: InputMaybe<Int_Comparison_Exp>;
  total_atoms?: InputMaybe<Int_Comparison_Exp>;
  total_fees?: InputMaybe<Numeric_Comparison_Exp>;
  total_positions?: InputMaybe<Int_Comparison_Exp>;
  total_signals?: InputMaybe<Int_Comparison_Exp>;
  total_triples?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "stats_hour". */
export type StatHours_Order_By = {
  contract_balance?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  total_accounts?: InputMaybe<Order_By>;
  total_atoms?: InputMaybe<Order_By>;
  total_fees?: InputMaybe<Order_By>;
  total_positions?: InputMaybe<Order_By>;
  total_signals?: InputMaybe<Order_By>;
  total_triples?: InputMaybe<Order_By>;
};

/** select columns of table "stats_hour" */
export enum StatHours_Select_Column {
  /** column name */
  ContractBalance = 'contract_balance',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TotalAccounts = 'total_accounts',
  /** column name */
  TotalAtoms = 'total_atoms',
  /** column name */
  TotalFees = 'total_fees',
  /** column name */
  TotalPositions = 'total_positions',
  /** column name */
  TotalSignals = 'total_signals',
  /** column name */
  TotalTriples = 'total_triples',
}

/** Streaming cursor of the table "statHours" */
export type StatHours_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: StatHours_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type StatHours_Stream_Cursor_Value_Input = {
  contract_balance?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  total_accounts?: InputMaybe<Scalars['Int']['input']>;
  total_atoms?: InputMaybe<Scalars['Int']['input']>;
  total_fees?: InputMaybe<Scalars['numeric']['input']>;
  total_positions?: InputMaybe<Scalars['Int']['input']>;
  total_signals?: InputMaybe<Scalars['Int']['input']>;
  total_triples?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "stats" */
export type Stats = {
  __typename?: 'stats';
  contract_balance?: Maybe<Scalars['numeric']['output']>;
  id: Scalars['Int']['output'];
  last_processed_block_number?: Maybe<Scalars['numeric']['output']>;
  last_processed_block_timestamp?: Maybe<Scalars['timestamptz']['output']>;
  last_updated: Scalars['timestamptz']['output'];
  total_accounts?: Maybe<Scalars['Int']['output']>;
  total_atoms?: Maybe<Scalars['Int']['output']>;
  total_fees?: Maybe<Scalars['numeric']['output']>;
  total_positions?: Maybe<Scalars['Int']['output']>;
  total_signals?: Maybe<Scalars['Int']['output']>;
  total_triples?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "stats" */
export type Stats_Aggregate = {
  __typename?: 'stats_aggregate';
  aggregate?: Maybe<Stats_Aggregate_Fields>;
  nodes: Array<Stats>;
};

/** aggregate fields of "stats" */
export type Stats_Aggregate_Fields = {
  __typename?: 'stats_aggregate_fields';
  avg?: Maybe<Stats_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Stats_Max_Fields>;
  min?: Maybe<Stats_Min_Fields>;
  stddev?: Maybe<Stats_Stddev_Fields>;
  stddev_pop?: Maybe<Stats_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stats_Stddev_Samp_Fields>;
  sum?: Maybe<Stats_Sum_Fields>;
  var_pop?: Maybe<Stats_Var_Pop_Fields>;
  var_samp?: Maybe<Stats_Var_Samp_Fields>;
  variance?: Maybe<Stats_Variance_Fields>;
};

/** aggregate fields of "stats" */
export type Stats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Stats_Avg_Fields = {
  __typename?: 'stats_avg_fields';
  contract_balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  last_processed_block_number?: Maybe<Scalars['Float']['output']>;
  total_accounts?: Maybe<Scalars['Float']['output']>;
  total_atoms?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_positions?: Maybe<Scalars['Float']['output']>;
  total_signals?: Maybe<Scalars['Float']['output']>;
  total_triples?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "stats". All fields are combined with a logical 'AND'. */
export type Stats_Bool_Exp = {
  _and?: InputMaybe<Array<Stats_Bool_Exp>>;
  _not?: InputMaybe<Stats_Bool_Exp>;
  _or?: InputMaybe<Array<Stats_Bool_Exp>>;
  contract_balance?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_processed_block_number?: InputMaybe<Numeric_Comparison_Exp>;
  last_processed_block_timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_updated?: InputMaybe<Timestamptz_Comparison_Exp>;
  total_accounts?: InputMaybe<Int_Comparison_Exp>;
  total_atoms?: InputMaybe<Int_Comparison_Exp>;
  total_fees?: InputMaybe<Numeric_Comparison_Exp>;
  total_positions?: InputMaybe<Int_Comparison_Exp>;
  total_signals?: InputMaybe<Int_Comparison_Exp>;
  total_triples?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Stats_Max_Fields = {
  __typename?: 'stats_max_fields';
  contract_balance?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_processed_block_number?: Maybe<Scalars['numeric']['output']>;
  last_processed_block_timestamp?: Maybe<Scalars['timestamptz']['output']>;
  last_updated?: Maybe<Scalars['timestamptz']['output']>;
  total_accounts?: Maybe<Scalars['Int']['output']>;
  total_atoms?: Maybe<Scalars['Int']['output']>;
  total_fees?: Maybe<Scalars['numeric']['output']>;
  total_positions?: Maybe<Scalars['Int']['output']>;
  total_signals?: Maybe<Scalars['Int']['output']>;
  total_triples?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Stats_Min_Fields = {
  __typename?: 'stats_min_fields';
  contract_balance?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_processed_block_number?: Maybe<Scalars['numeric']['output']>;
  last_processed_block_timestamp?: Maybe<Scalars['timestamptz']['output']>;
  last_updated?: Maybe<Scalars['timestamptz']['output']>;
  total_accounts?: Maybe<Scalars['Int']['output']>;
  total_atoms?: Maybe<Scalars['Int']['output']>;
  total_fees?: Maybe<Scalars['numeric']['output']>;
  total_positions?: Maybe<Scalars['Int']['output']>;
  total_signals?: Maybe<Scalars['Int']['output']>;
  total_triples?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "stats". */
export type Stats_Order_By = {
  contract_balance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_processed_block_number?: InputMaybe<Order_By>;
  last_processed_block_timestamp?: InputMaybe<Order_By>;
  last_updated?: InputMaybe<Order_By>;
  total_accounts?: InputMaybe<Order_By>;
  total_atoms?: InputMaybe<Order_By>;
  total_fees?: InputMaybe<Order_By>;
  total_positions?: InputMaybe<Order_By>;
  total_signals?: InputMaybe<Order_By>;
  total_triples?: InputMaybe<Order_By>;
};

/** select columns of table "stats" */
export enum Stats_Select_Column {
  /** column name */
  ContractBalance = 'contract_balance',
  /** column name */
  Id = 'id',
  /** column name */
  LastProcessedBlockNumber = 'last_processed_block_number',
  /** column name */
  LastProcessedBlockTimestamp = 'last_processed_block_timestamp',
  /** column name */
  LastUpdated = 'last_updated',
  /** column name */
  TotalAccounts = 'total_accounts',
  /** column name */
  TotalAtoms = 'total_atoms',
  /** column name */
  TotalFees = 'total_fees',
  /** column name */
  TotalPositions = 'total_positions',
  /** column name */
  TotalSignals = 'total_signals',
  /** column name */
  TotalTriples = 'total_triples',
}

/** aggregate stddev on columns */
export type Stats_Stddev_Fields = {
  __typename?: 'stats_stddev_fields';
  contract_balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  last_processed_block_number?: Maybe<Scalars['Float']['output']>;
  total_accounts?: Maybe<Scalars['Float']['output']>;
  total_atoms?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_positions?: Maybe<Scalars['Float']['output']>;
  total_signals?: Maybe<Scalars['Float']['output']>;
  total_triples?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Stats_Stddev_Pop_Fields = {
  __typename?: 'stats_stddev_pop_fields';
  contract_balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  last_processed_block_number?: Maybe<Scalars['Float']['output']>;
  total_accounts?: Maybe<Scalars['Float']['output']>;
  total_atoms?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_positions?: Maybe<Scalars['Float']['output']>;
  total_signals?: Maybe<Scalars['Float']['output']>;
  total_triples?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Stats_Stddev_Samp_Fields = {
  __typename?: 'stats_stddev_samp_fields';
  contract_balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  last_processed_block_number?: Maybe<Scalars['Float']['output']>;
  total_accounts?: Maybe<Scalars['Float']['output']>;
  total_atoms?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_positions?: Maybe<Scalars['Float']['output']>;
  total_signals?: Maybe<Scalars['Float']['output']>;
  total_triples?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "stats" */
export type Stats_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Stats_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Stats_Stream_Cursor_Value_Input = {
  contract_balance?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_processed_block_number?: InputMaybe<Scalars['numeric']['input']>;
  last_processed_block_timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  last_updated?: InputMaybe<Scalars['timestamptz']['input']>;
  total_accounts?: InputMaybe<Scalars['Int']['input']>;
  total_atoms?: InputMaybe<Scalars['Int']['input']>;
  total_fees?: InputMaybe<Scalars['numeric']['input']>;
  total_positions?: InputMaybe<Scalars['Int']['input']>;
  total_signals?: InputMaybe<Scalars['Int']['input']>;
  total_triples?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Stats_Sum_Fields = {
  __typename?: 'stats_sum_fields';
  contract_balance?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_processed_block_number?: Maybe<Scalars['numeric']['output']>;
  total_accounts?: Maybe<Scalars['Int']['output']>;
  total_atoms?: Maybe<Scalars['Int']['output']>;
  total_fees?: Maybe<Scalars['numeric']['output']>;
  total_positions?: Maybe<Scalars['Int']['output']>;
  total_signals?: Maybe<Scalars['Int']['output']>;
  total_triples?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Stats_Var_Pop_Fields = {
  __typename?: 'stats_var_pop_fields';
  contract_balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  last_processed_block_number?: Maybe<Scalars['Float']['output']>;
  total_accounts?: Maybe<Scalars['Float']['output']>;
  total_atoms?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_positions?: Maybe<Scalars['Float']['output']>;
  total_signals?: Maybe<Scalars['Float']['output']>;
  total_triples?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Stats_Var_Samp_Fields = {
  __typename?: 'stats_var_samp_fields';
  contract_balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  last_processed_block_number?: Maybe<Scalars['Float']['output']>;
  total_accounts?: Maybe<Scalars['Float']['output']>;
  total_atoms?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_positions?: Maybe<Scalars['Float']['output']>;
  total_signals?: Maybe<Scalars['Float']['output']>;
  total_triples?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Stats_Variance_Fields = {
  __typename?: 'stats_variance_fields';
  contract_balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  last_processed_block_number?: Maybe<Scalars['Float']['output']>;
  total_accounts?: Maybe<Scalars['Float']['output']>;
  total_atoms?: Maybe<Scalars['Float']['output']>;
  total_fees?: Maybe<Scalars['Float']['output']>;
  total_positions?: Maybe<Scalars['Float']['output']>;
  total_signals?: Maybe<Scalars['Float']['output']>;
  total_triples?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account" using primary key columns */
  account?: Maybe<Accounts>;
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table in a streaming manner: "account" */
  accounts_stream: Array<Accounts>;
  /** fetch data from the table: "atom" using primary key columns */
  atom?: Maybe<Atoms>;
  /** fetch data from the table: "atom_value" using primary key columns */
  atom_value?: Maybe<Atom_Values>;
  /** fetch data from the table: "atom_value" */
  atom_values: Array<Atom_Values>;
  /** fetch aggregated fields from the table: "atom_value" */
  atom_values_aggregate: Atom_Values_Aggregate;
  /** fetch data from the table in a streaming manner: "atom_value" */
  atom_values_stream: Array<Atom_Values>;
  /** An array relationship */
  atoms: Array<Atoms>;
  /** An aggregate relationship */
  atoms_aggregate: Atoms_Aggregate;
  /** fetch data from the table in a streaming manner: "atom" */
  atoms_stream: Array<Atoms>;
  /** fetch data from the table: "book" using primary key columns */
  book?: Maybe<Books>;
  /** fetch data from the table: "book" */
  books: Array<Books>;
  /** fetch aggregated fields from the table: "book" */
  books_aggregate: Books_Aggregate;
  /** fetch data from the table in a streaming manner: "book" */
  books_stream: Array<Books>;
  /** fetch data from the table: "byte_object" */
  byte_object: Array<Byte_Object>;
  /** fetch aggregated fields from the table: "byte_object" */
  byte_object_aggregate: Byte_Object_Aggregate;
  /** fetch data from the table: "byte_object" using primary key columns */
  byte_object_by_pk?: Maybe<Byte_Object>;
  /** fetch data from the table in a streaming manner: "byte_object" */
  byte_object_stream: Array<Byte_Object>;
  /** fetch data from the table: "cached_images.cached_image" */
  cached_images_cached_image: Array<Cached_Images_Cached_Image>;
  /** fetch data from the table: "cached_images.cached_image" using primary key columns */
  cached_images_cached_image_by_pk?: Maybe<Cached_Images_Cached_Image>;
  /** fetch data from the table in a streaming manner: "cached_images.cached_image" */
  cached_images_cached_image_stream: Array<Cached_Images_Cached_Image>;
  /** fetch data from the table: "caip10" using primary key columns */
  caip10?: Maybe<Caip10>;
  /** fetch aggregated fields from the table: "caip10" */
  caip10_aggregate: Caip10_Aggregate;
  /** fetch data from the table in a streaming manner: "caip10" */
  caip10_stream: Array<Caip10>;
  /** fetch data from the table: "caip10" */
  caip10s: Array<Caip10>;
  /** fetch data from the table: "chainlink_price" using primary key columns */
  chainlink_price?: Maybe<Chainlink_Prices>;
  /** fetch data from the table: "chainlink_price" */
  chainlink_prices: Array<Chainlink_Prices>;
  /** fetch data from the table in a streaming manner: "chainlink_price" */
  chainlink_prices_stream: Array<Chainlink_Prices>;
  /** fetch data from the table: "deposit" using primary key columns */
  deposit?: Maybe<Deposits>;
  /** An array relationship */
  deposits: Array<Deposits>;
  /** An aggregate relationship */
  deposits_aggregate: Deposits_Aggregate;
  /** fetch data from the table in a streaming manner: "deposit" */
  deposits_stream: Array<Deposits>;
  /** fetch data from the table: "event" using primary key columns */
  event?: Maybe<Events>;
  /** fetch data from the table: "event" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "event" */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table in a streaming manner: "event" */
  events_stream: Array<Events>;
  /** fetch data from the table: "fee_transfer" using primary key columns */
  fee_transfer?: Maybe<Fee_Transfers>;
  /** An array relationship */
  fee_transfers: Array<Fee_Transfers>;
  /** An aggregate relationship */
  fee_transfers_aggregate: Fee_Transfers_Aggregate;
  /** fetch data from the table in a streaming manner: "fee_transfer" */
  fee_transfers_stream: Array<Fee_Transfers>;
  /** execute function "following" which returns "account" */
  following: Array<Accounts>;
  /** execute function "following" and query aggregates on result of table type "account" */
  following_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "json_object" using primary key columns */
  json_object?: Maybe<Json_Objects>;
  /** fetch data from the table: "json_object" */
  json_objects: Array<Json_Objects>;
  /** fetch aggregated fields from the table: "json_object" */
  json_objects_aggregate: Json_Objects_Aggregate;
  /** fetch data from the table in a streaming manner: "json_object" */
  json_objects_stream: Array<Json_Objects>;
  /** fetch data from the table: "organization" using primary key columns */
  organization?: Maybe<Organizations>;
  /** fetch data from the table: "organization" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organization" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table in a streaming manner: "organization" */
  organizations_stream: Array<Organizations>;
  /** fetch data from the table: "person" using primary key columns */
  person?: Maybe<Persons>;
  /** fetch data from the table: "person" */
  persons: Array<Persons>;
  /** fetch aggregated fields from the table: "person" */
  persons_aggregate: Persons_Aggregate;
  /** fetch data from the table in a streaming manner: "person" */
  persons_stream: Array<Persons>;
  /** fetch data from the table: "position" using primary key columns */
  position?: Maybe<Positions>;
  /** An array relationship */
  positions: Array<Positions>;
  /** An aggregate relationship */
  positions_aggregate: Positions_Aggregate;
  /** execute function "positions_from_following" which returns "position" */
  positions_from_following: Array<Positions>;
  /** execute function "positions_from_following" and query aggregates on result of table type "position" */
  positions_from_following_aggregate: Positions_Aggregate;
  /** fetch data from the table in a streaming manner: "position" */
  positions_stream: Array<Positions>;
  /** fetch data from the table: "predicate_object" */
  predicate_objects: Array<Predicate_Objects>;
  /** fetch aggregated fields from the table: "predicate_object" */
  predicate_objects_aggregate: Predicate_Objects_Aggregate;
  /** fetch data from the table: "predicate_object" using primary key columns */
  predicate_objects_by_pk?: Maybe<Predicate_Objects>;
  /** fetch data from the table in a streaming manner: "predicate_object" */
  predicate_objects_stream: Array<Predicate_Objects>;
  /** fetch data from the table: "redemption" using primary key columns */
  redemption?: Maybe<Redemptions>;
  /** An array relationship */
  redemptions: Array<Redemptions>;
  /** An aggregate relationship */
  redemptions_aggregate: Redemptions_Aggregate;
  /** fetch data from the table in a streaming manner: "redemption" */
  redemptions_stream: Array<Redemptions>;
  /** execute function "search_positions_on_subject" which returns "position" */
  search_positions_on_subject: Array<Positions>;
  /** execute function "search_positions_on_subject" and query aggregates on result of table type "position" */
  search_positions_on_subject_aggregate: Positions_Aggregate;
  /** execute function "search_term" which returns "term" */
  search_term: Array<Terms>;
  /** execute function "search_term" and query aggregates on result of table type "term" */
  search_term_aggregate: Terms_Aggregate;
  /** execute function "search_term_from_following" which returns "term" */
  search_term_from_following: Array<Terms>;
  /** execute function "search_term_from_following" and query aggregates on result of table type "term" */
  search_term_from_following_aggregate: Terms_Aggregate;
  /** An array relationship */
  share_price_change_stats_daily: Array<Share_Price_Change_Stats_Daily>;
  /** fetch data from the table in a streaming manner: "share_price_change_stats_daily" */
  share_price_change_stats_daily_stream: Array<Share_Price_Change_Stats_Daily>;
  /** An array relationship */
  share_price_change_stats_hourly: Array<Share_Price_Change_Stats_Hourly>;
  /** fetch data from the table in a streaming manner: "share_price_change_stats_hourly" */
  share_price_change_stats_hourly_stream: Array<Share_Price_Change_Stats_Hourly>;
  /** An array relationship */
  share_price_change_stats_monthly: Array<Share_Price_Change_Stats_Monthly>;
  /** fetch data from the table in a streaming manner: "share_price_change_stats_monthly" */
  share_price_change_stats_monthly_stream: Array<Share_Price_Change_Stats_Monthly>;
  /** An array relationship */
  share_price_change_stats_weekly: Array<Share_Price_Change_Stats_Weekly>;
  /** fetch data from the table in a streaming manner: "share_price_change_stats_weekly" */
  share_price_change_stats_weekly_stream: Array<Share_Price_Change_Stats_Weekly>;
  /** An array relationship */
  share_price_changes: Array<Share_Price_Changes>;
  /** An aggregate relationship */
  share_price_changes_aggregate: Share_Price_Changes_Aggregate;
  /** fetch data from the table in a streaming manner: "share_price_change" */
  share_price_changes_stream: Array<Share_Price_Changes>;
  /** fetch data from the table: "signal_stats_daily" */
  signal_stats_daily: Array<Signal_Stats_Daily>;
  /** fetch data from the table in a streaming manner: "signal_stats_daily" */
  signal_stats_daily_stream: Array<Signal_Stats_Daily>;
  /** fetch data from the table: "signal_stats_hourly" */
  signal_stats_hourly: Array<Signal_Stats_Hourly>;
  /** fetch data from the table in a streaming manner: "signal_stats_hourly" */
  signal_stats_hourly_stream: Array<Signal_Stats_Hourly>;
  /** fetch data from the table: "signal_stats_monthly" */
  signal_stats_monthly: Array<Signal_Stats_Monthly>;
  /** fetch data from the table in a streaming manner: "signal_stats_monthly" */
  signal_stats_monthly_stream: Array<Signal_Stats_Monthly>;
  /** fetch data from the table: "signal_stats_weekly" */
  signal_stats_weekly: Array<Signal_Stats_Weekly>;
  /** fetch data from the table in a streaming manner: "signal_stats_weekly" */
  signal_stats_weekly_stream: Array<Signal_Stats_Weekly>;
  /** An array relationship */
  signals: Array<Signals>;
  /** An aggregate relationship */
  signals_aggregate: Signals_Aggregate;
  /** execute function "signals_from_following" which returns "signal" */
  signals_from_following: Array<Signals>;
  /** execute function "signals_from_following" and query aggregates on result of table type "signal" */
  signals_from_following_aggregate: Signals_Aggregate;
  /** fetch data from the table in a streaming manner: "signal" */
  signals_stream: Array<Signals>;
  /** fetch data from the table: "stats" using primary key columns */
  stat?: Maybe<Stats>;
  /** fetch data from the table: "stats_hour" using primary key columns */
  statHour?: Maybe<StatHours>;
  /** fetch data from the table: "stats_hour" */
  statHours: Array<StatHours>;
  /** fetch data from the table in a streaming manner: "stats_hour" */
  statHours_stream: Array<StatHours>;
  /** fetch data from the table: "stats" */
  stats: Array<Stats>;
  /** fetch aggregated fields from the table: "stats" */
  stats_aggregate: Stats_Aggregate;
  /** fetch data from the table in a streaming manner: "stats" */
  stats_stream: Array<Stats>;
  /** fetch data from the table: "term" using primary key columns */
  term?: Maybe<Terms>;
  /** fetch data from the table: "term_total_state_change_stats_daily" */
  term_total_state_change_stats_daily: Array<Term_Total_State_Change_Stats_Daily>;
  /** fetch data from the table in a streaming manner: "term_total_state_change_stats_daily" */
  term_total_state_change_stats_daily_stream: Array<Term_Total_State_Change_Stats_Daily>;
  /** fetch data from the table: "term_total_state_change_stats_hourly" */
  term_total_state_change_stats_hourly: Array<Term_Total_State_Change_Stats_Hourly>;
  /** fetch data from the table in a streaming manner: "term_total_state_change_stats_hourly" */
  term_total_state_change_stats_hourly_stream: Array<Term_Total_State_Change_Stats_Hourly>;
  /** fetch data from the table: "term_total_state_change_stats_monthly" */
  term_total_state_change_stats_monthly: Array<Term_Total_State_Change_Stats_Monthly>;
  /** fetch data from the table in a streaming manner: "term_total_state_change_stats_monthly" */
  term_total_state_change_stats_monthly_stream: Array<Term_Total_State_Change_Stats_Monthly>;
  /** fetch data from the table: "term_total_state_change_stats_weekly" */
  term_total_state_change_stats_weekly: Array<Term_Total_State_Change_Stats_Weekly>;
  /** fetch data from the table in a streaming manner: "term_total_state_change_stats_weekly" */
  term_total_state_change_stats_weekly_stream: Array<Term_Total_State_Change_Stats_Weekly>;
  /** An array relationship */
  term_total_state_changes: Array<Term_Total_State_Changes>;
  /** fetch data from the table in a streaming manner: "term_total_state_change" */
  term_total_state_changes_stream: Array<Term_Total_State_Changes>;
  /** fetch data from the table: "term" */
  terms: Array<Terms>;
  /** fetch aggregated fields from the table: "term" */
  terms_aggregate: Terms_Aggregate;
  /** fetch data from the table in a streaming manner: "term" */
  terms_stream: Array<Terms>;
  /** fetch data from the table: "text_object" using primary key columns */
  text_object?: Maybe<Text_Objects>;
  /** fetch data from the table: "text_object" */
  text_objects: Array<Text_Objects>;
  /** fetch aggregated fields from the table: "text_object" */
  text_objects_aggregate: Text_Objects_Aggregate;
  /** fetch data from the table in a streaming manner: "text_object" */
  text_objects_stream: Array<Text_Objects>;
  /** fetch data from the table: "thing" using primary key columns */
  thing?: Maybe<Things>;
  /** fetch data from the table: "thing" */
  things: Array<Things>;
  /** fetch aggregated fields from the table: "thing" */
  things_aggregate: Things_Aggregate;
  /** fetch data from the table in a streaming manner: "thing" */
  things_stream: Array<Things>;
  /** fetch data from the table: "triple" using primary key columns */
  triple?: Maybe<Triples>;
  /** fetch data from the table: "triple_term" using primary key columns */
  triple_term?: Maybe<Triple_Term>;
  /** fetch data from the table in a streaming manner: "triple_term" */
  triple_term_stream: Array<Triple_Term>;
  /** fetch data from the table: "triple_term" */
  triple_terms: Array<Triple_Term>;
  /** fetch data from the table: "triple_vault" using primary key columns */
  triple_vault?: Maybe<Triple_Vault>;
  /** fetch data from the table in a streaming manner: "triple_vault" */
  triple_vault_stream: Array<Triple_Vault>;
  /** fetch data from the table: "triple_vault" */
  triple_vaults: Array<Triple_Vault>;
  /** An array relationship */
  triples: Array<Triples>;
  /** An aggregate relationship */
  triples_aggregate: Triples_Aggregate;
  /** fetch data from the table in a streaming manner: "triple" */
  triples_stream: Array<Triples>;
  /** fetch data from the table: "vault" using primary key columns */
  vault?: Maybe<Vaults>;
  /** An array relationship */
  vaults: Array<Vaults>;
  /** An aggregate relationship */
  vaults_aggregate: Vaults_Aggregate;
  /** fetch data from the table in a streaming manner: "vault" */
  vaults_stream: Array<Vaults>;
};

export type Subscription_RootAccountArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAtomArgs = {
  term_id: Scalars['String']['input'];
};

export type Subscription_RootAtom_ValueArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootAtom_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Atom_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Atom_Values_Order_By>>;
  where?: InputMaybe<Atom_Values_Bool_Exp>;
};

export type Subscription_RootAtom_Values_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Atom_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Atom_Values_Order_By>>;
  where?: InputMaybe<Atom_Values_Bool_Exp>;
};

export type Subscription_RootAtom_Values_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Atom_Values_Stream_Cursor_Input>>;
  where?: InputMaybe<Atom_Values_Bool_Exp>;
};

export type Subscription_RootAtomsArgs = {
  distinct_on?: InputMaybe<Array<Atoms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Atoms_Order_By>>;
  where?: InputMaybe<Atoms_Bool_Exp>;
};

export type Subscription_RootAtoms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Atoms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Atoms_Order_By>>;
  where?: InputMaybe<Atoms_Bool_Exp>;
};

export type Subscription_RootAtoms_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Atoms_Stream_Cursor_Input>>;
  where?: InputMaybe<Atoms_Bool_Exp>;
};

export type Subscription_RootBookArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootBooksArgs = {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
};

export type Subscription_RootBooks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
};

export type Subscription_RootBooks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Books_Stream_Cursor_Input>>;
  where?: InputMaybe<Books_Bool_Exp>;
};

export type Subscription_RootByte_ObjectArgs = {
  distinct_on?: InputMaybe<Array<Byte_Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Byte_Object_Order_By>>;
  where?: InputMaybe<Byte_Object_Bool_Exp>;
};

export type Subscription_RootByte_Object_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Byte_Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Byte_Object_Order_By>>;
  where?: InputMaybe<Byte_Object_Bool_Exp>;
};

export type Subscription_RootByte_Object_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootByte_Object_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Byte_Object_Stream_Cursor_Input>>;
  where?: InputMaybe<Byte_Object_Bool_Exp>;
};

export type Subscription_RootCached_Images_Cached_ImageArgs = {
  distinct_on?: InputMaybe<Array<Cached_Images_Cached_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cached_Images_Cached_Image_Order_By>>;
  where?: InputMaybe<Cached_Images_Cached_Image_Bool_Exp>;
};

export type Subscription_RootCached_Images_Cached_Image_By_PkArgs = {
  url: Scalars['String']['input'];
};

export type Subscription_RootCached_Images_Cached_Image_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Cached_Images_Cached_Image_Stream_Cursor_Input>>;
  where?: InputMaybe<Cached_Images_Cached_Image_Bool_Exp>;
};

export type Subscription_RootCaip10Args = {
  id: Scalars['String']['input'];
};

export type Subscription_RootCaip10_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Caip10_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Caip10_Order_By>>;
  where?: InputMaybe<Caip10_Bool_Exp>;
};

export type Subscription_RootCaip10_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Caip10_Stream_Cursor_Input>>;
  where?: InputMaybe<Caip10_Bool_Exp>;
};

export type Subscription_RootCaip10sArgs = {
  distinct_on?: InputMaybe<Array<Caip10_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Caip10_Order_By>>;
  where?: InputMaybe<Caip10_Bool_Exp>;
};

export type Subscription_RootChainlink_PriceArgs = {
  id: Scalars['numeric']['input'];
};

export type Subscription_RootChainlink_PricesArgs = {
  distinct_on?: InputMaybe<Array<Chainlink_Prices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chainlink_Prices_Order_By>>;
  where?: InputMaybe<Chainlink_Prices_Bool_Exp>;
};

export type Subscription_RootChainlink_Prices_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Chainlink_Prices_Stream_Cursor_Input>>;
  where?: InputMaybe<Chainlink_Prices_Bool_Exp>;
};

export type Subscription_RootDepositArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootDepositsArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposits_Order_By>>;
  where?: InputMaybe<Deposits_Bool_Exp>;
};

export type Subscription_RootDeposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposits_Order_By>>;
  where?: InputMaybe<Deposits_Bool_Exp>;
};

export type Subscription_RootDeposits_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Deposits_Stream_Cursor_Input>>;
  where?: InputMaybe<Deposits_Bool_Exp>;
};

export type Subscription_RootEventArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};

export type Subscription_RootEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};

export type Subscription_RootEvents_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Events_Stream_Cursor_Input>>;
  where?: InputMaybe<Events_Bool_Exp>;
};

export type Subscription_RootFee_TransferArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootFee_TransfersArgs = {
  distinct_on?: InputMaybe<Array<Fee_Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fee_Transfers_Order_By>>;
  where?: InputMaybe<Fee_Transfers_Bool_Exp>;
};

export type Subscription_RootFee_Transfers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fee_Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fee_Transfers_Order_By>>;
  where?: InputMaybe<Fee_Transfers_Bool_Exp>;
};

export type Subscription_RootFee_Transfers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Fee_Transfers_Stream_Cursor_Input>>;
  where?: InputMaybe<Fee_Transfers_Bool_Exp>;
};

export type Subscription_RootFollowingArgs = {
  args: Following_Args;
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootFollowing_AggregateArgs = {
  args: Following_Args;
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootJson_ObjectArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootJson_ObjectsArgs = {
  distinct_on?: InputMaybe<Array<Json_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Json_Objects_Order_By>>;
  where?: InputMaybe<Json_Objects_Bool_Exp>;
};

export type Subscription_RootJson_Objects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Json_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Json_Objects_Order_By>>;
  where?: InputMaybe<Json_Objects_Bool_Exp>;
};

export type Subscription_RootJson_Objects_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Json_Objects_Stream_Cursor_Input>>;
  where?: InputMaybe<Json_Objects_Bool_Exp>;
};

export type Subscription_RootOrganizationArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};

export type Subscription_RootOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};

export type Subscription_RootOrganizations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organizations_Stream_Cursor_Input>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};

export type Subscription_RootPersonArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootPersonsArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};

export type Subscription_RootPersons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};

export type Subscription_RootPersons_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Persons_Stream_Cursor_Input>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};

export type Subscription_RootPositionArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootPositionsArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

export type Subscription_RootPositions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

export type Subscription_RootPositions_From_FollowingArgs = {
  args: Positions_From_Following_Args;
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

export type Subscription_RootPositions_From_Following_AggregateArgs = {
  args: Positions_From_Following_Args;
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

export type Subscription_RootPositions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Positions_Stream_Cursor_Input>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

export type Subscription_RootPredicate_ObjectsArgs = {
  distinct_on?: InputMaybe<Array<Predicate_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Predicate_Objects_Order_By>>;
  where?: InputMaybe<Predicate_Objects_Bool_Exp>;
};

export type Subscription_RootPredicate_Objects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Predicate_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Predicate_Objects_Order_By>>;
  where?: InputMaybe<Predicate_Objects_Bool_Exp>;
};

export type Subscription_RootPredicate_Objects_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootPredicate_Objects_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Predicate_Objects_Stream_Cursor_Input>>;
  where?: InputMaybe<Predicate_Objects_Bool_Exp>;
};

export type Subscription_RootRedemptionArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootRedemptionsArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Redemptions_Order_By>>;
  where?: InputMaybe<Redemptions_Bool_Exp>;
};

export type Subscription_RootRedemptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Redemptions_Order_By>>;
  where?: InputMaybe<Redemptions_Bool_Exp>;
};

export type Subscription_RootRedemptions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Redemptions_Stream_Cursor_Input>>;
  where?: InputMaybe<Redemptions_Bool_Exp>;
};

export type Subscription_RootSearch_Positions_On_SubjectArgs = {
  args: Search_Positions_On_Subject_Args;
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

export type Subscription_RootSearch_Positions_On_Subject_AggregateArgs = {
  args: Search_Positions_On_Subject_Args;
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

export type Subscription_RootSearch_TermArgs = {
  args: Search_Term_Args;
  distinct_on?: InputMaybe<Array<Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Terms_Order_By>>;
  where?: InputMaybe<Terms_Bool_Exp>;
};

export type Subscription_RootSearch_Term_AggregateArgs = {
  args: Search_Term_Args;
  distinct_on?: InputMaybe<Array<Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Terms_Order_By>>;
  where?: InputMaybe<Terms_Bool_Exp>;
};

export type Subscription_RootSearch_Term_From_FollowingArgs = {
  args: Search_Term_From_Following_Args;
  distinct_on?: InputMaybe<Array<Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Terms_Order_By>>;
  where?: InputMaybe<Terms_Bool_Exp>;
};

export type Subscription_RootSearch_Term_From_Following_AggregateArgs = {
  args: Search_Term_From_Following_Args;
  distinct_on?: InputMaybe<Array<Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Terms_Order_By>>;
  where?: InputMaybe<Terms_Bool_Exp>;
};

export type Subscription_RootShare_Price_Change_Stats_DailyArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Change_Stats_Daily_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Change_Stats_Daily_Order_By>>;
  where?: InputMaybe<Share_Price_Change_Stats_Daily_Bool_Exp>;
};

export type Subscription_RootShare_Price_Change_Stats_Daily_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Share_Price_Change_Stats_Daily_Stream_Cursor_Input>>;
  where?: InputMaybe<Share_Price_Change_Stats_Daily_Bool_Exp>;
};

export type Subscription_RootShare_Price_Change_Stats_HourlyArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Change_Stats_Hourly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Change_Stats_Hourly_Order_By>>;
  where?: InputMaybe<Share_Price_Change_Stats_Hourly_Bool_Exp>;
};

export type Subscription_RootShare_Price_Change_Stats_Hourly_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Share_Price_Change_Stats_Hourly_Stream_Cursor_Input>>;
  where?: InputMaybe<Share_Price_Change_Stats_Hourly_Bool_Exp>;
};

export type Subscription_RootShare_Price_Change_Stats_MonthlyArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Change_Stats_Monthly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Change_Stats_Monthly_Order_By>>;
  where?: InputMaybe<Share_Price_Change_Stats_Monthly_Bool_Exp>;
};

export type Subscription_RootShare_Price_Change_Stats_Monthly_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Share_Price_Change_Stats_Monthly_Stream_Cursor_Input>>;
  where?: InputMaybe<Share_Price_Change_Stats_Monthly_Bool_Exp>;
};

export type Subscription_RootShare_Price_Change_Stats_WeeklyArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Change_Stats_Weekly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Change_Stats_Weekly_Order_By>>;
  where?: InputMaybe<Share_Price_Change_Stats_Weekly_Bool_Exp>;
};

export type Subscription_RootShare_Price_Change_Stats_Weekly_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Share_Price_Change_Stats_Weekly_Stream_Cursor_Input>>;
  where?: InputMaybe<Share_Price_Change_Stats_Weekly_Bool_Exp>;
};

export type Subscription_RootShare_Price_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Changes_Order_By>>;
  where?: InputMaybe<Share_Price_Changes_Bool_Exp>;
};

export type Subscription_RootShare_Price_Changes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Changes_Order_By>>;
  where?: InputMaybe<Share_Price_Changes_Bool_Exp>;
};

export type Subscription_RootShare_Price_Changes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Share_Price_Changes_Stream_Cursor_Input>>;
  where?: InputMaybe<Share_Price_Changes_Bool_Exp>;
};

export type Subscription_RootSignal_Stats_DailyArgs = {
  distinct_on?: InputMaybe<Array<Signal_Stats_Daily_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signal_Stats_Daily_Order_By>>;
  where?: InputMaybe<Signal_Stats_Daily_Bool_Exp>;
};

export type Subscription_RootSignal_Stats_Daily_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Signal_Stats_Daily_Stream_Cursor_Input>>;
  where?: InputMaybe<Signal_Stats_Daily_Bool_Exp>;
};

export type Subscription_RootSignal_Stats_HourlyArgs = {
  distinct_on?: InputMaybe<Array<Signal_Stats_Hourly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signal_Stats_Hourly_Order_By>>;
  where?: InputMaybe<Signal_Stats_Hourly_Bool_Exp>;
};

export type Subscription_RootSignal_Stats_Hourly_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Signal_Stats_Hourly_Stream_Cursor_Input>>;
  where?: InputMaybe<Signal_Stats_Hourly_Bool_Exp>;
};

export type Subscription_RootSignal_Stats_MonthlyArgs = {
  distinct_on?: InputMaybe<Array<Signal_Stats_Monthly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signal_Stats_Monthly_Order_By>>;
  where?: InputMaybe<Signal_Stats_Monthly_Bool_Exp>;
};

export type Subscription_RootSignal_Stats_Monthly_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Signal_Stats_Monthly_Stream_Cursor_Input>>;
  where?: InputMaybe<Signal_Stats_Monthly_Bool_Exp>;
};

export type Subscription_RootSignal_Stats_WeeklyArgs = {
  distinct_on?: InputMaybe<Array<Signal_Stats_Weekly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signal_Stats_Weekly_Order_By>>;
  where?: InputMaybe<Signal_Stats_Weekly_Bool_Exp>;
};

export type Subscription_RootSignal_Stats_Weekly_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Signal_Stats_Weekly_Stream_Cursor_Input>>;
  where?: InputMaybe<Signal_Stats_Weekly_Bool_Exp>;
};

export type Subscription_RootSignalsArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signals_Order_By>>;
  where?: InputMaybe<Signals_Bool_Exp>;
};

export type Subscription_RootSignals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signals_Order_By>>;
  where?: InputMaybe<Signals_Bool_Exp>;
};

export type Subscription_RootSignals_From_FollowingArgs = {
  args: Signals_From_Following_Args;
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signals_Order_By>>;
  where?: InputMaybe<Signals_Bool_Exp>;
};

export type Subscription_RootSignals_From_Following_AggregateArgs = {
  args: Signals_From_Following_Args;
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signals_Order_By>>;
  where?: InputMaybe<Signals_Bool_Exp>;
};

export type Subscription_RootSignals_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Signals_Stream_Cursor_Input>>;
  where?: InputMaybe<Signals_Bool_Exp>;
};

export type Subscription_RootStatArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootStatHourArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootStatHoursArgs = {
  distinct_on?: InputMaybe<Array<StatHours_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<StatHours_Order_By>>;
  where?: InputMaybe<StatHours_Bool_Exp>;
};

export type Subscription_RootStatHours_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<StatHours_Stream_Cursor_Input>>;
  where?: InputMaybe<StatHours_Bool_Exp>;
};

export type Subscription_RootStatsArgs = {
  distinct_on?: InputMaybe<Array<Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stats_Order_By>>;
  where?: InputMaybe<Stats_Bool_Exp>;
};

export type Subscription_RootStats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Stats_Order_By>>;
  where?: InputMaybe<Stats_Bool_Exp>;
};

export type Subscription_RootStats_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Stats_Stream_Cursor_Input>>;
  where?: InputMaybe<Stats_Bool_Exp>;
};

export type Subscription_RootTermArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootTerm_Total_State_Change_Stats_DailyArgs = {
  distinct_on?: InputMaybe<Array<Term_Total_State_Change_Stats_Daily_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Term_Total_State_Change_Stats_Daily_Order_By>>;
  where?: InputMaybe<Term_Total_State_Change_Stats_Daily_Bool_Exp>;
};

export type Subscription_RootTerm_Total_State_Change_Stats_Daily_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Term_Total_State_Change_Stats_Daily_Stream_Cursor_Input>>;
  where?: InputMaybe<Term_Total_State_Change_Stats_Daily_Bool_Exp>;
};

export type Subscription_RootTerm_Total_State_Change_Stats_HourlyArgs = {
  distinct_on?: InputMaybe<Array<Term_Total_State_Change_Stats_Hourly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Term_Total_State_Change_Stats_Hourly_Order_By>>;
  where?: InputMaybe<Term_Total_State_Change_Stats_Hourly_Bool_Exp>;
};

export type Subscription_RootTerm_Total_State_Change_Stats_Hourly_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Term_Total_State_Change_Stats_Hourly_Stream_Cursor_Input>>;
  where?: InputMaybe<Term_Total_State_Change_Stats_Hourly_Bool_Exp>;
};

export type Subscription_RootTerm_Total_State_Change_Stats_MonthlyArgs = {
  distinct_on?: InputMaybe<Array<Term_Total_State_Change_Stats_Monthly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Term_Total_State_Change_Stats_Monthly_Order_By>>;
  where?: InputMaybe<Term_Total_State_Change_Stats_Monthly_Bool_Exp>;
};

export type Subscription_RootTerm_Total_State_Change_Stats_Monthly_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Term_Total_State_Change_Stats_Monthly_Stream_Cursor_Input>>;
  where?: InputMaybe<Term_Total_State_Change_Stats_Monthly_Bool_Exp>;
};

export type Subscription_RootTerm_Total_State_Change_Stats_WeeklyArgs = {
  distinct_on?: InputMaybe<Array<Term_Total_State_Change_Stats_Weekly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Term_Total_State_Change_Stats_Weekly_Order_By>>;
  where?: InputMaybe<Term_Total_State_Change_Stats_Weekly_Bool_Exp>;
};

export type Subscription_RootTerm_Total_State_Change_Stats_Weekly_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Term_Total_State_Change_Stats_Weekly_Stream_Cursor_Input>>;
  where?: InputMaybe<Term_Total_State_Change_Stats_Weekly_Bool_Exp>;
};

export type Subscription_RootTerm_Total_State_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Term_Total_State_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Term_Total_State_Changes_Order_By>>;
  where?: InputMaybe<Term_Total_State_Changes_Bool_Exp>;
};

export type Subscription_RootTerm_Total_State_Changes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Term_Total_State_Changes_Stream_Cursor_Input>>;
  where?: InputMaybe<Term_Total_State_Changes_Bool_Exp>;
};

export type Subscription_RootTermsArgs = {
  distinct_on?: InputMaybe<Array<Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Terms_Order_By>>;
  where?: InputMaybe<Terms_Bool_Exp>;
};

export type Subscription_RootTerms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Terms_Order_By>>;
  where?: InputMaybe<Terms_Bool_Exp>;
};

export type Subscription_RootTerms_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Terms_Stream_Cursor_Input>>;
  where?: InputMaybe<Terms_Bool_Exp>;
};

export type Subscription_RootText_ObjectArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootText_ObjectsArgs = {
  distinct_on?: InputMaybe<Array<Text_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Text_Objects_Order_By>>;
  where?: InputMaybe<Text_Objects_Bool_Exp>;
};

export type Subscription_RootText_Objects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Text_Objects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Text_Objects_Order_By>>;
  where?: InputMaybe<Text_Objects_Bool_Exp>;
};

export type Subscription_RootText_Objects_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Text_Objects_Stream_Cursor_Input>>;
  where?: InputMaybe<Text_Objects_Bool_Exp>;
};

export type Subscription_RootThingArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_RootThingsArgs = {
  distinct_on?: InputMaybe<Array<Things_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Things_Order_By>>;
  where?: InputMaybe<Things_Bool_Exp>;
};

export type Subscription_RootThings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Things_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Things_Order_By>>;
  where?: InputMaybe<Things_Bool_Exp>;
};

export type Subscription_RootThings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Things_Stream_Cursor_Input>>;
  where?: InputMaybe<Things_Bool_Exp>;
};

export type Subscription_RootTripleArgs = {
  term_id: Scalars['String']['input'];
};

export type Subscription_RootTriple_TermArgs = {
  term_id: Scalars['String']['input'];
};

export type Subscription_RootTriple_Term_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Triple_Term_Stream_Cursor_Input>>;
  where?: InputMaybe<Triple_Term_Bool_Exp>;
};

export type Subscription_RootTriple_TermsArgs = {
  distinct_on?: InputMaybe<Array<Triple_Term_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Triple_Term_Order_By>>;
  where?: InputMaybe<Triple_Term_Bool_Exp>;
};

export type Subscription_RootTriple_VaultArgs = {
  curve_id: Scalars['numeric']['input'];
  term_id: Scalars['String']['input'];
};

export type Subscription_RootTriple_Vault_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Triple_Vault_Stream_Cursor_Input>>;
  where?: InputMaybe<Triple_Vault_Bool_Exp>;
};

export type Subscription_RootTriple_VaultsArgs = {
  distinct_on?: InputMaybe<Array<Triple_Vault_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Triple_Vault_Order_By>>;
  where?: InputMaybe<Triple_Vault_Bool_Exp>;
};

export type Subscription_RootTriplesArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Triples_Order_By>>;
  where?: InputMaybe<Triples_Bool_Exp>;
};

export type Subscription_RootTriples_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Triples_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Triples_Order_By>>;
  where?: InputMaybe<Triples_Bool_Exp>;
};

export type Subscription_RootTriples_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Triples_Stream_Cursor_Input>>;
  where?: InputMaybe<Triples_Bool_Exp>;
};

export type Subscription_RootVaultArgs = {
  curve_id: Scalars['numeric']['input'];
  term_id: Scalars['String']['input'];
};

export type Subscription_RootVaultsArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vaults_Order_By>>;
  where?: InputMaybe<Vaults_Bool_Exp>;
};

export type Subscription_RootVaults_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vaults_Order_By>>;
  where?: InputMaybe<Vaults_Bool_Exp>;
};

export type Subscription_RootVaults_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vaults_Stream_Cursor_Input>>;
  where?: InputMaybe<Vaults_Bool_Exp>;
};

/** columns and relationships of "term_total_state_change_stats_daily" */
export type Term_Total_State_Change_Stats_Daily = {
  __typename?: 'term_total_state_change_stats_daily';
  bucket?: Maybe<Scalars['timestamptz']['output']>;
  difference?: Maybe<Scalars['numeric']['output']>;
  first_total_market_cap?: Maybe<Scalars['numeric']['output']>;
  last_total_market_cap?: Maybe<Scalars['numeric']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "term_total_state_change_stats_daily" */
export type Term_Total_State_Change_Stats_Daily_Aggregate_Order_By = {
  avg?: InputMaybe<Term_Total_State_Change_Stats_Daily_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Term_Total_State_Change_Stats_Daily_Max_Order_By>;
  min?: InputMaybe<Term_Total_State_Change_Stats_Daily_Min_Order_By>;
  stddev?: InputMaybe<Term_Total_State_Change_Stats_Daily_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Term_Total_State_Change_Stats_Daily_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Term_Total_State_Change_Stats_Daily_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Term_Total_State_Change_Stats_Daily_Sum_Order_By>;
  var_pop?: InputMaybe<Term_Total_State_Change_Stats_Daily_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Term_Total_State_Change_Stats_Daily_Var_Samp_Order_By>;
  variance?: InputMaybe<Term_Total_State_Change_Stats_Daily_Variance_Order_By>;
};

/** order by avg() on columns of table "term_total_state_change_stats_daily" */
export type Term_Total_State_Change_Stats_Daily_Avg_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "term_total_state_change_stats_daily". All fields are combined with a logical 'AND'. */
export type Term_Total_State_Change_Stats_Daily_Bool_Exp = {
  _and?: InputMaybe<Array<Term_Total_State_Change_Stats_Daily_Bool_Exp>>;
  _not?: InputMaybe<Term_Total_State_Change_Stats_Daily_Bool_Exp>;
  _or?: InputMaybe<Array<Term_Total_State_Change_Stats_Daily_Bool_Exp>>;
  bucket?: InputMaybe<Timestamptz_Comparison_Exp>;
  difference?: InputMaybe<Numeric_Comparison_Exp>;
  first_total_market_cap?: InputMaybe<Numeric_Comparison_Exp>;
  last_total_market_cap?: InputMaybe<Numeric_Comparison_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "term_total_state_change_stats_daily" */
export type Term_Total_State_Change_Stats_Daily_Max_Order_By = {
  bucket?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "term_total_state_change_stats_daily" */
export type Term_Total_State_Change_Stats_Daily_Min_Order_By = {
  bucket?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "term_total_state_change_stats_daily". */
export type Term_Total_State_Change_Stats_Daily_Order_By = {
  bucket?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** select columns of table "term_total_state_change_stats_daily" */
export enum Term_Total_State_Change_Stats_Daily_Select_Column {
  /** column name */
  Bucket = 'bucket',
  /** column name */
  Difference = 'difference',
  /** column name */
  FirstTotalMarketCap = 'first_total_market_cap',
  /** column name */
  LastTotalMarketCap = 'last_total_market_cap',
  /** column name */
  TermId = 'term_id',
}

/** order by stddev() on columns of table "term_total_state_change_stats_daily" */
export type Term_Total_State_Change_Stats_Daily_Stddev_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "term_total_state_change_stats_daily" */
export type Term_Total_State_Change_Stats_Daily_Stddev_Pop_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "term_total_state_change_stats_daily" */
export type Term_Total_State_Change_Stats_Daily_Stddev_Samp_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "term_total_state_change_stats_daily" */
export type Term_Total_State_Change_Stats_Daily_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Term_Total_State_Change_Stats_Daily_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Term_Total_State_Change_Stats_Daily_Stream_Cursor_Value_Input = {
  bucket?: InputMaybe<Scalars['timestamptz']['input']>;
  difference?: InputMaybe<Scalars['numeric']['input']>;
  first_total_market_cap?: InputMaybe<Scalars['numeric']['input']>;
  last_total_market_cap?: InputMaybe<Scalars['numeric']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "term_total_state_change_stats_daily" */
export type Term_Total_State_Change_Stats_Daily_Sum_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "term_total_state_change_stats_daily" */
export type Term_Total_State_Change_Stats_Daily_Var_Pop_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "term_total_state_change_stats_daily" */
export type Term_Total_State_Change_Stats_Daily_Var_Samp_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "term_total_state_change_stats_daily" */
export type Term_Total_State_Change_Stats_Daily_Variance_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** columns and relationships of "term_total_state_change_stats_hourly" */
export type Term_Total_State_Change_Stats_Hourly = {
  __typename?: 'term_total_state_change_stats_hourly';
  bucket?: Maybe<Scalars['timestamptz']['output']>;
  difference?: Maybe<Scalars['numeric']['output']>;
  first_total_market_cap?: Maybe<Scalars['numeric']['output']>;
  last_total_market_cap?: Maybe<Scalars['numeric']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "term_total_state_change_stats_hourly" */
export type Term_Total_State_Change_Stats_Hourly_Aggregate_Order_By = {
  avg?: InputMaybe<Term_Total_State_Change_Stats_Hourly_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Term_Total_State_Change_Stats_Hourly_Max_Order_By>;
  min?: InputMaybe<Term_Total_State_Change_Stats_Hourly_Min_Order_By>;
  stddev?: InputMaybe<Term_Total_State_Change_Stats_Hourly_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Term_Total_State_Change_Stats_Hourly_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Term_Total_State_Change_Stats_Hourly_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Term_Total_State_Change_Stats_Hourly_Sum_Order_By>;
  var_pop?: InputMaybe<Term_Total_State_Change_Stats_Hourly_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Term_Total_State_Change_Stats_Hourly_Var_Samp_Order_By>;
  variance?: InputMaybe<Term_Total_State_Change_Stats_Hourly_Variance_Order_By>;
};

/** order by avg() on columns of table "term_total_state_change_stats_hourly" */
export type Term_Total_State_Change_Stats_Hourly_Avg_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "term_total_state_change_stats_hourly". All fields are combined with a logical 'AND'. */
export type Term_Total_State_Change_Stats_Hourly_Bool_Exp = {
  _and?: InputMaybe<Array<Term_Total_State_Change_Stats_Hourly_Bool_Exp>>;
  _not?: InputMaybe<Term_Total_State_Change_Stats_Hourly_Bool_Exp>;
  _or?: InputMaybe<Array<Term_Total_State_Change_Stats_Hourly_Bool_Exp>>;
  bucket?: InputMaybe<Timestamptz_Comparison_Exp>;
  difference?: InputMaybe<Numeric_Comparison_Exp>;
  first_total_market_cap?: InputMaybe<Numeric_Comparison_Exp>;
  last_total_market_cap?: InputMaybe<Numeric_Comparison_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "term_total_state_change_stats_hourly" */
export type Term_Total_State_Change_Stats_Hourly_Max_Order_By = {
  bucket?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "term_total_state_change_stats_hourly" */
export type Term_Total_State_Change_Stats_Hourly_Min_Order_By = {
  bucket?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "term_total_state_change_stats_hourly". */
export type Term_Total_State_Change_Stats_Hourly_Order_By = {
  bucket?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** select columns of table "term_total_state_change_stats_hourly" */
export enum Term_Total_State_Change_Stats_Hourly_Select_Column {
  /** column name */
  Bucket = 'bucket',
  /** column name */
  Difference = 'difference',
  /** column name */
  FirstTotalMarketCap = 'first_total_market_cap',
  /** column name */
  LastTotalMarketCap = 'last_total_market_cap',
  /** column name */
  TermId = 'term_id',
}

/** order by stddev() on columns of table "term_total_state_change_stats_hourly" */
export type Term_Total_State_Change_Stats_Hourly_Stddev_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "term_total_state_change_stats_hourly" */
export type Term_Total_State_Change_Stats_Hourly_Stddev_Pop_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "term_total_state_change_stats_hourly" */
export type Term_Total_State_Change_Stats_Hourly_Stddev_Samp_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "term_total_state_change_stats_hourly" */
export type Term_Total_State_Change_Stats_Hourly_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Term_Total_State_Change_Stats_Hourly_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Term_Total_State_Change_Stats_Hourly_Stream_Cursor_Value_Input = {
  bucket?: InputMaybe<Scalars['timestamptz']['input']>;
  difference?: InputMaybe<Scalars['numeric']['input']>;
  first_total_market_cap?: InputMaybe<Scalars['numeric']['input']>;
  last_total_market_cap?: InputMaybe<Scalars['numeric']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "term_total_state_change_stats_hourly" */
export type Term_Total_State_Change_Stats_Hourly_Sum_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "term_total_state_change_stats_hourly" */
export type Term_Total_State_Change_Stats_Hourly_Var_Pop_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "term_total_state_change_stats_hourly" */
export type Term_Total_State_Change_Stats_Hourly_Var_Samp_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "term_total_state_change_stats_hourly" */
export type Term_Total_State_Change_Stats_Hourly_Variance_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** columns and relationships of "term_total_state_change_stats_monthly" */
export type Term_Total_State_Change_Stats_Monthly = {
  __typename?: 'term_total_state_change_stats_monthly';
  bucket?: Maybe<Scalars['timestamptz']['output']>;
  difference?: Maybe<Scalars['numeric']['output']>;
  first_total_market_cap?: Maybe<Scalars['numeric']['output']>;
  last_total_market_cap?: Maybe<Scalars['numeric']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "term_total_state_change_stats_monthly" */
export type Term_Total_State_Change_Stats_Monthly_Aggregate_Order_By = {
  avg?: InputMaybe<Term_Total_State_Change_Stats_Monthly_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Term_Total_State_Change_Stats_Monthly_Max_Order_By>;
  min?: InputMaybe<Term_Total_State_Change_Stats_Monthly_Min_Order_By>;
  stddev?: InputMaybe<Term_Total_State_Change_Stats_Monthly_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Term_Total_State_Change_Stats_Monthly_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Term_Total_State_Change_Stats_Monthly_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Term_Total_State_Change_Stats_Monthly_Sum_Order_By>;
  var_pop?: InputMaybe<Term_Total_State_Change_Stats_Monthly_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Term_Total_State_Change_Stats_Monthly_Var_Samp_Order_By>;
  variance?: InputMaybe<Term_Total_State_Change_Stats_Monthly_Variance_Order_By>;
};

/** order by avg() on columns of table "term_total_state_change_stats_monthly" */
export type Term_Total_State_Change_Stats_Monthly_Avg_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "term_total_state_change_stats_monthly". All fields are combined with a logical 'AND'. */
export type Term_Total_State_Change_Stats_Monthly_Bool_Exp = {
  _and?: InputMaybe<Array<Term_Total_State_Change_Stats_Monthly_Bool_Exp>>;
  _not?: InputMaybe<Term_Total_State_Change_Stats_Monthly_Bool_Exp>;
  _or?: InputMaybe<Array<Term_Total_State_Change_Stats_Monthly_Bool_Exp>>;
  bucket?: InputMaybe<Timestamptz_Comparison_Exp>;
  difference?: InputMaybe<Numeric_Comparison_Exp>;
  first_total_market_cap?: InputMaybe<Numeric_Comparison_Exp>;
  last_total_market_cap?: InputMaybe<Numeric_Comparison_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "term_total_state_change_stats_monthly" */
export type Term_Total_State_Change_Stats_Monthly_Max_Order_By = {
  bucket?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "term_total_state_change_stats_monthly" */
export type Term_Total_State_Change_Stats_Monthly_Min_Order_By = {
  bucket?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "term_total_state_change_stats_monthly". */
export type Term_Total_State_Change_Stats_Monthly_Order_By = {
  bucket?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** select columns of table "term_total_state_change_stats_monthly" */
export enum Term_Total_State_Change_Stats_Monthly_Select_Column {
  /** column name */
  Bucket = 'bucket',
  /** column name */
  Difference = 'difference',
  /** column name */
  FirstTotalMarketCap = 'first_total_market_cap',
  /** column name */
  LastTotalMarketCap = 'last_total_market_cap',
  /** column name */
  TermId = 'term_id',
}

/** order by stddev() on columns of table "term_total_state_change_stats_monthly" */
export type Term_Total_State_Change_Stats_Monthly_Stddev_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "term_total_state_change_stats_monthly" */
export type Term_Total_State_Change_Stats_Monthly_Stddev_Pop_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "term_total_state_change_stats_monthly" */
export type Term_Total_State_Change_Stats_Monthly_Stddev_Samp_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "term_total_state_change_stats_monthly" */
export type Term_Total_State_Change_Stats_Monthly_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Term_Total_State_Change_Stats_Monthly_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Term_Total_State_Change_Stats_Monthly_Stream_Cursor_Value_Input = {
  bucket?: InputMaybe<Scalars['timestamptz']['input']>;
  difference?: InputMaybe<Scalars['numeric']['input']>;
  first_total_market_cap?: InputMaybe<Scalars['numeric']['input']>;
  last_total_market_cap?: InputMaybe<Scalars['numeric']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "term_total_state_change_stats_monthly" */
export type Term_Total_State_Change_Stats_Monthly_Sum_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "term_total_state_change_stats_monthly" */
export type Term_Total_State_Change_Stats_Monthly_Var_Pop_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "term_total_state_change_stats_monthly" */
export type Term_Total_State_Change_Stats_Monthly_Var_Samp_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "term_total_state_change_stats_monthly" */
export type Term_Total_State_Change_Stats_Monthly_Variance_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** columns and relationships of "term_total_state_change_stats_weekly" */
export type Term_Total_State_Change_Stats_Weekly = {
  __typename?: 'term_total_state_change_stats_weekly';
  bucket?: Maybe<Scalars['timestamptz']['output']>;
  difference?: Maybe<Scalars['numeric']['output']>;
  first_total_market_cap?: Maybe<Scalars['numeric']['output']>;
  last_total_market_cap?: Maybe<Scalars['numeric']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "term_total_state_change_stats_weekly" */
export type Term_Total_State_Change_Stats_Weekly_Aggregate_Order_By = {
  avg?: InputMaybe<Term_Total_State_Change_Stats_Weekly_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Term_Total_State_Change_Stats_Weekly_Max_Order_By>;
  min?: InputMaybe<Term_Total_State_Change_Stats_Weekly_Min_Order_By>;
  stddev?: InputMaybe<Term_Total_State_Change_Stats_Weekly_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Term_Total_State_Change_Stats_Weekly_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Term_Total_State_Change_Stats_Weekly_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Term_Total_State_Change_Stats_Weekly_Sum_Order_By>;
  var_pop?: InputMaybe<Term_Total_State_Change_Stats_Weekly_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Term_Total_State_Change_Stats_Weekly_Var_Samp_Order_By>;
  variance?: InputMaybe<Term_Total_State_Change_Stats_Weekly_Variance_Order_By>;
};

/** order by avg() on columns of table "term_total_state_change_stats_weekly" */
export type Term_Total_State_Change_Stats_Weekly_Avg_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "term_total_state_change_stats_weekly". All fields are combined with a logical 'AND'. */
export type Term_Total_State_Change_Stats_Weekly_Bool_Exp = {
  _and?: InputMaybe<Array<Term_Total_State_Change_Stats_Weekly_Bool_Exp>>;
  _not?: InputMaybe<Term_Total_State_Change_Stats_Weekly_Bool_Exp>;
  _or?: InputMaybe<Array<Term_Total_State_Change_Stats_Weekly_Bool_Exp>>;
  bucket?: InputMaybe<Timestamptz_Comparison_Exp>;
  difference?: InputMaybe<Numeric_Comparison_Exp>;
  first_total_market_cap?: InputMaybe<Numeric_Comparison_Exp>;
  last_total_market_cap?: InputMaybe<Numeric_Comparison_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "term_total_state_change_stats_weekly" */
export type Term_Total_State_Change_Stats_Weekly_Max_Order_By = {
  bucket?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "term_total_state_change_stats_weekly" */
export type Term_Total_State_Change_Stats_Weekly_Min_Order_By = {
  bucket?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "term_total_state_change_stats_weekly". */
export type Term_Total_State_Change_Stats_Weekly_Order_By = {
  bucket?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
};

/** select columns of table "term_total_state_change_stats_weekly" */
export enum Term_Total_State_Change_Stats_Weekly_Select_Column {
  /** column name */
  Bucket = 'bucket',
  /** column name */
  Difference = 'difference',
  /** column name */
  FirstTotalMarketCap = 'first_total_market_cap',
  /** column name */
  LastTotalMarketCap = 'last_total_market_cap',
  /** column name */
  TermId = 'term_id',
}

/** order by stddev() on columns of table "term_total_state_change_stats_weekly" */
export type Term_Total_State_Change_Stats_Weekly_Stddev_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "term_total_state_change_stats_weekly" */
export type Term_Total_State_Change_Stats_Weekly_Stddev_Pop_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "term_total_state_change_stats_weekly" */
export type Term_Total_State_Change_Stats_Weekly_Stddev_Samp_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "term_total_state_change_stats_weekly" */
export type Term_Total_State_Change_Stats_Weekly_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Term_Total_State_Change_Stats_Weekly_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Term_Total_State_Change_Stats_Weekly_Stream_Cursor_Value_Input = {
  bucket?: InputMaybe<Scalars['timestamptz']['input']>;
  difference?: InputMaybe<Scalars['numeric']['input']>;
  first_total_market_cap?: InputMaybe<Scalars['numeric']['input']>;
  last_total_market_cap?: InputMaybe<Scalars['numeric']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "term_total_state_change_stats_weekly" */
export type Term_Total_State_Change_Stats_Weekly_Sum_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "term_total_state_change_stats_weekly" */
export type Term_Total_State_Change_Stats_Weekly_Var_Pop_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "term_total_state_change_stats_weekly" */
export type Term_Total_State_Change_Stats_Weekly_Var_Samp_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "term_total_state_change_stats_weekly" */
export type Term_Total_State_Change_Stats_Weekly_Variance_Order_By = {
  difference?: InputMaybe<Order_By>;
  first_total_market_cap?: InputMaybe<Order_By>;
  last_total_market_cap?: InputMaybe<Order_By>;
};

/** columns and relationships of "term_total_state_change" */
export type Term_Total_State_Changes = {
  __typename?: 'term_total_state_changes';
  created_at: Scalars['timestamptz']['output'];
  term_id: Scalars['String']['output'];
  total_assets: Scalars['numeric']['output'];
  total_market_cap: Scalars['numeric']['output'];
};

/** order by aggregate values of table "term_total_state_change" */
export type Term_Total_State_Changes_Aggregate_Order_By = {
  avg?: InputMaybe<Term_Total_State_Changes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Term_Total_State_Changes_Max_Order_By>;
  min?: InputMaybe<Term_Total_State_Changes_Min_Order_By>;
  stddev?: InputMaybe<Term_Total_State_Changes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Term_Total_State_Changes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Term_Total_State_Changes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Term_Total_State_Changes_Sum_Order_By>;
  var_pop?: InputMaybe<Term_Total_State_Changes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Term_Total_State_Changes_Var_Samp_Order_By>;
  variance?: InputMaybe<Term_Total_State_Changes_Variance_Order_By>;
};

/** order by avg() on columns of table "term_total_state_change" */
export type Term_Total_State_Changes_Avg_Order_By = {
  total_assets?: InputMaybe<Order_By>;
  total_market_cap?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "term_total_state_change". All fields are combined with a logical 'AND'. */
export type Term_Total_State_Changes_Bool_Exp = {
  _and?: InputMaybe<Array<Term_Total_State_Changes_Bool_Exp>>;
  _not?: InputMaybe<Term_Total_State_Changes_Bool_Exp>;
  _or?: InputMaybe<Array<Term_Total_State_Changes_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
  total_assets?: InputMaybe<Numeric_Comparison_Exp>;
  total_market_cap?: InputMaybe<Numeric_Comparison_Exp>;
};

/** order by max() on columns of table "term_total_state_change" */
export type Term_Total_State_Changes_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_market_cap?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "term_total_state_change" */
export type Term_Total_State_Changes_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_market_cap?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "term_total_state_change". */
export type Term_Total_State_Changes_Order_By = {
  created_at?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_market_cap?: InputMaybe<Order_By>;
};

/** select columns of table "term_total_state_change" */
export enum Term_Total_State_Changes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  TermId = 'term_id',
  /** column name */
  TotalAssets = 'total_assets',
  /** column name */
  TotalMarketCap = 'total_market_cap',
}

/** order by stddev() on columns of table "term_total_state_change" */
export type Term_Total_State_Changes_Stddev_Order_By = {
  total_assets?: InputMaybe<Order_By>;
  total_market_cap?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "term_total_state_change" */
export type Term_Total_State_Changes_Stddev_Pop_Order_By = {
  total_assets?: InputMaybe<Order_By>;
  total_market_cap?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "term_total_state_change" */
export type Term_Total_State_Changes_Stddev_Samp_Order_By = {
  total_assets?: InputMaybe<Order_By>;
  total_market_cap?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "term_total_state_changes" */
export type Term_Total_State_Changes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Term_Total_State_Changes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Term_Total_State_Changes_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
  total_assets?: InputMaybe<Scalars['numeric']['input']>;
  total_market_cap?: InputMaybe<Scalars['numeric']['input']>;
};

/** order by sum() on columns of table "term_total_state_change" */
export type Term_Total_State_Changes_Sum_Order_By = {
  total_assets?: InputMaybe<Order_By>;
  total_market_cap?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "term_total_state_change" */
export type Term_Total_State_Changes_Var_Pop_Order_By = {
  total_assets?: InputMaybe<Order_By>;
  total_market_cap?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "term_total_state_change" */
export type Term_Total_State_Changes_Var_Samp_Order_By = {
  total_assets?: InputMaybe<Order_By>;
  total_market_cap?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "term_total_state_change" */
export type Term_Total_State_Changes_Variance_Order_By = {
  total_assets?: InputMaybe<Order_By>;
  total_market_cap?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "term_type". All fields are combined with logical 'AND'. */
export type Term_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['term_type']['input']>;
  _gt?: InputMaybe<Scalars['term_type']['input']>;
  _gte?: InputMaybe<Scalars['term_type']['input']>;
  _in?: InputMaybe<Array<Scalars['term_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['term_type']['input']>;
  _lte?: InputMaybe<Scalars['term_type']['input']>;
  _neq?: InputMaybe<Scalars['term_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['term_type']['input']>>;
};

/** columns and relationships of "term" */
export type Terms = {
  __typename?: 'terms';
  /** An object relationship */
  atom?: Maybe<Atoms>;
  /** An object relationship */
  atomById?: Maybe<Atoms>;
  atom_id?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  deposits: Array<Deposits>;
  /** An aggregate relationship */
  deposits_aggregate: Deposits_Aggregate;
  id: Scalars['String']['output'];
  /** An array relationship */
  positions: Array<Positions>;
  /** An aggregate relationship */
  positions_aggregate: Positions_Aggregate;
  /** An array relationship */
  redemptions: Array<Redemptions>;
  /** An aggregate relationship */
  redemptions_aggregate: Redemptions_Aggregate;
  /** An array relationship */
  share_price_change_stats_daily: Array<Share_Price_Change_Stats_Daily>;
  /** An array relationship */
  share_price_change_stats_hourly: Array<Share_Price_Change_Stats_Hourly>;
  /** An array relationship */
  share_price_change_stats_monthly: Array<Share_Price_Change_Stats_Monthly>;
  /** An array relationship */
  share_price_change_stats_weekly: Array<Share_Price_Change_Stats_Weekly>;
  /** An array relationship */
  share_price_changes: Array<Share_Price_Changes>;
  /** An aggregate relationship */
  share_price_changes_aggregate: Share_Price_Changes_Aggregate;
  /** An array relationship */
  signals: Array<Signals>;
  /** An aggregate relationship */
  signals_aggregate: Signals_Aggregate;
  /** An array relationship */
  term_total_state_change_daily: Array<Term_Total_State_Change_Stats_Daily>;
  /** An array relationship */
  term_total_state_change_hourly: Array<Term_Total_State_Change_Stats_Hourly>;
  /** An array relationship */
  term_total_state_change_monthly: Array<Term_Total_State_Change_Stats_Monthly>;
  /** An array relationship */
  term_total_state_change_weekly: Array<Term_Total_State_Change_Stats_Weekly>;
  /** An array relationship */
  term_total_state_changes: Array<Term_Total_State_Changes>;
  total_assets?: Maybe<Scalars['numeric']['output']>;
  total_market_cap?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  triple?: Maybe<Triples>;
  /** An object relationship */
  tripleById?: Maybe<Triples>;
  triple_id?: Maybe<Scalars['String']['output']>;
  type: Scalars['term_type']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  vaults: Array<Vaults>;
  /** An aggregate relationship */
  vaults_aggregate: Vaults_Aggregate;
};

/** columns and relationships of "term" */
export type TermsDepositsArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposits_Order_By>>;
  where?: InputMaybe<Deposits_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsDeposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposits_Order_By>>;
  where?: InputMaybe<Deposits_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsPositionsArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsPositions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsRedemptionsArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Redemptions_Order_By>>;
  where?: InputMaybe<Redemptions_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsRedemptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Redemptions_Order_By>>;
  where?: InputMaybe<Redemptions_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsShare_Price_Change_Stats_DailyArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Change_Stats_Daily_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Change_Stats_Daily_Order_By>>;
  where?: InputMaybe<Share_Price_Change_Stats_Daily_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsShare_Price_Change_Stats_HourlyArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Change_Stats_Hourly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Change_Stats_Hourly_Order_By>>;
  where?: InputMaybe<Share_Price_Change_Stats_Hourly_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsShare_Price_Change_Stats_MonthlyArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Change_Stats_Monthly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Change_Stats_Monthly_Order_By>>;
  where?: InputMaybe<Share_Price_Change_Stats_Monthly_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsShare_Price_Change_Stats_WeeklyArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Change_Stats_Weekly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Change_Stats_Weekly_Order_By>>;
  where?: InputMaybe<Share_Price_Change_Stats_Weekly_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsShare_Price_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Changes_Order_By>>;
  where?: InputMaybe<Share_Price_Changes_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsShare_Price_Changes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Changes_Order_By>>;
  where?: InputMaybe<Share_Price_Changes_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsSignalsArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signals_Order_By>>;
  where?: InputMaybe<Signals_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsSignals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signals_Order_By>>;
  where?: InputMaybe<Signals_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsTerm_Total_State_Change_DailyArgs = {
  distinct_on?: InputMaybe<Array<Term_Total_State_Change_Stats_Daily_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Term_Total_State_Change_Stats_Daily_Order_By>>;
  where?: InputMaybe<Term_Total_State_Change_Stats_Daily_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsTerm_Total_State_Change_HourlyArgs = {
  distinct_on?: InputMaybe<Array<Term_Total_State_Change_Stats_Hourly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Term_Total_State_Change_Stats_Hourly_Order_By>>;
  where?: InputMaybe<Term_Total_State_Change_Stats_Hourly_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsTerm_Total_State_Change_MonthlyArgs = {
  distinct_on?: InputMaybe<Array<Term_Total_State_Change_Stats_Monthly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Term_Total_State_Change_Stats_Monthly_Order_By>>;
  where?: InputMaybe<Term_Total_State_Change_Stats_Monthly_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsTerm_Total_State_Change_WeeklyArgs = {
  distinct_on?: InputMaybe<Array<Term_Total_State_Change_Stats_Weekly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Term_Total_State_Change_Stats_Weekly_Order_By>>;
  where?: InputMaybe<Term_Total_State_Change_Stats_Weekly_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsTerm_Total_State_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Term_Total_State_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Term_Total_State_Changes_Order_By>>;
  where?: InputMaybe<Term_Total_State_Changes_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsVaultsArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vaults_Order_By>>;
  where?: InputMaybe<Vaults_Bool_Exp>;
};

/** columns and relationships of "term" */
export type TermsVaults_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vaults_Order_By>>;
  where?: InputMaybe<Vaults_Bool_Exp>;
};

export type Terms_Aggregate = {
  __typename?: 'terms_aggregate';
  aggregate?: Maybe<Terms_Aggregate_Fields>;
  nodes: Array<Terms>;
};

/** aggregate fields of "term" */
export type Terms_Aggregate_Fields = {
  __typename?: 'terms_aggregate_fields';
  avg?: Maybe<Terms_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Terms_Max_Fields>;
  min?: Maybe<Terms_Min_Fields>;
  stddev?: Maybe<Terms_Stddev_Fields>;
  stddev_pop?: Maybe<Terms_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Terms_Stddev_Samp_Fields>;
  sum?: Maybe<Terms_Sum_Fields>;
  var_pop?: Maybe<Terms_Var_Pop_Fields>;
  var_samp?: Maybe<Terms_Var_Samp_Fields>;
  variance?: Maybe<Terms_Variance_Fields>;
};

/** aggregate fields of "term" */
export type Terms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Terms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Terms_Avg_Fields = {
  __typename?: 'terms_avg_fields';
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_market_cap?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "term". All fields are combined with a logical 'AND'. */
export type Terms_Bool_Exp = {
  _and?: InputMaybe<Array<Terms_Bool_Exp>>;
  _not?: InputMaybe<Terms_Bool_Exp>;
  _or?: InputMaybe<Array<Terms_Bool_Exp>>;
  atom?: InputMaybe<Atoms_Bool_Exp>;
  atomById?: InputMaybe<Atoms_Bool_Exp>;
  atom_id?: InputMaybe<String_Comparison_Exp>;
  deposits?: InputMaybe<Deposits_Bool_Exp>;
  deposits_aggregate?: InputMaybe<Deposits_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  positions?: InputMaybe<Positions_Bool_Exp>;
  positions_aggregate?: InputMaybe<Positions_Aggregate_Bool_Exp>;
  redemptions?: InputMaybe<Redemptions_Bool_Exp>;
  redemptions_aggregate?: InputMaybe<Redemptions_Aggregate_Bool_Exp>;
  share_price_change_stats_daily?: InputMaybe<Share_Price_Change_Stats_Daily_Bool_Exp>;
  share_price_change_stats_hourly?: InputMaybe<Share_Price_Change_Stats_Hourly_Bool_Exp>;
  share_price_change_stats_monthly?: InputMaybe<Share_Price_Change_Stats_Monthly_Bool_Exp>;
  share_price_change_stats_weekly?: InputMaybe<Share_Price_Change_Stats_Weekly_Bool_Exp>;
  share_price_changes?: InputMaybe<Share_Price_Changes_Bool_Exp>;
  share_price_changes_aggregate?: InputMaybe<Share_Price_Changes_Aggregate_Bool_Exp>;
  signals?: InputMaybe<Signals_Bool_Exp>;
  signals_aggregate?: InputMaybe<Signals_Aggregate_Bool_Exp>;
  term_total_state_change_daily?: InputMaybe<Term_Total_State_Change_Stats_Daily_Bool_Exp>;
  term_total_state_change_hourly?: InputMaybe<Term_Total_State_Change_Stats_Hourly_Bool_Exp>;
  term_total_state_change_monthly?: InputMaybe<Term_Total_State_Change_Stats_Monthly_Bool_Exp>;
  term_total_state_change_weekly?: InputMaybe<Term_Total_State_Change_Stats_Weekly_Bool_Exp>;
  term_total_state_changes?: InputMaybe<Term_Total_State_Changes_Bool_Exp>;
  total_assets?: InputMaybe<Numeric_Comparison_Exp>;
  total_market_cap?: InputMaybe<Numeric_Comparison_Exp>;
  triple?: InputMaybe<Triples_Bool_Exp>;
  tripleById?: InputMaybe<Triples_Bool_Exp>;
  triple_id?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Term_Type_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vaults?: InputMaybe<Vaults_Bool_Exp>;
  vaults_aggregate?: InputMaybe<Vaults_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Terms_Max_Fields = {
  __typename?: 'terms_max_fields';
  atom_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  total_assets?: Maybe<Scalars['numeric']['output']>;
  total_market_cap?: Maybe<Scalars['numeric']['output']>;
  triple_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['term_type']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Terms_Min_Fields = {
  __typename?: 'terms_min_fields';
  atom_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  total_assets?: Maybe<Scalars['numeric']['output']>;
  total_market_cap?: Maybe<Scalars['numeric']['output']>;
  triple_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['term_type']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "term". */
export type Terms_Order_By = {
  atom?: InputMaybe<Atoms_Order_By>;
  atomById?: InputMaybe<Atoms_Order_By>;
  atom_id?: InputMaybe<Order_By>;
  deposits_aggregate?: InputMaybe<Deposits_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  positions_aggregate?: InputMaybe<Positions_Aggregate_Order_By>;
  redemptions_aggregate?: InputMaybe<Redemptions_Aggregate_Order_By>;
  share_price_change_stats_daily_aggregate?: InputMaybe<Share_Price_Change_Stats_Daily_Aggregate_Order_By>;
  share_price_change_stats_hourly_aggregate?: InputMaybe<Share_Price_Change_Stats_Hourly_Aggregate_Order_By>;
  share_price_change_stats_monthly_aggregate?: InputMaybe<Share_Price_Change_Stats_Monthly_Aggregate_Order_By>;
  share_price_change_stats_weekly_aggregate?: InputMaybe<Share_Price_Change_Stats_Weekly_Aggregate_Order_By>;
  share_price_changes_aggregate?: InputMaybe<Share_Price_Changes_Aggregate_Order_By>;
  signals_aggregate?: InputMaybe<Signals_Aggregate_Order_By>;
  term_total_state_change_daily_aggregate?: InputMaybe<Term_Total_State_Change_Stats_Daily_Aggregate_Order_By>;
  term_total_state_change_hourly_aggregate?: InputMaybe<Term_Total_State_Change_Stats_Hourly_Aggregate_Order_By>;
  term_total_state_change_monthly_aggregate?: InputMaybe<Term_Total_State_Change_Stats_Monthly_Aggregate_Order_By>;
  term_total_state_change_weekly_aggregate?: InputMaybe<Term_Total_State_Change_Stats_Weekly_Aggregate_Order_By>;
  term_total_state_changes_aggregate?: InputMaybe<Term_Total_State_Changes_Aggregate_Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_market_cap?: InputMaybe<Order_By>;
  triple?: InputMaybe<Triples_Order_By>;
  tripleById?: InputMaybe<Triples_Order_By>;
  triple_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vaults_aggregate?: InputMaybe<Vaults_Aggregate_Order_By>;
};

/** select columns of table "term" */
export enum Terms_Select_Column {
  /** column name */
  AtomId = 'atom_id',
  /** column name */
  Id = 'id',
  /** column name */
  TotalAssets = 'total_assets',
  /** column name */
  TotalMarketCap = 'total_market_cap',
  /** column name */
  TripleId = 'triple_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate stddev on columns */
export type Terms_Stddev_Fields = {
  __typename?: 'terms_stddev_fields';
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_market_cap?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Terms_Stddev_Pop_Fields = {
  __typename?: 'terms_stddev_pop_fields';
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_market_cap?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Terms_Stddev_Samp_Fields = {
  __typename?: 'terms_stddev_samp_fields';
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_market_cap?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "terms" */
export type Terms_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Terms_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Terms_Stream_Cursor_Value_Input = {
  atom_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  total_assets?: InputMaybe<Scalars['numeric']['input']>;
  total_market_cap?: InputMaybe<Scalars['numeric']['input']>;
  triple_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['term_type']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Terms_Sum_Fields = {
  __typename?: 'terms_sum_fields';
  total_assets?: Maybe<Scalars['numeric']['output']>;
  total_market_cap?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Terms_Var_Pop_Fields = {
  __typename?: 'terms_var_pop_fields';
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_market_cap?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Terms_Var_Samp_Fields = {
  __typename?: 'terms_var_samp_fields';
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_market_cap?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Terms_Variance_Fields = {
  __typename?: 'terms_variance_fields';
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_market_cap?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "text_object" */
export type Text_Objects = {
  __typename?: 'text_objects';
  /** An object relationship */
  atom?: Maybe<Atoms>;
  data: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

/** aggregated selection of "text_object" */
export type Text_Objects_Aggregate = {
  __typename?: 'text_objects_aggregate';
  aggregate?: Maybe<Text_Objects_Aggregate_Fields>;
  nodes: Array<Text_Objects>;
};

/** aggregate fields of "text_object" */
export type Text_Objects_Aggregate_Fields = {
  __typename?: 'text_objects_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Text_Objects_Max_Fields>;
  min?: Maybe<Text_Objects_Min_Fields>;
};

/** aggregate fields of "text_object" */
export type Text_Objects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Text_Objects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "text_object". All fields are combined with a logical 'AND'. */
export type Text_Objects_Bool_Exp = {
  _and?: InputMaybe<Array<Text_Objects_Bool_Exp>>;
  _not?: InputMaybe<Text_Objects_Bool_Exp>;
  _or?: InputMaybe<Array<Text_Objects_Bool_Exp>>;
  atom?: InputMaybe<Atoms_Bool_Exp>;
  data?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Text_Objects_Max_Fields = {
  __typename?: 'text_objects_max_fields';
  data?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Text_Objects_Min_Fields = {
  __typename?: 'text_objects_min_fields';
  data?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "text_object". */
export type Text_Objects_Order_By = {
  atom?: InputMaybe<Atoms_Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** select columns of table "text_object" */
export enum Text_Objects_Select_Column {
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
}

/** Streaming cursor of the table "text_objects" */
export type Text_Objects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Text_Objects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Text_Objects_Stream_Cursor_Value_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "thing" */
export type Things = {
  __typename?: 'things';
  /** An object relationship */
  atom?: Maybe<Atoms>;
  cached_image?: Maybe<Cached_Images_Cached_Image>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "thing" */
export type Things_Aggregate = {
  __typename?: 'things_aggregate';
  aggregate?: Maybe<Things_Aggregate_Fields>;
  nodes: Array<Things>;
};

/** aggregate fields of "thing" */
export type Things_Aggregate_Fields = {
  __typename?: 'things_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Things_Max_Fields>;
  min?: Maybe<Things_Min_Fields>;
};

/** aggregate fields of "thing" */
export type Things_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Things_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "thing". All fields are combined with a logical 'AND'. */
export type Things_Bool_Exp = {
  _and?: InputMaybe<Array<Things_Bool_Exp>>;
  _not?: InputMaybe<Things_Bool_Exp>;
  _or?: InputMaybe<Array<Things_Bool_Exp>>;
  atom?: InputMaybe<Atoms_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Things_Max_Fields = {
  __typename?: 'things_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Things_Min_Fields = {
  __typename?: 'things_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "thing". */
export type Things_Order_By = {
  atom?: InputMaybe<Atoms_Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** select columns of table "thing" */
export enum Things_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url',
}

/** Streaming cursor of the table "things" */
export type Things_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Things_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Things_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "triple_term" */
export type Triple_Term = {
  __typename?: 'triple_term';
  /** An object relationship */
  counter_term: Terms;
  counter_term_id: Scalars['String']['output'];
  /** An object relationship */
  term: Terms;
  term_id: Scalars['String']['output'];
  total_assets: Scalars['numeric']['output'];
  total_market_cap: Scalars['numeric']['output'];
  total_position_count: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** Boolean expression to filter rows from the table "triple_term". All fields are combined with a logical 'AND'. */
export type Triple_Term_Bool_Exp = {
  _and?: InputMaybe<Array<Triple_Term_Bool_Exp>>;
  _not?: InputMaybe<Triple_Term_Bool_Exp>;
  _or?: InputMaybe<Array<Triple_Term_Bool_Exp>>;
  counter_term?: InputMaybe<Terms_Bool_Exp>;
  counter_term_id?: InputMaybe<String_Comparison_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
  total_assets?: InputMaybe<Numeric_Comparison_Exp>;
  total_market_cap?: InputMaybe<Numeric_Comparison_Exp>;
  total_position_count?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "triple_term". */
export type Triple_Term_Order_By = {
  counter_term?: InputMaybe<Terms_Order_By>;
  counter_term_id?: InputMaybe<Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_market_cap?: InputMaybe<Order_By>;
  total_position_count?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "triple_term" */
export enum Triple_Term_Select_Column {
  /** column name */
  CounterTermId = 'counter_term_id',
  /** column name */
  TermId = 'term_id',
  /** column name */
  TotalAssets = 'total_assets',
  /** column name */
  TotalMarketCap = 'total_market_cap',
  /** column name */
  TotalPositionCount = 'total_position_count',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** Streaming cursor of the table "triple_term" */
export type Triple_Term_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Triple_Term_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Triple_Term_Stream_Cursor_Value_Input = {
  counter_term_id?: InputMaybe<Scalars['String']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
  total_assets?: InputMaybe<Scalars['numeric']['input']>;
  total_market_cap?: InputMaybe<Scalars['numeric']['input']>;
  total_position_count?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "triple_vault" */
export type Triple_Vault = {
  __typename?: 'triple_vault';
  block_number: Scalars['numeric']['output'];
  /** An object relationship */
  counter_term?: Maybe<Terms>;
  counter_term_id: Scalars['String']['output'];
  curve_id: Scalars['numeric']['output'];
  log_index: Scalars['bigint']['output'];
  market_cap: Scalars['numeric']['output'];
  position_count: Scalars['bigint']['output'];
  /** An object relationship */
  term?: Maybe<Terms>;
  term_id: Scalars['String']['output'];
  total_assets: Scalars['numeric']['output'];
  total_shares: Scalars['numeric']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** Boolean expression to filter rows from the table "triple_vault". All fields are combined with a logical 'AND'. */
export type Triple_Vault_Bool_Exp = {
  _and?: InputMaybe<Array<Triple_Vault_Bool_Exp>>;
  _not?: InputMaybe<Triple_Vault_Bool_Exp>;
  _or?: InputMaybe<Array<Triple_Vault_Bool_Exp>>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  counter_term?: InputMaybe<Terms_Bool_Exp>;
  counter_term_id?: InputMaybe<String_Comparison_Exp>;
  curve_id?: InputMaybe<Numeric_Comparison_Exp>;
  log_index?: InputMaybe<Bigint_Comparison_Exp>;
  market_cap?: InputMaybe<Numeric_Comparison_Exp>;
  position_count?: InputMaybe<Bigint_Comparison_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
  total_assets?: InputMaybe<Numeric_Comparison_Exp>;
  total_shares?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "triple_vault". */
export type Triple_Vault_Order_By = {
  block_number?: InputMaybe<Order_By>;
  counter_term?: InputMaybe<Terms_Order_By>;
  counter_term_id?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  position_count?: InputMaybe<Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "triple_vault" */
export enum Triple_Vault_Select_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  CounterTermId = 'counter_term_id',
  /** column name */
  CurveId = 'curve_id',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  PositionCount = 'position_count',
  /** column name */
  TermId = 'term_id',
  /** column name */
  TotalAssets = 'total_assets',
  /** column name */
  TotalShares = 'total_shares',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** Streaming cursor of the table "triple_vault" */
export type Triple_Vault_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Triple_Vault_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Triple_Vault_Stream_Cursor_Value_Input = {
  block_number?: InputMaybe<Scalars['numeric']['input']>;
  counter_term_id?: InputMaybe<Scalars['String']['input']>;
  curve_id?: InputMaybe<Scalars['numeric']['input']>;
  log_index?: InputMaybe<Scalars['bigint']['input']>;
  market_cap?: InputMaybe<Scalars['numeric']['input']>;
  position_count?: InputMaybe<Scalars['bigint']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
  total_assets?: InputMaybe<Scalars['numeric']['input']>;
  total_shares?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "triple" */
export type Triples = {
  __typename?: 'triples';
  block_number: Scalars['numeric']['output'];
  /** An array relationship */
  counter_positions: Array<Positions>;
  /** An aggregate relationship */
  counter_positions_aggregate: Positions_Aggregate;
  /** An object relationship */
  counter_term?: Maybe<Terms>;
  counter_term_id: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  creator?: Maybe<Accounts>;
  creator_id: Scalars['String']['output'];
  /** An object relationship */
  object: Atoms;
  object_id: Scalars['String']['output'];
  /** An array relationship */
  positions: Array<Positions>;
  /** An aggregate relationship */
  positions_aggregate: Positions_Aggregate;
  /** An object relationship */
  predicate: Atoms;
  predicate_id: Scalars['String']['output'];
  /** An object relationship */
  subject: Atoms;
  subject_id: Scalars['String']['output'];
  /** An object relationship */
  term?: Maybe<Terms>;
  term_id: Scalars['String']['output'];
  transaction_hash: Scalars['String']['output'];
  /** An object relationship */
  triple_term?: Maybe<Triple_Term>;
  /** An object relationship */
  triple_vault?: Maybe<Triple_Vault>;
};

/** columns and relationships of "triple" */
export type TriplesCounter_PositionsArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

/** columns and relationships of "triple" */
export type TriplesCounter_Positions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

/** columns and relationships of "triple" */
export type TriplesPositionsArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

/** columns and relationships of "triple" */
export type TriplesPositions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

/** aggregated selection of "triple" */
export type Triples_Aggregate = {
  __typename?: 'triples_aggregate';
  aggregate?: Maybe<Triples_Aggregate_Fields>;
  nodes: Array<Triples>;
};

export type Triples_Aggregate_Bool_Exp = {
  count?: InputMaybe<Triples_Aggregate_Bool_Exp_Count>;
};

export type Triples_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Triples_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Triples_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "triple" */
export type Triples_Aggregate_Fields = {
  __typename?: 'triples_aggregate_fields';
  avg?: Maybe<Triples_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Triples_Max_Fields>;
  min?: Maybe<Triples_Min_Fields>;
  stddev?: Maybe<Triples_Stddev_Fields>;
  stddev_pop?: Maybe<Triples_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Triples_Stddev_Samp_Fields>;
  sum?: Maybe<Triples_Sum_Fields>;
  var_pop?: Maybe<Triples_Var_Pop_Fields>;
  var_samp?: Maybe<Triples_Var_Samp_Fields>;
  variance?: Maybe<Triples_Variance_Fields>;
};

/** aggregate fields of "triple" */
export type Triples_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Triples_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "triple" */
export type Triples_Aggregate_Order_By = {
  avg?: InputMaybe<Triples_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Triples_Max_Order_By>;
  min?: InputMaybe<Triples_Min_Order_By>;
  stddev?: InputMaybe<Triples_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Triples_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Triples_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Triples_Sum_Order_By>;
  var_pop?: InputMaybe<Triples_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Triples_Var_Samp_Order_By>;
  variance?: InputMaybe<Triples_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Triples_Avg_Fields = {
  __typename?: 'triples_avg_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "triple" */
export type Triples_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "triple". All fields are combined with a logical 'AND'. */
export type Triples_Bool_Exp = {
  _and?: InputMaybe<Array<Triples_Bool_Exp>>;
  _not?: InputMaybe<Triples_Bool_Exp>;
  _or?: InputMaybe<Array<Triples_Bool_Exp>>;
  block_number?: InputMaybe<Numeric_Comparison_Exp>;
  counter_positions?: InputMaybe<Positions_Bool_Exp>;
  counter_positions_aggregate?: InputMaybe<Positions_Aggregate_Bool_Exp>;
  counter_term?: InputMaybe<Terms_Bool_Exp>;
  counter_term_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  creator?: InputMaybe<Accounts_Bool_Exp>;
  creator_id?: InputMaybe<String_Comparison_Exp>;
  object?: InputMaybe<Atoms_Bool_Exp>;
  object_id?: InputMaybe<String_Comparison_Exp>;
  positions?: InputMaybe<Positions_Bool_Exp>;
  positions_aggregate?: InputMaybe<Positions_Aggregate_Bool_Exp>;
  predicate?: InputMaybe<Atoms_Bool_Exp>;
  predicate_id?: InputMaybe<String_Comparison_Exp>;
  subject?: InputMaybe<Atoms_Bool_Exp>;
  subject_id?: InputMaybe<String_Comparison_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  triple_term?: InputMaybe<Triple_Term_Bool_Exp>;
  triple_vault?: InputMaybe<Triple_Vault_Bool_Exp>;
};

/** aggregate max on columns */
export type Triples_Max_Fields = {
  __typename?: 'triples_max_fields';
  block_number?: Maybe<Scalars['numeric']['output']>;
  counter_term_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  creator_id?: Maybe<Scalars['String']['output']>;
  object_id?: Maybe<Scalars['String']['output']>;
  predicate_id?: Maybe<Scalars['String']['output']>;
  subject_id?: Maybe<Scalars['String']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "triple" */
export type Triples_Max_Order_By = {
  block_number?: InputMaybe<Order_By>;
  counter_term_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  object_id?: InputMaybe<Order_By>;
  predicate_id?: InputMaybe<Order_By>;
  subject_id?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Triples_Min_Fields = {
  __typename?: 'triples_min_fields';
  block_number?: Maybe<Scalars['numeric']['output']>;
  counter_term_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  creator_id?: Maybe<Scalars['String']['output']>;
  object_id?: Maybe<Scalars['String']['output']>;
  predicate_id?: Maybe<Scalars['String']['output']>;
  subject_id?: Maybe<Scalars['String']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "triple" */
export type Triples_Min_Order_By = {
  block_number?: InputMaybe<Order_By>;
  counter_term_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  object_id?: InputMaybe<Order_By>;
  predicate_id?: InputMaybe<Order_By>;
  subject_id?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "triple". */
export type Triples_Order_By = {
  block_number?: InputMaybe<Order_By>;
  counter_positions_aggregate?: InputMaybe<Positions_Aggregate_Order_By>;
  counter_term?: InputMaybe<Terms_Order_By>;
  counter_term_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator?: InputMaybe<Accounts_Order_By>;
  creator_id?: InputMaybe<Order_By>;
  object?: InputMaybe<Atoms_Order_By>;
  object_id?: InputMaybe<Order_By>;
  positions_aggregate?: InputMaybe<Positions_Aggregate_Order_By>;
  predicate?: InputMaybe<Atoms_Order_By>;
  predicate_id?: InputMaybe<Order_By>;
  subject?: InputMaybe<Atoms_Order_By>;
  subject_id?: InputMaybe<Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  triple_term?: InputMaybe<Triple_Term_Order_By>;
  triple_vault?: InputMaybe<Triple_Vault_Order_By>;
};

/** select columns of table "triple" */
export enum Triples_Select_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  CounterTermId = 'counter_term_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  PredicateId = 'predicate_id',
  /** column name */
  SubjectId = 'subject_id',
  /** column name */
  TermId = 'term_id',
  /** column name */
  TransactionHash = 'transaction_hash',
}

/** aggregate stddev on columns */
export type Triples_Stddev_Fields = {
  __typename?: 'triples_stddev_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "triple" */
export type Triples_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Triples_Stddev_Pop_Fields = {
  __typename?: 'triples_stddev_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "triple" */
export type Triples_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Triples_Stddev_Samp_Fields = {
  __typename?: 'triples_stddev_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "triple" */
export type Triples_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "triples" */
export type Triples_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Triples_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Triples_Stream_Cursor_Value_Input = {
  block_number?: InputMaybe<Scalars['numeric']['input']>;
  counter_term_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  creator_id?: InputMaybe<Scalars['String']['input']>;
  object_id?: InputMaybe<Scalars['String']['input']>;
  predicate_id?: InputMaybe<Scalars['String']['input']>;
  subject_id?: InputMaybe<Scalars['String']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
  transaction_hash?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Triples_Sum_Fields = {
  __typename?: 'triples_sum_fields';
  block_number?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "triple" */
export type Triples_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Triples_Var_Pop_Fields = {
  __typename?: 'triples_var_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "triple" */
export type Triples_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Triples_Var_Samp_Fields = {
  __typename?: 'triples_var_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "triple" */
export type Triples_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Triples_Variance_Fields = {
  __typename?: 'triples_variance_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "triple" */
export type Triples_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "vault_type". All fields are combined with logical 'AND'. */
export type Vault_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['vault_type']['input']>;
  _gt?: InputMaybe<Scalars['vault_type']['input']>;
  _gte?: InputMaybe<Scalars['vault_type']['input']>;
  _in?: InputMaybe<Array<Scalars['vault_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['vault_type']['input']>;
  _lte?: InputMaybe<Scalars['vault_type']['input']>;
  _neq?: InputMaybe<Scalars['vault_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['vault_type']['input']>>;
};

/** columns and relationships of "vault" */
export type Vaults = {
  __typename?: 'vaults';
  block_number: Scalars['bigint']['output'];
  created_at: Scalars['timestamptz']['output'];
  current_share_price: Scalars['numeric']['output'];
  curve_id: Scalars['numeric']['output'];
  /** An array relationship */
  deposits: Array<Deposits>;
  /** An aggregate relationship */
  deposits_aggregate: Deposits_Aggregate;
  log_index: Scalars['bigint']['output'];
  market_cap: Scalars['numeric']['output'];
  position_count: Scalars['Int']['output'];
  /** An array relationship */
  positions: Array<Positions>;
  /** An aggregate relationship */
  positions_aggregate: Positions_Aggregate;
  /** An array relationship */
  redemptions: Array<Redemptions>;
  /** An aggregate relationship */
  redemptions_aggregate: Redemptions_Aggregate;
  /** An array relationship */
  share_price_change_stats_daily: Array<Share_Price_Change_Stats_Daily>;
  /** An array relationship */
  share_price_change_stats_hourly: Array<Share_Price_Change_Stats_Hourly>;
  /** An array relationship */
  share_price_change_stats_monthly: Array<Share_Price_Change_Stats_Monthly>;
  /** An array relationship */
  share_price_change_stats_weekly: Array<Share_Price_Change_Stats_Weekly>;
  /** An array relationship */
  share_price_changes: Array<Share_Price_Changes>;
  /** An aggregate relationship */
  share_price_changes_aggregate: Share_Price_Changes_Aggregate;
  /** An array relationship */
  signals: Array<Signals>;
  /** An aggregate relationship */
  signals_aggregate: Signals_Aggregate;
  /** An object relationship */
  term: Terms;
  term_id: Scalars['String']['output'];
  total_assets: Scalars['numeric']['output'];
  total_shares: Scalars['numeric']['output'];
  transaction_hash: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "vault" */
export type VaultsDepositsArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposits_Order_By>>;
  where?: InputMaybe<Deposits_Bool_Exp>;
};

/** columns and relationships of "vault" */
export type VaultsDeposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deposits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Deposits_Order_By>>;
  where?: InputMaybe<Deposits_Bool_Exp>;
};

/** columns and relationships of "vault" */
export type VaultsPositionsArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

/** columns and relationships of "vault" */
export type VaultsPositions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Positions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Positions_Order_By>>;
  where?: InputMaybe<Positions_Bool_Exp>;
};

/** columns and relationships of "vault" */
export type VaultsRedemptionsArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Redemptions_Order_By>>;
  where?: InputMaybe<Redemptions_Bool_Exp>;
};

/** columns and relationships of "vault" */
export type VaultsRedemptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Redemptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Redemptions_Order_By>>;
  where?: InputMaybe<Redemptions_Bool_Exp>;
};

/** columns and relationships of "vault" */
export type VaultsShare_Price_Change_Stats_DailyArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Change_Stats_Daily_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Change_Stats_Daily_Order_By>>;
  where?: InputMaybe<Share_Price_Change_Stats_Daily_Bool_Exp>;
};

/** columns and relationships of "vault" */
export type VaultsShare_Price_Change_Stats_HourlyArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Change_Stats_Hourly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Change_Stats_Hourly_Order_By>>;
  where?: InputMaybe<Share_Price_Change_Stats_Hourly_Bool_Exp>;
};

/** columns and relationships of "vault" */
export type VaultsShare_Price_Change_Stats_MonthlyArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Change_Stats_Monthly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Change_Stats_Monthly_Order_By>>;
  where?: InputMaybe<Share_Price_Change_Stats_Monthly_Bool_Exp>;
};

/** columns and relationships of "vault" */
export type VaultsShare_Price_Change_Stats_WeeklyArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Change_Stats_Weekly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Change_Stats_Weekly_Order_By>>;
  where?: InputMaybe<Share_Price_Change_Stats_Weekly_Bool_Exp>;
};

/** columns and relationships of "vault" */
export type VaultsShare_Price_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Changes_Order_By>>;
  where?: InputMaybe<Share_Price_Changes_Bool_Exp>;
};

/** columns and relationships of "vault" */
export type VaultsShare_Price_Changes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Share_Price_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Share_Price_Changes_Order_By>>;
  where?: InputMaybe<Share_Price_Changes_Bool_Exp>;
};

/** columns and relationships of "vault" */
export type VaultsSignalsArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signals_Order_By>>;
  where?: InputMaybe<Signals_Bool_Exp>;
};

/** columns and relationships of "vault" */
export type VaultsSignals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Signals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Signals_Order_By>>;
  where?: InputMaybe<Signals_Bool_Exp>;
};

/** aggregated selection of "vault" */
export type Vaults_Aggregate = {
  __typename?: 'vaults_aggregate';
  aggregate?: Maybe<Vaults_Aggregate_Fields>;
  nodes: Array<Vaults>;
};

export type Vaults_Aggregate_Bool_Exp = {
  count?: InputMaybe<Vaults_Aggregate_Bool_Exp_Count>;
};

export type Vaults_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vaults_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vaults_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vault" */
export type Vaults_Aggregate_Fields = {
  __typename?: 'vaults_aggregate_fields';
  avg?: Maybe<Vaults_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Vaults_Max_Fields>;
  min?: Maybe<Vaults_Min_Fields>;
  stddev?: Maybe<Vaults_Stddev_Fields>;
  stddev_pop?: Maybe<Vaults_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vaults_Stddev_Samp_Fields>;
  sum?: Maybe<Vaults_Sum_Fields>;
  var_pop?: Maybe<Vaults_Var_Pop_Fields>;
  var_samp?: Maybe<Vaults_Var_Samp_Fields>;
  variance?: Maybe<Vaults_Variance_Fields>;
};

/** aggregate fields of "vault" */
export type Vaults_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vaults_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "vault" */
export type Vaults_Aggregate_Order_By = {
  avg?: InputMaybe<Vaults_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vaults_Max_Order_By>;
  min?: InputMaybe<Vaults_Min_Order_By>;
  stddev?: InputMaybe<Vaults_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vaults_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vaults_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vaults_Sum_Order_By>;
  var_pop?: InputMaybe<Vaults_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vaults_Var_Samp_Order_By>;
  variance?: InputMaybe<Vaults_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vaults_Avg_Fields = {
  __typename?: 'vaults_avg_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  current_share_price?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  market_cap?: Maybe<Scalars['Float']['output']>;
  position_count?: Maybe<Scalars['Float']['output']>;
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "vault" */
export type Vaults_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>;
  current_share_price?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  position_count?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vault". All fields are combined with a logical 'AND'. */
export type Vaults_Bool_Exp = {
  _and?: InputMaybe<Array<Vaults_Bool_Exp>>;
  _not?: InputMaybe<Vaults_Bool_Exp>;
  _or?: InputMaybe<Array<Vaults_Bool_Exp>>;
  block_number?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  current_share_price?: InputMaybe<Numeric_Comparison_Exp>;
  curve_id?: InputMaybe<Numeric_Comparison_Exp>;
  deposits?: InputMaybe<Deposits_Bool_Exp>;
  deposits_aggregate?: InputMaybe<Deposits_Aggregate_Bool_Exp>;
  log_index?: InputMaybe<Bigint_Comparison_Exp>;
  market_cap?: InputMaybe<Numeric_Comparison_Exp>;
  position_count?: InputMaybe<Int_Comparison_Exp>;
  positions?: InputMaybe<Positions_Bool_Exp>;
  positions_aggregate?: InputMaybe<Positions_Aggregate_Bool_Exp>;
  redemptions?: InputMaybe<Redemptions_Bool_Exp>;
  redemptions_aggregate?: InputMaybe<Redemptions_Aggregate_Bool_Exp>;
  share_price_change_stats_daily?: InputMaybe<Share_Price_Change_Stats_Daily_Bool_Exp>;
  share_price_change_stats_hourly?: InputMaybe<Share_Price_Change_Stats_Hourly_Bool_Exp>;
  share_price_change_stats_monthly?: InputMaybe<Share_Price_Change_Stats_Monthly_Bool_Exp>;
  share_price_change_stats_weekly?: InputMaybe<Share_Price_Change_Stats_Weekly_Bool_Exp>;
  share_price_changes?: InputMaybe<Share_Price_Changes_Bool_Exp>;
  share_price_changes_aggregate?: InputMaybe<Share_Price_Changes_Aggregate_Bool_Exp>;
  signals?: InputMaybe<Signals_Bool_Exp>;
  signals_aggregate?: InputMaybe<Signals_Aggregate_Bool_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  term_id?: InputMaybe<String_Comparison_Exp>;
  total_assets?: InputMaybe<Numeric_Comparison_Exp>;
  total_shares?: InputMaybe<Numeric_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vaults_Max_Fields = {
  __typename?: 'vaults_max_fields';
  block_number?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  current_share_price?: Maybe<Scalars['numeric']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
  market_cap?: Maybe<Scalars['numeric']['output']>;
  position_count?: Maybe<Scalars['Int']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
  total_assets?: Maybe<Scalars['numeric']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "vault" */
export type Vaults_Max_Order_By = {
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_share_price?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  position_count?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vaults_Min_Fields = {
  __typename?: 'vaults_min_fields';
  block_number?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  current_share_price?: Maybe<Scalars['numeric']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
  market_cap?: Maybe<Scalars['numeric']['output']>;
  position_count?: Maybe<Scalars['Int']['output']>;
  term_id?: Maybe<Scalars['String']['output']>;
  total_assets?: Maybe<Scalars['numeric']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "vault" */
export type Vaults_Min_Order_By = {
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_share_price?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  position_count?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vault". */
export type Vaults_Order_By = {
  block_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_share_price?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  deposits_aggregate?: InputMaybe<Deposits_Aggregate_Order_By>;
  log_index?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  position_count?: InputMaybe<Order_By>;
  positions_aggregate?: InputMaybe<Positions_Aggregate_Order_By>;
  redemptions_aggregate?: InputMaybe<Redemptions_Aggregate_Order_By>;
  share_price_change_stats_daily_aggregate?: InputMaybe<Share_Price_Change_Stats_Daily_Aggregate_Order_By>;
  share_price_change_stats_hourly_aggregate?: InputMaybe<Share_Price_Change_Stats_Hourly_Aggregate_Order_By>;
  share_price_change_stats_monthly_aggregate?: InputMaybe<Share_Price_Change_Stats_Monthly_Aggregate_Order_By>;
  share_price_change_stats_weekly_aggregate?: InputMaybe<Share_Price_Change_Stats_Weekly_Aggregate_Order_By>;
  share_price_changes_aggregate?: InputMaybe<Share_Price_Changes_Aggregate_Order_By>;
  signals_aggregate?: InputMaybe<Signals_Aggregate_Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  term_id?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "vault" */
export enum Vaults_Select_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentSharePrice = 'current_share_price',
  /** column name */
  CurveId = 'curve_id',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  PositionCount = 'position_count',
  /** column name */
  TermId = 'term_id',
  /** column name */
  TotalAssets = 'total_assets',
  /** column name */
  TotalShares = 'total_shares',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate stddev on columns */
export type Vaults_Stddev_Fields = {
  __typename?: 'vaults_stddev_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  current_share_price?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  market_cap?: Maybe<Scalars['Float']['output']>;
  position_count?: Maybe<Scalars['Float']['output']>;
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "vault" */
export type Vaults_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>;
  current_share_price?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  position_count?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vaults_Stddev_Pop_Fields = {
  __typename?: 'vaults_stddev_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  current_share_price?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  market_cap?: Maybe<Scalars['Float']['output']>;
  position_count?: Maybe<Scalars['Float']['output']>;
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "vault" */
export type Vaults_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>;
  current_share_price?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  position_count?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vaults_Stddev_Samp_Fields = {
  __typename?: 'vaults_stddev_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  current_share_price?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  market_cap?: Maybe<Scalars['Float']['output']>;
  position_count?: Maybe<Scalars['Float']['output']>;
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "vault" */
export type Vaults_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>;
  current_share_price?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  position_count?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vaults" */
export type Vaults_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vaults_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vaults_Stream_Cursor_Value_Input = {
  block_number?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  current_share_price?: InputMaybe<Scalars['numeric']['input']>;
  curve_id?: InputMaybe<Scalars['numeric']['input']>;
  log_index?: InputMaybe<Scalars['bigint']['input']>;
  market_cap?: InputMaybe<Scalars['numeric']['input']>;
  position_count?: InputMaybe<Scalars['Int']['input']>;
  term_id?: InputMaybe<Scalars['String']['input']>;
  total_assets?: InputMaybe<Scalars['numeric']['input']>;
  total_shares?: InputMaybe<Scalars['numeric']['input']>;
  transaction_hash?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Vaults_Sum_Fields = {
  __typename?: 'vaults_sum_fields';
  block_number?: Maybe<Scalars['bigint']['output']>;
  current_share_price?: Maybe<Scalars['numeric']['output']>;
  curve_id?: Maybe<Scalars['numeric']['output']>;
  log_index?: Maybe<Scalars['bigint']['output']>;
  market_cap?: Maybe<Scalars['numeric']['output']>;
  position_count?: Maybe<Scalars['Int']['output']>;
  total_assets?: Maybe<Scalars['numeric']['output']>;
  total_shares?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "vault" */
export type Vaults_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>;
  current_share_price?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  position_count?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vaults_Var_Pop_Fields = {
  __typename?: 'vaults_var_pop_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  current_share_price?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  market_cap?: Maybe<Scalars['Float']['output']>;
  position_count?: Maybe<Scalars['Float']['output']>;
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "vault" */
export type Vaults_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>;
  current_share_price?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  position_count?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vaults_Var_Samp_Fields = {
  __typename?: 'vaults_var_samp_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  current_share_price?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  market_cap?: Maybe<Scalars['Float']['output']>;
  position_count?: Maybe<Scalars['Float']['output']>;
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "vault" */
export type Vaults_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>;
  current_share_price?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  position_count?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vaults_Variance_Fields = {
  __typename?: 'vaults_variance_fields';
  block_number?: Maybe<Scalars['Float']['output']>;
  current_share_price?: Maybe<Scalars['Float']['output']>;
  curve_id?: Maybe<Scalars['Float']['output']>;
  log_index?: Maybe<Scalars['Float']['output']>;
  market_cap?: Maybe<Scalars['Float']['output']>;
  position_count?: Maybe<Scalars['Float']['output']>;
  total_assets?: Maybe<Scalars['Float']['output']>;
  total_shares?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "vault" */
export type Vaults_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>;
  current_share_price?: InputMaybe<Order_By>;
  curve_id?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  position_count?: InputMaybe<Order_By>;
  total_assets?: InputMaybe<Order_By>;
  total_shares?: InputMaybe<Order_By>;
};

export type SearchAtomsByUriQueryVariables = Exact<{
  uri?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
}>;

export type SearchAtomsByUriQuery = {
  __typename?: 'query_root';
  atoms: Array<{
    __typename?: 'atoms';
    term_id: string;
    data?: string | null;
    type: any;
    label?: string | null;
    image?: string | null;
    emoji?: string | null;
    value?: {
      __typename?: 'atom_values';
      person?: {
        __typename?: 'persons';
        name?: string | null;
        image?: string | null;
        description?: string | null;
        email?: string | null;
        identifier?: string | null;
      } | null;
      thing?: {
        __typename?: 'things';
        url?: string | null;
        name?: string | null;
        image?: string | null;
        description?: string | null;
      } | null;
      organization?: {
        __typename?: 'organizations';
        name?: string | null;
        email?: string | null;
        description?: string | null;
        url?: string | null;
      } | null;
    } | null;
    term: {
      __typename?: 'terms';
      vault: Array<{
        __typename?: 'vaults';
        position_count: number;
        total_shares: any;
        current_share_price: any;
        myPosition: Array<{ __typename?: 'positions'; shares: any; account_id: string }>;
        positions: Array<{
          __typename?: 'positions';
          shares: any;
          account?: { __typename?: 'accounts'; id: string; image?: string | null; label: string } | null;
        }>;
      }>;
    };
    as_subject_triples: Array<{
      __typename?: 'triples';
      term_id: string;
      object: {
        __typename?: 'atoms';
        term_id: string;
        label?: string | null;
        emoji?: string | null;
        image?: string | null;
      };
      predicate: {
        __typename?: 'atoms';
        emoji?: string | null;
        label?: string | null;
        image?: string | null;
        term_id: string;
      };
      counter_term?: {
        __typename?: 'terms';
        vault: Array<{
          __typename?: 'vaults';
          term_id: string;
          position_count: number;
          total_shares: any;
          current_share_price: any;
          myPosition: Array<{ __typename?: 'positions'; shares: any; account_id: string }>;
          positions: Array<{ __typename?: 'positions'; shares: any; account_id: string }>;
        }>;
      } | null;
      term?: {
        __typename?: 'terms';
        vault: Array<{
          __typename?: 'vaults';
          term_id: string;
          position_count: number;
          total_shares: any;
          current_share_price: any;
          myPosition: Array<{ __typename?: 'positions'; shares: any; account_id: string }>;
          positions: Array<{ __typename?: 'positions'; shares: any; account_id: string }>;
        }>;
      } | null;
    }>;
  }>;
};

export type PinThingMutationVariables = Exact<{
  thing: PinThingInput;
}>;

export type PinThingMutation = {
  __typename?: 'mutation_root';
  pinThing?: { __typename?: 'PinOutput'; uri?: string | null } | null;
};

export type ClaimsFromFollowingAboutSubjectQueryVariables = Exact<{
  address: Scalars['String']['input'];
  subjectId: Scalars['String']['input'];
}>;

export type ClaimsFromFollowingAboutSubjectQuery = {
  __typename?: 'query_root';
  positions_from_following: Array<{
    __typename?: 'positions';
    shares: any;
    term_id: string;
    term: {
      __typename?: 'terms';
      triple?: {
        __typename?: 'triples';
        counter_term_id: string;
        subject: {
          __typename?: 'atoms';
          emoji?: string | null;
          label?: string | null;
          image?: string | null;
          term_id: string;
        };
        predicate: {
          __typename?: 'atoms';
          emoji?: string | null;
          label?: string | null;
          image?: string | null;
          term_id: string;
        };
        object: {
          __typename?: 'atoms';
          emoji?: string | null;
          label?: string | null;
          image?: string | null;
          term_id: string;
        };
        counter_term?: {
          __typename?: 'terms';
          vaults: Array<{
            __typename?: 'vaults';
            term_id: string;
            curve_id: any;
            position_count: number;
            total_shares: any;
            current_share_price: any;
            myPosition: Array<{ __typename?: 'positions'; shares: any; account_id: string }>;
          }>;
        } | null;
        term?: {
          __typename?: 'terms';
          vaults: Array<{
            __typename?: 'vaults';
            term_id: string;
            curve_id: any;
            position_count: number;
            total_shares: any;
            current_share_price: any;
            myPosition: Array<{ __typename?: 'positions'; shares: any; account_id: string }>;
          }>;
        } | null;
      } | null;
    };
    account?: { __typename?: 'accounts'; id: string; label: string } | null;
  }>;
};

export type SearchAtomsQueryVariables = Exact<{
  label: Scalars['String']['input'];
}>;

export type SearchAtomsQuery = {
  __typename?: 'query_root';
  atoms: Array<{
    __typename?: 'atoms';
    term_id: string;
    image?: string | null;
    label?: string | null;
    term: { __typename?: 'terms'; total_market_cap?: any | null };
  }>;
};

export type GetTransactionEventsQueryVariables = Exact<{
  hash: Scalars['String']['input'];
}>;

export type GetTransactionEventsQuery = {
  __typename?: 'query_root';
  events: Array<{ __typename?: 'events'; transaction_hash: string }>;
};

export const SearchAtomsByUriDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SearchAtomsByUri' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'uri' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'atoms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: '_or' },
                      value: {
                        kind: 'ListValue',
                        values: [
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'data' },
                                value: {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: '_eq' },
                                      value: { kind: 'Variable', name: { kind: 'Name', value: 'uri' } },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'value' },
                                value: {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'thing' },
                                      value: {
                                        kind: 'ObjectValue',
                                        fields: [
                                          {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'url' },
                                            value: {
                                              kind: 'ObjectValue',
                                              fields: [
                                                {
                                                  kind: 'ObjectField',
                                                  name: { kind: 'Name', value: '_eq' },
                                                  value: { kind: 'Variable', name: { kind: 'Name', value: 'uri' } },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'value' },
                                value: {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'person' },
                                      value: {
                                        kind: 'ObjectValue',
                                        fields: [
                                          {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'url' },
                                            value: {
                                              kind: 'ObjectValue',
                                              fields: [
                                                {
                                                  kind: 'ObjectField',
                                                  name: { kind: 'Name', value: '_eq' },
                                                  value: { kind: 'Variable', name: { kind: 'Name', value: 'uri' } },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'value' },
                                value: {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'organization' },
                                      value: {
                                        kind: 'ObjectValue',
                                        fields: [
                                          {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'url' },
                                            value: {
                                              kind: 'ObjectValue',
                                              fields: [
                                                {
                                                  kind: 'ObjectField',
                                                  name: { kind: 'Name', value: '_eq' },
                                                  value: { kind: 'Variable', name: { kind: 'Name', value: 'uri' } },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'value' },
                                value: {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'book' },
                                      value: {
                                        kind: 'ObjectValue',
                                        fields: [
                                          {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'url' },
                                            value: {
                                              kind: 'ObjectValue',
                                              fields: [
                                                {
                                                  kind: 'ObjectField',
                                                  name: { kind: 'Name', value: '_eq' },
                                                  value: { kind: 'Variable', name: { kind: 'Name', value: 'uri' } },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'term_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'data' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'emoji' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'value' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'person' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'identifier' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'thing' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'organization' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'term' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'vault' },
                        name: { kind: 'Name', value: 'vaults' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'where' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'curve_id' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: '_eq' },
                                        value: { kind: 'IntValue', value: '1' },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'position_count' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'total_shares' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'current_share_price' } },
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'myPosition' },
                              name: { kind: 'Name', value: 'positions' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'limit' },
                                  value: { kind: 'IntValue', value: '1' },
                                },
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'where' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: 'shares' },
                                        value: {
                                          kind: 'ObjectValue',
                                          fields: [
                                            {
                                              kind: 'ObjectField',
                                              name: { kind: 'Name', value: '_gt' },
                                              value: { kind: 'IntValue', value: '0' },
                                            },
                                          ],
                                        },
                                      },
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: 'account_id' },
                                        value: {
                                          kind: 'ObjectValue',
                                          fields: [
                                            {
                                              kind: 'ObjectField',
                                              name: { kind: 'Name', value: '_eq' },
                                              value: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'shares' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'account_id' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'positions' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'where' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: 'shares' },
                                        value: {
                                          kind: 'ObjectValue',
                                          fields: [
                                            {
                                              kind: 'ObjectField',
                                              name: { kind: 'Name', value: '_gt' },
                                              value: { kind: 'IntValue', value: '0' },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'order_by' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: 'shares' },
                                        value: { kind: 'EnumValue', value: 'desc' },
                                      },
                                    ],
                                  },
                                },
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'limit' },
                                  value: { kind: 'IntValue', value: '5' },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'shares' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'account' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'as_subject_triples' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'term_id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'object' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'term_id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'emoji' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'predicate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'emoji' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'term_id' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'counter_term' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'vault' },
                              name: { kind: 'Name', value: 'vaults' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'where' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: 'curve_id' },
                                        value: {
                                          kind: 'ObjectValue',
                                          fields: [
                                            {
                                              kind: 'ObjectField',
                                              name: { kind: 'Name', value: '_eq' },
                                              value: { kind: 'IntValue', value: '1' },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'term_id' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'position_count' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'total_shares' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'current_share_price' } },
                                  {
                                    kind: 'Field',
                                    alias: { kind: 'Name', value: 'myPosition' },
                                    name: { kind: 'Name', value: 'positions' },
                                    arguments: [
                                      {
                                        kind: 'Argument',
                                        name: { kind: 'Name', value: 'limit' },
                                        value: { kind: 'IntValue', value: '1' },
                                      },
                                      {
                                        kind: 'Argument',
                                        name: { kind: 'Name', value: 'where' },
                                        value: {
                                          kind: 'ObjectValue',
                                          fields: [
                                            {
                                              kind: 'ObjectField',
                                              name: { kind: 'Name', value: 'shares' },
                                              value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                  {
                                                    kind: 'ObjectField',
                                                    name: { kind: 'Name', value: '_gt' },
                                                    value: { kind: 'IntValue', value: '0' },
                                                  },
                                                ],
                                              },
                                            },
                                            {
                                              kind: 'ObjectField',
                                              name: { kind: 'Name', value: 'account_id' },
                                              value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                  {
                                                    kind: 'ObjectField',
                                                    name: { kind: 'Name', value: '_eq' },
                                                    value: {
                                                      kind: 'Variable',
                                                      name: { kind: 'Name', value: 'address' },
                                                    },
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'shares' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'account_id' } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'positions' },
                                    arguments: [
                                      {
                                        kind: 'Argument',
                                        name: { kind: 'Name', value: 'where' },
                                        value: {
                                          kind: 'ObjectValue',
                                          fields: [
                                            {
                                              kind: 'ObjectField',
                                              name: { kind: 'Name', value: 'shares' },
                                              value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                  {
                                                    kind: 'ObjectField',
                                                    name: { kind: 'Name', value: '_gt' },
                                                    value: { kind: 'IntValue', value: '0' },
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'shares' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'account_id' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'term' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'vault' },
                              name: { kind: 'Name', value: 'vaults' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'where' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: 'curve_id' },
                                        value: {
                                          kind: 'ObjectValue',
                                          fields: [
                                            {
                                              kind: 'ObjectField',
                                              name: { kind: 'Name', value: '_eq' },
                                              value: { kind: 'IntValue', value: '1' },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'term_id' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'position_count' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'total_shares' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'current_share_price' } },
                                  {
                                    kind: 'Field',
                                    alias: { kind: 'Name', value: 'myPosition' },
                                    name: { kind: 'Name', value: 'positions' },
                                    arguments: [
                                      {
                                        kind: 'Argument',
                                        name: { kind: 'Name', value: 'limit' },
                                        value: { kind: 'IntValue', value: '1' },
                                      },
                                      {
                                        kind: 'Argument',
                                        name: { kind: 'Name', value: 'where' },
                                        value: {
                                          kind: 'ObjectValue',
                                          fields: [
                                            {
                                              kind: 'ObjectField',
                                              name: { kind: 'Name', value: 'shares' },
                                              value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                  {
                                                    kind: 'ObjectField',
                                                    name: { kind: 'Name', value: '_gt' },
                                                    value: { kind: 'IntValue', value: '0' },
                                                  },
                                                ],
                                              },
                                            },
                                            {
                                              kind: 'ObjectField',
                                              name: { kind: 'Name', value: 'account_id' },
                                              value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                  {
                                                    kind: 'ObjectField',
                                                    name: { kind: 'Name', value: '_eq' },
                                                    value: {
                                                      kind: 'Variable',
                                                      name: { kind: 'Name', value: 'address' },
                                                    },
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'shares' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'account_id' } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'positions' },
                                    arguments: [
                                      {
                                        kind: 'Argument',
                                        name: { kind: 'Name', value: 'where' },
                                        value: {
                                          kind: 'ObjectValue',
                                          fields: [
                                            {
                                              kind: 'ObjectField',
                                              name: { kind: 'Name', value: 'shares' },
                                              value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                  {
                                                    kind: 'ObjectField',
                                                    name: { kind: 'Name', value: '_gt' },
                                                    value: { kind: 'IntValue', value: '0' },
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'shares' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'account_id' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SearchAtomsByUriQuery, SearchAtomsByUriQueryVariables>;
export const PinThingDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'PinThing' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'thing' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'PinThingInput' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pinThing' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'thing' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'thing' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'uri' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PinThingMutation, PinThingMutationVariables>;
export const ClaimsFromFollowingAboutSubjectDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ClaimsFromFollowingAboutSubject' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'subjectId' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'positions_from_following' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'args' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'address' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'term' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'triple' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'subject_id' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: '_eq' },
                                        value: { kind: 'Variable', name: { kind: 'Name', value: 'subjectId' } },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'shares' } },
                { kind: 'Field', name: { kind: 'Name', value: 'term_id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'term' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'triple' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'counter_term_id' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'subject' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'emoji' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'term_id' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'predicate' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'emoji' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'term_id' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'object' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'emoji' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'term_id' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'counter_term' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'vaults' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'term_id' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'curve_id' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'position_count' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'total_shares' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'current_share_price' } },
                                        {
                                          kind: 'Field',
                                          alias: { kind: 'Name', value: 'myPosition' },
                                          name: { kind: 'Name', value: 'positions' },
                                          arguments: [
                                            {
                                              kind: 'Argument',
                                              name: { kind: 'Name', value: 'limit' },
                                              value: { kind: 'IntValue', value: '1' },
                                            },
                                            {
                                              kind: 'Argument',
                                              name: { kind: 'Name', value: 'where' },
                                              value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                  {
                                                    kind: 'ObjectField',
                                                    name: { kind: 'Name', value: 'account_id' },
                                                    value: {
                                                      kind: 'ObjectValue',
                                                      fields: [
                                                        {
                                                          kind: 'ObjectField',
                                                          name: { kind: 'Name', value: '_eq' },
                                                          value: {
                                                            kind: 'Variable',
                                                            name: { kind: 'Name', value: 'address' },
                                                          },
                                                        },
                                                      ],
                                                    },
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              { kind: 'Field', name: { kind: 'Name', value: 'shares' } },
                                              { kind: 'Field', name: { kind: 'Name', value: 'account_id' } },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'term' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'vaults' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'term_id' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'curve_id' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'position_count' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'total_shares' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'current_share_price' } },
                                        {
                                          kind: 'Field',
                                          alias: { kind: 'Name', value: 'myPosition' },
                                          name: { kind: 'Name', value: 'positions' },
                                          arguments: [
                                            {
                                              kind: 'Argument',
                                              name: { kind: 'Name', value: 'limit' },
                                              value: { kind: 'IntValue', value: '1' },
                                            },
                                            {
                                              kind: 'Argument',
                                              name: { kind: 'Name', value: 'where' },
                                              value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                  {
                                                    kind: 'ObjectField',
                                                    name: { kind: 'Name', value: 'account_id' },
                                                    value: {
                                                      kind: 'ObjectValue',
                                                      fields: [
                                                        {
                                                          kind: 'ObjectField',
                                                          name: { kind: 'Name', value: '_eq' },
                                                          value: {
                                                            kind: 'Variable',
                                                            name: { kind: 'Name', value: 'address' },
                                                          },
                                                        },
                                                      ],
                                                    },
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              { kind: 'Field', name: { kind: 'Name', value: 'shares' } },
                                              { kind: 'Field', name: { kind: 'Name', value: 'account_id' } },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'account' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ClaimsFromFollowingAboutSubjectQuery, ClaimsFromFollowingAboutSubjectQueryVariables>;
export const SearchAtomsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SearchAtoms' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'label' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'atoms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order_by' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'term' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'total_market_cap' },
                            value: { kind: 'EnumValue', value: 'desc' },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              { kind: 'Argument', name: { kind: 'Name', value: 'limit' }, value: { kind: 'IntValue', value: '30' } },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'type' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_in' },
                            value: {
                              kind: 'ListValue',
                              values: [
                                { kind: 'StringValue', value: 'Thing', block: false },
                                { kind: 'StringValue', value: 'Person', block: false },
                                { kind: 'StringValue', value: 'Organization', block: false },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'label' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_ilike' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'label' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'term_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'term' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total_market_cap' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SearchAtomsQuery, SearchAtomsQueryVariables>;
export const GetTransactionEventsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTransactionEvents' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'hash' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'events' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'transaction_hash' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'hash' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'transaction_hash' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTransactionEventsQuery, GetTransactionEventsQueryVariables>;
