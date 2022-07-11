import React from 'react';
import { Card } from 'react-bootstrap';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Card className='event-calendar-card'>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Event Card
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='deals-graph-card'>
          Deals Graph
        </Card>
        <Card className='tasks-chart-card'>
          Tasks Pie Chart
        </Card>
    </div>
  );
}

export default Dashboard;