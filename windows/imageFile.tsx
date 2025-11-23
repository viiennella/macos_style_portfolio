import WindowControls from "@/components/windowControls";
import { FinderItem } from "@/constants/constants";
import WindowWrapper from "@/hoc/windowWrapper";
import useWindowStore from "@/store/window";
import Image from "next/image";

function ImageFile() {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data as FinderItem;

  if (!data) return null;

  return (
    <div className="flex flex-col h-full bg-white text-gray-800">
      <div
        id="window-header"
        className="flex items-center px-4 py-2 border-b border-gray-200 bg-gray-50"
      >
        <WindowControls target="imgfile" />
        <span className="ml-4 font-semibold text-sm">{data.name}</span>
      </div>

      <div className="flex-1 flex items-center justify-center p-4 bg-gray-100 overflow-hidden">
        {data.imageUrl ? (
          <div className="relative w-full h-[60vh]">
            <Image
              src={data.imageUrl}
              alt={data.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        ) : (
          <div className="text-gray-500">No image available</div>
        )}
      </div>
    </div>
  );
}

const ImageFileWindow = WindowWrapper(ImageFile, "imgfile");

export default ImageFileWindow;
