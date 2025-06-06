import api from "./api";

interface LoginCredentials {
  emailFuncionario: string;
  senhaFuncionario: string;
}

interface LoginResponse {
  token: string;
}

export const authService = {
  // Login function that handles authentication
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    try {
      const response = await api.post("/login", { ...credentials });

      // Store the token in localStorage
      if (response.data.token) {
        localStorage.setItem("predmed_token", response.data.token);
      }

      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  // Logout function
  logout: () => {
    localStorage.removeItem("predmed_token");
    // Redirect to login page or perform other logout actions
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem("predmed_token");
  },
};
