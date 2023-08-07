export {};

declare global {
    interface IApiRequest {
        signal?: AbortSignal;
        token?: string;
    }

    interface IApiInfiniteResponse<T> {
        count: number;
        next: string | null;
        results: T[];
    }
}
