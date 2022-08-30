import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.NODE_ENV === 'production' ? process.env.REACT_APP_SUPABASE_URL : process.env.REACT_APP_SUPABASE_URL_DEV;

const supabaseAnonKey =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_SUPABASE_ANON_KEY
    : process.env.REACT_APP_SUPABASE_ANON_KEY_DEV;

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);

export const upsert = async <T>(table: string, values: T) => {
  const { data, error } = await supabase.from<T>(table).upsert(values);

  if (error) {
    throw error;
  }

  if (!data || data.length === 0) {
    throw new Error('upsert retrurn fail');
  }

  return data;
};

export const update = async <T>(table: string, value: Partial<T>, query: Record<string, unknown>) => {
  const { data, error } = await supabase.from<T>(table).update(value).match(query);

  if (error) {
    throw error;
  }

  if (!data || data.length === 0) {
    throw new Error('update retrurn fail');
  }

  return data;
};
