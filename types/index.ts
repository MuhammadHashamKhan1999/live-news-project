export type NewsListProps = {
    height: string;
    
}

export type DetailModalProps = {
    isOpen: boolean;
    onOpen?: () => void;
    onClose: () => void;
    data: any;
}


