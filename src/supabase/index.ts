import type { Tables } from './database.types';
export { supabase } from './config';

// Types
export type User = Tables<'users'>;
