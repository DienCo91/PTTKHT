import { Product } from './types';

export const getInitials = (name: string) => {
  if (!name) return '';
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('');
};

export const filterProducts = (products: Product[], listProducts: Product[]) => {
  // Tạo bản sao của danh sách products để tránh thay đổi dữ liệu gốc
  const updatedProducts = [...products];

  // Duyệt qua danh sách sản phẩm mà khách hàng đã mua
  listProducts.forEach(purchasedItem => {
    // Tìm sản phẩm trong danh sách products bằng cách so sánh ID hoặc tên
    const productIndex = updatedProducts.findIndex(product => product.productID === purchasedItem.productID);

    if (productIndex !== -1) {
      // Trừ số lượng mua vào số lượng hiện có
      updatedProducts[productIndex].quantity -= purchasedItem.quantity;

      // Đảm bảo số lượng không âm
      if (updatedProducts[productIndex].quantity < 0) {
        updatedProducts[productIndex].quantity = 0;
      }
    }
  });

  return updatedProducts;
};

export const getChipStyles = (color: string) => {
  switch (color) {
    case 'primary':
      return { backgroundColor: 'primary.main', color: 'white' };
    case 'success':
      return { backgroundColor: 'success.main', color: 'white' };
    case 'error':
      return { backgroundColor: 'error.main', color: 'white' };
    case 'warning':
      return { backgroundColor: 'warning.main', color: 'white' };
    default:
      return { backgroundColor: 'grey.300', color: 'black' };
  }
};
