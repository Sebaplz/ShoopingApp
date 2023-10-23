import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Navbar() {
  const { cart } = useCart();
  return (
    <nav className="flex items-center justify-between bg-[#ee5601] px-4 py-4 text-white md:px-16">
      <NavLink to={"/"} className="text-3xl font-bold">
        Shopping App
      </NavLink>
      <NavLink to={"/cart"}>
        <Badge
          badgeContent={cart.reduce((total, item) => total + item.quantity, 0)}
          color="primary"
        >
          <ShoppingCartIcon />
        </Badge>
      </NavLink>
    </nav>
  );
}
