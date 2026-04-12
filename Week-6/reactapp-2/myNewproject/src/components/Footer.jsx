function Footer() {
    return (
        <div className="bg-gray-900 text-amber-50 p-10 flex justify-between items-center">
            
            {/* Address */}
            <div>
                <h3 className="text-lg font-bold mb-2">Address</h3>
                <p className="text-sm text-gray-400">Hyderabad</p>
                <p className="text-sm text-gray-400">Telangana</p>
            </div>

            {/* Contact */}
            <div>
                <h3 className="text-lg font-bold mb-2">Contact</h3>
                <p className="text-sm text-gray-400 ">email@mail.com</p>
                <p className="text-sm text-gray-400">+91 6281887958</p>
            </div>

        </div>
    );
}
export default Footer;