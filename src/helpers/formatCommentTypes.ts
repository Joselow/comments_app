import { Comment } from "../assets/interfaces/Comment";

export const formatCommentTypes = (comment: unknown): Comment => {
    return comment as Comment
}