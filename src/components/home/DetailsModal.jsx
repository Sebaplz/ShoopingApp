/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function DetailsModal({
  image,
  description,
  title,
  open,
  setOpen,
}) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CloseIcon
          sx={{ color: "black" }}
          onClick={handleClose}
          className="cursor-pointer"
        ></CloseIcon>
        <img src={image} alt={title} className="max-h-[350px] mx-auto" />
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, color: "black", maxHeight: 250, overflowY: "auto" }}
        >
          Description: {description}
        </Typography>
      </Box>
    </Modal>
  );
}
