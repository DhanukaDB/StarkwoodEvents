import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import DJImage from '../assets/logo.png';  // Replace with the path to your image
import './loading.css';

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.5)',  // Optional: Dark background for the loading page
      }}
    >
      <Box
        sx={{
          width: 150,
          height: 150,
          borderRadius: '50%',
          border: '5px solid rgba(255, 255, 255, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Spinning animation */}
        <CircularProgress
          size={150}
          sx={{
            position: 'absolute',
            animation: 'spin 2s linear infinite',
            color: '#fff',
          }}
        />
        {/* Image inside the circle */}
        <img
          src={DJImage}
          alt="DJ"
          style={{
            position: 'absolute',
            width: '60%',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </Box>
    </Box>
  );
};

export default Loading;
