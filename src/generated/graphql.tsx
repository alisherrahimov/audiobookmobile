import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type File = {
  __typename?: 'File';
  encoding: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  active?: Maybe<Scalars['Boolean']>;
  checkCode?: Maybe<Scalars['Boolean']>;
  createBook?: Maybe<Book>;
  createCategory?: Maybe<Category>;
  createReview?: Maybe<Review>;
  createUser?: Maybe<User>;
  interest?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  myBooks?: Maybe<Array<Maybe<Book>>>;
  register?: Maybe<Scalars['String']>;
  resetPassword?: Maybe<Scalars['Boolean']>;
  searchBook?: Maybe<Array<Maybe<Book>>>;
};


export type MutationActiveArgs = {
  input?: InputMaybe<Active>;
};


export type MutationCheckCodeArgs = {
  input?: InputMaybe<CheckCode>;
};


export type MutationCreateBookArgs = {
  input?: InputMaybe<BookInput>;
};


export type MutationCreateCategoryArgs = {
  image: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateReviewArgs = {
  bookId: Scalars['ID'];
  content: Scalars['String'];
  userID: Scalars['String'];
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationInterestArgs = {
  input?: InputMaybe<InterestCategory>;
};


export type MutationLoginArgs = {
  input: Login;
};


export type MutationMyBooksArgs = {
  input?: InputMaybe<Book_Id>;
};


export type MutationRegisterArgs = {
  input: Register;
};


export type MutationResetPasswordArgs = {
  input?: InputMaybe<ResetPassword>;
};


export type MutationSearchBookArgs = {
  author?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  books?: Maybe<Array<Maybe<Book>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
  category?: Maybe<Category>;
  deleteUser?: Maybe<User>;
  home?: Maybe<Home>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryDeleteUserArgs = {
  id: Scalars['ID'];
};


export type QueryReviewArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Active = {
  code?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
};

export type Book = {
  __typename?: 'book';
  audio_link?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  book_link?: Maybe<Scalars['String']>;
  category?: Maybe<Array<Maybe<Category>>>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  downloads?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  review?: Maybe<Array<Maybe<Review>>>;
  star?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type BookInput = {
  audio_link?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  book_link?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Book_Id = {
  id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Category = {
  __typename?: 'category';
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type CheckCode = {
  code?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
};

export type Home = {
  __typename?: 'home';
  bestseller?: Maybe<Array<Maybe<Book>>>;
  new_release?: Maybe<Array<Maybe<Book>>>;
  recommended?: Maybe<Array<Maybe<Book>>>;
  trend?: Maybe<Array<Maybe<Book>>>;
};

export type InterestCategory = {
  id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Login = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Register = {
  date?: InputMaybe<Scalars['Date']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type ResetPassword = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Review = {
  __typename?: 'review';
  book?: Maybe<Book>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  id?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['Date'];
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'user';
  active?: Maybe<Scalars['Boolean']>;
  birthday?: Maybe<Scalars['Date']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  interest?: Maybe<Array<Maybe<Category>>>;
  mybooks?: Maybe<Array<Maybe<Book>>>;
  password?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  sub_end?: Maybe<Scalars['Date']>;
  subscription?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Date']>;
  username?: Maybe<Scalars['String']>;
};

export type UserInput = {
  birthday?: InputMaybe<Scalars['Date']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type GetHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomeQuery = { __typename?: 'Query', home?: { __typename?: 'home', bestseller?: Array<{ __typename?: 'book', image?: string | null, id?: string | null, title?: string | null } | null> | null, new_release?: Array<{ __typename?: 'book', image?: string | null, id?: string | null, title?: string | null } | null> | null, recommended?: Array<{ __typename?: 'book', image?: string | null, id?: string | null } | null> | null, trend?: Array<{ __typename?: 'book', image?: string | null, id?: string | null, title?: string | null } | null> | null } | null, categories?: Array<{ __typename?: 'category', name?: string | null } | null> | null };


export const GetHomeDocument = gql`
    query getHome {
  home {
    bestseller {
      image
      id
      title
    }
    new_release {
      image
      id
      title
    }
    recommended {
      image
      id
    }
    trend {
      image
      id
      title
    }
  }
  categories {
    name
  }
}
    `;

/**
 * __useGetHomeQuery__
 *
 * To run a query within a React component, call `useGetHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomeQuery(baseOptions?: Apollo.QueryHookOptions<GetHomeQuery, GetHomeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHomeQuery, GetHomeQueryVariables>(GetHomeDocument, options);
      }
export function useGetHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomeQuery, GetHomeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHomeQuery, GetHomeQueryVariables>(GetHomeDocument, options);
        }
export type GetHomeQueryHookResult = ReturnType<typeof useGetHomeQuery>;
export type GetHomeLazyQueryHookResult = ReturnType<typeof useGetHomeLazyQuery>;
export type GetHomeQueryResult = Apollo.QueryResult<GetHomeQuery, GetHomeQueryVariables>;