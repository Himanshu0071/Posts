import { Pagination } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Page = () => {
  return (
    <Box
        justifyContent={'center'} alignItems='center' display={'flex'}
        sx={{
            margin: '20px 0px'
        }}
    >
        <Pagination/>
    </Box>
  )
}

export default Page