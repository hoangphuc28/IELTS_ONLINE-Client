import path from 'path'
import { fileURLToPath } from 'url'

/** @type {import('next').NextConfig} */
const __fileName = fileURLToPath(import.meta.url)
const nextConfig = {
    env: {
        NEXT_PUBLIC_APP_LOGO: '../../../../../../assets/img/logo.png',
        NEXT_PUBLIC_DB: 'ielts_online-client',
        // NEXT_PUBLIC_API_URL: 'https://ielts-server-3n7v.onrender.com/api',
        NEXT_PUBLIC_TIME_ANSWER_CORRECT: '14400000',
        NEXT_PUBLIC_ACCESS_TOKEN_LOCAL_NAME: 'access_token_ielst-online-test',
        NEXT_PUBLIC_SOCKET_SERVER: 'http://localhost:8001',
    },
    sassOptions: {
        includePaths: [path.join(path.dirname(__fileName), 'styles')],
    },
}

export default nextConfig
