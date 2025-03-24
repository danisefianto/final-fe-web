// src/pages/DashboardPage.jsx
import Navbar from "../components/Navbar";
import Greetings from "../components/Greetings";
import "../styles/DashboardPage.css";
import userAvatar from "../assets/chelsea (1).png";
import CardInfo from "../components/CardInfo";
import TableTransaction from "../components/TableTransaction";

function DashboardPage() {
    return (
        <div className="dashboard-wrapper">
            <Navbar />
            <main className="dashboard-container">
                <Greetings avatar={userAvatar} />
                <CardInfo />
                <section className="transactions-section">
                    <TableTransaction />
                </section>
            </main>
        </div>
    );
}

export default DashboardPage;