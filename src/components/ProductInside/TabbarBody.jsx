import TextDescription from "@/components/ProductInside/TextDescription";
import Specifications from "@/components/ProductInside/Specifications";

export default function TabbarBody({ active, data, filteredData }) {
  let tabbarContent;

  switch (active) {
    case 1:
      tabbarContent = <TextDescription data={data} />;
      break;
    case 2:
      tabbarContent = (
        <Specifications data={data} filteredData={filteredData} />
      );
      break;
    default:
      tabbarContent = <></>;
  }
  return <>{tabbarContent}</>;
}
