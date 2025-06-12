import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box p={8} textAlign="center">
      <Heading as="h1" size="2xl" mb={4}>Site Estático com Chakra UI</Heading>
      <Text fontSize="xl" mb={6}>Renderizado com Next.js + Export HTML</Text>
      <Button colorScheme="blue">Ver Mais</Button>
    </Box>
  );
}
