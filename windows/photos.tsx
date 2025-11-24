import WindowControls from "@/components/windowControls";
import { gallery, photosLinks } from "@/constants/constants";
import WindowWrapper from "@/hoc/windowWrapper";
import useWindowStore from "@/store/window";
import { Mail, Search } from "lucide-react";
import Image from "next/image";

function Photos() {
  const { openWindow } = useWindowStore();
  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>
      <div className="flex w-full">
        <div className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks.map((link) => (
              <li key={link.id}>
                <Image
                  src={link.icon}
                  alt={link.title}
                  width={24}
                  height={24}
                />
                <p>{link.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="gallery">
          <ul>
            {gallery.map((item) => (
              <li
                key={item.id}
                onClick={() =>
                  openWindow("imgfile", {
                    id: item.id,
                    name: "Galery image",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: item.img,
                  })
                }
              >
                <Image src={item.img} alt={item.alt} width={100} height={100} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
