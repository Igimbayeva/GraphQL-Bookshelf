import { useQuery, useMutation } from '@apollo/client';
import { GET_ME, LOGIN_USER, CREATE_USER, SAVE_BOOK, DELETE_BOOK, SEARCH_BOOKS } from './queries';

// Fetch logged in user's info
export const getMe = (token) => {
  const { loading, error, data } = useQuery(GET_ME, {
    variables: { token },
    context: {
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    },
  });

  return { loading, error, data };
};

// Create a new user
export const createUser = (userData) => {
  const [createUserMutation] = useMutation(CREATE_USER);

  const createUser = async () => {
    try {
      const { data } = await createUserMutation({
        variables: { ...userData },
      });
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create user');
    }
  };

  return createUser;
};

// Login user
export const loginUser = (userData) => {
  const [loginUserMutation] = useMutation(LOGIN_USER);

  const loginUser = async () => {
    try {
      const { data } = await loginUserMutation({
        variables: { ...userData },
      });
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to login');
    }
  };

  return loginUser;
};

// Save book data for a logged in user
export const saveBook = (bookData, token) => {
  const [saveBookMutation] = useMutation(SAVE_BOOK);

  const saveBook = async () => {
    try {
      const { data } = await saveBookMutation({
        variables: {
          input: { ...bookData },
        },
        context: {
          headers: {
            authorization: token ? `Bearer ${token}` : '',
          },
        },
      });
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to save book');
    }
  };

  return saveBook;
};

// Remove saved book data for a logged in user
export const deleteBook = (bookId, token) => {
  const [deleteBookMutation] = useMutation(DELETE_BOOK);

  const deleteBook = async () => {
    try {
      const { data } = await deleteBookMutation({
        variables: {
          bookId,
        },
        context: {
          headers: {
            authorization: token ? `Bearer ${token}` : '',
          },
        },
      });
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to delete book');
    }
  };

  return deleteBook;
};

// Make a search to Google Books API
export const searchGoogleBooks = (query) => {
  const { loading, error, data } = useQuery(SEARCH_BOOKS, {
    variables: { query },
  });

  return { loading, error, data };
};
