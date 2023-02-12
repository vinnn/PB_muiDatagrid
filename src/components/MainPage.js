import { DataGrid } from "@mui/x-data-grid";
import ButtonsToOpenModal from "./ButtonsToOpenModal";

const MainPage = () => {
  const rows = [
    {
      id: 1,
      name: "Bob",
      surname: "Blue"
    },
    {
      id: 2,
      name: "Tim",
      surname: "Green"
    }
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 100 },
    { field: "surname", headerName: "Surname", width: 100 },
    {
      field: "actions",
      type: "actions",
      width: 140,
      getActions: (params) => [
            <ButtonsToOpenModal 
                personId={params.id} 
            />
        ]
    }
  ];

  return <DataGrid rows={rows} columns={columns} autoHeight />;
};

export default MainPage;


