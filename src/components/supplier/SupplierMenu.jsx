import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useState,useEffect } from "react";
import { Box } from "@mui/material";
import { css } from "@emotion/react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import AddItem from "./AddItem";
import ConfirmDialog from "../../common/ConFirmDialog";
import useHttp from "../../hooks/useHttp";

const initialValues = {
  foodtypes: "veg",
  foodoption: "",
  tifinprice: "",
  packagingcharge: "",
  foodtime: "",
  tifindescription: "",
};

const SupplierMenu = () => {
  const {sendRequest} = useHttp();
  const [menuItem, setMenuItem] = useState([]);
  const [currentRow, setCurrentRow] = useState(initialValues);
  const [open, setOpen] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const handleClickOpen = () => {
    setCurrentRow(initialValues);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const afterEdition = (data) => {
      const indexEdit = menuItem.findIndex(menu => menu._id === data._id)
      menuItem[indexEdit] = data
      setMenuItem([...menuItem])
  }

  const afterNewMenu = (data) => {
    setMenuItem((prev) => prev.concat(data));
  }

  const handleEditClick = (row) => (event) => {
    event.stopPropagation();
    setCurrentRow({
      _id : row._id ? row._id : "",
      foodtypes : row.foodtypes ? row.foodtypes : "",
      foodoption : row.foodoption ? row.foodoption : "",
      tifinprice : row.tifinprice ? row.tifinprice : "",
      packagingcharge : row.packagingcharge ? row.packagingcharge : "",
      foodtime : row.foodtime ? row.foodtime : "",
      tifindescription : row.tifindescription ? row.tifindescription : "",
    })
    console.log(row);
    setOpen(true);
  };

  const deleteDataResponse = (id,acknowledgement) => {
    if (acknowledgement){
      setConfirmDialog({isOpen:false})
      const indexDelete = menuItem.findIndex(menu => menu._id === id)
      setMenuItem(prev => prev.filter((_,index) => index !== indexDelete))
    }
  }

  const onDelete = (row) => {
      sendRequest({url:"/deleteMenu",method:"delete",id:row._id},deleteDataResponse.bind(null,row._id))
  };

  useEffect(() => {
    sendRequest({url:"/getMenu",method:'get'},(data) =>{setMenuItem(data)})
  },[sendRequest])

  const handleDeleteClick = (row) => (event) => {
    event.stopPropagation();
    setConfirmDialog({
      isOpen: true,
      title: "Are you sure to delete this record?",
      subTitle: "You can't undo this operation",
      onConfirm: () => {
        onDelete(row);
      },
    });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "foodoption",
      headerName: "Food Type",
      width: 250,
    },
    {
      field: "Subtotal",
      headerName: "Price",
      width: 150,
    },
    {
      field: "foodtime",
      headerName: "Food Time",
      width: 150,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 80,
      renderCell: ({ row }) => (
        <strong>
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(row)}
            color="inherit"
          />
        </strong>
      ),
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 80,
      renderCell: ({ row }) => (
        <strong>
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={handleEditClick(row)}
            color="inherit"
          />
        </strong>
      ),
    },
  ];

  return (
    <Box>
      <>
        <Button
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Add New Item
        </Button>
        {open && (
          <AddItem
            handleClose={handleClose}
            currentRow={currentRow}
            afterEdition={afterEdition}
            afterNewMenu={afterNewMenu}
            // updateSelectedParty={updateSelectedItem}
          />
        )}
        <div style={{ height: 475, width: "100%" }}>
          <DataGrid
            editMode="row"
            rows={menuItem.map((item, index) => ({ ...item,"Subtotal":item.tifinprice+item.packagingcharge,id: index + 1 }))}
            columns={columns}
            css={css`
              height: calc(100vh - 1500px - 30px) !important;
            `}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </div>
        {confirmDialog && (
          <ConfirmDialog
            confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}
          />
        )}
      </>
    </Box>
  );
};

export default SupplierMenu;