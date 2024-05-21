import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const SalesPage = () => {
  const chartRef = useRef(null);
  const [totalSales, setTotalSales] = useState(2000); // Initialisation avec une valeur par défaut
  const [totalStock, setTotalStock] = useState(1500); // Initialisation avec une valeur par défaut
  const [totalRevenue, setTotalRevenue] = useState(50000); // Initialisation avec une valeur par défaut
  const [salesData, setSalesData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Total Sales',
        data: [12000, 19000, 3000, 5000, 2000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  });

  const topSellingProducts = [
    { name: 'Product 1', sales: 500 },
    { name: 'Product 2', sales: 450 },
    { name: 'Product 3', sales: 400 },
    { name: 'Product 4', sales: 350 },
    { name: 'Product 5', sales: 300 },
  ];
  
  const leastSellingProducts = [
    { name: 'Product 6', sales: 50 },
    { name: 'Product 7', sales: 45 },
    { name: 'Product 8', sales: 40 },
    { name: 'Product 9', sales: 35 },
    { name: 'Product 10', sales: 30 },
  ];
  

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: salesData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chart.destroy(); // Détruire le chart lors du démontage du composant
    };
  }, [salesData]);

  const handleSelectPeriod = (period) => {
    // Mettre à jour les données de vente en fonction de la période sélectionnée
    // Vous pouvez implémenter la logique pour obtenir les données de vente pour la période sélectionnée ici
    // Ici, je vais simplement mettre à jour les données avec des valeurs aléatoires pour la démonstration
    const randomData = Array.from({ length: 5 }, () => Math.floor(Math.random() * 20000));
    setSalesData({
      ...salesData,
      datasets: [
        {
          ...salesData.datasets[0],
          data: randomData,
        },
      ],
    });
  };

  return (
    <Container>
      <Row className="mb-4">
            <Col md="4">
        <DropdownButton id="period-dropdown" title="Select Period">
          <Dropdown.Item onClick={() => handleSelectPeriod(5)}>Last 5 Months</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelectPeriod(8)}>Last 8 Months</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelectPeriod(12)}>Last 12 Months</Dropdown.Item>
        </DropdownButton>
      </Col>
        <Col md="4">
          <div className="p-3 bg-light border">
            <h4>Number of Products Sold: {totalSales}</h4>
          </div>
        </Col>
        <Col md="4">
          <div className="p-3 bg-light border">
            <h4>Total Revenue: ${totalRevenue}</h4>
          </div>
        </Col>
      </Row>
      <h2 className="mb-4">Total Sales Over Selected Period</h2>
      {/* Utilisez la référence chartRef pour le canevas du graphique */}
      <canvas ref={chartRef} id="salesChart" />
      <Row className="mt-4">
      <Col md="6">
  <h2>Top 5 Best Selling Products</h2>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Sales</th>
      </tr>
    </thead>
    <tbody>
      {topSellingProducts.map((product, index) => (
        <tr key={index}>
          <td>{product.name}</td>
          <td>{product.sales}</td>
        </tr>
      ))}
    </tbody>
  </Table>
</Col>
<Col md="6">
  <h2>Top 5 Least Selling Products</h2>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Sales</th>
      </tr>
    </thead>
    <tbody>
      {leastSellingProducts.map((product, index) => (
        <tr key={index}>
          <td>{product.name}</td>
          <td>{product.sales}</td>
        </tr>
      ))}
    </tbody>
  </Table>
</Col>

      </Row>
    </Container>
  );
};

export default SalesPage;
