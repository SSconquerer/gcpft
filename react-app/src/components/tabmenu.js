import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { TabMenu } from "primereact/tabmenu";

function Tabmenu() {
  const Navigate = useNavigate();

  const location = useLocation();

  const items = [
    { label: "Login", icon: "pi pi-fw pi-sign-in" },
    { label: "Home", icon: "pi pi-fw pi-home" },
    // { label: "Insights", icon: "pi pi-fw pi-chart-bar" },
    { label: "Trade Surv", icon: "pi pi-fw pi-file" },
    { label: "Update", icon: "pi pi-fw pi-cloud-upload" },
  ];

  const [activeIndex, setActiveIndex] = useState(() => {
    if (location.pathname === "/update") {
      return 3;
    } else if (location.pathname === "/trade_surv") {
      return 2;
    } else if (location.pathname === "/login") {
      return 1;
    }  else return 0;
  });

  const handletabchange = (e) => {
    console.log(e.index + " " + e.value.label);
    setActiveIndex(e.index);
    if (e.value.label === "Update") {
      Navigate("/update");
    }else if (e.value.label === "Login") {
      Navigate("/login");
    }  else if (e.value.label === "Trade Surv") {
      Navigate("/trade_surv");
    } else Navigate("/home");
  };

  return (
    <div className="w-full">
      <TabMenu
        activeIndex={activeIndex}
        model={items}
        onTabChange={(e) => handletabchange(e)}
      />
    </div>
  );
}

export default Tabmenu;



