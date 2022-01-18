/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreatePostInputType: { // input type
    audience: NexusGenEnums['PostAudienceEnum']; // PostAudienceEnum!
    checkIn?: string | null; // String
    content?: string | null; // String
    feeling?: string | null; // String
    gif?: string | null; // String
    images: Array<string | null>; // [String]!
    specificAudienceFriends: Array<string | null>; // [ID]!
    taggedFriends: Array<string | null>; // [ID]!
    title: string; // String!
  }
  LoginInputType: { // input type
    email: string; // String!
    password: string; // String!
  }
  SignupInputType: { // input type
    email: string; // String!
    firstName: string; // String!
    lastName?: string | null; // String
    password: string; // String!
  }
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
  CreatePostResponseNodesType: { // root type
    post: NexusGenRootTypes['Post']; // Post!
  }
  CreatePostResponseType: { // root type
    message: string; // String!
    nodes: NexusGenRootTypes['CreatePostResponseNodesType']; // CreatePostResponseNodesType!
    status: number; // Int!
  }
  LoginResponseNodesType: { // root type
    accessToken: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  LoginResponseType: { // root type
    message: string; // String!
    nodes: NexusGenRootTypes['LoginResponseNodesType']; // LoginResponseNodesType!
    status: number; // Int!
  }
  MeResponseNodesType: { // root type
    user: NexusGenRootTypes['User']; // User!
  }
  MeResponseType: { // root type
    message: string; // String!
    nodes: NexusGenRootTypes['MeResponseNodesType']; // MeResponseNodesType!
    status: number; // Int!
  }
  Mutation: {};
  Post: { // root type
    audience: NexusGenEnums['PostAudienceEnum']; // PostAudienceEnum!
    authorId: string; // ID!
    checkIn?: string | null; // String
    content?: string | null; // String
    createdAt: string; // String!
    feeling?: string | null; // String
    gif?: string | null; // String
    id: string; // ID!
    images: Array<string | null>; // [String]!
    title: string; // String!
    updatedAt: string; // String!
  }
  Query: {};
  SignupResponseNodesType: { // root type
    user?: NexusGenRootTypes['User'] | null; // User
  }
  SignupResponseType: { // root type
    message: string; // String!
    nodes: NexusGenRootTypes['SignupResponseNodesType']; // SignupResponseNodesType!
    status: number; // Int!
  }
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
  CreatePostResponseNodesType: { // field return type
    post: NexusGenRootTypes['Post']; // Post!
  }
  CreatePostResponseType: { // field return type
    message: string; // String!
    nodes: NexusGenRootTypes['CreatePostResponseNodesType']; // CreatePostResponseNodesType!
    status: number; // Int!
  }
  LoginResponseNodesType: { // field return type
    accessToken: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  LoginResponseType: { // field return type
    message: string; // String!
    nodes: NexusGenRootTypes['LoginResponseNodesType']; // LoginResponseNodesType!
    status: number; // Int!
  }
  MeResponseNodesType: { // field return type
    user: NexusGenRootTypes['User']; // User!
  }
  MeResponseType: { // field return type
    message: string; // String!
    nodes: NexusGenRootTypes['MeResponseNodesType']; // MeResponseNodesType!
    status: number; // Int!
  }
  Mutation: { // field return type
    createPost: NexusGenRootTypes['CreatePostResponseType']; // CreatePostResponseType!
    login: NexusGenRootTypes['LoginResponseType']; // LoginResponseType!
    signup: NexusGenRootTypes['SignupResponseType']; // SignupResponseType!
  }
  Post: { // field return type
    audience: NexusGenEnums['PostAudienceEnum']; // PostAudienceEnum!
    author: NexusGenRootTypes['User']; // User!
    authorId: string; // ID!
    checkIn: string | null; // String
    content: string | null; // String
    createdAt: string; // String!
    feeling: string | null; // String
    gif: string | null; // String
    id: string; // ID!
    images: Array<string | null>; // [String]!
    specificAudienceFriends: NexusGenRootTypes['User'][]; // [User!]!
    taggedFriends: NexusGenRootTypes['User'][]; // [User!]!
    title: string; // String!
    updatedAt: string; // String!
  }
  Query: { // field return type
    me: NexusGenRootTypes['MeResponseType']; // MeResponseType!
    posts: Array<NexusGenRootTypes['Post'] | null>; // [Post]!
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  SignupResponseNodesType: { // field return type
    user: NexusGenRootTypes['User'] | null; // User
  }
  SignupResponseType: { // field return type
    message: string; // String!
    nodes: NexusGenRootTypes['SignupResponseNodesType']; // SignupResponseNodesType!
    status: number; // Int!
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
  CreatePostResponseNodesType: { // field return type name
    post: 'Post'
  }
  CreatePostResponseType: { // field return type name
    message: 'String'
    nodes: 'CreatePostResponseNodesType'
    status: 'Int'
  }
  LoginResponseNodesType: { // field return type name
    accessToken: 'String'
    user: 'User'
  }
  LoginResponseType: { // field return type name
    message: 'String'
    nodes: 'LoginResponseNodesType'
    status: 'Int'
  }
  MeResponseNodesType: { // field return type name
    user: 'User'
  }
  MeResponseType: { // field return type name
    message: 'String'
    nodes: 'MeResponseNodesType'
    status: 'Int'
  }
  Mutation: { // field return type name
    createPost: 'CreatePostResponseType'
    login: 'LoginResponseType'
    signup: 'SignupResponseType'
  }
  Post: { // field return type name
    audience: 'PostAudienceEnum'
    author: 'User'
    authorId: 'ID'
    checkIn: 'String'
    content: 'String'
    createdAt: 'String'
    feeling: 'String'
    gif: 'String'
    id: 'ID'
    images: 'String'
    specificAudienceFriends: 'User'
    taggedFriends: 'User'
    title: 'String'
    updatedAt: 'String'
  }
  Query: { // field return type name
    me: 'MeResponseType'
    posts: 'Post'
    users: 'User'
  }
  SignupResponseNodesType: { // field return type name
    user: 'User'
  }
  SignupResponseType: { // field return type name
    message: 'String'
    nodes: 'SignupResponseNodesType'
    status: 'Int'
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
      data: NexusGenInputs['CreatePostInputType']; // CreatePostInputType!
    }
    login: { // args
      data: NexusGenInputs['LoginInputType']; // LoginInputType!
    }
    signup: { // args
      data: NexusGenInputs['SignupInputType']; // SignupInputType!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

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