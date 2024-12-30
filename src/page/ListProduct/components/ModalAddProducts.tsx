import { TYPE } from '@/page/Home/Component/Main';
import { getProductAll, optionFilter, setProductAll } from '@/util/data';
import { Product } from '@/util/types';
import CloseIcon from '@mui/icons-material/Close';
import { Autocomplete, Button, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface IModalAddProducts {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  itemEdit: Product | null;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

type ProductType = keyof typeof TYPE;

const ModalAddProducts: React.FC<IModalAddProducts> = ({ open, setOpen, itemEdit }) => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [preview, setPreview] = useState('');
  const [type, setType] = useState<ProductType | null>(null);

  useEffect(() => {
    if (itemEdit) {
      const x = Object.keys(TYPE).find(
        k => (TYPE[k as ProductType] as ProductType) === (itemEdit.category as ProductType),
      );

      setProductName(itemEdit.productName);
      setProductDescription(itemEdit.productColor);
      setProductPrice(itemEdit.productPrice.split(' ')[0].replace(/\./g, ''));
      setQuantity(itemEdit.quantity + '');
      setPreview(itemEdit.media.link[0]);
      setType(x as ProductType);
    }
  }, [itemEdit]);

  const handleClose = () => {
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setQuantity('');
    setPreview('');
    setType(null);
    setOpen(false);
  };

  const handleSave = () => {
    if (!type) return toast.error('Product type is required');

    const item = {
      productName,
      productColor: productDescription,
      productPrice: Number(productPrice.replace('.', '')).toLocaleString('vi-VN') + ' VND',
      media: {
        link: [preview, preview],
      },
      category: TYPE[type],
      quantity: Number(quantity),
    } as Product;

    const products = getProductAll();
    if (itemEdit) {
      const newProd = products.map(e => {
        if (e.productID === itemEdit.productID) {
          return { ...e, ...item };
        }
        return e;
      });

      setProductAll(newProd);
      toast.success('Products edited successfully');
    } else {
      const newProd = [{ ...item, productID: +new Date() }, ...products];
      setProductAll(newProd);
      toast.success('Products added successfully');
    }
    handleClose();
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    }
  };

  const handleDeleteImage = () => {
    setPreview('');
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <DialogTitle>Thêm sản phẩm mới</DialogTitle>
          <DialogContent sx={{ height: 400, overflow: 'auto' }}>
            <Box sx={{ display: 'flex', mt: 1, justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1, minWidth: 300 }}>
                <TextField
                  label="Tên sản phẩm"
                  fullWidth
                  value={productName}
                  onChange={e => setProductName(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  label="Mô tả sản phẩm"
                  fullWidth
                  multiline
                  rows={4}
                  value={productDescription}
                  onChange={e => setProductDescription(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  label="Giá sản phẩm (VND)"
                  fullWidth
                  type="number"
                  value={productPrice}
                  onChange={e => setProductPrice(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  label="Số Lượng"
                  fullWidth
                  type="number"
                  value={quantity}
                  onChange={e => setQuantity(e.target.value)}
                  variant="outlined"
                />
                <Autocomplete
                  options={optionFilter}
                  sx={{ width: 300 }}
                  value={{ label: type || '' } as { label: string }}
                  onInputChange={(_e, value) => setType(value as ProductType)}
                  renderInput={params => <TextField {...params} label="Category" size="small" />}
                />
              </Box>
              <Box sx={{ marginLeft: 2, flex: 1, width: 400 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Ảnh sản phẩm
                </Typography>
                {!preview && <input type="file" accept="image/*" onChange={handleImageUpload} />}
                {preview && (
                  <Box sx={{ mt: 1, position: 'relative', width: 280 }}>
                    <img
                      src={preview}
                      alt="Product Preview"
                      style={{
                        width: 280,
                        height: 280,
                        objectFit: 'cover',
                        borderRadius: '8px',
                        marginTop: '2px',
                      }}
                    />
                    <div
                      onClick={handleDeleteImage}
                      className="absolute top-[2px] cursor-pointer right-[2px] bg-white rounded-full flex items-center">
                      <CloseIcon sx={{ width: 20, height: 20 }} />
                    </div>
                  </Box>
                )}
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Hủy
            </Button>
            <Button onClick={handleSave} color="primary">
              Lưu
            </Button>
          </DialogActions>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAddProducts;
