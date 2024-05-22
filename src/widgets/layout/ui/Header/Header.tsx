import { Header as KebabHeader, Typography } from '@tazalov/kebab-ui-kit'
import Link from 'next/link'

export const Header = () => {
  return (
    <KebabHeader>
      <Typography asComponent={Link} href="/">
        <Typography asComponent="span" variant="large">
          Inctagram
        </Typography>
        <Typography asComponent="span" variant="small">
          Super
        </Typography>
        <Typography asComponent="span" variant="smallSemiBold">
          Admin
        </Typography>
      </Typography>
    </KebabHeader>
  )
}
