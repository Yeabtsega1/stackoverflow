import React from 'react'
import './ProfileBio.css'

const ProfileBio = ({currentProfile}) => {
    return (
        <div className='watch'>
            <div>
                {
                    currentProfile?.tags.length !== 0 ? (
                        <>
                            <h4>Tags watched</h4>
                            {
                                currentProfile?.tags.map((tag) => (
                                    <p key={tag}>{tag}</p>
                                ))
                            }
                        </>
                    ) : (
                        <p style={{marginleft:"900px"}}>0 tags watched</p>
                    )
                }
            </div>
            <div>
                {
                    currentProfile?.about ? (
                        <>
                            <h4>About</h4>
                            <p>{currentProfile?.about}</p>
                        </>
                    ) : (
                        <p>No bio found</p>
                    )
                }
            </div>
        </div>
    )
}

export default ProfileBio