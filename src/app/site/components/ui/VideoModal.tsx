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
        <Dialog.Overlay className="fixed inset-0 bg-black-50 bg-opacity-50 backdrop-blur-lg" />

        <Dialog.Content className="fixed inset-0 flex items-center justify-center p-4">
          <div className="relative w-[90%] max-w-4xl bg-black rounded-lg shadow-lg">
            <Dialog.Title className="sr-only">Video Player</Dialog.Title>

            <Dialog.Close asChild>
              <button className="absolute top-0 -right-12 p-2 rounded-full text-white hover:bg-gray-700 transition">
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
