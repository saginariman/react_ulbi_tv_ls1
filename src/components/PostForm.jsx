import React, {useState} from 'react'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''});
    const addNewPost = (e)=>{
        e.preventDefault();
        const newPost = {
            ...post,
            id:Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
        // console.log(newPost);
        // console.log(bodyInputRef.current.value);
    }
    return (
        <form>
          {/* <input ref={bodyInputRef} type="text"/>Неуправляемый компонент  */}
          {/* <MyInput type="text" placeholder="Описание поста" ref={bodyInputRef}/> Неуправляемый компонент*/}
          <MyInput
            type="text" 
            placeholder="Название поста" 
            value={post.title} 
            onChange={e=>setPost({...post, title: e.target.value})}/>{/*Управляемый компонент  */}
          <MyInput 
            type="text" 
            placeholder="Описание поста" 
            value={post.body} 
            onChange={e=>setPost({...post, body: e.target.value})}/>{/*Управляемый компонент  */}
          <MyButton onClick={addNewPost}>Создать Пост</MyButton>
        </form>
    )
}

export default PostForm
