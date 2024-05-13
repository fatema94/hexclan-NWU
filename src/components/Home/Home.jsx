import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Features from "../Features/Features";
import Newsevent from "../Newsevent/Newsevent";
import Registration from "../Registration/Registration";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Newsevent></Newsevent>
            <Registration></Registration>
            <Experts></Experts>
        </div>
    );
};

export default Home;