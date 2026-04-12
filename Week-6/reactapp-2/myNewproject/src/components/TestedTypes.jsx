import { useState } from "react"

function TestedTypes() {
    const [user, setUser] = useState({ username: "lokesh", age: 21, City: "hyd" })
    const [marks, setMarks] = useState([10, 20, 30])

    const updateuser = () => {
        setUser(prev => ({ ...prev, username: "Dwaraka", age: 18 }))
    };

    const updateMarks = () => {
        setMarks([...marks, 40])
    }

    return (
        <div className="text-center p-10 border">
            <p>username: {user.username}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.City}</p>

            <button onClick={updateuser} className="p-5 bg-amber-300">
                update user
            </button>

            <button onClick={updateMarks} className="p-5 bg-green-300 ml-3">
                add mark
            </button>

            {marks.map((mark, index) => (
                <p key={index}>{mark}</p>
            ))}
        </div>
    )
}

export default TestedTypes