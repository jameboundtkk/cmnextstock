import { Guid } from "guid-typescript";
import { StockData, HeadCell } from "../../model/entity";

function createData(
  id: Guid,
  name: string,
  price: number,
  stock: number
): StockData {
  return {
    id,
    name,
    price,
    stock,
  };
}
// interface HeadCell {
//   disablePadding: boolean;
//   id: keyof StockData;
//   label: string;
//   numeric: boolean;
// }

const rows = [
  createData(Guid.create(), "Cupcake", 305, 3),
  createData(Guid.create(), "Donut", 452, 25),
  createData(Guid.create(), "Eclair", 262, 16),
  createData(Guid.create(), "Frozen yoghurt", 1590000, 6),
  createData(Guid.create(), "Gingerbread", 356, 16),
  createData(Guid.create(), "Honeycomb", 408, 9),
  createData(Guid.create(), "Ice cream sandwich", 237, 9),
  createData(Guid.create(), "Jelly Bean", 375, 11),
  createData(Guid.create(), "KitKat", 518, 26),
  createData(Guid.create(), "Lollipop", 392, 6),
  createData(Guid.create(), "Marshmallow", 318, 18),
  createData(Guid.create(), "Nougat", 360, 19),
  createData(Guid.create(), "Oreo", 437, 23),
];

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "stock",
    numeric: true,
    disablePadding: false,
    label: "Stock",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: false,
    label: "Action",
  },
];

export { rows, headCells };
