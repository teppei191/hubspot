# creating_hubspot

This is a code bundle for creating_hubspot. The original project is available at https://www.figma.com/design/CTBHZl1tKwBYsX1JdDpN0F/creating_hubspot.

## Features

- Azure AD authentication with Microsoft identity platform
- Sales pipeline Kanban board
- Company detail page
- Enterprise-grade UI components

## Setup

### 1. Install dependencies

```bash
npm i
```

### 2. Configure Azure AD

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** > **App registrations** > **New registration**
3. Register your application:
   - Name: HubSpot Clone (or your preferred name)
   - Supported account types: Choose based on your needs
   - Redirect URI: `http://localhost:3000` (Single-page application)
4. Copy the **Application (client) ID** and **Directory (tenant) ID**
5. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

6. Update the `.env` file with your Azure AD credentials:

```env
VITE_AZURE_CLIENT_ID=your-client-id-here
VITE_AZURE_AUTHORITY=https://login.microsoftonline.com/your-tenant-id-here
VITE_REDIRECT_URI=http://localhost:3000
VITE_POST_LOGOUT_REDIRECT_URI=http://localhost:3000
```

### 3. Run the development server

```bash
npm run dev
```

The application will be available at http://localhost:3000

## Authentication

This application uses Microsoft Authentication Library (MSAL) for Azure AD authentication. Users must sign in with their Microsoft account to access the application.
