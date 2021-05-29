import CommentBox from '../Components/CommentBox';
function UserComments(props) {
    const {
        userCommentesList = [],
        onlikeClick, onUnlikeClick,
        onDeleteComment,
        onReplayText,
        addReplay,
        onReplayVisible,
        onReplayDisable
    } = props
    return (
        <div style={styles.boxContainer}>
            {userCommentesList && userCommentesList.map((item, index) => {
                return (
                    <>
                        <MainCommentBox {...props} item={item} index={index} />
                        {item.replay &&
                            <div style={{marginLeft:20}}>
                                <MainCommentBox {...props} item={item.replay} index={index} />
                            </div>
                        }

                    </>

                )
            })}
        </div>
    );
}

export default UserComments;

const MainCommentBox = (props) => {
    const {
        userCommentesList = [],
        onlikeClick, onUnlikeClick,
        onDeleteComment,
        onReplayText,
        addReplay,
        onReplayVisible,
        onReplayDisable,
        item,
        index
    } = props

    return (
        <div style={styles.box}>
            <p style={styles.commentTextStyle}>{item.comment}</p>
            <div style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-start', margin: 10 }}>
                <p style={styles.fontSize} onClick={() => onDeleteComment(index, item)}>Delate</p>
                <p style={styles.fontSize} onClick={() => onReplayVisible(index, item)}>Replay</p>
                {!item.isLike && <p style={styles.fontSize} onClick={() => onlikeClick(item, index)}>Like</p>}
                {item.isLike && <p style={{ ...styles.fontSize, color: 'red' }} onClick={() => onUnlikeClick(item, index)}>Like</p>}
            </div>

            {item.showReplay && <div>
                <CommentBox
                    rows="3"
                    cols="22"
                    onChangeComment={onReplayText}
                    addComment={() => addReplay(index, item)} />
            </div>}

        </div>
    )
}


const styles = {
    boxContainer: {
        display: 'flex',
        margin: 5,
        flexDirection: 'column',

    },
    box: {
        width: 200,
        height: 70,
        backgroundColor: '#eeeeee',
        marginBottom: 5,
        borderRadius: 5,
        color: '#000000',
        textAlign: 'left',

    },
    commentTextStyle: {
        marginLeft: 10,
        fontSize: 12,
    },
    fontSize: {
        fontSize: 8,
        marginLeft: 10
    }

}