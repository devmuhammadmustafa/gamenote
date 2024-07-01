import LeftFilterBar from "@/blocks/ProductsFilterPageBlock/LeftFilterBar";
import FilteredProducts from "@/blocks/ProductsFilterPageBlock/FilteredProducts";
import BreadCrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import FilterBarSelf from "@/blocks/ProductsFilterPageBlock/FilterBarSelf";
import Modal from "@/components/Modal";
import { AnimatePresence, motion } from "framer-motion";
import ModalBlock from "@/blocks/Modal";
import { useAtom } from "jotai";
import { FilterModalVisibility, ModalVisibility } from "@/store/atoms";

export default function ProductsFilterPageBlock() {
  const [modalVisibility] = useAtom(FilterModalVisibility);

  return (
    <>
      <FilterBarSelf />
      <AnimatePresence>
        {modalVisibility && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-[21]"
          >
            <Modal filterMode="true">
              <LeftFilterBar modalMode="true" />
            </Modal>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
