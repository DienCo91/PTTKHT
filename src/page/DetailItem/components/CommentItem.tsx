import { Box, Typography, Avatar, Rating } from '@mui/material';
import { Comment } from './CommentWithRating';
import { getInitials } from '@/util/util';

interface ICommentItem {
  item: Comment;
}

const CommentItem: React.FC<ICommentItem> = ({ item }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 2,
        backgroundColor: 'white',
        borderRadius: 2,
        width: '100%',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;',
        marginTop: 2,
      }}>
      <Avatar alt={item.nameUser} sx={{ width: 40, height: 40, marginRight: 2 }}>
        {getInitials(item.nameUser)}
      </Avatar>

      <Box sx={{ flex: 1 }}>
        <Typography variant="body1" sx={{ fontWeight: 600, color: '#2a2a2a' }}>
          {item.nameUser}
        </Typography>

        <Box
          sx={{
            borderRadius: 1,
            height: 16,
            marginTop: 1,
            marginBottom: 2,
            width: '70%',
          }}>
          {item.message}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
          <Rating name="comment-rating" value={item.rating} precision={0.5} sx={{ marginRight: 1 }} readOnly />
          <Typography variant="body2" sx={{ color: 'rgb(250, 175, 0)' }}>
            {`${item.rating} Star`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CommentItem;
