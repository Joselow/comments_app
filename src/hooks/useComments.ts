import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchComments, postComment } from "../services/comments";
import { Comment } from "../assets/interfaces/Comment";

export function useComments () {
    const { isError, isLoading, data: commentsData } = useQuery({
        queryKey: ['comments'],
        queryFn: fetchComments,
        refetchOnWindowFocus: false,
    })

    const queryClient = useQueryClient()

    const { mutate, isError: isErrorCreate, isPending: isLoadingCreate, variables   } = useMutation({
        mutationFn:  postComment,
        mutationKey: ['addComment'],
        onMutate: async (data) => {
            await queryClient.cancelQueries({ queryKey: ['comments'] }) // cancelamos otras queries

            const previousComments = queryClient.getQueryData<{ comment: Comment, comments: Comment[] }>(['comments'])

            queryClient.setQueryData(['comments'], (oldData: Comment[]) => {  // we can change the cached data, we should not to mutate the before data.
                if (oldData) {
                    return [ ...oldData, data.comment ]
                }
                return [ data.comment ]
            })

            return { previousComments: previousComments?.comments ?? [] }
        },
        onError: (err, newData, context) => {
            queryClient.setQueryData(['comments'], context?.previousComments)
        },

        onSuccess: (commentCreated) => {
            // queryClient.setQueryData(['comments'], (oldData: Comment[]) => {  // we can change the cached data, we should not to mutate the before data.
            //     if (oldData) {
            //         return [ ...oldData, commentCreated ]
            //     }
            //     return [ commentCreated ]
            // })
            // queryClient.invalidateQueries({ queryKey: ['comments'] })  // set the status as stale and refetch the data
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['comments'] })
        }

    }) 

    const createPost = ({ comment, comments }: { comment: Comment, comments: Comment[] }) => {
        mutate({ comment: {
            ...comment,
            id: crypto.randomUUID()
        }, comments })
    }   
    
    return {
        comments: commentsData || [], 
        isError, 
        isLoading,
        createPost,
        isErrorCreate,
        isLoadingCreate,
        taskCreated: variables
    }
}