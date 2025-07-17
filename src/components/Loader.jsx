const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 bg-white bg-opacity-60 flex justify-center items-center">
            <div className="  flex flex-col items-center ">
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 border-4 border-[#F53838] border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-1 border-4 border-[#F53838] border-b-transparent rounded-full animate-spin [animation-delay:0.2s]"></div>
                </div>
            </div>
        </div>
    )
}

export default Loader
