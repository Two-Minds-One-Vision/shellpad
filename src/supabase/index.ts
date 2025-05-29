import type { Tables } from './database.types';
export { supabase } from './config';
export type { User };

// Types
type User = Tables<'users'>;
