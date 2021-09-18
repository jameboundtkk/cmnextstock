import * as React from "react";
import { GridRowsProp, DataGrid } from "@mui/x-data-grid";
import { useDemoData, GridData } from "@mui/x-data-grid-generator";
import Layout from "../components/layouts/layout";

function loadServerRows(page: number, data: GridData): Promise<any> {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(data.rows.slice(page * 5, (page + 1) * 5));
    }, Math.random() * 500 + 100); // simulate network latency
  });
}

export default function ServerPaginationGrid() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState<GridRowsProp>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    let active = true;

    (async () => {
      setLoading(true);
      const newRows = await loadServerRows(page, data);

      if (!active) {
        return;
      }

      setRows(newRows);
      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, [page, data]);

  return (
    <Layout>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={data.columns}
          pagination
          pageSize={5}
          rowsPerPageOptions={[5]}
          rowCount={100}
          paginationMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          loading={loading}
        />
      </div>
    </Layout>
  );
}
