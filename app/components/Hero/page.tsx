import Image from 'next/image'
import React from 'react'
import Img1 from '../../../public/assets/image-1.jpg'
import Img2 from '../../../public/assets/image-5.png'
import Img3 from '../../../public/assets/iamge-3.jpg'
import Img4 from '../../../public/assets/image-4.png'
export default function Hero() {
    return (
        <div data-aos="fade-up" >
            < div className="carousel lg:h-[700px] w-full" >
                <div id="slide1" className="carousel-item relative w-full">
                    <Image src={Img1} alt="Image 1" className="w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <Image src={Img2} alt="Image 2" className="w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <Image src={Img3} alt="Image 3" className="w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <Image src={Img4} alt="Image 4" className="w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div >
        </div >
    )
}
