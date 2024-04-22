'use client'

import { useFormStatus } from 'react-dom';
import { Button } from '@nextui-org/react';
import DeleteIcon from './delete-icon';

interface FormButtonProps {
    children: React.ReactNode;
}

export default function DeleteButton({ children }: FormButtonProps) {
    const { pending } = useFormStatus();

    return <Button
        type="submit"
        color="danger"
        variant="bordered"
        size="sm"
        isLoading={pending}
        startContent={<DeleteIcon />}
    >
        {children}
    </Button>
}