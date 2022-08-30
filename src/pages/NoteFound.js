import { Link } from "react-router-dom";

function NoteFound() {
    const mystyle = {


    };
    return (
        <div className="notefound">
            <table>
                <tr>
                    <td>
                        <img style={{width:'850px'}} src='https://thumbs.dreamstime.com/b/d-render-doctor-cartoon-character-holds-clipboard-clip-art-isolated-blue-background-professional-consultation-medical-d-render-220418035.jpg' />
                    </td>
                    <td className="notefound">
                        <h1>404</h1>
                        <h2>UH OH! You're lost.</h2>
                        <p>The page you are looking for does not exist.
                            How you got here is a mystery. But you can click the button below
                            to go back to the homepage.
                        </p>
                        <button class="btn green"><Link to='/' style={{textDecoration:'none',color:'black'}}>HOME</Link></button>
                    </td>
                </tr>
            </table>
        </div>
    )
} export default NoteFound;