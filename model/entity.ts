import { Guid } from "guid-typescript";

interface StockData {
  id: Guid;
  name: string;
  price: number;
  stock: number;
}
interface UserData {
  id: Guid;
  username: string;
  password: number;
}
interface HeadCell {
  disablePadding: boolean;
  id: keyof StockData;
  label: string;
  numeric: boolean;
}

export type { StockData, UserData, HeadCell };
