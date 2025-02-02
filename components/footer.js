import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" sx={{ marginTop: 'auto' }}>
      &copy; {new Date().getFullYear()} Kanahaiya. All Rights Reserved.
    </Box>
  );
};

export default Footer;
