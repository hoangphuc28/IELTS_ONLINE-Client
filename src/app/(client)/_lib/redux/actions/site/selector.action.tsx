import { ISiteState } from '../../reducers/site.reducer'

export const GetSocketStatus = (state: ISiteState) => state.connectionStatus
