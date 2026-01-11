import { createClient } from '@supabase/supabase-js';

// Verificação de segurança para garantir que as variáveis existem
const supabaseUrl = process.env.NEXT_PUBLIC_ADMIN_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_ADMIN_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("⚠️ ERRO CRÍTICO: Variáveis de ambiente do Supabase Admin não encontradas no .env.local");
}

export const supabase = createClient(supabaseUrl, supabaseKey);