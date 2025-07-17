const Section3 = () => {
    return (
        <>
            <div className="py-10 px-10 md:px-20 flex justify-around items-center flex-wrap gap-12 md:gap-0">
                <div>
                    <img loading="lazy" src="images/Illustration-2.png" alt="Illustration" />
                </div>
                <div className="w-full md:w-96 space-y-5">
                    <h2 className="text-4xl font-medium">We Provide Many Features You Can Use</h2>
                    <p className="para">You can explore the features that we provide with fun and have their own functions each feature.</p>
                    <div className="space-y-5">
                        <div className="flex gap-3 items-center">
                            <img loading="lazy" src="images/Group-1.png" alt="Group" />
                            <p className="para">Powerfull online protection.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <img loading="lazy" src="images/Group-1.png" alt="Group" />
                            <p className="para">internet without borders.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <img loading="lazy" src="images/Group-1.png" alt="Group" />
                            <p className="para">Supercharged VPN</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <img loading="lazy" src="images/Group-1.png" alt="Group" />
                            <p className="para">No specific time limits</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3
