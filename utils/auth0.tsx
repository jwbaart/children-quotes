import { initAuth0 } from '@auth0/nextjs-auth0';

function getServerSetting(environmentVariable: string, defaultValue?: string) {
  if (typeof window === 'undefined') {
    return process.env[environmentVariable];
  }

  return defaultValue || null;
}

enum VERCEL_ENV {
  PRODUCTION = 'production',
  PREVIEW = 'preview',
  DEVELOPMENT = 'development',
}

const getRedirectUri = (): string => {
  switch (process.env['VERCEL_ENV']) {
    case VERCEL_ENV.PRODUCTION:
      return `https://${process.env.PROD_DOMAIN}/api/callback`;
    case VERCEL_ENV.PREVIEW:
      return `https://${process.env['VERCEL_URL']}/api/callback`;
    case VERCEL_ENV.DEVELOPMENT:
    default:
      return 'http://localhost:3000/api/callback';
  }
};

const getPostLogoutRedirectUri = (): string => {
  switch (process.env['VERCEL_ENV']) {
    case VERCEL_ENV.PRODUCTION:
      return `https://${process.env.PROD_DOMAIN}/api/callback`;
    case VERCEL_ENV.PREVIEW:
      return `https://${process.env['VERCEL_URL']}`;
    case VERCEL_ENV.DEVELOPMENT:
    default:
      return 'http://localhost:3000';
  }
};

export default initAuth0({
  clientId: getServerSetting('AUTH0_CLIENT_ID'),
  clientSecret: getServerSetting('AUTH0_CLIENT_SECRET'),
  scope: 'openid profile email',
  domain: getServerSetting('AUTH0_DOMAIN'),
  redirectUri: getRedirectUri(),
  postLogoutRedirectUri: getPostLogoutRedirectUri(),
  session: {
    cookieSecret: getServerSetting('SESSION_COOKIE_SECRET'),
    cookieLifetime: 7200,
    storeIdToken: false,
    storeRefreshToken: false,
    storeAccessToken: false,
  },
});
