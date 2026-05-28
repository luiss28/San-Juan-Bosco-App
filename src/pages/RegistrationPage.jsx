import { useState } from "react";
import Body from "../components/Body";

const MemberForm = ({ existingMember = {}, updateCallback = () => {} }) => {
    const [firstName, setFirstName] = useState(existingMember.firstName || "");
    const [lastName, setLastName] = useState(existingMember.lastName || "");
    const [email, setEmail] = useState(existingMember.email || "");

    const updating = Object.entries(existingMember).length !== 0

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim().toLowerCase(),
        };

        try {
            const res = await fetch('/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                alert(data.message || 'Registration failed');
                return;
            }

            alert(data.message || 'Member registered');
            setFirstName('');
            setLastName('');
            setEmail('');
            try { updateCallback(); } catch (err) { }
        } catch (err) {
            alert('Unable to reach the registration server. Please check that the backend is running.');
        }
    }

    return (
      <Body sidebar>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">{updating ? "Update" : "Create"}</button>
        </form>
      </Body>
    );
};

export default MemberForm