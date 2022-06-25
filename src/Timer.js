import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';

const red = "#f54e4e"
const green = "#4aecbc"

function Timer() {
    return (
        <div>
            <CircularProgressbar value={60} text={'60%'} styles={buildStyles( 
                {   rotation: 0.25, 
                    strokeLinecap: "butt", 
                    textColor: "#fff", 
                    pathColor:red, 
                    trailColor: 'rgba(255,255,255,.2)'
                }
            )}/>
            <div style={{marginTop:'20px'}}> 
                <PlayButton />
                <PauseButton />
            </div>
        </div>
    );
}

export default Timer;
