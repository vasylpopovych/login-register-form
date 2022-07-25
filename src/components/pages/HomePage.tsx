import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../..'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Logo from '../UIComponents/Logo'
import HomeLayout from '../UIComponents/HomePage Components/HomeLayout'
import Congrats from '../UIComponents/HomePage Components/Congrats'
import LogoutButton from '../UIComponents/HomePage Components/LogoutButton'
import FooterImage from '../UIComponents/HomePage Components/FooterImage'


type Props = {}

const HomePage = (props: Props) => {


  return (
    <HomeLayout>
      <Congrats></Congrats>
      <Typography sx={{
        width: '466px',
        color: 'white',
        mt: '4%',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '155%',
        textAlign: 'center',
      }}>
        Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work
      </Typography>
      <LogoutButton></LogoutButton>
      <FooterImage></FooterImage>
    </HomeLayout >
  )
}

export default observer(HomePage) 