import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between py-4 px-4 md:px-16 items-center text-white bg-[#ee5601]">
      <NavLink to={"/"} className="text-3xl font-bold">
        Shopping App
      </NavLink>
      <NavLink to={"/cart"}>
        <Badge badgeContent={1} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </NavLink>
    </nav>
  );
}
