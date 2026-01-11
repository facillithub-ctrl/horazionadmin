export default function BlogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Blogs & Artigos</h2>
          <p className="text-sm text-gray-500">Gerencie o conteúdo editorial do portal.</p>
        </div>
        <button className="bg-horazion-red text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-red-900/10 hover:bg-black transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">add</span>
          Novo Artigo
        </button>
      </div>

      {/* Lista Vazia (Estado Inicial) */}
      <div className="bg-white rounded-inner-card border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-12 text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-300">
            <span className="material-symbols-outlined text-3xl">post_add</span>
          </div>
          <h3 className="text-gray-900 font-bold mb-1">Nenhum artigo encontrado</h3>
          <p className="text-gray-400 text-sm">Comece criando o primeiro post para o blog.</p>
        </div>
      </div>
    </div>
  );
}