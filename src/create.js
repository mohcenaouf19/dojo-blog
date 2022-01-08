import { useState } from "react";
import { useHistory } from "react-router-dom";
const Creat = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isLoading, setisLoading] = useState(false)
  const history =useHistory();


  const handleSubmite = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);

    fetch('http://localhost:8000/blogs/',{
      method : 'POST',
      headers : {"content-Type":"application/json"},
      body :JSON.stringify(blog)

    }).then(()=>{
      setisLoading(true);
      console.log("object added");
      history.push('/');
      //setisLoading(false);
    })
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmite}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>adding blog...</button>}
      </form>

    </div>

  );
}

export default Creat;