// src/components/Greetings.jsx
function Greetings({ avatar }) {
    return (
        <section className="greetings">
            <div className="welcome-content">
                <h1>Good Morning, Dan</h1>
                <p>Check all your incoming and outgoing transactions here</p>
            </div>
            <div className="user-profile">
                <div className="user-details">
                    <h3>Dani Sefianto</h3>
                    <p>Personal Account</p>
                </div>
                <img src={avatar} height="100px" width="100px" alt="User avatar" />
            </div>
        </section>
    );
}

export default Greetings;