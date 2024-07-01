import { FC } from "react";

interface Product {
  tittle: string;
  harga: number;
}

interface Blog {
  judul: string;
  author: string;
}

interface ComponentAProps {
  name: string; // wajib ada
  hobby?: string[]; // optional
  transport: string[]; //isinya string of array
  product: Product; //isinya object
  blogs: Blog[]; // isinya array of object
}

const ComponentA: FC<ComponentAProps> = ({ name }) => {
  return <div>{name}</div>;
};

export default ComponentA;
