import path from 'path'
import { fileURLToPath } from 'url'

/** @type {import('next').NextConfig} */
const __fileName = fileURLToPath(import.meta.url)
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(path.dirname(__fileName), 'styles')],
    },
}

export default nextConfig
