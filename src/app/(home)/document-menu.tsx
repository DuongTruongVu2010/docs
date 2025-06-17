import { Button } from '@/components/ui/button'
import { ExternalLinkIcon, FilePenIcon, MoreVertical, TrashIcon } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import { Id } from '../../../convex/_generated/dataModel';
import RemoveDialog from '@/components/remove-dialog';
import RenameDialog from '@/components/rename-dialog';

interface DocumentMenuProps {
    documentId: Id<"documents">;
    title: string;
    onNewTab: (id: Id<"documents">) => void;
}

const DocumentMenu = ({documentId, title, onNewTab}: DocumentMenuProps) => {
  return (


    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
                <MoreVertical size="size-4" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <RemoveDialog documentId={documentId}>
                <DropdownMenuItem 
                    onClick ={(e) => e.stopPropagation()}
                    onSelect={(e) => e.preventDefault()}
                >
                    <TrashIcon className='size-4 mr-2' />
                    Reomove
                </DropdownMenuItem>
            </RemoveDialog>
            <RenameDialog documentId={documentId} initialTitle={title}>
                <DropdownMenuItem 
                    onClick ={(e) => e.stopPropagation()}
                    onSelect={(e) => e.preventDefault()}
                >
                    <FilePenIcon className='size-4 mr-2' />
                    Rename
                </DropdownMenuItem>
            </RenameDialog>
            <DropdownMenuItem onClick={() => onNewTab(documentId)}>
                <ExternalLinkIcon className='size-4 mr-2' />
                Open in a new tab
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DocumentMenu