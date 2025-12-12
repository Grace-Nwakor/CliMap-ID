import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://tfhzcztkccpqlukvttbv.supabase.co";
const supabaseKey = "sb_publishable_AIIDJhYTrHxDllivzuM4MA_P5FQUr5D";

export const supabase = createClient(supabaseUrl, supabaseKey);
