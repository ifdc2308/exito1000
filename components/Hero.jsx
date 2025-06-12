'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function Hero() {
  return (
    <Stack minH={'90vh'} direction={{ base: 'column', md: 'row' }} bg='linear-gradient(250deg, #ABCDFF 0%, #FFFFFF 75%)'>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} as={'h1'}>
              O curso de redação mais completo do país.
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'brand.darkText'}>
            Sem mais desespero. Com uma metodologia ATIVA e INDIVIDUAL, você terá que escrever apenas uma redação por semana e nós garantimos que o seu resultado vai ser 1000!
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button rounded={'full'}>QUERO MINHA APROVAÇÃO</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit='contain'
          width={'85%'}
          src='/assets/bgcorrecaoredacao.png'
        />
      </Flex>
    </Stack>
  )
}