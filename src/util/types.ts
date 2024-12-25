export type Product = {
  productID: number;
  productName: string;
  productPrice: string;
  promotion: {
    priceProduct: number;
    valuePromotion: number;
    priceAfterPromotion: number;
    textPriceAfterPromotion: string;
    textValuePromotion: string;
    promotionID: number;
  };
  productColor: string;
  productSKU: string;
  productLabel: string;
  media: {
    link: string[];
    type: string;
  };
  statusQuantity: number;
  isLike: boolean;
  linkBuyNow: string;
  category: string;
  isBuyOnline: boolean;
  isLimitedEdition: boolean;
  quantity: number;
};
