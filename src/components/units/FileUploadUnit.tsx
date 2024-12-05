import { Box, Button, IconButton, styled, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React, { useEffect, useState } from "react";
import Form from "../../types/types";
import { Theme } from "../../utils";
import CloseIcon from "@mui/icons-material/Close";

interface IFileUploadUnitProps {
  updateForm: (obj: object) => void;
  form: Form;
  formDataUnit: keyof Form;
}

const FileUploadUnit: React.FC<IFileUploadUnitProps> = ({
  form,
  updateForm,
  formDataUnit,
}) => {
  const [fileName, setFileName] = useState<string>("Datei hinzufügen");

  const handleOnChange = (value: FileList | null) => {
    if (value !== null && value[0]?.name !== undefined) {
      updateForm({ [formDataUnit]: value[0] });
    }
  };

  const handleDeleteClick = () => {
    updateForm({ [formDataUnit]: undefined });
  };

  useEffect(() => {
    const file: any = form[formDataUnit];
    setFileName(file?.name || "Datei hinzufügen");
  }, [form,formDataUnit]);

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "row",
        alignItems: "center",
        paddingLeft: "10px",
      }}
    >
      <Button
        component="label"
        role={undefined}
        size="small"
        variant="outlined"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => handleOnChange(event.target.files)}
          multiple
        />
      </Button>
      <Typography
        children={fileName}
        sx={{
          marginLeft: "10px",
          color: Theme["darkGray"],
          fontSize: "0.7rem",
        }}
      />
      {form[formDataUnit] && (
        <IconButton onClick={(e) => handleDeleteClick()} size="small">
          <CloseIcon />
        </IconButton>
      )}
    </Box>
  );
};
export default FileUploadUnit;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
