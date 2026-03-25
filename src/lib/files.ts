import { FILES as TS_FILES } from "./files-ts";
import { FILES as SOURCELANG_FILES } from "./files-sourcelang";
import {DemoProject}from "@/src/lib/demo-projects";
export type FileKey =
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "demos"
  | "contact"
  | "config";

export type LanguageMode = "ts" | "sourcelang";


export interface FileData {
  name: string;
  lang: string;
  icon: "ts" | "json" | "mdx" | "pdf" | "src";
  lines: string[];
  demos?: DemoProject[];
}

export const FILES_TS: Record<FileKey, FileData> = TS_FILES;
export const FILES_SOURCELANG: Record<FileKey, FileData> = SOURCELANG_FILES;

export const FILE_KEYS: FileKey[] = [
  "about", "skills", "experience", "projects",
  "demos", "contact", "config",
];

