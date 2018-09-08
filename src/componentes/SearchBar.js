import React, { Component } from 'react'

class SearchBar extends Component {


    buscaVideo = (e) => {
        if (e.keyCode === 13){
            console.log(e.target.value)
        }
        
    }

    render() {
        return (
            <input type='text' onKeyDown={(e) => this.buscaVideo(e)} />
        )
    }
}

export default SearchBar