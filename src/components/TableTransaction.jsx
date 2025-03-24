import "../styles/components/TableTransaction.css";

function TableTransaction() {
    const transactionData = [
        {
            id: 1,
            date: "20:10 - 30 June 2022",
            type: "Transfer",
            fromTo: "Sendy",
            description: "Fore Coffee",
            amount: -75000,
        },
        {
            id: 2,
            date: "20:10 - 30 June 2022",
            type: "Topup",
            fromTo: "",
            description: "Topup from Bank Transfer",
            amount: 1000000,
        },
        {
            id: 3,
            date: "20:10 - 30 June 2022",
            type: "Transfer",
            fromTo: "Spongebob",
            description: "Fore Coffee",
            amount: -75000,
        },
        {
            id: 4,
            date: "20:10 - 30 June 2022",
            type: "Topup",
            fromTo: "",
            description: "Topup from Bank Transfer",
            amount: 1000000,
        },
        {
            id: 5,
            date: "20:10 - 30 June 2022",
            type: "Transfer",
            fromTo: "Anwar",
            description: "Beli Barang",
            amount: -75000,
        },
    ];

    return (
        <div className="transaction-wrapper">
            <div className="filter-controls">
                <input type="text" placeholder="Search" />
                <div className="display-options">
                    <p>Show</p>
                    <select>
                        <option>Last 10 transactions</option>
                        <option>Last 15 transactions</option>
                    </select>
                </div>
                <div className="order-options">
                    <p>Sort By</p>
                    <select>
                        <option>Date</option>
                        <option>Amount</option>
                    </select>
                    <select>
                        <option>Descending</option>
                        <option>Ascending</option>
                    </select>
                </div>
            </div>
            <table className="history-table">
                <thead>
                    <tr>
                        <th>Date & Time</th>
                        <th>Type</th>
                        <th>From / To</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionData.map((item, index) => (
                        <tr
                            key={item.id}
                            className={index % 2 === 0 ? "even-row" : "odd-row"}
                        >
                            <td>{item.date}</td>
                            <td>{item.type}</td>
                            <td>{item.fromTo}</td>
                            <td>{item.description}</td>
                            <td>{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="page-navigation">
                <button
                    type="button"
                    style={{ borderTopLeftRadius: "6px", borderBottomLeftRadius: "6px" }}
                >
                    First
                </button>
                <button type="button">1</button>
                <button type="button">2</button>
                <button type="button">3</button>
                <button
                    type="button"
                    style={{ borderTopRightRadius: "6px", borderBottomRightRadius: "6px" }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default TableTransaction;