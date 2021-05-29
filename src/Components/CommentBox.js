
function CommentBox(props) {
    const { value, onChangeComment, addComment } = props
    return (
        <div style={styles.container}>
            <div style={styles.textAreaContainer}>
                <textarea {...props} rows="5" cols="40" onChange={onChangeComment} value={value} />
            </div>
            <div style={styles.buttonContainer} onClick={addComment}>
                <p style={styles.textLabel}>Comment</p>
            </div>
        </div>
    );
}

export default CommentBox;


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        // flex: .5
    },
    textAreaContainer: {
        width: 200,
        // height:200
    },
    buttonContainer: {
        width: 110,
        height: 30,
        backgroundColor: '#eeeeee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLabel: {
        color: '#000000',
        fontSize: 13,
        textAlign: 'center',
    }
}