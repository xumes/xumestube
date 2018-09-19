import React from 'react'
import { connect } from 'react-redux'
import { Embed } from 'semantic-ui-react'

const VideoPlayer = props => {
    return (
        <div className='video-player'>
            <h2>Video Player</h2>
            {
                props.video && props.video.snippet && (
                    <div>
                    <Embed id={props.video.id.videoId} placeholder='https://i.pinimg.com/originals/a2/81/38/a28138c18f0e24e9bab084aaa97770be.jpg' source='youtube' />
                        <p>{props.video.snippet.title}</p>
                        <p>{props.video.snippet.description}</p>
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        video: state.reproduz.video
    }
}

export default connect(mapStateToProps, null)(VideoPlayer)