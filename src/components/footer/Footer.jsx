import { Facebook, Instagram, MailRounded, PhoneAndroid, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import "./footer.scss";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-left'>
                <h1 className='footer-logo'>IoF</h1>
                <p className='footer-left-para'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus ante ut ipsum efficitur, at tristique risus ultricies. Vivamus non lacinia nisi. In tincidunt nec risus quis pretium. 
                </p>
                <div className='footer-left-socialCont'>
                    <div className='footer-socialFace'>
                        <Facebook />
                    </div>
                    <div className='footer-socialInsta'>
                        <Instagram />
                    </div>
                    <div className='footer-socialTwit'>
                        <Twitter />
                    </div>
                </div>
            </div>
            <div className='footer-right'>
                <h2 className='footer-right-contact'>Contact</h2>
                <div className='footer-right-contactItem'>
                    <Room style={{marginRight: "10px"}}/>
                    Civitanova Marche, MC, 62012
                </div>
                <div className='footer-right-contactItem'>
                    <PhoneAndroid style={{marginRight: "10px"}}/>
                    +39 3334455666
                </div>
                <div className='footer-right-contactItem'>
                    <MailRounded style={{marginRight: "10px"}}/>
                    IoF@gmail.com
                </div>
            </div>
        </div>
    )
}

export default Footer
