import styles from "@/styles/components/ProductInside.module.css";
import TabbarHeader from "@/components/ProductInside/TabbarHeader";
import { useState } from "react";
import TabbarBody from "@/components/ProductInside/TabbarBody";

export default function ProductInsideBottom({ data, filteredData }) {
  const [active, setActive] = useState(1);
  const handleActiveFunction = (data) => {
    setActive(data);
  };

  return (
    <div className={`${styles.productBottom} bg-white dark:bg-panel-dark`}>
      <TabbarHeader
        name={data?.name}
        active={active}
        func={handleActiveFunction}
      />
      <TabbarBody data={data} filteredData={filteredData} active={active} />
    </div>
  );
}
