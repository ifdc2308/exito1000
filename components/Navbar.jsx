'use client'

import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
    useColorModeValue,
    Image,
    Spacer,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Links = ['Blog', 'Depoimentos', 'Planos']

const NavLink = ({ children }) => (
    <Box
        as="a"
        px={8}
        py={1}
        rounded={'md'}
        fontWeight="medium"
        textTransform='uppercase'
        color={'brand.primaryText'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Box>
)

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box px={4} py={2} paddingInline='10%' bg="linear-gradient(to bottom, #042D54 0%, #4680BC 100%)"
            bgSize="28vw 100%"         // largura 100px, altura 100%
            bgPosition="right top"
              borderTopLeftRadius="full"
  borderBottomLeftRadius="full"
            bgRepeat="no-repeat" >
            <Flex
                h={16}
                align="center"
                justify="space-between"
                position="relative"
            >
                {/* Menu Mobile (Hambúrguer) */}
                <Box display={{ md: 'none' }}>
                    <Menu isOpen={isOpen}>
                        <MenuButton
                            as={IconButton}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label="Abrir menu"
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <MenuList>
                            {Links.map((link) => (
                                <MenuItem key={link} onClick={onClose}>
                                    {link}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </Box>
                {/* Logo à esquerda */}
                <Box minW="200px">
                    <Image src="/logoExito.svg" alt="Logo" maxW="200px" />
                </Box>

                {/* Menu central em telas médias ou maiores */}
                <HStack
                    spacing={6}
                    as="nav"
                    position="absolute"
                    left="50%"
                    transform="translateX(-50%)"
                    display={{ base: 'none', md: 'flex' }}
                >
                    {Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                    ))}
                </HStack>

                {/* Botão e hambúrguer à direita */}
                <Flex align="center" gap={2}>
                    {/* Botão visível sempre */}
                    <Button
                        variant="solid"
                        bgColor="#EC7425"
                        rounded='full'
                        paddingInline={8}
                        paddingBlock={6}
                        fontSize='xl'
                        color="#fff"
                        _hover={{ bg: '#d2621e' }}
                    >
                        Área do Aluno
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}
