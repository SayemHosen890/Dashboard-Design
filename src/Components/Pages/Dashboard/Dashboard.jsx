import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Dashboard = () => {
  return (
    <div className="flex gap-6">
      {/* Card 1 */}
      <Card sx={{ maxWidth: 345 }} className="p-4 flex items-center justify-between">
        <span className="text-sm font-medium">Left Text</span>
        <img src="/logo192.png" alt="Logo" className="w-10 h-10" />
        <span className="text-sm font-medium">Right Text</span>
      </Card>

      {/* Card 2 */}
      <Card sx={{ maxWidth: 345 }} className="p-4 flex items-center justify-between">
        <span className="text-sm font-medium">Left Info</span>
        <img src="/logo192.png" alt="Logo" className="w-10 h-10" />
        <span className="text-sm font-medium">Right Info</span>
      </Card>

      {/* Card 3 */}
      <Card sx={{ maxWidth: 345 }} className="p-4 flex items-center justify-between">
        <span className="text-sm font-medium">Start</span>
        <img src="/logo192.png" alt="Logo" className="w-10 h-10" />
        <span className="text-sm font-medium">End</span>
      </Card>
    </div>
  )
}

export default Dashboard