import { Button } from "@mui/material"
import { useState } from "react";
import Modal from "./Modal";


const ButtonsToOpenModal = (personId) => {

    const [_modalOpen, setModalOpen] = useState(false);

    const handleClick = () => {
      setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    return (
        <>
          <Button onClick={handleClick}>CLICK HERE</Button>
          <Modal modalOpen={_modalOpen} closeModal={closeModal} personId={personId} />
        </>
      )
}

export default ButtonsToOpenModal