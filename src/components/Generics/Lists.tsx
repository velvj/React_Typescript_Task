import React from "react";
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const Lists = <T extends {id:number,first:string,last:string}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items?.map((val, index) => {
        return (
          <div key={val?.id} onClick={()=>onClick(val)}>
         {val.first}
          </div>
        )
      })}
    </div>
  );
};

export { Lists };
