function UserList(props) {
    const {user}=props
  return <div className="text-center w-full shadow-2xl rounded-3xl p-4 ">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <img src={user.image} alt=""  className="block m-auto p-4 rounded-full"/>
  </div>;
}
export default UserList;
