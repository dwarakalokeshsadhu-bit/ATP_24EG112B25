
  {/* <navibar className="flex p-4 justify-around ">
    <h3 className='relative right-24'>LOGO</h3>
    <div className="flex" >
      
      <h4 className='relative right-15'>Home</h4>
       <h4 className='relative right-10'>Signup</h4>
        <h4 className='relative right-2'>Login</h4>
    </div>
  </navibar> */}
 function Navibar() {
    return (
        <div className="flex justify-between items-center bg-gray-600 px-10 py-6 text-white">
            
            {/* Logo */}
            <h1 className="text-2xl font-bold">LOGO</h1>

            {/* Nav Links */}
            <ul className="flex gap-8 list-none">
                <li><a href="" className="hover:text-amber-400">Home</a></li>
                <li><a href="" className="hover:text-amber-400">Register</a></li>
                <li><a href="" className="hover:text-amber-400">Login</a></li>
            </ul>

        </div>
    );
}
export default Navibar;