import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ModalAddComment from './ModalAddComment';
import CommentItem from './CommentItem';
import { getComment } from '@/util/data';
import { useParams } from 'react-router-dom';

export interface Comment {
  productId: string;
  rating: number;
  message: string;
  nameUser: string;
}

const CommentWithRating: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [totalComments, setTotalComments] = useState<Comment[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const totalComments = getComment()?.filter((c: Comment) => c.productId === id);
    setTotalComments(totalComments);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 2,
        borderRadius: 2,
        margin: '80px 0',
      }}>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
        <Typography fontSize={20}>Comments:</Typography>
        <Button onClick={() => setOpen(true)}>Add Comment</Button>
      </Box>
      {totalComments.length ? (
        totalComments.map((item, index) => <CommentItem item={item} key={item.message + index} />)
      ) : (
        <Typography textAlign={'center'} width={'100%'} marginTop={8} color="#606060">
          Comments Empty
        </Typography>
      )}
      <ModalAddComment open={open} setOpen={setOpen} setTotalComments={setTotalComments} />
    </Box>
  );
};

export default CommentWithRating;
