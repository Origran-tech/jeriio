import { Box, TextField } from "@mui/material";

const FormNote = () => {
  return (
    <div className="formNote">
      <h1>Nouvelle note</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={10}
        />
      </Box>
    </div>
  );
};

export default FormNote;
