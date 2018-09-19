import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Input } from 'semantic-ui-react'

import { buscaVideo } from './../store/actions/busca-video'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        //on load
        this.props.buscaVideo('Xumes Udemy')
    }

    pesquisaTermo = (e) => {
        if (e.keyCode === 13) {
            const termo = e.target.value;
            console.log(termo)
            this.props.buscaVideo(termo)
        }
    }

    render() {
        return (
            <div className='search-bar'>
                <Segment stacked>
                    <Input icon='search' size='large' placeholder='Search...' onKeyDown={(e) => this.pesquisaTermo(e)} />
                </Segment>
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

const mapDispatchToProps = (dispatch) => {
    return {
        buscaVideo: (termo) => dispatch(buscaVideo(termo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)