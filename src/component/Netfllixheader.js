export default function Netflixheader()
{
    return (
        <div className="d-flex justify-content-between p-1 m-4">
            <div>
            <h2 className="text-danger">NETFLIX</h2>
            </div>
            <div className="input-group w-25">
                <select className="input-groups">
                    <option >English</option>
                    <option>Marathi</option>
                    <option>Hindi</option>
                </select>
                <button className="btn btn-danger ms-2">sign in</button>
            </div> 
            
        </div>
    );
}