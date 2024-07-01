import {useState} from "react";
import FilterbarAccordionItem from "@/components/FilterbarAccordion/FilterbarAccordionItem";

export default function FilterbarAccordion({ title, data }){
    const [expanded, setExpanded] = useState(true);

    return(
        <FilterbarAccordionItem data={data} title={title} expanded={expanded} setExpanded={setExpanded} i={1}/>
    )
}