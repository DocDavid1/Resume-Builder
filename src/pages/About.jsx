import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// Placeholder image URL, replace with your own image URL
const heroImageUrl = 'https://mllj2j8xvfl0.i.optimole.com/cb:jC7e.37109/w:auto/h:auto/q:90/f:best/https://themeisle.com/blog/wp-content/uploads/2019/11/best-resume-builder.jpg';

const HeroImage = styled('div')(({ theme }) => ({
  backgroundImage: `url(${heroImageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '50vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.common.white,
}));

function AboutPage() {
  return (


    <Container maxWidth="lg">
    
        <HeroImage style={{  backgroundImage: `url(${heroImageUrl})` }}>
             </HeroImage>
        <Typography variant="h2" component="h1" sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          About Our Resume Builder
        </Typography>
   

      <Box my={4}>
        <Typography variant="h5" gutterBottom>
          Build Professional Resumes Effortlessly
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our resume builder app is designed to help you create polished, professional resumes with ease. Whether you're a recent graduate or a seasoned professional, our tool provides a wide range of templates and customizable options to suit your needs.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Easy to Use
            </Typography>
            <Typography variant="body2">
              Our intuitive drag-and-drop interface makes resume building simple and enjoyable. No design skills required!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Customizable Templates
            </Typography>
            <Typography variant="body2">
              Choose from a variety of templates tailored to different job industries and personal styles.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box my={4} textAlign="center">
        <Button variant="contained" color="primary" size="large">
          Start Building Your Resume
        </Button>
      </Box>
    </Container>
  );
}

export default AboutPage;
