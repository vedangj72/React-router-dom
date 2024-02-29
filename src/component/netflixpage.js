export default function Netflix() {
    return (
        <div className="input-group justify-content-center" >
            {/* <p>ready to watch? enter your mail to create or restart</p> */}
            <div className="input-group"> 
            <input type="text" name="username" placeholder="Enter your email" />
                    <button className="btn btn-danger ">
                        Get started!!!
                    </button>
                    <span></span>
            </div>
        </div>
    ); 
}