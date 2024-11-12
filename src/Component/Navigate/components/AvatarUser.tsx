import { Avatar, Box } from '@mui/material';

const AvatarUser = () => {
  return (
    <Box>
      <div className=" w-full justify-start px-4 py-[16px] hover:bg-gray-100">
        <div className="flex items-center gap-3">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zEEISvcs1XuhHOPNI0aUElsa46Fmv5NLDg&s"
            alt={'Alex'}
            sx={{ width: 48, height: 48 }}
          />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium lowercase">{'userName'}</span>
            <span className="text-xs text-gray-500 lowercase font-normal">{'userEmail'}</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default AvatarUser;
