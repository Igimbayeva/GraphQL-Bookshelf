import decode from 'jwt-decode';
import { LOGIN_USER } from '../graphql/mutations';
import { useMutation } from '@apollo/client';

class AuthService {
  // Method to get user data from token
  getProfile() {
    return decode(this.getToken());
  }

  // Method to check if user is logged in
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // Method to check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return true;
    }
  }

  // Method to retrieve token from localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // Method to log in user
  async login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');

    // Example of using useMutation hook
    // Replace with actual implementation as per your setup
    // const [loginUserMutation] = useMutation(LOGIN_USER);
    // try {
    //   const { data } = await loginUserMutation({
    //     variables: { token: idToken },
    //   });
    //   // Handle successful login response as needed
    // } catch (error) {
    //   console.error('Login failed:', error);
    // }
  }

  // Method to log out user
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
