import Image from 'next/image'
import roboFace from 'public/assets/images/roboFace.png'
import '@styles/rdm.css'

const HoverImg = () => {
    return (
        <div className=''>
            <figure class="hover-img rounded-md ">
                <Image className='w-[250px]' src={roboFace} alt="asd" />
                <figcaption>
                    <h3>Lorem <br />Ipsum</h3>
                </figcaption>
            </figure>



        </div >
    )
}

export default HoverImg