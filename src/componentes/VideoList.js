import React, { Component } from 'react'
import { connect } from 'react-redux'


class VideoList extends Component {
    constructor(props) {
        super(props)

        this.renderVideo = this.renderVideo.bind(this)
    }

    renderVideo(video) {
        return (
            <li key={video.etag}>
                <p>{video.snippet.title}</p>
                <img src={video.snippet.thumbnails.default.url} />
                <p>{video.snippet.description}</p>
            </li>
        )
    }

    render() {
        return (
            <div className='video-list'><h2>Lista de Videos </h2>
                <ul>
                    {
                        this.props.videos.map(video => {
                            console.log("olha eu aqui", video)
                            return this.renderVideo(video)
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carregando: state.busca.carregando,
        erro: state.busca.erro,
        videos: state.busca.videos
    }
}

export default connect(mapStateToProps, null)(VideoList)