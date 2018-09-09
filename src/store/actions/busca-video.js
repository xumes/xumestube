import youtubeSearch from 'youtube-api-v3-search';

const API_KEY = 'AIzaSyD01231HDFRLa9B6iwVWORGI5SRexxKXSk'

export const buscaVideoRequest = () => {
    return {
        type: 'BUSCA_VIDEO_REQUEST',
        carregando: true,
        erro: false
    }
}

export const buscaVideoSucess = (videos) => {
    return {
        type: 'BUSCA_VIDEO_SUCCESS',
        videos,
        carregando: false,
        erro: false
    }
}

export const buscaVideoError = () => {
    return {
        type: 'BUSCA_VIDEO_ERROR',
        carregando: false,
        erro: true
    }
}

export const buscaVideo = (termo) => {
    return dispatch => {
        dispatch(buscaVideoRequest())
        youtubeSearch(API_KEY, { q: termo })
            .then(({items}) => { dispatch(buscaVideoSucess(items)) })
            .catch(() => dispatch(buscaVideoError()))
    }
}