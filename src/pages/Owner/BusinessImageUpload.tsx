import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { getAccessToken } from "@/lib/helper";

const MultiPhotoUploadForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const form = useForm();

  const onSubmit = async (data) => {
    for (const file of selectedFiles) {
      await uploadFile(file);
    }
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/business/uploadBusinessImage/1",

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",

            Authorization: `Bearer ${getAccessToken()}`,
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress((prev) => ({
              ...prev,
              [file.name]: percentCompleted,
            }));
          },
        }
      );
      console.log(`${file.name} uploaded successfully`);
      return response.data;
    } catch (error) {
      console.error(`Error uploading ${file.name}:`, error);
      throw error;
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="border  p-4 rounded-lg shadow-md  border-purple-900">
        <h2 className="text-2xl font-bold text-center mb-4">
          {"Restaurant Image Upload Form"}
        </h2>
        <div className="p-4 space-y-4 rounded-lg border">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Photos</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        multiple
                        onChange={(e) => {
                          field.onChange(e);
                          handleFileSelect(e);
                        }}
                      />
                    </FormControl>
                    <FormDescription>
                      Select multiple photos to upload.
                    </FormDescription>
                  </FormItem>
                )}
              />
              <div className="space-y-2">
                {selectedFiles.map((file) => (
                  <div key={file.name} className="flex items-center space-x-2">
                    <span className="w-1/3 truncate">{file.name}</span>
                    <Progress
                      value={uploadProgress[file.name] || 0}
                      className="w-2/3"
                    />
                  </div>
                ))}
              </div>
              <Button type="submit">Upload Photos</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MultiPhotoUploadForm;
