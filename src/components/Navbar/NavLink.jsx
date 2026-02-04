import React from 'react'

export default function NavLinks({ label, url }) {
    return (
        <a href={url} className='nav-link'>{label}</a>
    )
}
