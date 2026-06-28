export type EnvConfig = {
	API_URL: string;
};

export const CONFIG: EnvConfig = {
	API_URL: import.meta.env.BASE_URL,
};
