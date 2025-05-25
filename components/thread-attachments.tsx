import { FileIcon, FileTextIcon, ImageIcon, FileArchiveIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Attachment {
  name: string
  size: string
  type: string
}

interface ThreadAttachmentsProps {
  attachments: Attachment[]
}

export function ThreadAttachments({ attachments }: ThreadAttachmentsProps) {
  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileIcon className="h-5 w-5 text-red-500" />
      case "docx":
      case "doc":
      case "txt":
        return <FileTextIcon className="h-5 w-5 text-blue-500" />
      case "jpg":
      case "png":
      case "gif":
        return <ImageIcon className="h-5 w-5 text-green-500" />
      case "zip":
      case "rar":
        return <FileArchiveIcon className="h-5 w-5 text-yellow-500" />
      default:
        return <FileIcon className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="border rounded-md p-4 bg-muted/30">
      <h4 className="font-medium mb-3">Ekler ({attachments.length})</h4>
      <div className="space-y-2">
        {attachments.map((attachment, index) => (
          <div key={index} className="flex items-center justify-between p-2 border rounded-md bg-background">
            <div className="flex items-center gap-3">
              {getFileIcon(attachment.type)}
              <div>
                <p className="text-sm font-medium">{attachment.name}</p>
                <p className="text-xs text-muted-foreground">{attachment.size}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              İndir
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

// Default export for backward compatibility
export default ThreadAttachments
