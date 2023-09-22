export {};

declare global {
    interface IApiRequest {
        signal?: AbortSignal;
        token?: string;
        cookies?: any;
    }

    interface IApiInfiniteResponse<T> {
        count: number;
        next: string | null;
        results: T[];
    }
}
