import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment.svg'
import pen from '../../assets/pen.svg'
import blacklogo from '../../assets/blacklogo.svg'

const widget = () => {
  return (
    <div className='widget'>
        <h4>The overflow blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen"/>
                <p>Observability is key to the future of software (and your DevOps career)</p>
            </div>
            <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen"/>
            <p>Podcast 374: How valuable is your screen name?</p>
            </div>
            <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="comment"/>
                <p>Review queue workflows-Final release....</p>
            </div>
            <div className='right-sidebar-div-2'>
            <img src={comment} alt="comment"/>
            <p>Please welcome Valued Associates:#958 <br/> -V2Blast #959-SpencerG</p>
            </div>
            <div className='right-sidebar-div-2'>
            <img src={blacklogo} alt="blacklogo"/>
            <p>Outdated Answers:accepted answer is <br /> now unpinned on Stack Overflow</p>
            </div>
            <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>38</p>
                <p>Why was this spam flag declined, yet<br /> the question marked as spam?</p>
            </div>
            <div className='right-sidebar-div-2'>
            <p>20</p>
            <p>What is the best course of action when <br /> a user has high enough rep to...</p>
            </div>
            <div className='right-sidebar-div-2'>
            <p>14</p>
            <p>Is a link to the 'How to ask' help page a <br /> useful comment?</p>
            </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default widget
