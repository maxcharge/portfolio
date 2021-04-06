import React from 'react'
import {DiGithubBadge} from "react-icons/di"
import {AiFillLinkedin} from "react-icons/ai"
import {SiGmail} from "react-icons/si"
import {IconContext} from "react-icons"

function Footer() {
    return (
        <div style={{
                backgroundColor:"black",
                position:"fixed",
                bottom:0,
                right:0,
            }}>
            <IconContext.Provider value={{
                    color:"#4AF626",
                    size:"50px",
                }} >
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <div onClick={event => window.location.href='https://github.com/maxcharge'} style={{margin:"5px"}}>
                            <DiGithubBadge/>
                        </div>
                        <div onClick={event => window.location.href='https://www.linkedin.com/in/mayur-jain-904982191'} style={{margin:"5px"}}>
                            <AiFillLinkedin/>
                        </div>
                        <div onClick={event => window.location.href='https://www.maxcharge788769@gmail.com'} style={{margin:"5px"}}>
                            <SiGmail/>
                        </div>
                    </div>
            </IconContext.Provider>
        </div>
    )
}

export default Footer
