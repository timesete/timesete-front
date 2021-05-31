import Link from "next/link"
import { FunctionComponent } from "react"
import { AvatarWrapper } from "./styles"

export const Avatar: FunctionComponent = ({ children }) => {

  return (
    <Link href="/conta">
      <AvatarWrapper>
          {children}
      </AvatarWrapper>
    </Link>
  )
}
