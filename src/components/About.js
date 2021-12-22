import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import Button from './Button';


const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h4>Version 1.0.0</h4>
            {/* <Link to='/'>Go Back</Link> */}
            <Button
                onClick={() => {
                    navigate(-1);
                }}
                text="Go Back"
            />
        </div>
    )
}

export default About
