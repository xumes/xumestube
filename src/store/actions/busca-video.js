export const buscaVideo = (termo) => {
    return {
        type: 'BUSCA_VIDEO',
        payload: { termo }
    }
}