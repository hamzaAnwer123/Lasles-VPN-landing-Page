const Section2 = () => {
    return (
        <>
            <div className="py-10 px-10 md:px-20 justify-center flex">
                <div className="w-4/5 shadow-xl py-8 px-10 rounded-lg flex-wrap flex justify-around items-center">
                    <div className="flex gap-5 py-5 ">
                        <img loading="lazy" src="images/user.png" alt="user" />
                        <div>
                            <h5 className="font-medium text-lg">90+</h5>
                            <p className="para">Users</p>
                        </div>
                    </div>
                    <div className="md:border-x-2 md:border-y-0 border-y-2 md:px-24 flex gap-5 py-7">
                        <img loading="lazy" src="images/location.png" alt="location" />
                        <div>
                            <h5 className="font-medium text-lg">30+</h5>
                            <p className="para">Locations</p>
                        </div>
                    </div>
                    <div className="flex gap-5 py-5">
                        <img loading="lazy" src="images/Server.png" alt="Server" />
                        <div>
                            <h5 className="font-medium text-lg">50+</h5>
                            <p className="para">Servers</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2
