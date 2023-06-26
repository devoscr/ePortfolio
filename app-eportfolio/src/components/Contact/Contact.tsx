import React, { useState } from 'react'

import './Contact.scss'

const   Contact = () => {
    const [displayProtonMailContact, setDisplayProtonMailContact] = useState('')
    const [displayLinkedinPathContact, setDisplayLinkedinPathContact] = useState('')

    const returnEncodedString = (): string => {
        return ' * * * * * * * * * * * *'
    }

    const returnMailProton = (): string => {
        return displayProtonMailContact
    }
    const returnLinkedinPath = (): string => {
        return displayLinkedinPathContact
    }

    const showProtonMailContact = (e: React.MouseEvent<HTMLImageElement>) =>	{
        const target = e.target as HTMLImageElement
        const type = target.getAttribute('data-type')
        if (type === 'proton')
            setDisplayProtonMailContact('oscar.boutarfa@proton.me')
        else if (type === 'linkedin')
            setDisplayLinkedinPathContact('www.linkedin.com/in/oboutarf')
    }

    return (
        <div className='container-contact'>
            <img className='contact-option-gif-image' src={require('../assets/image.gif')} ></img>
            <div className='contact-form-link'>
                <h2>Click on icons if you want to connect with me!</h2>
                <div className='show-mail-contact'>
                    <p>
                    <img onClick={showProtonMailContact} data-type='proton' className='contact-proton-image' src='https://pic.clubic.com/v1/images/2009112/raw' alt='gif'>
                    </img>
                    <strong>
                    {   displayProtonMailContact.length ?
                        returnMailProton()
                        :
                        returnEncodedString()
                    }
                    </strong></p>
                </div>
                <div className='show-mail-contact'>
                    <p>
                    <img onClick={showProtonMailContact} data-type='linkedin' className='contact-proton-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png'>
                    </img>
                    <strong>
                    {   displayLinkedinPathContact.length ?
                        <a href={returnLinkedinPath()}>{returnLinkedinPath()}</a>
                        :
                        returnEncodedString()
                    }
                    </strong></p>
                </div>
            </div>
        </div>
    )
}
export default Contact
