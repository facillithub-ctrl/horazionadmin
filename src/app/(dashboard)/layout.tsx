import Link from "next/link";
import Image from "next/image";

// Componente auxiliar para item de menu
const MenuItem = ({ icon, label, href }: { icon: string; label: string; href: string }) => (
  <Link 
    href={href}
    className="flex items-center gap-3 p-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-horazion-red transition-all group"
  >
    <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
      {icon}
    </span>
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

const MenuSection = ({ title }: { title: string }) => (
  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-6 mb-2 px-3">
    {title}
  </p>
);

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-horazion-adminBg">
      {/* SIDEBAR */}
      <aside className="w-[260px] bg-white border-r border-gray-100 flex flex-col fixed h-full z-50">
        
        {/* Logo Area */}
        <div className="h-20 flex items-center px-6 border-b border-gray-50">
           <h1 className="text-xl font-bold text-horazion-red tracking-tight flex items-center gap-2">
             <span className="material-symbols-outlined">grid_view</span>
             ADMIN
           </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          
          <MenuItem icon="dashboard" label="Visão Geral" href="/" />

          <MenuSection title="Gestão de Conteúdo" />
          <MenuItem icon="article" label="Blogs & Artigos" href="/content/blogs" />
          <MenuItem icon="update" label="Atualizações" href="/content/updates" />
          <MenuItem icon="notifications" label="Notificações App" href="/content/notifications" />

          <MenuSection title="Administrativo" />
          <MenuItem icon="group" label="Usuários" href="/management/users" />
          <MenuItem icon="settings" label="Configurações" href="/management/settings" />
          
          <MenuSection title="Comunicação" />
          <MenuItem icon="mail" label="Fale Conosco" href="/messages" />

        </nav>

        {/* User Footer */}
        <div className="p-4 border-t border-gray-50">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-8 h-8 rounded-full bg-horazion-red text-white flex items-center justify-center text-xs font-bold">
              AD
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-gray-900">Admin User</p>
              <p className="text-[10px] text-gray-500">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 ml-[260px] p-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}