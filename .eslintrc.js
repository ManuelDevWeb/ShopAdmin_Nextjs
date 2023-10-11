// ESLint ayuda a mantener un código limpio y consistente, detectando errores comunes, patrones de código problemáticos y posibles problemas de estilo.

// Configuracion de eslint para el proyecto
module.exports = {
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended', 'next', 'next/core-web-vitals'],
  rules: {
    semi: ['error', 'always'],
  },
};
