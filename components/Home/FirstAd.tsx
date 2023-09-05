import Image from 'next/image'
import React from 'react'

export const FirstAd = () => {
  return (
    <div className="ad-container">
   <div className="ad-img-container">
   <Image
        src="/static/person-cooking.webp"
        width={935}
        height={933}
        alt="vegetation"
      />
   </div>
   <div className="ad-information-container">
    <h3>Excellent cook</h3>
    <p>Mastering the art of culinary creation, our chef transforms every dish into a masterpiece of flavor and presentation</p>
   </div>
   <Image
        src="/static/leaf-one.webp"
        width={456}
        height={464}
        alt="vegetation"
      />
   <Image
        src="/static/leaf-2.webp"
        width={365}
        height={374}
        alt="vegetation"
      />
    </div>
  )
}
