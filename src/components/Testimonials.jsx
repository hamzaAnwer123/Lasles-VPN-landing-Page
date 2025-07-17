const Testimonials = () => {
    return (
        <>
            <div className="py-20 px-10 md:px-20  w-full space-y-20">
                <div className="flex justify-center flex-col items-center space-y-4 ">
                    <h2 className="text-4xl font-medium text-center">Trusted by Thousands of Happy Customer</h2>
                    <p className="para text-center">These are the stories of our customer who have joined us with great pleasure when using this crazy feature.</p>
                </div>
                <div className="flex justify-center gap-12 flex-wrap">
                    <div className="border-2 border-[#F53333] rounded-lg w-96 p-5 space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-5 items-center">

                                <img loading="lazy" src="images/user-1.png" alt="user 01" />
                                <div>
                                    <h5 className="font-medium text-lg">Viezh Robert</h5>
                                    <p className="para">Warsaw,Poland</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p>4.5</p>
                                <img loading="lazy" src="images/star.png" alt="star" />
                            </div>
                        </div>
                        <p>"Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best".</p>
                    </div>
                    <div className="border-2  rounded-lg w-96 p-5 space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-5 items-center">

                                <img loading="lazy" src="images/user-2.png" alt="user 01" />
                                <div>
                                    <h5 className="font-medium text-lg">Yessica Christy</h5>
                                    <p className="para">Shanxi,China</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p>4.5</p>
                                <img loading="lazy" src="images/star.png" alt="star" />
                            </div>
                        </div>
                        <p>"I like because I like to travel far and still can connect with high speed.".</p>
                    </div>
                    <div className="border-2  rounded-lg w-96 p-5 space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-5 items-center">

                                <img src="images/user-3.png" alt="user 01" />
                                <div>
                                    <h5 className="font-medium text-lg">Kim Young Jon</h5>
                                    <p className="para">Seoul,South Korea </p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p>4.5</p>
                                <img src="images/star.png" alt="star" />
                            </div>
                        </div>
                        <p>"This is very unusual for my business that currently requires a virtual private network that has high security.".</p>
                    </div>
                    
                </div>
                <div className="flex justify-between md:px-20 items-center">
                    <img loading="lazy" src="images/Group-3.png" alt="Group" />
                    <div className="flex gap-7 items-center">
                        <img loading="lazy" className="cursor-pointer" src="images/left.png" alt="left" />
                        <img loading="lazy" className="cursor-pointer" src="images/right.png" alt="right" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Testimonials
