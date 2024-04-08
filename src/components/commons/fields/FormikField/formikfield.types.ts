export interface IFormikField {
	name: string
	placeholder: string
	disable?: boolean
	icon?: any
	className?: string
	defValue?: string
	type?: 'text' | 'email' | 'password' | 'tel' | 'number'
}
