import { Socket, io } from "socket.io-client";
import { getTokenKey } from "../utils/shares/localStorage";

class SocketClient {
    socket: Socket | null = null

    constructor() { }

    connect(): Promise<void> {
        // if (this.socket) return Promise.reject('')
        this.socket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER || 'http://localhost:8001', {
            transports: ['websocket'],
            auth: {
                headers: {
                    token: localStorage.getItem(getTokenKey()),
                },
            },
        })
        return new Promise((resolve, reject) => {
            this.socket?.on('connect', () => resolve())
            this.socket?.on('connect_error', (e) => reject(e))
        })
    }

    disconnect(): Promise<void> {
        return new Promise((resolve) => {
            this.socket?.on('disconnect', () => {
                this.socket = null
                resolve()
            })
            this.socket?.disconnect()
        })
    }

    on(event: string, callback: (...args: any[]) => void): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.socket) return reject('No socket available.')
            // if (!this.hasListeners(event)) return reject('Listener occurred.')
            this.socket.on(event, callback)
            return resolve()
        })
    }

    emit(event: string, data: any, callback?: CallableFunction): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.socket) return reject('No socket available.')
            return this.socket.emit(event, data, (res: { error?: any }) => {
                callback && callback()
                if (res.error) {
                    return reject(res.error)
                }
                return resolve()
            })
        })
    }

    hasListeners(event: string): boolean | null {
        if (!this.socket) return null
        return this.socket.hasListeners(event)
    }
}

export const socketClient = new SocketClient