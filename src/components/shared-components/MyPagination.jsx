import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function MyPagination({ count, handlePageChange }) {
  return (
    <Stack spacing={2}>
      <Pagination
        onChange={handlePageChange}
        count={count}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
}
