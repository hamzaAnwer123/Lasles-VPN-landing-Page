const PricingSection = () => {
    return (
        <>
            <div className="py-20 px-10 md:px-20 bg-[#FBFBFB]">
                <div className="flex justify-center flex-col items-center space-y-4">
                    <h2 className="text-4xl font-medium">Choose Your Plan</h2>
                    <p className="para text-center">let's choose the package that is best for you explore it happily and cheerfully</p>
                </div>
                <div className="flex justify-center gap-12 py-16 flex-wrap">
                    <div className="border-2 w-[21rem] bg-white rounded-lg flex flex-col justify-center items-center p-10 space-y-20">
                        <div className="space-y-5 flex flex-col items-center">
                            <img loading="lazy" src="images/Free.png" alt="free" />
                            <h5 className="font-medium text-xl">Free Plan</h5>
                            <div className="space-y-5 h-60">
                                <div className="flex gap-3 items-center">
                                    <img src="images/Group-2.png" alt="Group" />
                                    <p className="para">Unlimited Bandwitch</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <img src="images/Group-2.png" alt="Group" />
                                    <p className="para">Encrypted Connection</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <img src="images/Group-2.png" alt="Group" />
                                    <p className="para">No Traffic Logs</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <img src="images/Group-2.png" alt="Group" />
                                    <p className="para">Works on All Devices</p>
                                </div>

                            </div>
                        </div>

                        <div className="text-center space-y-3">
                            <p className="font-medium text-2xl">Free</p>
                            <button className="border-2 border-[#F42A49] rounded-full text-[#F53855] px-16 py-2 font-medium hover:bg-[#F42A49] hover:shadow-lg hover:shadow-[#fa8686] hover:text-white">Select</button>
                        </div>
                    </div>
                    <div className="border-2 w-[21rem] bg-white rounded-lg flex flex-col justify-center items-center p-10 space-y-20">
                        <div className="space-y-5 flex flex-col items-center">
                            <img loading="lazy" src="images/Free.png" alt="free" />
                            <h5 className="font-medium text-xl">Standard Plan</h5>
                            <div className="space-y-5 h-60">
                                <div className="flex gap-3 items-center">
                                    <img src="images/Group-2.png" alt="Group" />
                                    <p className="para">Unlimited Bandwitch</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <img src="images/Group-2.png" alt="Group" />
                                    <p className="para">Encrypted Connection</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <img src="images/Group-2.png" alt="Group" />
                                    <p className="para">No Traffic Logs</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <img src="images/Group-2.png" alt="Group" />
                                    <p className="para">Works on All Devices</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <img src="images/Group-2.png" alt="Group" />
                                    <p className="para">Connect Anyware</p>
                                </div>

                            </div>
                        </div>

                        <div className="text-center space-y-3">
                            <p className="font-medium text-2xl">$9 <span className="para">/ mo</span></p>
                            <button className="border-2 border-[#F42A49] rounded-full text-[#F53855] px-16 py-2 font-medium hover:bg-[#F42A49] hover:shadow-lg hover:shadow-[#fa8686] hover:text-white">Select</button>
                        </div>
                    </div>
                    <div className="border-2 border-[#F53333] w-[21rem] bg-white rounded-lg flex flex-col justify-center items-center p-10 space-y-20">
                        <div className="space-y-5 flex flex-col items-center">
                            <img loading="lazy" src="images/Free.png" alt="free" />
                            <h5 className="font-medium text-xl">Free Plan</h5>
                            <div className="space-y-5 h-60">
                                <div className="flex gap-3 items-center">
                                    <img src="images/Group-2.png" alt="Group" />
                                    <p className="para">Unlimited Bandwitch</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <img src="images/Group-2.png" alt="Group" />
                                    <p className="para">Encrypted Connection</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <img src="images/Group-2.png" alt="Group" />
                                    <p className="para">No Traffic Logs</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <img src="images/Group-2.png" alt="Group" />
                                    <p className="para">Works on All Devices</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <img src="images/Group-2.png" alt="Group" />
                                    <p className="para">Connect Anyware</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <img src="images/Group-2.png" alt="Group" />
                                    <p className="para">Get New Features</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center space-y-3">
                        <p className="font-medium text-2xl">$12 <span className="para">/ mo</span></p>
                            <button className=" bg-[#F42A49] shadow-lg shadow-[#fa8686] rounded-full text-white px-16 py-2 font-medium">Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingSection
