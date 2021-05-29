import { useState } from 'react';

function USEController() {
    const [commenting, setCommenting] = useState('')
    const [allComments, setComments] = useState([])
    const [replyComment, seReplayComment] = useState('')
    const [editingComment, setEditingComment] = useState('')


    const onChangeComment = (e) => {
        let value = e.target.value
        setCommenting(value)
    }

    const addComment = () => {
        if (!commenting) {
            alert('Please add your comment');
            return;
        }
        let cpyallComments = [...allComments]
        cpyallComments.push({
            comment: commenting,
            isLike: false,
            showReplay: false,
            isEdit: false,
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
    const onReplayVisible = (index, item) => {
        item.showReplay = true;
        let cpy = [...allComments]
        cpy[index] = item
        setComments(cpy)
    }
    const onReplayDisable = (index, item) => {
        item.showReplay = false;
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
        onReplayDisable(index, item)
    }

    const onEditingComment = (e) => {
        setEditingComment(e.target.value);
    }

    const showEdit = (index, item) => {
        item.isEdit = true;
        let cpy = [...allComments]
        cpy[index] = item
        setComments(cpy)
        setEditingComment(item.comment);

    }

    const onUpdateComment = (index, item) => {
        item.comment = editingComment;
        item.isEdit = false;
        let cpy = [...allComments]
        cpy[index] = item
        setComments(cpy);

    }
    const hideEdit = (index, item) => {

    }

    console.log('suhas nani', editingComment);
    return {
        commenting,
        allComments,
        editingComment,
        onChangeComment,
        addComment,
        onlikeClick,
        onUnlikeClick,
        onDeleteComment,
        onReplayText,
        addReplay,
        onReplayVisible,
        onReplayDisable,
        showEdit,
        onEditingComment,
        onUpdateComment
    };
}

export default USEController;
