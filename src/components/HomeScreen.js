import { Link } from 'react-router-dom';
import '../home.css';
const HomeScreen = ({ docId, setDocId }) => {
  const inputHandler = (e) => {
    setDocId(e.target.value);
  };
  return (
    <div className="home-container">
      <div className="home-card">
        <img src="google-docs.png" alt="" />
        <input
          value={docId}
          onChange={inputHandler}
          placeholder="Document ID of existing document"
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
        <p className="home-instruction">
          Document Id can be found in the URL following
        </p>
        <p className="home-instruction">/document/ (or)</p>
        <p className="home-instruction">Click on new document</p>
        <h4 className="home-footer">
          Google Docs Clone -{' '}
          <a href="https://github.com/Kishore901">
            <u>Kishore</u>
          </a>
        </h4>
      </div>
    </div>
  );
};

export default HomeScreen;
