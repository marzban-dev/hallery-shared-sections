import { server } from "mocks/server";

beforeAll(() => server.listen());
afterAll(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("next/navigation", () => require("next-router-mock"));

jest.mock("next-auth/react", () => {
    const originalModule = jest.requireActual("next-auth/react");
    const mockSession = {
        expires: new Date(Date.now() + 2 * 86400).toISOString(),
        user: { username: "admin" },
    };
    return {
        __esModule: true,
        ...originalModule,
        useSession: jest.fn(() => {
            return { data: mockSession, status: "authenticated" }; // return type is [] in v3 but changed to {} in v4
        }),
    };
});
