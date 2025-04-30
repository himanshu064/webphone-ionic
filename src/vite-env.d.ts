/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API: string;
  readonly VITE_APP_BACKOFFICE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
