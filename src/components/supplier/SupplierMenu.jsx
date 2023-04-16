import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Box } from "@mui/material";
import { css } from "@emotion/react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import AddItem from "./AddItem";
import ConfirmDialog from "../../common/ConFirmDialog";

const initialValues = {
  foodtypes: "veg",
  foodoption: "",
  tifinprice: "",
  packagingcharge: "",
  foodtime: "",
  tifindescription: "",
};

const SupplierMenu = () => {
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
  const handleEditClick = (row) => (event) => {};

  const onDelete = (row) => {};

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
      field: "item",
      headerName: "Item",
      width: 250,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "time",
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
            // updateSelectedParty={updateSelectedItem}
          />
        )}
        <div style={{ height: 475, width: "100%" }}>
          <DataGrid
            editMode="row"
            rows={menuItem.map((item, index) => ({ ...item, id: index + 1 }))}
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
