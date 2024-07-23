import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay,
    CloseButton,
    Box,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom'

function Alert() {
    const { isOpen, type, message, onClose } = useAlertContext();
    const cancelRef = useRef();
    const isSuccess = type === "success";
    const navigate = useNavigate();

    const handleClose = () => {
        onClose();
        navigate('/'); // Navigate to the main page
    };

    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={handleClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}>
                    <Box position="relative">
                        <AlertDialogHeader fontSize="x-large" fontWeight="bold" marginLeft={10}>
                            {isSuccess ? 'All good!' : 'Oops!'}
                        </AlertDialogHeader>
                        <CloseButton
                            position="absolute"
                            right="8px"
                            top="8px"
                            onClick={handleClose}
                        />
                    </Box>
                    <AlertDialogBody marginLeft={10} fontSize="x-large">{message}</AlertDialogBody>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
}

export default Alert;
