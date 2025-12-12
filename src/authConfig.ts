import { Configuration, PopupRequest } from "@azure/msal-browser";

// Azure AD B2C configuration
export const msalConfig: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_AZURE_CLIENT_ID || "YOUR_CLIENT_ID_HERE", // Azure AD Application (client) ID
    authority: import.meta.env.VITE_AZURE_AUTHORITY || "https://login.microsoftonline.com/YOUR_TENANT_ID_HERE", // Azure AD tenant
    redirectUri: import.meta.env.VITE_REDIRECT_URI || "http://localhost:3000", // Must be registered as a redirect URI in Azure portal
    postLogoutRedirectUri: import.meta.env.VITE_POST_LOGOUT_REDIRECT_URI || "http://localhost:3000"
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest: PopupRequest = {
  scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
