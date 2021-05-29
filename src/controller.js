import { useState } from 'react';

function USEController() {
    const [commenting, setCommenting] = useState('')
    const [allComments, setComments] = useState([])
    const [replyComment, seReplayComment] = useState('')


    const onChangeComment = (e) => {
        let value = e.target.value
        setCommenting(value)
    }

    const addComment = () => {
        console.log('suhas nano commenting', commenting);
        if (!commenting) {
            alert('Please add your comment');
            return;
        }
        let cpyallComments = [...allComments]
        cpyallComments.push({
            comment: commenting,
            isLike: false
        })
        setComments(cpyallComments);
        setCommenting('')
    }

    const onlikeClick = (item, index) => {
        item.isLike = true;
        let cpy = [...allComments]
        cpy[index] = item
        setComments(cpy)

    }
    const onUnlikeClick = (item, index) => {
        item.isLike = false;
        let cpy = [...allComments]
        cpy[index] = item
        setComments(cpy)
    }

    const onDeleteComment = (index, item) => {
        let cpy = [...allComments];
        cpy.splice(index, 1)
        setComments(cpy)
    }

    const onReplayText = (e) => {
        seReplayComment(e.target.value)
    }

    const addReplay = (index, item) => {
        item.replay = {
            comment: replyComment,
            isLike: false
        }

        let cpy = [...allComments]
        cpy[index] = item
        setComments(cpy)
    }

    return {
        commenting,
        allComments,
        onChangeComment,
        addComment,
        onlikeClick,
        onUnlikeClick,
        onDeleteComment,
        onReplayText,
        addReplay
    };
}

export default USEController;
