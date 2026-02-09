import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/theme.css";

import red_tire from "../assets/tires/red-tire.webp";
import yellow_tire from "../assets/tires/yellow-tire.webp";
import white_tire from "../assets/tires/white-tire.webp";
import green_tire from "../assets/tires/green-tire.webp";
import blue_tire from "../assets/tires/blue-tire.webp";
import default_tire from "../assets/tires/red-tire.webp";

import fastestLapIcon from "../assets/tires/green-tire.webp"; 

const F1_KEY = "http://127.0.0.1:5000/leaderboard"; 


const TYRE_IMAGE_FOR = {
  SOFT: red_tire,
  MEDIUM: yellow_tire,
  HARD: white_tire,
  INTERMEDIATE: green_tire,
  WET: blue_tire,
  DEFAULT: default_tire,
};

function getLastLapValue(lastLap) {
  if (!lastLap) return "--:--";
  if (typeof lastLap === "string") return lastLap;
  if (typeof lastLap === "object" && lastLap.Value) return lastLap.Value;
  return "--:--";
}

const Formula1 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const res = await axios.get(F1_KEY, { timeout: 3000 });
        if (!mounted) return;
        setData(res.data);
        setError(null);
      } catch (err) {
        if (!mounted) return;
        setError("Unable to fetch live data");
        console.error("fetch leaderboard error:", err);
      }
    };

    load();
    // Set interval for server refresh
    const interval = setInterval(load, 10000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  if (!data) {
    return (
      <>
        <nav className="top-navbar">
          <ul>
            <li><a href="#welcome">welcome</a></li>
            <li><a href="#section1">about</a></li>
            <li><a href="#section2">interests</a></li>
          </ul>
        </nav>
        <div className="page-content">
          <div className="content-sections">
            <div className="f1-container">
              <h1 className="event-title">Loading event...</h1>
              <h2 className="session-title">Loading session...</h2>
              <p className="session-title">{error ?? "Waiting for live feed..."}</p>
            </div>
            <footer className="footer">
              <p>© 2025 Brandon Kuciapski. huzarzy<span className="bold">com</span></p>
            </footer>
          </div>
        </div>
      </>
    );
  }

  const meeting = data.SessionInfo?.Meeting?.OfficialName ?? "Unknown Event";
  const session = data.SessionInfo?.Name ?? data.SessionInfo?.SessionName ?? "Unknown Session";

  const timingLines = data.TimingData?.Lines ?? {};
  const appLines = data.TimingAppData?.Lines ?? {};
  const driverList = data.DriverList ?? {};

  const drivers = Object.values(timingLines)
    .map((line) => {
      const racingNumber = line.RacingNumber ?? line.RacingNumber?.toString() ?? line.RacingNum ?? "";
      const driverMeta = driverList[racingNumber] ?? driverList[line.RacingNumber] ?? null;

      const teamObj = driverMeta
        ? {
            Name: driverMeta.TeamName ?? driverMeta.Team ?? "Unknown",
            Colour: driverMeta.TeamColour ? "#" + driverMeta.TeamColour : driverMeta.TeamColour ?? "#ffffff",
          }
        : null;

      const stints = appLines[racingNumber]?.Stints ?? [];
      const lastStint = stints.length ? stints[stints.length - 1] : null;
      const tyreCompound = lastStint?.Compound ?? null;
      const tyreImg = TYRE_IMAGE_FOR[tyreCompound] ?? TYRE_IMAGE_FOR.DEFAULT;

      const lastLapValue = getLastLapValue(line.LastLapTime);
      const numericPos = Number(line.Line ?? line.Position ?? 999);

      return {
        ...line,
        RacingNumber: racingNumber,
        DriverMeta: driverMeta,
        Team: teamObj,
        Tyres: { Compound: tyreCompound, ImageUrl: tyreImg },
        LastLapValue: lastLapValue,
        numericPos,
      };
    })
    .sort((a, b) => a.numericPos - b.numericPos);


  return (
    <>
      {/* <nav className="top-navbar">
        <ul>
          <li><a href="#welcome">welcome</a></li>
          <li><a href="#section1">about</a></li>
          <li><a href="#section2">interests</a></li>
        </ul>
      </nav> */}

      <div className="page-content">
        <div className="content-sections">
          <div className="f1-container">
            <div className="header-row">
              <div>
                <h1 className="event-title">{meeting}</h1>
                <h2 className="session-title">{session} Session</h2>
              </div>
              <div className="lap-count">
                Laps: {data.LapCount?.CurrentLap ?? data.LapCount?.TotalLaps ?? "-"}
              </div>
            </div>

            <div className="leaderboard">
              {drivers.map((d, idx) => {
                const meta = d.DriverMeta ?? {};
                const name = meta.FullName ?? meta.BroadcastName ?? meta.FirstName ?? `#${d.RacingNumber}`;
                const headshot = meta.HeadshotUrl ?? "/fallback-head.png";
                const teamName = d.Team?.Name ?? "Unknown Team";
                const teamColor = d.Team?.Colour ?? "#ffffff";
                const lap = d.LastLapValue ?? "--:--";
                const tyreImg = d.Tyres?.ImageUrl ?? TYRE_IMAGE_FOR.DEFAULT;
                const tyreAlt = d.Tyres?.Compound ?? "tyre";

                const isFastestLap = d.BestLapTime?.OverallFastest === true;
                const interval = d.IntervalToPositionAhead?.Value ?? null;
                const inPit = d.InPit ?? false;

                return (
                  <div className="driver-card" key={d.RacingNumber}>
                    <div className="left">
                      <div className="position">{d.Line ?? d.Position ?? "-"}</div>

                      <img
                        className="headshot"
                        src={headshot}
                        alt={name}
                        onError={(e) => { e.target.onerror = null; e.target.src = "/fallback-head.png"; }}
                      />

                      <div className="name-block">
                        <div className="driver-name">
                          {name}
                          {isFastestLap && <img src={fastestLapIcon} className="fastest-lap-icon" alt="fastest lap" />}
                        </div>
                        <div className="team-name" style={{ color: teamColor }}>
                          {teamName}
                        </div>
                      </div>
                    </div>

                    <div className="right">
                      {inPit ? (
                        <div className="in-pit">IN PIT</div>
                      ) : (
                        <>
                          {idx !== 0 && interval && <div className="delta">{interval}</div>}
                          <div className="laptime">{lap}</div>
                          <img className="tire" src={tyreImg} alt={tyreAlt} onError={(e) => { e.target.onerror = null; e.target.src = TYRE_IMAGE_FOR.DEFAULT; }} />
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <footer className="footer">
            <p>© 2026 Brandon Kuciapski. huzarzy<span className="bold">com</span></p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Formula1;
