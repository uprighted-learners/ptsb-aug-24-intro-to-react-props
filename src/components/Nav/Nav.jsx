import React from 'react'
import "./nav.css"
import Link from '../Links/Link'

function Nav({ links }) {
    console.log(links)
    return(
        <nav>
            { links.map((link, index) => <Link key={index} url={`/${link}`} text={link} />)}
        </nav>
    )
}

export default Nav