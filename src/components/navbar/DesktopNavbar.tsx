import { ListItem, UnorderedList } from "@chakra-ui/react"
import { NAV_ITEM } from "./nav-item"
import Link from "next/link"

interface Props {
  display: string | undefined
}

export const DesktopNavbar = ({ display }: Props) => {
  return (
    <UnorderedList
          styleType={'none'}
          display={display !== 'none' ? 'flex' : 'none'}
          gap={4}
        >
          {
            NAV_ITEM.map(({ label, href }) => (
              <ListItem key={label} >
                <Link href={href} >{label}</Link>
              </ListItem>
            ))
          }
        </UnorderedList>
  )
}
