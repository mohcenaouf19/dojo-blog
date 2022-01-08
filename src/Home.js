
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
const Home = () => {
    

    const { data: blogs, isLoding, err } = useFetch('http://localhost:8000/blogs');

    return (
        
       

        <div className="Home">

            {err && <div> {err} </div>}
            {isLoding && <div> loading.....</div>}
            {blogs && <Bloglist blogs={blogs} title=" All blogs "></Bloglist>}
        </div>
    );



}

export default Home;

