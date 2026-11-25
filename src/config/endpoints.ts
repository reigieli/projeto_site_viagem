export const ENDPOINTS = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    refresh: '/auth/refresh',
    logout: '/auth/logout',
    logoutAll: '/auth/logout-all',
    me: '/auth/me',
  },
  users: {
    me: '/users/me',
  },
  destinations: '/destinations',
  packages: '/packages',
  purchases: {
    checkout: '/purchases/checkout',
    me: '/purchases/me',
    calendar: '/purchases/me/calendar',
  },
} as const;