import { useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, File, X, CheckCircle } from "lucide-react";
import { useDropzone } from "react-dropzone";

interface UploadFormProps {
  onUpload?: (files: File[]) => void;
  maxFileSize?: number;
  acceptedFileTypes?: string[];
  isUploading?: boolean;
  error?: string;
  success?: boolean;
}

const UploadForm = ({
  onUpload = () => {},
  maxFileSize = 5242880, // 5MB
  acceptedFileTypes = [".pdf", ".jpg", ".jpeg", ".png"],
  isUploading = false,
  error = "",
  success = false,
}: UploadFormProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onUpload(acceptedFiles);
    },
    [onUpload],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": acceptedFileTypes.filter(
        (type) => type.includes("jpg") || type.includes("png"),
      ),
      "application/pdf": acceptedFileTypes.filter((type) =>
        type.includes("pdf"),
      ),
    },
    maxSize: maxFileSize,
  });

  return (
    <Card className="w-full max-w-[600px] p-6 bg-white">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">
            Upload Prescription
          </h2>
          <p className="text-sm text-gray-500">
            Upload your prescription in PDF or image format. Maximum file size
            is {maxFileSize / 1024 / 1024}MB.
          </p>
        </div>

        <div
          {...getRootProps()}
          className={`
            border-2 border-dashed rounded-lg p-8
            transition-colors duration-200 ease-in-out
            ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}
            ${error ? "border-red-500 bg-red-50" : ""}
            ${success ? "border-green-500 bg-green-50" : ""}
          `}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Upload
              className={`w-12 h-12 ${isDragActive ? "text-blue-500" : "text-gray-400"}`}
            />
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-700">
                {isDragActive
                  ? "Drop your files here"
                  : "Drag & drop your files here"}
              </p>
              <p className="text-xs text-gray-500">or</p>
              <Button type="button" variant="secondary" disabled={isUploading}>
                Browse Files
              </Button>
            </div>
          </div>
        </div>

        {error && (
          <Alert variant="destructive">
            <X className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="bg-green-50 border-green-500 text-green-700">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <AlertDescription>Files uploaded successfully!</AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          <Label>Accepted file types</Label>
          <div className="flex flex-wrap gap-2">
            {acceptedFileTypes.map((type) => (
              <div
                key={type}
                className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UploadForm;
