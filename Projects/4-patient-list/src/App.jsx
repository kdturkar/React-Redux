function App() {
  const patients_list = [
    { id: "0", Name: "John", Diseage: "Jondice" },
    { id: "1", Name: "David", Diseage: "Pneumonia" },
    { id: "2", Name: "Travis", Diseage: "Typhoid" },
    { id: "3", Name: "Simond", Diseage: "Fever" },
  ];

  const keys = Object.keys(patients_list[0]); // Assuming all objects have the same keys

  return (
    <table>
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {patients_list.map((patient) => (
          <tr key={patient.id}>
            {keys.map((key) => (
              <td key={key}>{patient[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
