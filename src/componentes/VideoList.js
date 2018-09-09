import React, { Component } from 'react'
import { connect } from 'react-redux'


class VideoList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>Lista de Videos {JSON.stringify(this.props)}</div>
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