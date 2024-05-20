import { ListItem, UnorderedList, Link as ChakraLink } from "@chakra-ui/react"
import { NAV_ITEM } from "./nav-item"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
  display: string | undefined
}

export const DesktopNavbar = ({ display }: Props) => {

  const path = usePathname()

  console.log(path)

  return (
    <UnorderedList
      styleType={'none'}
      display={display !== 'none' ? 'flex' : 'none'}
      gap={4}
    >
      {
        NAV_ITEM.map(({ label, href }) => (
          <ListItem key={label} >
            <ChakraLink
              as={Link}
              href={href}
              _hover={{
                borderStyle: 'none',
                color: 'blue.700'
              }}
              color={href == path ? 'blue.500' : undefined}
            >
              {label}
            </ChakraLink>
          </ListItem>
        ))
      }
    </UnorderedList>
  )
}
