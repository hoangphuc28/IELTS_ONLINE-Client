import { siteAction, siteSelector } from '../../reducers/site.reducer'
import { AppShareGetState } from '../../store'

export const ConnectSocket = () => {
    return async (dispatch: any) => {
        // connect socket
        dispatch(siteAction.setSocket({}))
    }
}

export const DisconnectSocket = () => {
    return async (dispatch: any, getState: AppShareGetState) => {
        const socket = siteSelector.GetSocket(getState())
    }
}
