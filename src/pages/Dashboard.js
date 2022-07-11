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
              Some quick example
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='deals-graph-card'>
          Ho!!
        </Card>
        <Card className='tasks-chart-card'>
          JIJI!!
        </Card>
    </div>
  );
}

export default Dashboard;