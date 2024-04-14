import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Datatable({ data }: { data: any[] }) {
  const representativeBodyTemplate = (data: any) => {
    return (
      <div className="flex align-items-center">
        <img alt="" src={data.img} width="80" />
      </div>
    );
  };

  const viewgotlink = (data: any) => {
    return (
      <div>
        <button
          onClick={() => window.open(data.link)}
          style={{
            backgroundColor: "#6f2e3094",
            height: "42px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight:"bold"
          }}
        >
          View
        </button>
      </div>
    );
  };

  return (
    <>
      <div
        style={{ backgroundColor: "#74747470", color: "white", margin: "0px 30px 60px 30px" }}
      >
        <DataTable
          value={data}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="title" header="Title" sortable></Column>
          <Column field="price" header="Price" sortable></Column>
          <Column field="location" header="location"></Column>
          {/* <Column field="img" header="Image"></Column> */}

          <Column
            header="Image"
            filterField="data"
            showFilterMenu={false}
            body={(rowData) => representativeBodyTemplate(rowData)}
          />

          <Column
            header="View"
            filterField="data"
            showFilterMenu={false}
            body={(rowData) => viewgotlink(rowData)}
          />

          {/* <Column field="link" header="View"></Column> */}
        </DataTable>
      </div>
    </>
  );
}
