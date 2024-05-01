class AuthService {
    isAuthenticated = false;
  
    login(cb) {
      this.isAuthenticated = true;
      cb();
    }
  
    logout(cb) {
      this.isAuthenticated = false;
      cb();
    }
  
    getAuthStatus() {
      return this.isAuthenticated;
    }
  }
  
  export default new AuthService();
  