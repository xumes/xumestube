const INITIAL_STATE = {
    videos : []
}

export default function busca(state=INITIAL_STATE, action) {
    if (action.type === 'BUSCA_VIDEO'){
        return {
            videos: [...state.videos, action.payload.termo]
        }
    }
    else return state
}