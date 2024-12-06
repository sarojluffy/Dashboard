import { useEffect, useState } from "react";

interface Props {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  sales: number;
}

const Producttable = () => {
  const PRODUCT_DATA: Props[] = [
    {
      id: 1,
      name: "Wireless Earbuds",
      category: "Electronics",
      price: 59.99,
      stock: 143,
      sales: 1200,
    },
    {
      id: 2,
      name: "Leather Wallet",
      category: "Accessories",
      price: 39.99,
      stock: 89,
      sales: 800,
    },
    {
      id: 3,
      name: "Smart Watch",
      category: "Electronics",
      price: 199.99,
      stock: 56,
      sales: 650,
    },
    {
      id: 4,
      name: "Yoga Mat",
      category: "Fitness",
      price: 29.99,
      stock: 210,
      sales: 950,
    },
    {
      id: 5,
      name: "Coffee Maker",
      category: "Home",
      price: 79.99,
      stock: 78,
      sales: 720,
    },
  ];

  const [itemlist, setitemlist] = useState<Props[]>(PRODUCT_DATA);

  const [searchitem, setsearchitem] = useState<string>("");

  //   console.log(searchitem);

  const Filtered = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const bcd = PRODUCT_DATA.filter(
      (abc) =>
        abc.name.toLowerCase().includes(searchitem.toLowerCase()) ||
        abc.category.toLowerCase().includes(searchitem.toLowerCase())
    );

    // const bcd = PRODUCT_DATA.filter((abc) =>
    //     abc.name.toLowerCase().includes(searchitem.toLowerCase())
    //   );

    setitemlist(bcd);
  };
  //   const Filtered = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault(); // Prevent default form submission
  //     const filteredItems = PRODUCT_DATA.filter((abc) =>
  //       abc.name.toLowerCase().includes(searchitem.toLowerCase())
  //     );
  //     setItemList(filteredItems);
  //   };

  return (
    <>
      <div>
        <form onSubmit={Filtered}>
          <input
            className="text-black"
            type="search"
            onChange={(e) => setsearchitem(e.target.value)}
          ></input>
        </form>
      </div>
      <div>
        {itemlist.map((items, i) => {
          return <div key={i}>{items.name}</div>;
        })}
      </div>
    </>
  );
};

export default Producttable;
