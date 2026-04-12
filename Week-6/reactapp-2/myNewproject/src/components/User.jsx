function User(props) { //{user:{}}
    let {user} = props;
    return(
        <div className="text-center p-5 shadow-2xl rounded-2xl shadow-gray-400">
            <h2 className="text-3xl text-red-300">{user.name}</h2>
            <p className="font-bold mt-5 break-all">{user.email}</p> 
                
           <img src={user.img} alt="" className="block mx-auto rounded-3xl mt-5" 
           
           ></img> 
            </div>
    )
}
export default User;