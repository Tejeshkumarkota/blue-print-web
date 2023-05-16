import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	Text, VStack, Divider,
	Checkbox,
	FormLabel,
	FormControl,
	Input, HStack
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";

const LoginModal: FC = () => {
	const OverlayOne = () => (
		<ModalOverlay
			bg='blackAlpha.300'
			backdropFilter='blur(10px) hue-rotate(90deg)'
		/>
	)
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			rememberMe: false
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		}
	});
	const OverlayTwo = () => (
		<ModalOverlay
			bg='none'
		// backdropFilter='auto'
		// backdropInvert='100%'
		// backdropBlur='5px'
		/>
	)

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [overlay, setOverlay] = React.useState(<OverlayOne />)
	return (
		<>
			{/* <Button
        onClick={() => {
			setOverlay(<OverlayOne />)
			onOpen()
			}}
		>
        Use Overlay one
      </Button> */}
			<Button

				colorScheme={'#002C6A'}
				color={'white'}
				backgroundColor={'#002C6A'}
				textAlign='center'
				size={'md'}
				mr={4}
				onClick={() => {
					setOverlay(<OverlayTwo />)
					onOpen()
				}}
			>
				Login
			</Button>
			<Modal isCentered closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} scrollBehavior={'inside'} size={'xl'}>
				{overlay}
				<ModalContent>
					<ModalHeader textAlign={'center'}>Login</ModalHeader>
					<VStack  >
						<Button colorScheme='facebook' leftIcon={<FaFacebook />} w='md'
						>
							Sign in with Facebook
						</Button>
						<Button colorScheme='blue' leftIcon={<FcGoogle />} w='md'>
							Sign in with Google
						</Button>
					</VStack>
					<ModalCloseButton />
					<ModalBody>
						<Divider orientation='vertical' />
						<Text align={'center'}>Or</Text>
						<Divider orientation='vertical' />

						<VStack maxW={500}>
							<form onSubmit={formik.handleSubmit}>
								<VStack spacing={5} align="flex-start">
									<FormControl>
										<FormLabel htmlFor="email">Email Address</FormLabel>
										<Input
											id="email"
											name="email"
											type="email"
											variant="filled"
											onChange={formik.handleChange}
											value={formik.values.email}
										/>
									</FormControl>
									<FormControl>
										<FormLabel htmlFor="password">Password</FormLabel>
										<Input
											id="password"
											name="password"
											type="password"
											variant="filled"
											onChange={formik.handleChange}
											value={formik.values.password}
										/>
									</FormControl>
									<Checkbox
										id="rememberMe"
										name="rememberMe"
										onChange={formik.handleChange}
										isChecked={formik.values.rememberMe}
										colorScheme="purple"
									>
										Remember me?
									</Checkbox>
									<Button type="submit" colorScheme="purple" width="full">
										Login
									</Button>
								</VStack>
							</form>
						</VStack>
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
export { LoginModal }