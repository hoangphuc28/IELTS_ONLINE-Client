export function getTokenKey() {
    return process.env.NEXT_PUBLIC_ACCESS_TOKEN_LOCAL_NAME || 'access_token'
}