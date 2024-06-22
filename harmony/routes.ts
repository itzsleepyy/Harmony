/**
 * An array of public routes that do not require authentication.
 */

export const publicRoutes =[
    "/",
];

/**
 * An array of routes that require authentication.
 * These routes will redirect logged in users to settings
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register",
];

/**
 * The predix for API authentication routes 
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */

export const apiAuthPrefix ="/api/auth/";


export const DEFAULT_LOGIN_REDIRECT = "/settings";