import React from 'react';
import { Box, Button } from '@mui/material';
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
  <Box 
    sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      flex: 1,
    }}
  >
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
        src="https://i.ibb.co/cXMwy2Cj/IMG-0936.jpg"
        alt="404 Robot Error"
        sx={{
          width: 'auto',
          height: '100%',
          maxHeight: { xs: '35vh', sm: '40vh', md: '45vh' },
          objectFit: 'contain'
        }}
      />
    </Box>
    
    <Box 
      sx={{ 
        textAlign: 'center', 
        position: 'relative', 
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2
      }}
    >
      <MatrixText 
        variant="h2" 
        component="h1" 
        isHebrew={isHebrew}
        sx={{ 
          fontWeight: 'bold', 
          textShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
          fontSize: { xs: '4rem', sm: '6rem' },
          lineHeight: 1.1
        }}
      >
        404
      </MatrixText>
      
      <MatrixText 
        variant="h4"
        isHebrew={isHebrew}
        sx={{ 
          fontSize: { xs: '1.5rem', sm: '2rem' },
          lineHeight: 1.2
        }}
      >
        {message}
      </MatrixText>
      
      <MatrixText 
        variant="body1"
        isHebrew={isHebrew}
        sx={{ 
          fontSize: { xs: '1rem', sm: '1.2rem' },
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: 'text.secondary',
          maxWidth: '600px',
          mx: 'auto'
        }}
      >
        {clever}
      </MatrixText>
      
      <Button 
        variant="contained" 
        color="primary"
        href="https://www.tfilah.org/wp-content/uploads/downloads/2011/02/מגילת-אסתר.pdf"
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
  </Box>
); 