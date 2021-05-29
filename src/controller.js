import { useState } from 'react';

function USEController() {
    const [commenting, setCommenting] = useState('')
    const [allComments, setComments] = useState([])


    const onChangeComment = (e) => {
        let value = e.target.value
        setCommenting(value)
    }

    const addComment = () => {
        console.log('suhas nano commenting', commenting);
        if (commenting.length < 5) {
            alert('Please add atleast 5 characters');
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

    return {
        commenting,
        allComments,
        onChangeComment,
        addComment,
        onlikeClick,
        onUnlikeClick,
        onDeleteComment
    };
}

export default USEController;
