import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { RxHamburgerMenu } from "react-icons/rx";
import { NAV_ITEM } from "./nav-item"
import Link from "next/link"

interface Props {
  display: string | undefined
}

export const MobileNavbar = ({ display }: Props) => {
  return (
    <Box
    display={display == 'none' ? 'block' : 'none'}
    >
      <Menu>
        <MenuButton as={IconButton} icon={<RxHamburgerMenu />} />
        <MenuList>
          {
            NAV_ITEM.map(({ label, href }) => (
              <Link  key={label} href={href}>
              <MenuItem>
                {label}
              </MenuItem>
              </Link>
            ))
          }
        </MenuList>
      </Menu>
    </Box>
  )
}
