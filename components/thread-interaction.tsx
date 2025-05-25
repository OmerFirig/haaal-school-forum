"\"use client"

import { useState } from "react"
import { ThumbsUp, ThumbsDown, Share, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"
import { likeThread, dislikeThread, shareThread, likeComment, dislikeComment } from "@/app/thread/[id]/actions"

interface ThreadInteractionProps {
  threadId: string
  initialLikes: number
  initialDislikes: number
  initialComments: number
}

export function ThreadInteraction({
  threadId,
  initialLikes,
  initialDislikes,
  initialComments,
}: ThreadInteractionProps) {
  const { toast } = useToast()
  const [likes, setLikes] = useState(initialLikes)
  const [dislikes, setDislikes] = useState(initialDislikes)
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)

  const handleLike = async () => {
    try {
      const result = await likeThread(threadId)

      if (result.success) {
        if (isLiked) {
          setLikes(likes - 1)
          setIsLiked(false)
        } else {
          setLikes(likes + 1)
          setIsLiked(true)
          if (isDisliked) {
            setDislikes(dislikes - 1)
            setIsDisliked(false)
          }
        }
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "İşlem gerçekleştirilemedi. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive",
      })
    }
  }

  const handleDislike = async () => {
    try {
      const result = await dislikeThread(threadId)

      if (result.success) {
        if (isDisliked) {
          setDislikes(dislikes - 1)
          setIsDisliked(false)
        } else {
          setDislikes(dislikes + 1)
          setIsDisliked(true)
          if (isLiked) {
            setLikes(likes - 1)
            setIsLiked(false)
          }
        }
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "İşlem gerçekleştirilemedi. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive",
      })
    }
  }

  const handleShare = async () => {
    try {
      const result = await shareThread(threadId)

      if (result.success) {
        navigator.clipboard.writeText(result.shareUrl)
        toast({
          title: "Bağlantı kopyalandı",
          description: "Konu bağlantısı panoya kopyalandı.",
        })
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Paylaşım işlemi gerçekleştirilemedi. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center ${isLiked ? "text-green-500" : ""}`}
              onClick={handleLike}
            >
              <ThumbsUp className="mr-1 h-4 w-4" />
              <span>{likes}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Beğen</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center ${isDisliked ? "text-red-500" : ""}`}
              onClick={handleDislike}
            >
              <ThumbsDown className="mr-1 h-4 w-4" />
              <span>{dislikes}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Beğenme</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center">
              <MessageSquare className="mr-1 h-4 w-4" />
              <span>{initialComments}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Yorumlar</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm" onClick={handleShare}>
              <Share className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Paylaş</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

interface CommentInteractionProps {
  commentId: string | number
  initialLikes: number
  initialDislikes: number
}

export function CommentInteraction({ commentId, initialLikes, initialDislikes }: CommentInteractionProps) {
  const { toast } = useToast()
  const [likes, setLikes] = useState(initialLikes)
  const [dislikes, setDislikes] = useState(initialDislikes)
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)

  const handleLike = async () => {
    try {
      const result = await likeComment(commentId)

      if (result.success) {
        if (isLiked) {
          setLikes(likes - 1)
          setIsLiked(false)
        } else {
          setLikes(likes + 1)
          setIsLiked(true)
          if (isDisliked) {
            setDislikes(dislikes - 1)
            setIsDisliked(false)
          }
        }
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "İşlem gerçekleştirilemedi. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive",
      })
    }
  }

  const handleDislike = async () => {
    try {
      const result = await dislikeComment(commentId)

      if (result.success) {
        if (isDisliked) {
          setDislikes(dislikes - 1)
          setIsDisliked(false)
        } else {
          setDislikes(dislikes + 1)
          setIsDisliked(true)
          if (isLiked) {
            setLikes(likes - 1)
            setIsLiked(false)
          }
        }
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "İşlem gerçekleştirilemedi. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center ${isLiked ? "text-green-500" : ""}`}
              onClick={handleLike}
            >
              <ThumbsUp className="mr-1 h-4 w-4" />
              <span>{likes}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Beğen</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center ${isDisliked ? "text-red-500" : ""}`}
              onClick={handleDislike}
            >
              <ThumbsDown className="mr-1 h-4 w-4" />
              <span>{dislikes}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Beğenme</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default ThreadInteraction
