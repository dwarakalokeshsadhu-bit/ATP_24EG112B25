function Navbar() {
  return(
        <nav className="flex justify-between bg-gray-500 py-5 px-7 text-3xl">
            <h4>Logo</h4>
            <ul className="flex gap-5">
         <li >Home</li>
         <li>Register</li>
         <li>Login</li>
         </ul>
        </nav>
    )
}
export default Navbar;
