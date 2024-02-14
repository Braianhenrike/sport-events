import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar"
import '../css/UserLayouts.css'

function HomePage() {
  return (

    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr' }}>
      <div className="logo">
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
