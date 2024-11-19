import { RootState } from '@/app/store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

const AvatarUser = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <Box>
      <div className=" w-full justify-start px-4 py-[16px] hover:bg-gray-100">
        <div className="flex items-center gap-3">
          <AccountCircleIcon sx={{ width: 42, height: 42, color: 'grey' }} />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium lowercase">{user?.name}</span>
            <span className="text-xs text-gray-500 lowercase font-normal">{user?.email}</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default AvatarUser;
