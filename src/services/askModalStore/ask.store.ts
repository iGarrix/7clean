import { create } from 'zustand'

export interface IAskModalStore {
	isOpen: boolean
	onOpen: (open: boolean) => void
}

export const useAskModal = create<IAskModalStore>((set, get) => ({
	isOpen: false,
	onOpen: (open: boolean) => {
		set({ isOpen: open })
	},
}))
