import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar"

function HomePage() {
  return (

    <div className="grid grid-cols-layout items-center">
      <div className="bg-slate-100">
        <h1>Sport-events</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>

        <Menubar>
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
    </div>
  );
}

export default HomePage;
