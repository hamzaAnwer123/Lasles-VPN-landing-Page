const Footer = () => {
    return (
        <>
            <div className='py-20 px-10 md:px-24 bg-[#F1F1F2] relative mt-12'>
                <div className='absolute top-[-4rem] bg-white rounded-lg shadow-lg flex justify-between items-center p-10 w-4/5 mx-auto flex-wrap gap-7'>
                    <div className='w-72'>
                        <h4 className='text-2xl font-medium'>Subscribe Now for Get Special Features!</h4>
                        <p className="para text-sm">Let's Subscribe with us and find the fun.</p>
                    </div>
                <button className="bg-[#F53838] text-white py-3 px-12 text-sm rounded-lg shadow-lg shadow-[#fa8686]">Get Started</button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 md:pt-28 pt-56'>
                    <div className='space-y-5'>
                        <img src="images/Logo.png" alt="logo" />
                        <p className="para"><span className='font-medium'>LaslesVPN</span> is a private virtual network that has unique features and high security.</p>
                        <div className='flex gap-4 items-center'>
                            <img loading='lazy' src="images/Facebook.png" alt="facebook" />
                            <img loading='lazy' src="images/Twitter.png" alt="twitter" />
                            <img loading='lazy' src="images/Instagram.png" alt="instagram" />
                        </div>
                        <p className="para">&copy;2025LaslesVPN</p>
                    </div>
                    <div className="space-y-5">
                        <h5 className="text-xl font-semibold ">Product</h5>
                        <div className="para space-y-3">
                            <p>Download</p>
                            <p>Pricing</p>
                            <p>Locations</p>
                            <p>Server</p>
                            <p>Countries</p>
                            <p>Blog</p>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <h5 className="text-xl font-semibold ">Engage</h5>
                        <div className="para space-y-3">
                            <p>LaslesVPN ?</p>
                            <p>FAQ</p>
                            <p>Tutorials</p>
                            <p>About Us</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <h5 className="text-xl font-semibold ">Engage</h5>
                        <div className="para space-y-3">
                            <p>Affiliate</p>
                            <p>Become Partner</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
