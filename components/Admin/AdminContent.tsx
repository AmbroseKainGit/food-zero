import { General } from "./General";
import { Home } from "./Home";
import { Menu } from "./Menu";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { About } from "./About";
import { ParamsQuery } from "@/typings";
interface props {
  isOpen: boolean;
  renderModule: keyof typeof componentMap;
  params?: ParamsQuery|null
}
export const componentMap = {
  General,
  Home,
  Menu,
  Blog,
  Contact,
  About,
};


export const AdminContent = ({ isOpen, renderModule, params }: props) => {
  const RenderedComponent = componentMap[renderModule];
  return (
    <div className={`admin__content ${isOpen ? 'open' : ''}`}>
      {RenderedComponent && <RenderedComponent params={params} />}
    </div>
  )
}
