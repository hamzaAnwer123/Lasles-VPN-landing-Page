const Hero = () => {
    return (
        <>
            <div className="py-16 px-10 md:px-24 flex justify-around items-center flex-wrap-reverse gap-16 md:gap-0">
                <div className="space-y-10 w-full md:w-[40rem]">
                    <h1 className="text-6xl ">Want anything to be easy with <span className="font-semibold">LaslesVPN</span></h1>
                    <p className="para">Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.</p>
                    <button className="bg-[#F53838] text-white py-3 px-12 text-sm rounded-lg shadow-lg shadow-[#fa8686]">Get Started</button>
                </div>
                <div>
                    <img loading="lazy" src="images/Illustration.png" alt="Illustration" />
                </div>
            </div>
        </>
    )
}

export default Hero
