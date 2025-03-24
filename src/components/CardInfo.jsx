
import view from "../assets/view.png";
import plus from "../assets/plus.png";
import transfer from "../assets/transfer.png";

function CardInfo() {
    return (
        <section className="account-info">
            <div className="account-number">
                <h4>Account No.</h4>
                <h3>100899</h3>
            </div>
            <div className="balance-summary">
                <h4>Balance</h4>
                <div className="action-container">
                    <div className="amount-display">
                        <h3>Rp 99.000.000,00</h3>
                        <button className="visibility-btn">
                            <img src={view} height="38" alt="View balance" />
                        </button>
                    </div>
                    <div className="quick-actions">
                        <button className="action-btn">
                            <img src={plus} height="35" alt="Add funds" />
                        </button>
                        <button className="action-btn">
                            <img src={transfer} height="35" alt="Transfer funds" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardInfo;