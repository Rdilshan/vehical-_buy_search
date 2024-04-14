import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Datatable({ data }: { data: any[] }) {
  const representativeBodyTemplate = (data:any) => {
    return (
      <div className="flex align-items-center">
        <img alt="" src={data.img} width="80" />
      </div>
    );
  };

  return (
    <>
      <div
        style={{ backgroundColor: "#74747470", color: "white", margin: "10px" }}
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

          <Column field="link" header="View"></Column>
        </DataTable>
      </div>
    </>
  );
}
