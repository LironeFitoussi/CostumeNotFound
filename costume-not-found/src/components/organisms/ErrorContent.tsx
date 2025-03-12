import React from 'react';
import { Box, Button } from '@mui/material';
import robotImage from '../../assets/robot.png';
import { MatrixText } from '../atoms/MatrixText';

interface ErrorContentProps {
  message: string;
  clever: string;
  megilatEsther: string;
  isHebrew: boolean;
}

export const ErrorContent: React.FC<ErrorContentProps> = ({
  message,
  clever,
  megilatEsther,
  isHebrew
}) => (
  <>
    <Box 
      sx={{ 
        position: 'relative',
        width: '100%',
        minHeight: { xs: '35vh', sm: '40vh', md: '45vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <Box
        component="img"
        src={robotImage}
        alt="404 Robot Error"
        sx={{
          width: 'auto',
          height: '100%',
          maxHeight: { xs: '35vh', sm: '40vh', md: '45vh' },
          objectFit: 'contain'
        }}
      />
    </Box>
    
    <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
      <MatrixText 
        variant="h2" 
        component="h1" 
        isHebrew={isHebrew}
        sx={{ 
          fontWeight: 'bold', 
          textShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
          fontSize: { xs: '4rem', sm: '6rem' },
          mb: 2
        }}
      >
        404
      </MatrixText>
      
      <MatrixText 
        variant="h4"
        isHebrew={isHebrew}
        sx={{ 
          fontSize: { xs: '1.5rem', sm: '2rem' },
          mb: 3
        }}
      >
        {message}
      </MatrixText>
      
      <MatrixText 
        variant="body1"
        isHebrew={isHebrew}
        sx={{ 
          fontSize: { xs: '1rem', sm: '1.2rem' },
          mt: 2,
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: 'text.secondary',
        }}
      >
        {clever}
      </MatrixText>
      
      <Button 
        variant="contained" 
        color="primary"
        href="https://mechon-mamre.org/p/pt/pt3301.htm"
        target="_blank" 
        rel="noopener noreferrer"
        sx={{ 
          fontSize: { xs: '1rem', sm: '1.2rem' },
          boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)',
          '&:hover': {
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
            backgroundColor: '#00b300',
          },
          mt: 2,
          backgroundColor: '#00ff00',
        }}
      >
        {megilatEsther}
      </Button>
    </Box>
  </>
); 