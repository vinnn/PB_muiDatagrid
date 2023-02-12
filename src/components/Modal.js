import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import Button from "@material-ui/core/Button"
import { DataGrid } from "@mui/x-data-grid";




const Modal = ({modalOpen, closeModal, personId}) => {
    
  const { rows_secondTable, columns_secondTable } = getSecondTable(personId)

  return (<>


        <Dialog open={modalOpen}
                onClose={() => closeModal(false)}
                fullWidth={true}
                maxWidth="xl"
                disableEnforceFocus={true}
                disableAutoFocus={true}
        >
            <DialogTitle>This is the Second Table</DialogTitle>
            <DialogContent>

              <p style={{color: "red"}}>PROBLEM WHEN YOU CLICK ON THE CELLS...(check the Console)</p>
              <DataGrid rows={rows_secondTable} columns={columns_secondTable} autoHeight />

            </DialogContent>

            <DialogActions>
                <Button onClick={() => closeModal(false)}>Cancel</Button>
                <Button onClick={() => closeModal(true)}>Ok</Button>
            </DialogActions>

        </Dialog>

  </>)
}
  
export default Modal;

  
  



const getSecondTable = (id) => {


  const rows = [
    {
      id: 1,
      height: 1.8,
      weight: 80
    },
    {
      id: 2,
      height: 1.9,
      weight: 90
    },
  ]


  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "height", headerName: "Height", width: 100 },
    { field: "weight", headerName: "Weight", width: 100 }
  ];

  return {rows_secondTable: rows, columns_secondTable: columns}


}