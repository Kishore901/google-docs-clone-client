import { Link } from 'react-router-dom';
import '../home.css';
const HomeScreen = ({ docId, setDocId }) => {
  const inputHandler = (e) => {
    setDocId(e.target.value);
  };
  //   const emptyInputCheck =() => {
  //       if(docId === ''){

  //       }
  //   }
  return (
    <div className="home-container">
      <div className="home-card">
        <img src="google-docs.png" alt="" />
        <input
          value={docId}
          onChange={inputHandler}
          placeholder="Enter the Document ID"
          type="text"
        />
        <div className="home-btns">
          <Link to={docId && `/rooms/documents/${docId}`}>
            <button>Open Document</button>
          </Link>
          <Link to="/rooms">
            <button>New Document</button>
          </Link>
        </div>
        <h4 className="home-footer">
          Google Docs Clone -{' '}
          <a href="https://github.com/Kishore901">Kishore</a>
        </h4>
      </div>
    </div>
  );
};

export default HomeScreen;
