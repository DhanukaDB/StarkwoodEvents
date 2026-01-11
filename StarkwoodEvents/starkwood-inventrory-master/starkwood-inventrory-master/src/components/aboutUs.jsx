import React from 'react';
import { Button, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import Model2 from '../assets/model2.png';

const AboutUs = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', my: 5, padding: '20px' }}>
      <Grid container spacing={3}>
        {/* Image Section */}
        {/* Image Section with Animation */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
                width: '60%',
                '@keyframes upDownAnimation': {
                  '0%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-20px)' },
                  '100%': { transform: 'translateY(0)' },
                },
                animation: 'upDownAnimation 3s ease-in-out infinite',
              }}
              
          >
            <img
              src= {Model2} // Replace with your image URL
              alt="Party Supplies"
              style={{
                width: '90%',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                display: 'block', // Center the image
                margin: '0 auto', // Center the image horizontally
              }}
            />
          </Box>
        </Grid>

    {/* Content Section */}
    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: 'rgba(247, 211, 144, 0.9)' }}>
        About Starkwood Party Supply & Rentals
        </Typography>
        <Typography variant="h6" sx={{ fontStyle: 'italic', mb: 3, color: 'rgb(247, 232, 144)' }}>
        "Making Every Event Unforgettable!"
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'rgb(195, 196, 186)', textAlign: 'justify' }}>
        Starkwood is your premier party supply and rental shop in Australia. We offer a wide range of
        high-quality event supplies and rental items to make your special occasions truly remarkable. Whether
        you’re planning a birthday, wedding, corporate event, or any other celebration, we have everything you
        need to bring your vision to life. Our professional team ensures your event is seamless and stress-free,
        with top-notch products and services.
        </Typography>
        <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
            backgroundColor: 'rgb(212, 127, 14)',
            '&:hover': { backgroundColor: 'rgb(224, 144, 38)' },
        }}
        >
        Book Now
        </Button>
    </Box>
    </Grid>

      </Grid>
    </Box>
  );
};

export default AboutUs;
