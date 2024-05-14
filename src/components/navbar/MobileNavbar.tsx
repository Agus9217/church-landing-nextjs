import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList, forwardRef } from "@chakra-ui/react"
import { RxHamburgerMenu } from "react-icons/rx";
import { NAV_ITEM } from "./nav-item"
import Link from "next/link"
import { usePathname } from "next/navigation";

interface Props {
  display: string | undefined
}

export const MobileNavbar = ({ display }: Props) => {

  const path = usePathname()

  return (
    <Box
      display={display == 'none' ? 'block' : 'none'}
    >
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<RxHamburgerMenu />}
          variant={'outline'}
        />
        <MenuList>
          {
            NAV_ITEM.map(({ label, href }) => (
              <MenuItem
                as={Link}
                href={href}
                key={label}
                color={href == path ? 'white' : 'black'}
                bg={href == path ? 'blue.400' : 'none'}
                _hover={{
                  bg: 'gray.200',
                  color: 'black'
                }}
              >
                {label}
              </MenuItem>
            ))
          }
        </MenuList>
      </Menu>
    </Box >
  )
}
