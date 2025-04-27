import react, {useState, useEffect}  from 'react';
import '../styles/Livetable.css';

function Livetable() {


    return (
        <div>
            <h2>Live F1 Leaderboard</h2>
            <table>
            <thead>
                <tr>
                <th>POS</th>
                <th>Driver</th>
                <th>Team</th>
                <th>Lap</th>
                <th>Sector</th>
                <th>Gap</th>
                <th>Interval</th>
                <th>Best Lap</th>
                <th>Last Lap</th>
                <th>Tyre</th>
                </tr>
            </thead>
            <tbody>
                {/* {data.map((driver, index) => {
                const details = driverDetails[driver.driver_number] || {};
                return (
                    <tr key={driver.driver_number}>
                    <td>{driver.position}</td>
                    <td>
                        <img src={details.photo} alt={details.name} style={{ width: "40px", borderRadius: "50%" }} />
                        {details.name || `Driver #${driver.driver_number}`}
                    </td>
                    <td>{details.team || "N/A"}</td>
                    <td>{driver.lap_number}</td>
                    <td>{driver.sector}</td>
                    <td>{driver.gap_to_leader || "N/A"}</td>
                    <td>{driver.interval || "N/A"}</td>
                    <td>{driver.best_lap || "N/A"}</td>
                    <td>{driver.last_lap || "N/A"}</td>
                    <td>{driver.tyre || "N/A"}</td>
                    </tr>
                );
                })} */}
            </tbody>
            </table>
        </div>
    );
};

export default Livetable;