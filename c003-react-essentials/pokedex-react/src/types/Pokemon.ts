export type Pokemon = {
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string | null;
    };
    types: Array<{
        type: { name: string };
    }>;
};