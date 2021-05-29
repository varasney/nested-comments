
function CommentBox(props) {
    const { value, onChangeComment, addComment, buttonLabel, containerStyle } = props
    return (
        <div style={styles.container}>
            <div style={styles.textAreaContainer}>
                <textarea rows="5" cols="40" {...props} onChange={onChangeComment} value={value} />
            </div>
            <div style={{ ...styles.buttonContainer, ...containerStyle }} onClick={addComment}>
                <p style={styles.textLabel}>{buttonLabel ? buttonLabel : 'Comment'}</p>
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