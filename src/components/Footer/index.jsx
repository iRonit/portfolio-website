import React from 'react';
import {Link} from 'react-router-dom';
import {FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton} from 'react-share';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <i className='fab fa-react fa-spin fa-3x' />
        <p className='footer-subscription-heading'>
          Living, learning, & leveling up one day at a time.
        </p>
        <p>
          Handcrafted by me using ReactJS.
        </p>
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              My Portfolio
              <i className='fab fa-typo3' style={{ marginLeft: 0.5 + 'em' }} />
            </Link>
          </div>
          <small className='website-rights'>Copyright © 2021 All rights reserved.</small>
          <div className='social-icons'>
            <small className='footer-share-text'>Share on:</small>

            <FacebookShareButton
              url="https://ironit.github.io/portfolio-website/"
              quote="Please do share and support!">
              <Link
                className='social-icon-link facebook'
                aria-label='Facebook'
                target='_blank'
              >
                <i className='fab fa-facebook-f' />
              </Link>
            </FacebookShareButton>

            <WhatsappShareButton
              url="https://ironit.github.io/portfolio-website/"
              title="Please do share and support!"
            >
              <Link
                className='social-icon-link whatsapp'
                aria-label='Whatsapp'
                target='_blank'
              >
                <i className='fab fa-whatsapp' />
              </Link>
            </WhatsappShareButton>

            <LinkedinShareButton
              url="https://ironit.github.io/portfolio-website/"
              summary="Please do share and support!"
            >
              <Link
                className='social-icon-link linkedin'
                aria-label='LinkedIn'
                target='_blank'
              >
                <i className='fab fa-linkedin' />
              </Link>
            </LinkedinShareButton>

            <TwitterShareButton
              url="https://ironit.github.io/portfolio-website/"
              title="Please do share and support!"
            >
              <Link
                className='social-icon-link twitter'
                aria-label='Twitter'
                target='_blank'
              >
                <i className='fab fa-twitter' />
              </Link>
            </TwitterShareButton>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
