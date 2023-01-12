import { Skeleton, Stack } from '@chakra-ui/react';

const SkeletonTable = () => {
  return (
    <Stack>
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};

export default SkeletonTable;
