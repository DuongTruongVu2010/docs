import { create } from "zustand"
import { type Editor } from "@tiptap/react" 
interface EditorState {
    editor: Editor | null 
    setEditor: (editor: Editor) => void
}

export const useEditorStore = create<EditorState>((set) => ({
    editor: null,
    setEditor: (editor: Editor) => set({ editor })
}))