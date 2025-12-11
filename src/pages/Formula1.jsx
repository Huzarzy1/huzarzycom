import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Formula1.css";

const TYRE_IMAGE_FOR = {
  SOFT: "/tyres/soft.png",
  MEDIUM: "/tyres/medium.png",
  HARD: "/tyres/hard.png",
  INTERMEDIATE: "/tyres/intermediate.png",
  WET: "/tyres/wet.png",
  DEFAULT: "/tyres/default.png",
};

function getLastLapValue(lastLap) {
  // lastLap can be { Value: "1:28.123", ... } or a simple string
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
        const res = await axios.get("http://localhost:5000/leaderboard", { timeout: 3000 });
        if (!mounted) return;
        setData(res.data);
        setError(null);
      } catch (err) {
        if (!mounted) return;
        setError("Unable to fetch live data");
        // keep existing data if present
        console.error("fetch leaderboard error:", err);
      }
    };

    load();
    const interval = setInterval(load, 1000); // 1s updates. Increase if you want less chattiness
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
              <p>{error ?? "Waiting for live feed..."}</p>
            </div>
            <footer className="footer">
              <p>© 2025 Brandon Kuciapski. huzarzy<span className="bold">com</span></p>
            </footer>
          </div>
        </div>
      </>
    );
  }

  const meeting = data.Meeting?.OfficialName ?? data.Meeting?.Name ?? "Unknown Event";
  const session = data.SessionInfo?.Name ?? data.SessionInfo?.SessionName ?? "Unknown Session";

  // timing lines (position + lap info)
  const timingLines = data.TimingData?.Lines ?? {};

  // tyre/stints info
  const appLines = data.TimingAppData?.Lines ?? {};

  // driver metadata (headshots, team names, team colour)
  const driverList = data.DriverList ?? {};

  // merge them into one array
  const drivers = Object.values(timingLines)
    .map((line) => {
      // racing number present as string "4" etc.
      const racingNumber = line.RacingNumber ?? line.RacingNumber?.toString() ?? line.RacingNum ?? "";
      const driverMeta = driverList[racingNumber] ?? driverList[line.RacingNumber] ?? null;

      // team object composed from DriverList fields
      const teamObj = driverMeta
        ? {
            Name: driverMeta.TeamName ?? driverMeta.Team ?? "Unknown",
            Colour: driverMeta.TeamColour ? "#" + driverMeta.TeamColour : driverMeta.TeamColour ?? "#ffffff",
          }
        : null;

      // last stint (current tyre) — take last element of Stints array if present
      const stints = appLines[racingNumber]?.Stints ?? [];
      const lastStint = stints.length ? stints[stints.length - 1] : null;
      const tyreCompound = lastStint?.Compound ?? null;
      const tyreImg = TYRE_IMAGE_FOR[tyreCompound] ?? TYRE_IMAGE_FOR.DEFAULT;

      // LastLapTime sometimes an object with Value
      const lastLapValue = getLastLapValue(line.LastLapTime);

      // prefer numeric Line for position sort; fallback to Position
      const numericPos = Number(line.Line ?? line.Position ?? 999);

      return {
        ...line,
        RacingNumber: racingNumber,
        DriverMeta: driverMeta,
        Team: teamObj,
        Tyres: {
          Compound: tyreCompound,
          ImageUrl: tyreImg,
        },
        LastLapValue: lastLapValue,
        numericPos,
      };
    })
    .sort((a, b) => a.numericPos - b.numericPos);

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
            <div className="header-row">
              <div>
                <h1 className="event-title">{meeting}</h1>
                <h2 className="session-title">{session}</h2>
              </div>
              <div className="lap-count">
                Laps: {data.LapCount?.CurrentLap ?? data.LapCount?.TotalLaps ?? "-"}
              </div>
            </div>

            <div className="leaderboard">
              {drivers.map((d) => {
                const meta = d.DriverMeta ?? {};
                const name = meta.FullName ?? meta.FullName ?? meta.BroadcastName ?? meta.FirstName ?? `#${d.RacingNumber}`;
                const headshot = meta.HeadshotUrl ?? meta.Headshot ?? "/fallback-head.png";
                const teamName = d.Team?.Name ?? meta.TeamName ?? "Unknown Team";
                const teamColor = d.Team?.Colour ?? "#ffffff";
                const lap = d.LastLapValue ?? "--:--";
                const tyreImg = d.Tyres?.ImageUrl ?? TYRE_IMAGE_FOR.DEFAULT;
                const tyreAlt = d.Tyres?.Compound ?? "tyre";

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
                        <div className="driver-name">{name}</div>
                        <div className="team-name" style={{ color: teamColor }}>
                          {teamName}
                        </div>
                      </div>
                    </div>

                    <div className="right">
                      <div className="laptime">{lap}</div>
                      <img className="tire" src={tyreImg} alt={tyreAlt} onError={(e) => { e.target.onerror = null; e.target.src = TYRE_IMAGE_FOR.DEFAULT; }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <footer className="footer">
            <p>© 2025 Brandon Kuciapski. huzarzy<span className="bold">com</span></p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Formula1;
