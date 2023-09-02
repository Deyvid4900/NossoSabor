import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import "./styles.css";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        className="btnComentar"
        onClick={handleClickOpen}
      >
        Comentar
      </Button>
      <form action="" >
        <Dialog open={open} onClose={handleClose} className="tamanho" >
          <DialogTitle><label for="comentario">Seu Comentario</label></DialogTitle>
          <DialogContent>
            <textarea name="comentario" id="id_comentario" cols="60" rows="10" required></textarea>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className="my-auto" >Cancelar</Button>
            <Button onClick={handleClose} type="submit" className="my-auto" >Enviar</Button>
            
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
