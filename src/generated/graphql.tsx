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

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  active?: Maybe<Scalars['Boolean']>;
  checkCode?: Maybe<ResponseType>;
  createCategory?: Maybe<Category>;
  createReview?: Maybe<Review>;
  createUser?: Maybe<User>;
  forgetPassword?: Maybe<ResponseType>;
  getBookByCategory?: Maybe<Array<Maybe<Book>>>;
  interest?: Maybe<Scalars['Boolean']>;
  login: ResponseType;
  myBooks?: Maybe<Array<Maybe<Book>>>;
  register?: Maybe<ResponseType>;
  resetPassword?: Maybe<ResponseType>;
  searchBook?: Maybe<Array<Maybe<Book>>>;
};


export type MutationActiveArgs = {
  code?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
};


export type MutationCheckCodeArgs = {
  code?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String'];
};


export type MutationCreateReviewArgs = {
  bookId: Scalars['ID'];
  content: Scalars['String'];
  userID: Scalars['String'];
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationForgetPasswordArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MutationGetBookByCategoryArgs = {
  input?: InputMaybe<GetByCategory>;
};


export type MutationInterestArgs = {
  input?: InputMaybe<InterestCategory>;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationMyBooksArgs = {
  input?: InputMaybe<Book_Id>;
};


export type MutationRegisterArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationResetPasswordArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationSearchBookArgs = {
  text?: InputMaybe<Scalars['String']>;
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

export type ResponseType = {
  __typename?: 'ResponseType';
  error: Scalars['Boolean'];
  message: Scalars['String'];
};

export type Active = {
  code?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
};

export type Book = {
  __typename?: 'book';
  audio_link?: Maybe<Scalars['String']>;
  audio_size?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  book_link?: Maybe<Scalars['String']>;
  category?: Maybe<Array<Maybe<Category>>>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  downloads?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  pdf_size?: Maybe<Scalars['String']>;
  review?: Maybe<Array<Maybe<Review>>>;
  star?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Book_Id = {
  id?: InputMaybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'category';
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type CheckCode = {
  code?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
};

export type ForgetPassword = {
  email?: InputMaybe<Scalars['String']>;
};

export type GetByCategory = {
  id?: InputMaybe<Scalars['String']>;
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
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
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
  code?: Maybe<Scalars['Int']>;
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
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type GetHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomeQuery = { __typename?: 'Query', home?: { __typename?: 'home', bestseller?: Array<{ __typename?: 'book', image?: string | null, id?: string | null, title?: string | null } | null> | null, new_release?: Array<{ __typename?: 'book', image?: string | null, id?: string | null, title?: string | null } | null> | null, recommended?: Array<{ __typename?: 'book', image?: string | null, id?: string | null, title?: string | null } | null> | null, trend?: Array<{ __typename?: 'book', image?: string | null, id?: string | null, title?: string | null } | null> | null } | null, categories?: Array<{ __typename?: 'category', id?: string | null, name?: string | null } | null> | null };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'ResponseType', error: boolean, message: string } };

export type ForgetPasswordMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;


export type ForgetPasswordMutation = { __typename?: 'Mutation', forgetPassword?: { __typename?: 'ResponseType', error: boolean, message: string } | null };

export type CheckCodeMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['Int']>;
}>;


export type CheckCodeMutation = { __typename?: 'Mutation', checkCode?: { __typename?: 'ResponseType', error: boolean, message: string } | null };

export type ResetPasswordMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword?: { __typename?: 'ResponseType', error: boolean, message: string } | null };

export type RegisterMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'ResponseType', error: boolean, message: string } | null };

export type ActiveMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['Int']>;
}>;


export type ActiveMutation = { __typename?: 'Mutation', active?: boolean | null };

export type GetBookQueryVariables = Exact<{
  bookId: Scalars['ID'];
}>;


export type GetBookQuery = { __typename?: 'Query', book?: { __typename?: 'book', audio_link?: string | null, author?: string | null, book_link?: string | null, description?: string | null, downloads?: number | null, id?: string | null, image?: string | null, page?: number | null, star?: number | null, title?: string | null, pdf_size?: string | null, audio_size?: string | null, duration?: string | null, category?: Array<{ __typename?: 'category', id?: string | null, name?: string | null } | null> | null, review?: Array<{ __typename?: 'review', content?: string | null, id?: string | null, user?: { __typename?: 'user', image?: string | null, username?: string | null } | null } | null> | null } | null };

export type SearchBookMutationVariables = Exact<{
  text?: InputMaybe<Scalars['String']>;
}>;


