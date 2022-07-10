import React from 'react'
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
        <div>
            <p className='beats-solo'>
                Small text
            </p>
            <h3>mid text</h3>
            <img src="" alt=""  className='hero-banner-image' />
            <div>
                {/* link :nextjs component */}
                <Link href={''}>
                    <button type="button">Button</button>
                </Link>
                <div className="desc">
                    <h5>Description</h5>
                    <p>D</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default HeroBanner