// Diccionaro con los endpoints de la API

const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

export const endPoints = {
  // Auth
  auth: {
    login: `${API}/${VERSION}/auth/login`,
    profile: `${API}/${VERSION}/auth/profile`,
    refreshToken: `${API}/${VERSION}/auth/refresh-token`,
  },
  // Products
  products: {
    getProducts: `${API}/${VERSION}/products`,
    getProduct: (id) => `${API}/${VERSION}/products/${id}`,
    createProduct: `${API}/${VERSION}/products`,
    updateProduct: (id) => `${API}/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/${VERSION}/products/${id}`,
  },
  // Users
  users: {
    getUsers: `${API}/${VERSION}/users`,
    getUser: (id) => `${API}/${VERSION}/users/${id}`,
    createUser: `${API}/${VERSION}/users`,
    updateUser: (id) => `${API}/${VERSION}/users/${id}`,
    deleteUser: (id) => `${API}/${VERSION}/users/${id}`,
    availableUser: `${API}/${VERSION}/users/${id}/is-available`,
  },
  // Categories
  categories: {
    getCategories: `${API}/${VERSION}/categories`,
    getCategory: (id) => `${API}/${VERSION}/categories/${id}`,
    createCategory: `${API}/${VERSION}/categories`,
    updateCategory: (id) => `${API}/${VERSION}/categories/${id}`,
    deleteCategory: (id) => `${API}/${VERSION}/categories/${id}`,
    getProductsByCategory: (id) => `${API}/${VERSION}/categories/${id}/products`,
  },
  // Files
  files: {
    uploadFile: `${API}/${VERSION}/files/upload`,
    getFile: (filename) => `${API}/${VERSION}/files/${filename}`,
  },
};
