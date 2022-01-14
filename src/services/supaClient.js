import { createClient } from '@supabase/supabase-js';

export const supaClient = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export const parseData = ({ data, error }) => {
  if (error) throw error;

  return data;
};
