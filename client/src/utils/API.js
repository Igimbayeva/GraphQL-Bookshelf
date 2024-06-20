import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from './queries';
import { LOGIN_USER, CREATE_USER, SAVE_BOOK, DELETE_BOOK } from './mutations';

// Fetch logged in user's info
export const getMe = async () => {
  const { loading, error, data } = await useQuery(GET_ME);

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
export const saveBook = (bookData) => {
  const [saveBookMutation] = useMutation(SAVE_BOOK);

  const saveBook = async () => {
    try {
      const { data } = await saveBookMutation({
        variables: {
          "bookId": bookData.bookId,
          "authors": bookData.authors,
          "description": bookData.description,
          "image": bookData.image,
          "link": bookData.link,
          "title": bookData.title
        }
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
export const deleteBook = (bookId) => {
  const [deleteBookMutation] = useMutation(DELETE_BOOK);

  const deleteBook = async () => {
    try {
      const { data } = await deleteBookMutation({
        variables: {
          bookId,
        }
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

  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
};
