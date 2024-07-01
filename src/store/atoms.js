import { atom } from 'jotai';

const CatalogOpen = atom(false);

const ModalVisibility = atom(false);
const FilterModalVisibility = atom(false);

const ModalType = atom('');

const AddAddressSuccess = atom(false);

const MenuOpen = atom(false);

const PersonalInfo = atom([]);

const MenuList = atom([]);

const ProductFilters = atom();

const RangeFilter = atom({ filter_id: '_minmax', values: [] });

const CategoryFilter = atom({ filter_id: 'category', values: '' });

const PersonalInfoSuccess = atom(1);

const ProductQuantity = atom(1);

const FavoriteReload = atom(1);

const ComparisonReload = atom(1);

const BasketReload = atom(1);

const AddressReload = atom(1);

const ShippingMethod = atom(0);

const BasketTotalPrice = atom(0);

const BannerSlider = atom({
  currentSlide: 0,
  slideCount: 0,
});

const CompleteOrderAction = atom(0);

const Filters = atom({
  filters: [],
});

const ProductSingle = atom([]);

const ProductSingleItemTrigger = atom(null);

const SiteDataStore = atom([]);

export {
  CatalogOpen,
  BasketTotalPrice,
  ShippingMethod,
  ProductQuantity,
  BannerSlider,
  ModalVisibility,
  ModalType,
  MenuOpen,
  FilterModalVisibility,
  PersonalInfo,
  PersonalInfoSuccess,
  AddAddressSuccess,
  MenuList,
  ProductFilters,
  Filters,
  FavoriteReload,
  ComparisonReload,
  BasketReload,
  RangeFilter,
  CategoryFilter,
  CompleteOrderAction,
  SiteDataStore,
  AddressReload,
  ProductSingle,
  ProductSingleItemTrigger,
};
