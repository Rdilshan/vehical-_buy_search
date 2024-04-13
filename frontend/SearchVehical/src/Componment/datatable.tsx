

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const products = [
    {
        id: '1000',
        code: '1',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        id: '1000',
        code: '2',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        id: '1000',
        code: '3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    // Add more product objects as needed
];

export default function Datatable() {
  return (
    <>
    <div style={{ backgroundColor: "#74747470", color: "white",margin:"10px"}}>
    <DataTable value={products}  paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
        <Column field="code" header="Code" sortable ></Column>
        <Column field="name" header="Name"  sortable ></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div>
      
    </>
  );
}
