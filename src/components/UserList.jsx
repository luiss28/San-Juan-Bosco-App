import React from "react"

const UserList = ({ users, updateUsers, updateCallback }) => {

    return <div>
        <h2>Users</h2>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default UserList