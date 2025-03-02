import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface VideoModalProps {
  videoUrl: string | null;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
  return (
    <Dialog.Root
      open={!!videoUrl}
      onOpenChange={(isOpen) => !isOpen && onClose()}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-md" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center">
          <div className="relative w-[80%] max-w-2xl bg-black rounded-lg shadow-lg p-4">
            <Dialog.Title className="sr-only">Video Player</Dialog.Title>
            <Dialog.Close asChild>
              <button className="absolute top-1 -right-8 p-2 rounded-full text-white hover:bg-gray-700 transition">
                <X size={24} />
              </button>
            </Dialog.Close>
            {videoUrl && (
              <video
                className="w-full rounded-lg"
                src={videoUrl}
                controls
                autoPlay
              />
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default VideoModal;
