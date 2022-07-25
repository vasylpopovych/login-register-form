import { Container, Link, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { Context } from '../../..';



const FooterRegister:React.FC = () => {
  const { store } = useContext(Context);


  const handleChange = (): void => {
    store.setIsNeedRegister(false)
  }

  return (
    <Container>
      <Typography
        sx={{
          color: '#F1F2F1',
          mt: '14px',
          fontWeight: 400,
          fontSize: '12px',
          textAlign: 'center',
        }}
      >I have an account. 
        <Link
          sx={{ color: '#7FAAF0', cursor: 'pointer', ml: '5px' }}
          onClick={handleChange}
          underline="none"
        > Go to Sign in
        </Link>
      </Typography>
    </Container>
  )
}

export default FooterRegister