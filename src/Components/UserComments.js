
function UserComments(props) {
    const {
        userCommentesList = [],
        onlikeClick, onUnlikeClick,
        onDeleteComment
    } = props
    return (
        <div style={styles.boxContainer}>

            {userCommentesList && userCommentesList.map((item, index) => {
                console.log('suhas item', item);
                return (
                    <>
                        <div style={styles.box}>
                            <p style={styles.commentTextStyle}>{item.comment}</p>
                            <div style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-start', margin: 10 }}>
                                <p style={styles.fontSize} onClick={() => onDeleteComment(index, item)}>Delate</p>
                                <p style={styles.fontSize}>Replay</p>
                                {!item.isLike && <p style={styles.fontSize} onClick={() => onlikeClick(item, index)}>Like</p>}
                                {item.isLike && <p style={{ ...styles.fontSize, color: 'red' }} onClick={() => onUnlikeClick(item, index)}>Like</p>}
                            </div>
                        </div>


                    </>

                )
            })}
        </div>
    );
}

export default UserComments;


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