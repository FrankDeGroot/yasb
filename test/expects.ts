import { access } from "fs-extra";
import { join } from "path";

export async function exists(...args: string[]) {
  const file = join(...args);
  try {
    await access(file);
  } catch (e) {
    throw new Error(`Expected ${file}.`);
  }
}
