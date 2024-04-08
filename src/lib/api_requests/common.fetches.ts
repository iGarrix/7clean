//import { AxiosError } from 'axios';

export interface IBaseErrorState {
	error: string;
	message: Array<string> | string;
	statusCode: number;
}

export interface IThrowerResponse {
	StatusCode: number;
	Message: string;
}

/**
 * Default paginator request props
 */
export interface BineIncommingTypeProps {
	page: number;
	take: number;
}

export interface IAuthorizateResponse<TInstance> {
	accessToken: string;
	user: TInstance;
}

/**
 * Paginator metadata
 */
export interface IBineMeta {
	total: number;
	lastPage: number;
	currentPage: number;
	perPage: number;
	prev: number | null;
	next: number | null;
}
/**
 * Paginator response from API
 */
export interface BineResponse<TBineDataType> {
	meta: IBineMeta;
	data: Array<TBineDataType>;
}

export interface IRefreshTokenRequest {
	refreshToken: string;
	accessToken: string;
}

export interface IBaseApiDtos {
	createdAt: Date;
	updatedAt: Date;
}
