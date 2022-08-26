import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.NODE_ENV === 'production' ? process.env.REACT_APP_SUPABASE_URL : process.env.REACT_APP_SUPABASE_URL_DEV;

const supabaseAnonKey =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_SUPABASE_ANON_KEY
    : process.env.REACT_APP_SUPABASE_ANON_KEY_DEV;

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
