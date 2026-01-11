export default function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Painel de Controle</h2>
        <p className="text-sm text-gray-500">Bem-vindo ao sistema central do Horazion.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-inner-card border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <span className="material-symbols-outlined">article</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-xs text-gray-500 font-medium uppercase">Blogs Publicados</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-inner-card border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
            <span className="material-symbols-outlined">group</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-xs text-gray-500 font-medium uppercase">Usuários Ativos</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-inner-card border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
            <span className="material-symbols-outlined">mail</span>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-xs text-gray-500 font-medium uppercase">Mensagens Novas</p>
          </div>
        </div>
      </div>

      {/* Content Placeholder */}
      <div className="bg-white p-8 rounded-inner-card border border-gray-100 shadow-sm min-h-[300px] flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-300">
           <span className="material-symbols-outlined text-3xl">bar_chart</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900">Métricas em tempo real</h3>
        <p className="text-sm text-gray-400 max-w-sm mt-2">
          Conecte o banco de dados para visualizar o crescimento da plataforma Horazion.
        </p>
      </div>
    </div>
  );
}