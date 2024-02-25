import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar"

function HomePage() {
  return (
    <div>
      <div>
        <Menubar className="mx-auto p-4 bg-slate-900 shadow-slate-500 shadow-2xl">
          <MenubarMenu>
            <MenubarTrigger>Eventos</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Calendário</MenubarItem>
              <MenubarItem>Resultados</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Corrida de Rua</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Comece agora</MenubarItem>
              <MenubarItem>Planilha de treinos</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Nutrição</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Receitas</MenubarItem>
              <MenubarItem>Ebook</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Saúde</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Ebook</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="text-center mt-14">
        <h1 className="text-8xl font-bold">Trajetória do atleta</h1>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="../../img/bg-stadium.jpg"
          alt="Pista de corrida no estádio"
          className="object-cover h-80 w-3/5 border-t-4"
          style={{ objectPosition: 'bottom' }}
        />
      </div>
    </div>
  );
}

export default HomePage;
