import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function FilledAlerts() {
  return (
    <div style={{ height: "74vh" }}>
      <Stack sx={{ width: "100%" }} spacing={2} style={{ marginTop: "15px" }}>
        <Alert variant="filled" severity="error">
          NOT FOUND THİS PAGE !!
        </Alert>
      </Stack>
    </div>
  );
}
