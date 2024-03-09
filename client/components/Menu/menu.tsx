import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '../ui/menubar';

const Menu = () => {
  return (
    <Menubar className="mx-auto p-4 bg-slate-900">
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
  );
};

export default Menu;
