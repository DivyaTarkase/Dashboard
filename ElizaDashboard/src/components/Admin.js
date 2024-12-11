import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom"; 
import IprManagement from './IprManagement';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register all chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Pie chart data
const pieChartData1 = {
  labels: ["Patent A", "Patent B", "Patent C"],
  datasets: [
    {
      data: [300, 200, 100],
      backgroundColor: ["#A6C8FF", "#FFB3B3", "#FFF5A0"],  // Soft blue, pink, and light yellow
      hoverBackgroundColor: ["#85AEDD", "#F28B82", "#FFE066"], 
    },
  ],
};

const pieChartData2 = {
  labels: ["USA", "Europe", "Asia"],
  datasets: [
    {
      data: [600, 400, 300],
      backgroundColor: ["#A6C8FF", "#FFB3B3", "#FFF5A0"],  // Soft blue, pink, and light yellow
      hoverBackgroundColor: ["#85AEDD", "#F28B82", "#FFE066"], 
    },
  ],
};

const Admin = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [activeNotification, setActiveNotification] = useState(null);
  const [activeStartup, setActiveStartup] = useState(null); 
  const [activeResearcher, setActiveResearcher] = useState(null);
  const [activeInvestor, setActiveInvestor] = useState(null);

  const startups = [
    {
      name: "Tech Innovators",
      patents: ["Patent A", "Patent B"],
      copyrights: ["Copyright A"],
      trademarks: ["Trademark A"],
    },
    {
      name: "Green Energy Solutions",
      patents: ["Patent C"],
      copyrights: ["Copyright B"],
      trademarks: ["Trademark B", "Trademark C"],
    },
    {
      name: "AI Revolution",
      patents: ["Patent D", "Patent E"],
      copyrights: ["Copyright C"],
      trademarks: [],
    },
  ];

  const togglePatents = (index) => {
    setActiveStartup(activeStartup === index ? null : index);
  };


  const [researchers, setResearchers] = useState([
    {
      name: 'John Doe',
      researches: ['Research Paper 1', 'Research Paper 2'],
      patents: ['Patent 1', 'Patent 2']
    },
    // ... other researchers
  ]);

 

  // Function to toggle active researcher
  const toggleResearches = (index) => {
    setActiveResearcher(activeResearcher === index ? null : index);
  };

  const investors = [
    {
      name: "Investor A",
      totalFunding: 500000,
      funding: [
        { amount: 200000, startup: "Startup 1" },
        { amount: 300000, startup: "Startup 2" },
      ],
    },
    {
      name: "Investor B",
      totalFunding: 800000,
      funding: [
        { amount: 400000, startup: "Startup 3" },
        { amount: 400000, startup: "Startup 4" },
      ],
    },
    {
      name: "Investor C",
      totalFunding: 1000000,
      funding: [
        { amount: 500000, startup: "Startup 5" },
        { amount: 500000, startup: "Startup 6" },
      ],
    },
    // Add more investors as needed
  ];


  const toggleInvestments = (index) => {
    setActiveInvestor(activeInvestor === index ? null : index);
  };

 


  const salesData = {
    labels: ["North", "South", "East", "West", "Saurashtra", "Kutch"],
    datasets: [
      {
        label: "Reserchers",
        data: [50, 65, 75, 70, 80, 90],
        borderColor: "#3e28a0",
        backgroundColor: "rgba(62, 40, 160, 0.1)",
        tension: 0.4,
      },
      {
        label: "Startups",
        data: [40, 50, 55, 60, 65, 70],
        borderColor: "#261963",
        backgroundColor: "rgba(38, 25, 99, 0.1)",
        tension: 0.4,
      },
      {
        label: "Investors",
        data: [70, 30, 55, 100, 65, 40],
        borderColor: "#1E90FF",
        backgroundColor: "rgba(38, 25, 99, 0.1)",
        tension: 0.4,
      },
    ],
  };

  const salesOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: { color: "#1e144e" },
      },
      title: {
        display: true,
        text: "Total Sales (Online vs Offline)",
        color: "#1e144e",
      },
    },
    scales: {
      x: {
        ticks: { color: "#1e144e" },
        grid: { color: "rgba(0,0,0,0.1)" },
      },
      y: {
        ticks: { color: "#1e144e" },
        grid: { color: "rgba(0,0,0,0.1)" },
      },
    },
  };

  // Sidebar options with active section content
  const sections = {
    dashboard: (
      <div className="content-section">
        <div className="stats-and-pie-container">
          {/* Counter Section */}
          <div className="flex flex-col gap-6">
            <div className="counter-card">
              <h2>Patents</h2>
              <p>1258</p>
            </div>
            <div className="counter-card">
              <h2>Copyrights </h2>
              <p>850</p>
            </div>
            <div className="counter-card">
              <h2>Trademarks </h2>
              <p>621</p>
            </div>
          </div>

          <div class="total-average-section">
    <div class="total-average-card">
      <h3>Total Average</h3>
      <div class="average-value">75%</div>
    </div>
    <div class="total-average-details">
      <div>
        <p>Last Week: 72%</p>
      </div>
      <div>
        <p>Last Month: 78%</p>
      </div>
      <div>
        <p>Last Year: 80%</p>
      </div>
    </div>
  </div>

          {/* Pie Charts Section */}
          <div className="pie-charts">
            <div className="pie-chart-card">
              <h2>Patent Distribution</h2>
              <Pie data={pieChartData1} />
            </div>
            <div className="pie-chart-card">
              <h2>Geographical Distribution</h2>
              <Pie data={pieChartData2} />
            </div>
          </div>
        </div>

        <div className="sales-and-notifications">
  <div className="sales-chart">
    <h2>Areawise Distribution</h2>
    <Line data={salesData} options={salesOptions} />
  </div>

  <div className="notifications">
            <h2>Notifications</h2>
            <ul>
              {[
                { title: "New Patent filed: Patent A", details: "Patent A has been officially filed and is now awaiting approval. The filing number is 123456789. Expected response time: 30 days." },
                { title: "Trademark registered for XYZ", details: "The trademark for XYZ has been successfully registered and is now protected. The registration number is 987654321. This registration is valid for 10 years." },
                { title: "Scheduled maintenance on 07 July, 2024", details: "Scheduled maintenance on the system will occur on 07 July, 2024, from 2:00 AM to 5:00 AM. During this time, the system will be temporarily unavailable." },
                { title: "New Trademark application filed", details: "A new trademark application has been filed for 'Tech Innovators'. This application is currently under review. Review period: 20 days." },
                { title: "Patent Renewal Due for Patent B", details: "Patent B is due for renewal on 15 August, 2024. Please ensure the renewal fee is paid before the due date to avoid expiration. Renewal fee: $500." },
                { title: "IPR Compliance Training Scheduled", details: "A mandatory IPR compliance training session has been scheduled for all staff on 10 July, 2024, from 9:00 AM to 11:00 AM. Location: Conference Room A." },
              ].map((notification, index) => (
                <li key={index} onClick={() => setActiveNotification(index === activeNotification ? null : index)}>
                  <div className="notification-title">{notification.title}</div>
                  {activeNotification === index && (
                    <div className="notification-details">
                      {notification.details}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ),
   
    startups: (
      <div className="content-section">
        <h2 className="section-title">Startups List</h2>
        <ul className="startup-list">
          {startups.map((startup, index) => (
            <li key={index} className="startup-item">
              <div
                className="startup-header"
                onClick={() => togglePatents(index)}
              >
                <h3>{startup.name}</h3>
                <p className="patent-count">
                  {startup.patents.length} Patent{startup.patents.length > 1 ? "s" : ""}
                </p>
              </div>
              {/* Show patents when the startup is clicked */}
              {activeStartup === index && (
                <ul className="patents-list">
                  {startup.patents.map((patent, idx) => (
                    <li key={idx} className="patent-item">
                      {patent}
                    </li>
                  ))}
                </ul>
              )}
              {/* "Know More" Button with Link to detailed startup page */}
              <a href="about:blank" target="_blank" rel="noopener noreferrer">
                <button className="know-more-btn">Know More</button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    ),
    
    researchers: (
      <div className="content-section">
        <h2 className="section-title">Researchers List</h2>
        <ul className="researcher-list">
          {researchers.map((researcher, index) => (
            <li key={index} className="researcher-item">
              <div
                className="researcher-header"
                onClick={() => toggleResearches(index)}
              >
                <h3>{researcher.name}</h3>
                <p className="research-count">
                  {researcher.researches.length} Research{researcher.researches.length > 1 ? "es" : ""}
                </p>
                <p className="patent-count">
                  {researcher.patents.length} Patent{researcher.patents.length > 1 ? "s" : ""}
                </p>
              </div>
              {/* Show researches and patents when the researcher is clicked */}
              {activeResearcher === index && (
                <div>
                  <ul className="researches-list">
                    {researcher.researches.map((research, idx) => (
                      <li key={idx} className="research-item">
                        {research}
                      </li>
                    ))}
                  </ul>
                  <ul className="patents-list">
                    {researcher.patents.map((patent, idx) => (
                      <li key={idx} className="patent-item">
                        {patent}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* "Know More" Button with Link to detailed researcher page */}
              <a href="about:blank" target="_blank" rel="noopener noreferrer">
                <button className="know-more-btn">Know More</button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    ),
    
    investors: (
  <div className="content-section">
    <h2 className="section-title">Investors List</h2>
    <ul className="investor-list">
      {investors.map((investor, index) => (
        <li key={index} className="investor-item">
          <div
            className="investor-header"
            onClick={() => toggleInvestments(index)}
          >
            <h3>{investor.name}</h3>
            <p className="funding-amount">
              Total Funding: ${investor.totalFunding}
            </p>
          </div>
          {/* Show funding and startups when the investor is clicked */}
          {activeInvestor === index && (
            <div>
              <ul className="funding-list">
                {investor.funding.map((fund, idx) => (
                  <li key={idx} className="fund-item">
                    ${fund.amount} in {fund.startup}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* "Know More" Button with Link to detailed investor page */}
          <a href="about:blank" target="_blank" rel="noopener noreferrer">
            <button className="know-more-btn">Know More</button>
          </a>
        </li>
      ))}
    </ul>
  </div>
),

    iprManagement: <IprManagement />,
    settings: <div>Settings content</div>,
  };

  return (
    <Router>
      <div className="dashboard-container">

        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-menu">
            <button onClick={() => setActiveSection("dashboard")}>Dashboard</button>
            <button onClick={() => setActiveSection("startups")}>Startups</button>
            <button onClick={() => setActiveSection("researchers")}>Researchers</button>
            <button onClick={() => setActiveSection("investors")}>Investors</button>
            <button onClick={() => setActiveSection("iprManagement")}>IPR Management</button>
            <button onClick={() => setActiveSection("settings")}>Settings</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">{sections[activeSection]}</div>

        {/* Routes Component */}
        <Routes>
          {/* Route for Startups Details */}
          <Route
            path="/startups/:index"
            element={<StartupDetails startups={startups} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

const StartupDetails = ({ startups }) => {
  const { index } = useParams(); // Use useParams to get the dynamic route parameter
  const startup = startups[index];

  return (
    <div className="startup-details">
      <h2>{startup.name}</h2>
      <p><strong>Patents:</strong> {startup.patents.join(", ") || "None"}</p>
      <Link to="/">
        <button className="back-btn">Back to Startups List</button>
      </Link>
    </div>
  );
};


export default Admin;
