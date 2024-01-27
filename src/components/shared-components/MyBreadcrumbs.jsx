import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function MyBreadcrumbs({ pathnames }) {
  return (
    <Breadcrumbs
      separator={<Icon name={"breadcrumb-arrow"} />}
      aria-label="breadcrumb"
      sx={{
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      {pathnames.map((pathname) => (
        <Link
          className="text-base font-medium text-color-primary"
          to={pathname.path}
        >
          {pathname.page}
        </Link>
      ))}
    </Breadcrumbs>
  );
}
