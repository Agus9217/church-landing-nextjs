'use client'

import { Box, Flex, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { MobileNavbar } from './MobileNavbar'
import { DesktopNavbar } from './DesktopNavbar'

export const Navbar = () => {
  const display = useBreakpointValue(
    {
      base: 'none',
      md: 'block'
    }
  )
  return (
    <Flex
      as={'header'}
      alignItems={'center'}
      minH={'50px'}
      justifyContent={'space-between'}
      px={8}
      position={'fixed'}
      w={'100%'}
      top={'0'}
      zIndex={1000}
      textColor={'white'}
    >
      <Box>
        <Text>Logo</Text>
      </Box>
      <Stack
        as={'nav'}
      >
        <DesktopNavbar display={display} />
        <MobileNavbar display={display} />
      </Stack>
    </Flex>
  )
}
