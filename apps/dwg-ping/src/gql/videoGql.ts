/* eslint-disable */
import * as types from './vidoeGraphql';
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
 */
const documents = {
    "\n  query GetVideo($id: ID!) {\n    videoByUniqueInput(where: { id: $id }) {\n      media {\n        id\n        size\n        storageBag {\n          distributionBuckets {\n            id\n            distributing\n            operators {\n              metadata {\n                nodeEndpoint\n              }\n            }\n          }\n        }\n      }\n      thumbnailPhoto {\n        id\n        size\n        storageBag {\n          distributionBuckets {\n            id\n            distributing\n            operators {\n              metadata {\n                nodeEndpoint\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetVideoDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function videoGraphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function videoGraphql(source: "\n  query GetVideo($id: ID!) {\n    videoByUniqueInput(where: { id: $id }) {\n      media {\n        id\n        size\n        storageBag {\n          distributionBuckets {\n            id\n            distributing\n            operators {\n              metadata {\n                nodeEndpoint\n              }\n            }\n          }\n        }\n      }\n      thumbnailPhoto {\n        id\n        size\n        storageBag {\n          distributionBuckets {\n            id\n            distributing\n            operators {\n              metadata {\n                nodeEndpoint\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetVideo($id: ID!) {\n    videoByUniqueInput(where: { id: $id }) {\n      media {\n        id\n        size\n        storageBag {\n          distributionBuckets {\n            id\n            distributing\n            operators {\n              metadata {\n                nodeEndpoint\n              }\n            }\n          }\n        }\n      }\n      thumbnailPhoto {\n        id\n        size\n        storageBag {\n          distributionBuckets {\n            id\n            distributing\n            operators {\n              metadata {\n                nodeEndpoint\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function videoGraphql(source: string) {
    return (documents as any)[source] ?? {};
}

export type VideoDocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;