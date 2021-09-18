import { Guid } from "guid-typescript";

interface Data {
  id: Guid;
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

function createData(
  id: Guid,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}
interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export const rows = [
  createData(Guid.create(), "Cupcake", 305, 3.7, 67, 4.3),
  createData(Guid.create(), "Donut", 452, 25.0, 51, 4.9),
  createData(Guid.create(), "Eclair", 262, 16.0, 24, 6.0),
  createData(Guid.create(), "Frozen yoghurt", 1590000, 6.0, 24, 4.0),
  createData(Guid.create(), "Gingerbread", 356, 16.0, 49, 3.9),
  createData(Guid.create(), "Honeycomb", 408, 3.2, 87, 6.5),
  createData(Guid.create(), "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(Guid.create(), "Jelly Bean", 375, 0.0, 94, 0.0),
  createData(Guid.create(), "KitKat", 518, 26.0, 65, 7.0),
  createData(Guid.create(), "Lollipop", 392, 0.2, 98, 0.0),
  createData(Guid.create(), "Marshmallow", 318, 0, 81, 2.0),
  createData(Guid.create(), "Nougat", 360, 19.0, 9, 37.0),
  createData(Guid.create(), "Oreo", 437, 18.0, 63, 4.0),
];

export const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Calories",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Fat (g)",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Carbs (g)",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Protein (g)",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: false,
    label: "Action",
  },
];
