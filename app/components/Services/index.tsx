import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Electronics Sales",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'Bringing the latest in electronics right to your doorstep. Enjoy our unbeatable deals and top-notch customer services.',
        link: 'Learn more'
    },
    {
        heading: "Digital Marketing",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Elevate your online presence with our tailored digital marketing solutions. Reach, engage, convert & Grow.💡',
        link: 'Learn more'
    },
    {
        heading: "Graphics Design",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: "Crafting visually stunning solutions tailored to your brand's identity.💎 #GraphicDesignMastery",
        link: 'Learn more'
    },

]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-theme2 text-lg tracking-widest'>OUR SERVICES</h3>
                <h4 className='text-center text-theme2 text-4xl lg:text-65xl font-bold'>We Offer The Following</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-theme2 bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-bold  text-theme1 mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold group-hover:text-white text-theme1 hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-theme3 text-white py-2 px-4 md:py-4 md:px-14 rounded-full hover:bg-theme1'>
                        <Link href='/services'>View More ></Link>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Aboutus;