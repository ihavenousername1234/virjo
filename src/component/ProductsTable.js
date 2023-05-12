import Table from './Table';
import data from "./product-data.json";
import './ProductsTable.css';

function ProductsTable() {
    const getHeadings = () => {
        return Object.keys(data[0]);
    }
    return (
    <div className="table">
    <Table theadData={getHeadings()} tbodyData={data}/>
    </div>
    );
}
export default ProductsTable;