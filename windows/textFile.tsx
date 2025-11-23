import WindowControls from "@/components/windowControls";
import { FinderItem } from "@/constants/constants";
import WindowWrapper from "@/hoc/windowWrapper";
import useWindowStore from "@/store/window";
import Image from "next/image";

function TextFile() {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data as FinderItem | undefined;

  if (!data) return null;

  return (
    <div className="flex flex-col h-full bg-white text-gray-800">
      <div
        id="window-header"
        className="flex items-center px-4 py-2 border-b border-gray-200 bg-gray-50"
      >
        <WindowControls target="txtfile" />
        <span className="ml-4 font-semibold text-sm">{data.name}</span>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-2xl mx-auto">
          {data.image && (
            <div className="mb-6">
              <Image
                src={data.image}
                alt={data.name}
                width={120}
                height={120}
                className="rounded-full object-cover shadow-md"
              />
            </div>
          )}

          {data.subtitle && (
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              {data.subtitle}
            </h2>
          )}

          <div className="space-y-4 text-base leading-relaxed">
            {data.description?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const TextFileWindow = WindowWrapper(TextFile, "txtfile");

export default TextFileWindow;