export type SearchBookMutation = { __typename?: 'Mutation', searchBook?: Array<{ __typename?: 'book', id?: string | null, image?: string | null, title?: string | null, author?: string | null } | null> | null };


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
      title
    }
    trend {
      image
      id
      title
    }
  }
  categories {
    id
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
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    error
    message
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ForgetPasswordDocument = gql`
    mutation ForgetPassword($email: String) {
  forgetPassword(email: $email) {
    error
    message
  }
}
    `;
export type ForgetPasswordMutationFn = Apollo.MutationFunction<ForgetPasswordMutation, ForgetPasswordMutationVariables>;

/**
 * __useForgetPasswordMutation__
 *
 * To run a mutation, you first call `useForgetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgetPasswordMutation, { data, loading, error }] = useForgetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgetPasswordMutation, ForgetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgetPasswordMutation, ForgetPasswordMutationVariables>(ForgetPasswordDocument, options);
      }
export type ForgetPasswordMutationHookResult = ReturnType<typeof useForgetPasswordMutation>;
export type ForgetPasswordMutationResult = Apollo.MutationResult<ForgetPasswordMutation>;
export type ForgetPasswordMutationOptions = Apollo.BaseMutationOptions<ForgetPasswordMutation, ForgetPasswordMutationVariables>;
export const CheckCodeDocument = gql`
    mutation CheckCode($email: String, $code: Int) {
  checkCode(email: $email, code: $code) {
    error
    message
  }
}
    `;
export type CheckCodeMutationFn = Apollo.MutationFunction<CheckCodeMutation, CheckCodeMutationVariables>;

/**
 * __useCheckCodeMutation__
 *
 * To run a mutation, you first call `useCheckCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkCodeMutation, { data, loading, error }] = useCheckCodeMutation({
 *   variables: {
 *      email: // value for 'email'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCheckCodeMutation(baseOptions?: Apollo.MutationHookOptions<CheckCodeMutation, CheckCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckCodeMutation, CheckCodeMutationVariables>(CheckCodeDocument, options);
      }
export type CheckCodeMutationHookResult = ReturnType<typeof useCheckCodeMutation>;
export type CheckCodeMutationResult = Apollo.MutationResult<CheckCodeMutation>;
export type CheckCodeMutationOptions = Apollo.BaseMutationOptions<CheckCodeMutation, CheckCodeMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($email: String, $password: String) {
  resetPassword(email: $email, password: $password) {
    error
    message
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String, $password: String, $username: String) {
  register(email: $email, password: $password, username: $username) {
    error
    message
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ActiveDocument = gql`
    mutation Active($email: String, $code: Int) {
  active(email: $email, code: $code)
}
    `;
export type ActiveMutationFn = Apollo.MutationFunction<ActiveMutation, ActiveMutationVariables>;

/**
 * __useActiveMutation__
 *
 * To run a mutation, you first call `useActiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activeMutation, { data, loading, error }] = useActiveMutation({
 *   variables: {
 *      email: // value for 'email'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useActiveMutation(baseOptions?: Apollo.MutationHookOptions<ActiveMutation, ActiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ActiveMutation, ActiveMutationVariables>(ActiveDocument, options);
      }
export type ActiveMutationHookResult = ReturnType<typeof useActiveMutation>;
export type ActiveMutationResult = Apollo.MutationResult<ActiveMutation>;
export type ActiveMutationOptions = Apollo.BaseMutationOptions<ActiveMutation, ActiveMutationVariables>;
export const GetBookDocument = gql`
    query getBook($bookId: ID!) {
  book(id: $bookId) {
    audio_link
    author
    book_link
    category {
      id
      name
    }
    description
    downloads
    id
    image
    page
    review {
      content
      id
      user {
        image
        username
      }
    }
    star
    title
    pdf_size
    audio_size
    duration
  }
}
    `;

/**
 * __useGetBookQuery__
 *
 * To run a query within a React component, call `useGetBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookQuery({
 *   variables: {
 *      bookId: // value for 'bookId'
 *   },
 * });
 */
export function useGetBookQuery(baseOptions: Apollo.QueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
      }
export function useGetBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
        }
export type GetBookQueryHookResult = ReturnType<typeof useGetBookQuery>;
export type GetBookLazyQueryHookResult = ReturnType<typeof useGetBookLazyQuery>;
export type GetBookQueryResult = Apollo.QueryResult<GetBookQuery, GetBookQueryVariables>;
export const SearchBookDocument = gql`
    mutation SearchBook($text: String) {
  searchBook(text: $text) {
    id
    image
    title
    author
  }
}
    `;
export type SearchBookMutationFn = Apollo.MutationFunction<SearchBookMutation, SearchBookMutationVariables>;

/**
 * __useSearchBookMutation__
 *
 * To run a mutation, you first call `useSearchBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSearchBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [searchBookMutation, { data, loading, error }] = useSearchBookMutation({
 *   variables: {
 *      text: // value for 'text'
 *   },
 * });
 */
export function useSearchBookMutation(baseOptions?: Apollo.MutationHookOptions<SearchBookMutation, SearchBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SearchBookMutation, SearchBookMutationVariables>(SearchBookDocument, options);
      }
export type SearchBookMutationHookResult = ReturnType<typeof useSearchBookMutation>;
export type SearchBookMutationResult = Apollo.MutationResult<SearchBookMutation>;
export type SearchBookMutationOptions = Apollo.BaseMutationOptions<SearchBookMutation, SearchBookMutationVariables>;