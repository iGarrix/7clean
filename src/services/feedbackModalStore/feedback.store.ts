import { IFeedbackCardDetail } from '@/components/commons/cards/feedbackCard/feedback_card.component'
import { create } from 'zustand'

export interface IFeedbackModalStore {
	isOpen: boolean
	onOpen: (open: boolean, data?: IFeedbackCardDetail) => void
	data?: IFeedbackCardDetail
}

export const useFeedbackModal = create<IFeedbackModalStore>((set, get) => ({
	isOpen: false,
	onOpen: (open: boolean, data?: IFeedbackCardDetail) => {
		set({ isOpen: open, data: data })
	},
}))
