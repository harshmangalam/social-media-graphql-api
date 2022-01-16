/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  PostAudienceEnum: "FRIENDS" | "ONLY_ME" | "PUBLIC" | "SPECIFIC"
  UserRole: "ADMIN" | "USER"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Post: { // root type
    audience: NexusGenEnums['PostAudienceEnum']; // PostAudienceEnum!
    checkIn?: string | null; // String
    content?: string | null; // String
    createdAt: string; // String!
    feeling?: string | null; // String
    gif?: string | null; // String
    id: string; // ID!
    media: Array<string | null>; // [String]!
    title: string; // String!
    updatedAt: string; // String!
  }
  Query: {};
  User: { // root type
    coverImage?: string | null; // String
    createdAt: string; // String!
    email: string; // String!
    firstName: string; // String!
    id: string; // ID!
    isActive: boolean; // Boolean!
    isEmailVerified: boolean; // Boolean!
    lastName?: string | null; // String
    profileImage?: string | null; // String
    role: NexusGenEnums['UserRole']; // UserRole!
    updatedAt: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createPost: NexusGenRootTypes['Post']; // Post!
  }
  Post: { // field return type
    audience: NexusGenEnums['PostAudienceEnum']; // PostAudienceEnum!
    checkIn: string | null; // String
    content: string | null; // String
    createdAt: string; // String!
    feeling: string | null; // String
    gif: string | null; // String
    id: string; // ID!
    media: Array<string | null>; // [String]!
    title: string; // String!
    updatedAt: string; // String!
  }
  Query: { // field return type
    posts: Array<NexusGenRootTypes['Post'] | null>; // [Post]!
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    coverImage: string | null; // String
    createdAt: string; // String!
    email: string; // String!
    firstName: string; // String!
    id: string; // ID!
    isActive: boolean; // Boolean!
    isEmailVerified: boolean; // Boolean!
    lastName: string | null; // String
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
    profileImage: string | null; // String
    role: NexusGenEnums['UserRole']; // UserRole!
    specificAudienceInPosts: NexusGenRootTypes['User'][]; // [User!]!
    taggedInPosts: NexusGenRootTypes['Post'][]; // [Post!]!
    updatedAt: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createPost: 'Post'
  }
  Post: { // field return type name
    audience: 'PostAudienceEnum'
    checkIn: 'String'
    content: 'String'
    createdAt: 'String'
    feeling: 'String'
    gif: 'String'
    id: 'ID'
    media: 'String'
    title: 'String'
    updatedAt: 'String'
  }
  Query: { // field return type name
    posts: 'Post'
    users: 'User'
  }
  User: { // field return type name
    coverImage: 'String'
    createdAt: 'String'
    email: 'String'
    firstName: 'String'
    id: 'ID'
    isActive: 'Boolean'
    isEmailVerified: 'Boolean'
    lastName: 'String'
    posts: 'Post'
    profileImage: 'String'
    role: 'UserRole'
    specificAudienceInPosts: 'User'
    taggedInPosts: 'Post'
    updatedAt: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPost: { // args
      audience: NexusGenEnums['PostAudienceEnum']; // PostAudienceEnum!
      checkIn?: string | null; // String
      content?: string | null; // String
      feeling?: string | null; // String
      gif?: string | null; // String
      title: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}