import React, { useEffect, useState } from 'react';
import './index.css';


function Sheets() {
  const [sheetData, setSheetData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    // Function to fetch data from Google Sheets
    async function fetchData() {
      try {
        const response = await fetch(
          'https://sheets.googleapis.com/v4/spreadsheets/1s22rToN00KdylNAOSJNaxvRztXeLnMETZtzr8HPN9Mo/values/Sheet1?key=AIzaSyD3vOiFN6BCzSSM668pURFV2Nnh7llWkVE'
        );
        const data = await response.json();
        const values = data.values || [];

        // Assuming the first row contains headers, and the rest are data
        if (values.length > 1) {
          const headers = values[0];
          const dataRows = values.slice(1);

          const formattedData = dataRows.map((row) => {
            const columnData = {};
            headers.forEach((header, index) => {
              columnData[header] = row[index] || '';
            });
            return columnData;
          });

          setSheetData(formattedData);
        }

        setLoading(false); // Data has been fetched, set loading to false
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <div className="app-sheets">
      <div>
        <h2>Google Sheet Data</h2>
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <table>
            <thead>
              <tr>
                {sheetData.length > 0 &&
                  Object.keys(sheetData[0]).map((header) => (
                    <th key={header}>{header}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {sheetData.map((row, index) => (
                <tr key={index}>
                  {Object.keys(row).map((header) => (
                    <td key={header}>{row[header]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Sheets;
