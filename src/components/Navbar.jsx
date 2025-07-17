import { useState } from "react"
import { MdClose, MdMenuOpen } from "react-icons/md"


const Navbar = () => {
  const [menu , setMenu ] = useState(false);
  const handleOpenMenu = () =>{
    setMenu(!menu);
  }
  return (
    <>
      <nav className="flex items-center justify-between px-7 py-6 md:px-24 sticky top-0 left-0 bg-white  ">
        <div>
          <img loading="lazy" src="images/Logo.png" alt="logo" />
        </div>
        <div className="lg:flex gap-5 items-center hidden para">
          <p>About</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Testimonials</p>
          <p>Help</p>
        </div>
        <div className="lg:flex gap-4 items-center hidden">
          <button>Sign In</button>
          <button className="border-2 border-[#F42A49] rounded-full text-[#F53855] px-7 py-2 font-medium hover:bg-[#F42A49] hover:shadow-lg hover:shadow-[#fa8686] hover:text-white">Sign Up</button>
        </div>
        <MdMenuOpen className="lg:hidden text-4xl cursor-pointer"  onClick={handleOpenMenu}/>

        {/* --------------------------menu items----------------------- */}

        <div className={`absolute top-0 left-0 h-screen z-50 w-full flex items-center justify-center flex-col bg-white text-2xl  space-y-6 font-medium ${menu ? "flex" : "hidden"}`}>
          <MdClose className="absolute top-7 right-7 text-3xl cursor-pointer" onClick={handleOpenMenu}/>
          <p>About</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Testimonials</p>
          <p>Help</p>
          <button>Sign In</button>
          <button className="border-2 border-[#F42A49] rounded-full text-[#F53855] px-7 py-2 font-medium hover:bg-[#F42A49] hover:shadow-lg hover:shadow-[#fa8686] hover:text-white">Sign Up</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
