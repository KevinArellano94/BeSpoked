import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://jtryltrcajcopmlcbfvd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0cnlsdHJjYWpjb3BtbGNiZnZkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3MzMwMTE5NCwiZXhwIjoxOTg4ODc3MTk0fQ.lo1Q0ULg-PCypixcDJrgRndaQpwDxRW2peVbUzaxV6g';

// const supabaseKey = process.env.supabaseUrl;
// const supabaseKey = process.env.supabaseKey;

const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

export default supabase;