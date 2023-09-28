import MenuOptions from "@/enum";
interface props {
    isOpen: boolean;
    toggleSidebar: () => void;
    handleMenuItemClick: (option: MenuOptions) => void;
    logout: () => void;
    activeModule: MenuOptions;
}

export const Sidebar = ({ isOpen, toggleSidebar, handleMenuItemClick, activeModule, logout }: props) => {

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar__header">
                <div className="sidebar__header__title">Food Zero Admin</div>
                <button className="sidebar__header__toggle-btn" onClick={toggleSidebar}>
                    ☰
                </button>

            </div>
            <ul className="sidebar__menu">
                {Object.values(MenuOptions).map((option) => (
                    <>
                        <li
                            className={`sidebar__menu__item ${option === activeModule ? 'isActive' : ''}`}
                            key={option}
                            onClick={() => handleMenuItemClick(option as MenuOptions)}
                        >
                            {option}
                        </li>
                    </>
                ))}
                <li className="sidebar__menu__item exit" onClick={logout}>
                    Salir
                </li>
            </ul>

        </div>
    );

}

