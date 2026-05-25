import React from "react";
import Body from "../components/Body";

const MemberList = ({members = []}) => {
    return (
        <Body sidebar>
            <div>
                <h2>Members</h2>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.length === 0 ? (
                            <tr>
                                <td colSpan="3">No members found.</td>
                            </tr>
                        ) : (
                            members.map((member) => (
                                <tr key={member.id}>
                                    <td>{member.firstName}</td>
                                    <td>{member.lastName}</td>
                                    <td>{member.email}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </Body>
    )
}

export default MemberList