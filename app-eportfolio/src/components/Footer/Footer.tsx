import { SocialIcon } from 'react-social-icons'
import './Footer.scss'

const   Footer = () =>  {
    return (
        <div className='container-footer' >
            <div className='footer-social-icons' >
                <SocialIcon className='footer-linkedin' url="https://linkedin.com/in/oboutarf" />
                <SocialIcon className='footer-github' url="https://github.com/oboutarf" />
                <SocialIcon className='footer-instagram' url="https://www.instagram.com/weblanefr" />
            </div>
            <div className='footer-citation-text'>
                <p>« Tout ce que l'esprit de l'homme peut concevoir et croire,<br/> il peut l'accomplir. »</p>
            </div>
        </div>
    )
}

export default Footer