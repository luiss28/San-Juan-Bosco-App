import React from "react";
import Body from "../components/Body";

export default function InterestFormPage() {
    return (
        <Body sidebar>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '16px', alignItems: 'stretch' }}>
                <img
                    src="/YG_fun_christmas.jpeg"
                    alt="Dia de Don Bosco"
                    style={{ flex: '1 1 0', width: '0', maxWidth: '40%', height: 'auto', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
                />
                <img
                    src="/YG_fun_waving.jpeg"
                    alt="Dia de Don Bosco"
                    style={{ flex: '1 1 0', width: '0', maxWidth: '40%', height: 'auto', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
                />
            </div>

            <div>
                <iframe title="interest form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeHelAnJf4XkPwm8-D63LQlR0NQq7eUxn1_zDYkWb8ddStW1g/viewform?embedded=true" 
                    width="1000" 
                    height="1000" 
                    frameborder="0" 
                    marginheight="50" 
                    marginwidth="0">Loading…</iframe>
            </div>
        </Body>
    )
}