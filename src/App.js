import logo from './logo.svg';
import './App.css';
import InputCommentBox from './Components/CommentBox';
import UserComments from './Components/UserComments';
import USEController from './controller';

function App() {
  const {
    commenting,
    allComments,
    onChangeComment,
    addComment,
    onlikeClick,
    onUnlikeClick,
    onDeleteComment,
    onReplayText,
    addReplay,
    onReplayVisible,
    onReplayDisable
  } = USEController()
  return (
    <div className="App">
      <div>
        <InputCommentBox rows="5" cols="40"
          value={commenting}
          onChangeComment={onChangeComment}
          addComment={addComment} />
      </div>

      <div style={{ marginTop: 20 }}>
        <UserComments
          userCommentesList={allComments}
          onlikeClick={onlikeClick}
          onUnlikeClick={onUnlikeClick}
          onDeleteComment={onDeleteComment}
          onReplayText={onReplayText}
          addReplay={addReplay}
          onReplayVisible={onReplayVisible}
          onReplayDisable={onReplayDisable}
        />
      </div>

    </div>
  );
}

export default App;
