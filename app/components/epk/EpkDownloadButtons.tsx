"use client";

import { useState } from "react";
import { Download, FileText, Loader2 } from "lucide-react";
import JSZip from "jszip";

interface MediaFile {
  url: string;
  filename: string;
}

interface EpkDownloadButtonsProps {
  photos: MediaFile[];
  tracks: MediaFile[];
}

export default function EpkDownloadButtons({ photos, tracks }: EpkDownloadButtonsProps) {
  const [zipping, setZipping] = useState(false);
  const [progress, setProgress] = useState("");

  async function handleDownloadAll() {
    setZipping(true);
    setProgress("Preparing download...");

    try {
      const zip = new JSZip();
      const photosFolder = zip.folder("photos")!;
      const tracksFolder = zip.folder("tracks")!;

      const allFiles = [
        ...photos.map((f) => ({ ...f, folder: photosFolder })),
        ...tracks.map((f) => ({ ...f, folder: tracksFolder })),
      ];

      for (let i = 0; i < allFiles.length; i++) {
        const file = allFiles[i];
        setProgress(`Downloading ${i + 1} of ${allFiles.length}...`);
        const res = await fetch(file.url);
        const blob = await res.blob();
        file.folder.file(file.filename, blob);
      }

      setProgress("Creating zip...");
      const content = await zip.generateAsync({ type: "blob" });

      const url = URL.createObjectURL(content);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Long-Autumn-EPK.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      setProgress("Download failed. Please try again.");
      setTimeout(() => setProgress(""), 3000);
      return;
    } finally {
      setZipping(false);
      setProgress("");
    }
  }

  function handleDownloadPDF() {
    window.print();
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
      <button
        onClick={handleDownloadAll}
        disabled={zipping}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-brutal-red uppercase tracking-widest font-semibold text-brutal-red hover:bg-brutal-red hover:text-black transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {zipping ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {progress}
          </>
        ) : (
          <>
            <Download className="w-4 h-4" />
            Download All Media
          </>
        )}
      </button>
      <button
        onClick={handleDownloadPDF}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 uppercase tracking-widest font-semibold text-text-secondary hover:border-brutal-red hover:text-brutal-red transition-all duration-300 text-sm"
      >
        <FileText className="w-4 h-4" />
        Save as PDF
      </button>
    </div>
  );
}
