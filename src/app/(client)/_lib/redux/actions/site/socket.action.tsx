import { io } from 'socket.io-client'
import { ESocketStatus, siteAction, siteSelector } from '../../reducers/site.reducer'
import { AppShareGetState } from '../../store'
import { headers } from 'next/headers'
import { getTokenKey } from '@/src/utils/shares/localStorage'
import { socketClient } from '@/src/services/socket'
import { userAnswerActions } from '../../reducers/user-exam.reducer'

export const ConnectSocket = () => {
    return async (dispatch: any) => {
        // connect socket
        try {
            await socketClient.connect()
            socketClient.on('connect', () => {
                console.log('Connected to socket server.')
                dispatch(siteAction.setSocketStatus(ESocketStatus.connected))
            })
        } catch (error) {}
    }
}

export const DisconnectSocket = () => {
    return async (dispatch: any, getState: AppShareGetState) => {
        const socketStatus = siteSelector.GetSocketStatus(getState())
    }
}

export const HandleStartExam = (data: { userAnswerId: string; codeExam: string }) => {
    return async (dispatch: any, getState: AppShareGetState) => {
        const socketStatus = siteSelector.GetSocketStatus(getState())

        if (socketStatus !== ESocketStatus.connected) return
        console.log('start exam')
        try {
            await socketClient.on('onCountDownExamTimer', (countDownTimer: number) => {
                dispatch(userAnswerActions.setterTimer(countDownTimer))
            })
            await socketClient.emit('onStartExam', data)
        } catch (error) {
            console.log(error)
        }
    }
}
