import { writable, readable } from "svelte/store";

export const BASE_URL = readable("localhost:8080");
export const myUsername = writable();

export const colorsList = writable([]);

