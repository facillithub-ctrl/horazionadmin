"use client";

import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/lib/supabase"; // Importando nossa config
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [view, setView] = useState<"selection" | "internal">("selection");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Estados do Formulário Interno
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Função de Login (Horazion System)
  const handleInternalLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Sucesso: Redirecionar para o Dashboard
      router.push("/");
      
    } catch (err: any) {
      setError(err.message || "Falha ao autenticar. Verifique suas credenciais.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-horazion-adminBg p-4 relative overflow-hidden">
      
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 left-0 w-full h-2 bg-horazion-red"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="w-full max-w-[480px] z-10">
        
        {/* Header Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4">
             {/* Substitua pelo seu componente de Imagem se preferir, usando icone do google por enquanto */}
             <span className="material-symbols-outlined text-4xl text-horazion-red">
                grid_view
             </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Horazion Admin</h1>
          <p className="text-sm text-gray-500 mt-1">Portal de Gestão Centralizada</p>
        </div>

        {/* VIEW 1: SELEÇÃO DE TIPO DE ACESSO */}
        {view === "selection" && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Opção 1: Dashboard Clientes (Futuro) */}
            <button 
              disabled
              className="group w-full bg-white p-6 rounded-inner-card border border-gray-100 shadow-sm text-left hover:border-horazion-red/30 transition-all opacity-60 cursor-not-allowed relative"
            >
              <div className="absolute top-4 right-4 bg-gray-100 text-gray-500 text-[9px] font-bold px-2 py-1 rounded-full uppercase">
                Em Breve
              </div>
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 mb-3">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <h3 className="font-bold text-gray-800">Acessar Dashboard Admin</h3>
              <p className="text-xs text-gray-400 mt-1">Área exclusiva para parceiros e clientes.</p>
            </button>

            {/* Opção 2: Horazion System (Interno) */}
            <button 
              onClick={() => setView("internal")}
              className="group w-full bg-white p-6 rounded-inner-card border border-gray-100 shadow-sm text-left hover:shadow-md hover:border-horazion-red/50 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-horazion-red"></div>
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-horazion-red mb-3 group-hover:bg-horazion-red group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">security</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-horazion-red transition-colors">Horazion System</h3>
                    <p className="text-xs text-gray-500 mt-1">Acesso restrito para equipe interna.</p>
                </div>
                <span className="material-symbols-outlined text-gray-300 group-hover:translate-x-1 transition-transform">chevron_right</span>
              </div>
            </button>

          </div>
        )}

        {/* VIEW 2: FORMULÁRIO DE LOGIN INTERNO */}
        {view === "internal" && (
          <div className="bg-white p-8 rounded-inner-card border border-gray-100 shadow-xl shadow-gray-200/50 animate-in fade-in zoom-in-95 duration-300">
            <button 
              onClick={() => setView("selection")}
              className="flex items-center gap-1 text-xs font-bold text-gray-400 hover:text-horazion-red mb-6 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Voltar
            </button>

            <h2 className="text-xl font-bold text-gray-900 mb-6">Login Interno</h2>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg flex items-start gap-2">
                <span className="material-symbols-outlined text-red-600 text-sm mt-0.5">error</span>
                <p className="text-xs text-red-600 font-medium">{error}</p>
              </div>
            )}

            <form onSubmit={handleInternalLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Email Corporativo</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400">mail</span>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-horazion-red focus:ring-1 focus:ring-horazion-red transition-all text-sm font-medium"
                    placeholder="nome@horazion.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Senha de Acesso</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400">lock</span>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-horazion-red focus:ring-1 focus:ring-horazion-red transition-all text-sm font-medium"
                    placeholder="••••••••"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-horazion-red text-white font-bold py-3.5 rounded-xl shadow-lg shadow-red-900/20 hover:bg-black hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-wait"
                >
                  {loading ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
                      Autenticando...
                    </>
                  ) : (
                    <>
                      Acessar Sistema
                      <span className="material-symbols-outlined text-lg">login</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            <p className="text-center text-[10px] text-gray-400 mt-6">
              Este é um ambiente restrito e monitorado.<br/>
              O acesso não autorizado é proibido.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}