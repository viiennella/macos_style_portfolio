import WindowControls from "@/components/windowControls";
import { FinderLocation, FinderItem, locations } from "@/constants/constants";
import WindowWrapper from "@/hoc/windowWrapper";
import { Search } from "lucide-react";
import useLocationStore from "@/store/location";
import Image from "next/image";
import clsx from "clsx";
import useWindowStore from "@/store/window";

function Finder() {
  const { activeLocation, setActiveLocation } = useLocationStore();

  const { openWindow } = useWindowStore();

  function renderList(name: string, items: (FinderLocation | FinderItem)[]) {
    return (
      <div>
        <h3>{name}</h3>
        <ul>
          {items.map((location) => (
            <li
              key={location.id}
              onClick={() => setActiveLocation(location)}
              className={clsx(
                location.id === activeLocation?.id ? "active" : "not-active"
              )}
            >
              <Image
                className="w-4"
                src={location.icon}
                alt={location.name}
                width={24}
                height={24}
              />
              <p className="text-sm truncate font-medium">{location.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function openItem(item: FinderItem) {
    if (item.name === "Resume.pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (item.fileType && ["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");
    if (item.fileType === "txt") return openWindow("txtfile", item);
    if (item.fileType === "img") return openWindow("imgfile", item);
  }

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("Work", locations.work.children)}
        </div>
        <ul className="content">
          {activeLocation?.children?.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <Image src={item.icon} alt={item.name} width={20} height={20} />
              <p className="text-sm truncate font-medium">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
