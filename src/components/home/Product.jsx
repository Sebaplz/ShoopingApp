import { useState } from "react";
import DetailsModal from "../home/DetailsModal";
import Stars from "../../util/Stars";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

/* eslint-disable react/prop-types */
const Product = ({ product, handleAddPurchase, handleRemovePurchase }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [added, setAdded] = useState(false);

  function handleAdded(product) {
    handleAddPurchase(product);
    setAdded(true);
  }

  function handleRemove(id) {
    handleRemovePurchase(id);
    setAdded(false);
  }

  return (
    <div className="relative flex h-[450px] flex-col items-center gap-2 rounded-lg bg-white pb-4 text-gray-900">
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
        className="h-64 w-64 object-contain p-2 hover:cursor-pointer"
        onClick={handleOpen}
      />
      <DetailsModal
        image={product.image}
        description={product.description}
        title={product.title}
        open={open}
        setOpen={setOpen}
      />
      <div className="text-center">
        <h2 className="px-1 font-semibold text-[#4a4a4a] md:px-4">
          {product.title}
        </h2>
        <div className="absolute bottom-20 left-0 flex w-full justify-around">
          <p className="text-xl font-semibold text-[#717171]">
            ${product.price}
          </p>
          <Stars product={product} />
        </div>
        <div className="flex w-full justify-center">
          {added ? (
            <button
              className="gap-2x absolute bottom-4 flex items-center rounded-full bg-[#ee5601] px-4 py-2 text-2xl font-semibold text-white hover:opacity-80"
              onClick={() => handleRemove(product.id)}
            >
              Remove from
              <span className="flex items-center">
                <ShoppingCartIcon />
              </span>
            </button>
          ) : (
            <button
              className="absolute bottom-4 flex items-center gap-2 rounded-full bg-[#ee5601] px-4 py-2 text-2xl font-semibold text-white hover:opacity-80"
              onClick={() => handleAdded(product)}
            >
              Add to
              <span className="flex items-center">
                <ShoppingCartIcon />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
