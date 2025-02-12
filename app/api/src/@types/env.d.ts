declare namespace NodeJS {
    interface ProcessEnv {
        PORT: string;
        NODE_ENV: string;
        DB_LOCAL_URI: string;
    }
}
