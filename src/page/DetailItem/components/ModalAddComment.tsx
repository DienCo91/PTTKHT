import { RootState } from '@/app/store';
import { Button, Rating, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Comment } from './CommentWithRating';
import { getComment, getNotice, setComment, setNotice } from '@/util/data';
import { toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface IModalAddComment {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  setTotalComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

const ModalAddComment: React.FC<IModalAddComment> = ({ open, setOpen, setTotalComments }) => {
  const { id } = useParams();
  const refTextField = useRef<HTMLInputElement | null>(null);

  const user = useSelector((state: RootState) => state.user.user);

  const [rating, setRating] = useState<number>(0);

  const handleClose = () => setOpen(false);
  const handleAddComments = () => {
    if (!refTextField.current?.value) return toast.error('Please fill the input field');
    const comment: Comment = {
      message: refTextField.current?.value || '',
      productId: id || '',
      rating: rating,
      nameUser: user?.name || '',
    };

    const totalComments = getComment();
    const notices = getNotice();

    setTotalComments(pre => [...pre, comment]);

    setComment([...totalComments, comment]);
    setNotice([
      {
        message: refTextField.current?.value || '',
        productId: id || '',
        rating: rating,
        userName: user?.name || '',
        isComment: true,
      },
      ...notices,
    ]);
    setRating(0);
    setTimeout(() => {
      setOpen(false);
    }, 800);
  };

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description">
        <Box sx={style}>
          <TextField
            inputRef={input => (refTextField.current = input)}
            id="standard-basic"
            label="Comment"
            variant="standard"
            fullWidth
            defaultValue={''}
            required
          />
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
            <Rating
              name="comment-rating"
              value={rating}
              precision={0.5}
              sx={{ marginRight: 1 }}
              onChange={(_event, newValue) => {
                setRating(newValue || 0);
              }}
            />
            <Typography variant="body2" sx={{ color: 'rgb(250, 175, 0)' }}>
              {`${rating} Star`}
            </Typography>
          </Box>
          <Button variant="contained" sx={{ marginTop: 2 }} size="small" onClick={handleAddComments}>
            Comment
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAddComment;
