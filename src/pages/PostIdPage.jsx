import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async(id)=>{
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async(id)=>{
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
        return () => {
            console.log('Удаление useEefect PostIdPage')
        }
    }, [])
    return (
        <div>
            <h1>Пост с id {params.id}</h1>
            {isLoading
                ?<Loader/>
                :<div>{post.id}. {post.title}</div>
            }
            <h1>Комментарии</h1>
            {isComLoading
                ?<Loader/>
                :<div>
                    {comments.map(comm=>
                        <div style={{marginTop:15}} key={comm.id}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>    
                    )}
                </div>
            }
        </div>
    )
}

export default PostIdPage
