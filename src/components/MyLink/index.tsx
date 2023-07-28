import { Link as RouterLink } from "react-router-dom";

import Link, { LinkProps } from "@mui/material/Link";

type IMyLinkProps = LinkProps &
  Required<Pick<LinkProps, "aria-label" | "href">>;

function MyLink({ href, ...rest }: IMyLinkProps) {
  return <Link component={RouterLink} to={href} {...rest} />;
}

export { MyLink };
