import { SqliteDatabaseAdapter } from "@elizaos/adapter-sqlite";
import { SupabaseDatabaseAdapter } from "@elizaos/adapter-supabase";
import Database from "better-sqlite3";
import path from "path";

export function initializeDatabase(dataDir: string) {
  if (process.env.POSTGRES_URL) {
    const db = new SupabaseDatabaseAdapter(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!
    );
    return db;
  } else {
    const filePath =
      process.env.SQLITE_FILE ?? path.resolve(dataDir, "db.sqlite");
    // ":memory:";
    const db = new SqliteDatabaseAdapter(new Database(filePath));
    return db;
  }
}
