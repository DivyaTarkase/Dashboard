import React, { useState } from 'react';

const iprOwners = [
    {
      name: 'ABC Corporation',
      totalIPRRegistered: 12,
      iprDetails: [
        {
          id: 1,
          type: 'Patent',
          title: 'Self Charging Electric Vehicle',
          registrationDate: '2023-05-10',
          description: 'A patent for a vehicle that can charge itself using solar panels integrated into its body.',
        },
        {
          id: 2,
          type: 'Trademark',
          title: 'XYZ Branding',
          registrationDate: '2022-08-15',
          description: 'Trademark for a unique brand identity used for various electronic products.',
        },
        {
          id: 3,
          type: 'Copyright',
          title: 'AI-Powered Analytics Software',
          registrationDate: '2021-12-01',
          description: 'A software tool powered by AI for analytics and data visualization in real-time.',
        },
        {
          id: 4,
          type: 'Patent',
          title: 'Quantum Computing Algorithm',
          registrationDate: '2024-01-30',
          description: 'Patent for a new algorithm that improves the performance of quantum computers.',
        },
        {
          id: 5,
          type: 'Trademark',
          title: 'Smart Home Solutions',
          registrationDate: '2023-07-22',
          description: 'Trademark for a brand offering smart home devices, including lighting and security systems.',
        },
      ],
    },
    {
      name: 'XYZ Innovations',
      totalIPRRegistered: 8,
      iprDetails: [
        {
          id: 1,
          type: 'Patent',
          title: 'Augmented Reality Headset',
          registrationDate: '2024-03-22',
          description: 'A patent for a lightweight augmented reality headset with high-definition visual output.',
        },
        {
          id: 2,
          type: 'Trademark',
          title: 'NextGen Tech',
          registrationDate: '2024-06-10',
          description: 'Trademark for a technology company focused on the development of next-generation robotics.',
        },
        {
          id: 3,
          type: 'Copyright',
          title: 'Virtual Reality Education Platform',
          registrationDate: '2024-04-15',
          description: 'Copyright for an innovative VR platform that offers immersive educational experiences.',
        },
        {
          id: 4,
          type: 'Patent',
          title: 'Eco-Friendly Packaging Solutions',
          registrationDate: '2023-11-05',
          description: 'Patent for biodegradable and eco-friendly packaging material made from plant-based substances.',
        },
        {
          id: 5,
          type: 'Trademark',
          title: 'TechWave',
          registrationDate: '2023-09-18',
          description: 'Trademark for a tech brand that specializes in wearable health devices.',
        },
        {
          id: 6,
          type: 'Copyright',
          title: 'AI-Powered Virtual Assistant',
          registrationDate: '2022-12-09',
          description: 'Copyright for an advanced virtual assistant powered by AI and capable of performing complex tasks.',
        },
        {
          id: 7,
          type: 'Patent',
          title: 'Wireless Charging Technology',
          registrationDate: '2023-02-20',
          description: 'Patent for a wireless charging system that works over longer distances.',
        },
        {
          id: 8,
          type: 'Trademark',
          title: 'HealthFirst',
          registrationDate: '2024-01-01',
          description: 'Trademark for a health-tech brand that offers wearable devices focused on wellness and fitness.',
        },
      ],
    },
    {
      name: 'Innovative Labs',
      totalIPRRegistered: 5,
      iprDetails: [
        {
          id: 1,
          type: 'Patent',
          title: 'AI-Powered Drug Discovery',
          registrationDate: '2023-10-01',
          description: 'Patent for a machine learning algorithm that accelerates the drug discovery process.',
        },
        {
          id: 2,
          type: 'Trademark',
          title: 'MedTech Solutions',
          registrationDate: '2023-06-12',
          description: 'Trademark for a company specializing in medical technology solutions.',
        },
        {
          id: 3,
          type: 'Copyright',
          title: 'Health Analytics Software',
          registrationDate: '2024-02-28',
          description: 'Copyright for a software that uses big data and AI to analyze healthcare trends and outcomes.',
        },
        {
          id: 4,
          type: 'Patent',
          title: 'Autonomous Healthcare Robot',
          registrationDate: '2023-08-19',
          description: 'Patent for a robot capable of autonomously providing healthcare assistance and monitoring patients.',
        },
        {
          id: 5,
          type: 'Trademark',
          title: 'Wellness 360',
          registrationDate: '2024-05-15',
          description: 'Trademark for a health and wellness brand offering personalized healthcare solutions.',
        },
      ],
    },
  ];
  

  const IprManagement = () => {
    const [pendingPatents, setPendingPatents] = useState([
      { id: 1, name: "Patent A" },
      { id: 2, name: "Patent B" },
      { id: 3, name: "Patent C" },
    ]);
  
    const [refiledPatents, setRefiledPatents] = useState([
      { id: 4, name: "Patent D" },
      { id: 5, name: "Patent E" },
    ]);
  
    const [updates, setUpdates] = useState([
      { type: "Patent", name: "Patent F", country: "USA" },
      { type: "Copyright", name: "Copyright G", country: "UK" },
      { type: "Trademark", name: "Trademark H", country: "Canada" },
    ]);
  
    const verifyPatent = (id) => {
      // Handle verification logic
      alert(`Patent with id: ${id} has been verified.`);
    };
  
    const rejectPatent = (id) => {
      // Handle rejection logic
      alert(`Patent with id: ${id} has been rejected.`);
    };
  
    return (
      <div className="ipr-management-container">
        <div className="ipr-columns">
          {/* Column 1: Patents Pending Verification */}
          <div className="ipr-column">
            <h2>Patents Pending Verification</h2>
            <ul className="patent-list">
              {pendingPatents.map((patent) => (
                <li key={patent.id} className="patent-item">
                  {patent.name}
                  <button onClick={() => verifyPatent(patent.id)} className="verify-btn">
                    Verify
                  </button>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Column 2: Refiled Patents */}
          <div className="ipr-column">
            <h2>Refiled Patents</h2>
            <ul className="patent-list">
              {refiledPatents.map((patent) => (
                <li key={patent.id} className="patent-item">
                  {patent.name}
                  <button onClick={() => verifyPatent(patent.id)} className="verify-btn">
                    Verify
                  </button>
                  <button onClick={() => rejectPatent(patent.id)} className="reject-btn">
                    Reject
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Updates Section */}
        <div className="updates-section">
          <h2>Latest Updates</h2>
          <ul className="updates-list">
            {updates.map((update, index) => (
              <li key={index} className="update-item">
                <strong>{update.type}</strong>: {update.name} granted in {update.country}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
export default IprManagement;
