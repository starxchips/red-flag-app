export const APP_BASE_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:3000'
    : 'https://starxchips.github.io/red-flag-app/'
